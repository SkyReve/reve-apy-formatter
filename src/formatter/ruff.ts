import { exec } from "child_process";
import * as vscode from "vscode";

export class RuffFormatter implements vscode.DocumentFormattingEditProvider {
  provideDocumentFormattingEdits(
    document: vscode.TextDocument,
    options: vscode.FormattingOptions,
    token: vscode.CancellationToken
  ): Thenable<vscode.TextEdit[]> {
    return new Promise((resolve, reject) => {
      const originalText = document.getText();

      const config = vscode.workspace.getConfiguration(
        "applicablePythonFormatter"
      );
      const lineLength = config.get<number>("lineLength", 88);
      const execPath = config.get<string>("executablePath", "ruff");

      const command = `${execPath} format --line-length=${lineLength} -`;

      const process = exec(
        command,
        { timeout: 10000 },
        (error, stdout, stderr) => {
          if (error) {
            vscode.window.showErrorMessage(
              `Ruff formatting error: ${stderr || error.message}`
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

      token.onCancellationRequested(() => {
        if (process) {
          process.kill();
        }
      });

      if (process.stdin) {
        process.stdin.write(originalText);
        process.stdin.end();
      }
    });
  }
}
