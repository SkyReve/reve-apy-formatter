import * as vscode from "vscode";
import { completionTree, CompletionNode } from "./completion-tree";

export class APYCompletionProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.ProviderResult<vscode.CompletionItem[]> {
    const lineText = document
      .lineAt(position)
      .text.substring(0, position.character);
    const dotIndex = lineText.lastIndexOf(".");
    if (dotIndex === -1) {
      return;
    }

    const variableName = lineText.substring(0, dotIndex).trim();
    const pathSegments = variableName.split(".");

    const completions = this.findCompletionsFromPath(
      completionTree,
      pathSegments
    );
    if (!completions) {
      return;
    }

    return completions.map((item) => {
      const completion = new vscode.CompletionItem(item.label, item.kind);
      completion.detail = item.detail;
      if (item.documentation) {
        completion.documentation = item.documentation;
      }
      if (item.insertText) {
        completion.insertText = item.insertText;
      }
      return completion;
    });
  }

  private findCompletionsFromPath(
    tree: CompletionNode,
    path: string[]
  ): CompletionNode["__completions__"] | undefined {
    let node: CompletionNode = tree;
    for (const key of path) {
      if (!node[key]) {
        return;
      }
      node = node[key];
    }
    return node.__completions__;
  }
}
