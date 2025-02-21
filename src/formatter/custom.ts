import * as vscode from "vscode";

export class CustomFormatter implements vscode.DocumentFormattingEditProvider {
  provideDocumentFormattingEdits(
    document: vscode.TextDocument,
    options: vscode.FormattingOptions,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.TextEdit[]> {
    const originalText = document.getText();
    const formattedText = formatApplicablePython(originalText, options);
    const fullRange = new vscode.Range(
      document.positionAt(0),
      document.positionAt(originalText.length)
    );
    return [vscode.TextEdit.replace(fullRange, formattedText)];
  }
}

function formatApplicablePython(
  text: string,
  options: vscode.FormattingOptions
): string {
  const lines = text.split(/\r?\n/);
  let indentLevel = 0;
  const indentUnit = "    ";
  const formattedLines: string[] = [];

  const dedentKeywords = [
    "return",
    "pass",
    "break",
    "continue",
    "else",
    "elif",
    "except",
    "finally",
  ];

  for (let rawLine of lines) {
    const trimmedLine = rawLine.trim();

    if (trimmedLine === "") {
      formattedLines.push("");
      continue;
    }

    const firstWord = trimmedLine.split(/\s+/)[0];
    if (dedentKeywords.includes(firstWord) && indentLevel > 0) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    const indentedLine = indentUnit.repeat(indentLevel) + trimmedLine;
    formattedLines.push(indentedLine);

    if (trimmedLine.endsWith(":") && !trimmedLine.startsWith("#")) {
      indentLevel++;
    }
  }

  return formattedLines.join("\n");
}
