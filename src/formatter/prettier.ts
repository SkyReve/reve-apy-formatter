import * as vscode from "vscode";
import * as prettier from "prettier";

export class PrettierFormatter
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
    const printWidth = config.get<number>("lineLength", 80);
    const tabWidth = config.get<number>("tabWidth", 4);
    const useTabs = config.get<boolean>("useTabs", false);

    const prettierOptions: prettier.Options = {
      parser: "python",
      printWidth,
      tabWidth,
      useTabs,
    };

    let formattedText: string;
    try {
      formattedText = await prettier.format(originalText, prettierOptions);
    } catch (error: any) {
      vscode.window.showErrorMessage(
        `Prettier formatting error: ${error.message}`
      );
      return [];
    }

    const fullRange = new vscode.Range(
      document.positionAt(0),
      document.positionAt(originalText.length)
    );
    return [vscode.TextEdit.replace(fullRange, formattedText)];
  }
}
