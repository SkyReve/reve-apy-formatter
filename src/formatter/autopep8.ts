import * as vscode from "vscode";
import { exec } from "child_process";

export class AutoPEP8Formatter
  implements vscode.DocumentFormattingEditProvider
{
  async provideDocumentFormattingEdits(
    document: vscode.TextDocument,
    options: vscode.FormattingOptions,
    token: vscode.CancellationToken
  ): Promise<vscode.TextEdit[]> {
    const originalText = document.getText();
    const config = vscode.workspace.getConfiguration(
      "applicablePythonFormatter"
    );
    const maxLineLength = config.get<number>("lineLength", 79);
    const execPath = config.get<string>("executablePath", "autopep8");

    // Build the autopep8 command. The "-" tells autopep8 to read from STDIN.
    const command = `${execPath} --max-line-length ${maxLineLength} -`;

    return new Promise((resolve, reject) => {
      const child = exec(
        command,
        { timeout: 10000 },
        (error, stdout, stderr) => {
          if (error) {
            vscode.window.showErrorMessage(
              `autopep8 formatting error: ${stderr || error.message}`
            );
            return reject(error);
          }
          const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(originalText.length)
          );
          resolve([vscode.TextEdit.replace(fullRange, stdout)]);
        }
      );

      // Write the original text to autopep8's STDIN
      if (child.stdin) {
        child.stdin.write(originalText);
        child.stdin.end();
      }

      // If formatting is cancelled, kill the process.
      token.onCancellationRequested(() => child.kill());
    });
  }
}
