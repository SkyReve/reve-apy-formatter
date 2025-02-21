import * as vscode from "vscode";

export class APYCompletionProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const lineText = document
      .lineAt(position)
      .text.substring(0, position.character);

    const dotIndex = lineText.lastIndexOf(".");
    if (dotIndex === -1) {
      return;
    }

    const variableName = lineText.substring(0, dotIndex).trim();

    const completionsMap: Record<
      string,
      { label: string; kind: vscode.CompletionItemKind; detail: string }[]
    > = {
      reve: [
        {
          label: "request",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKRequest",
        },
        {
          label: "database",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKDatabase",
        },
        {
          label: "settings",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKDict",
        },
        {
          label: "user",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveCustomTable",
        },
      ],
      "reve.request": [
        {
          label: "method",
          kind: vscode.CompletionItemKind.Property,
          detail: "str",
        },
        {
          label: "path",
          kind: vscode.CompletionItemKind.Property,
          detail: "str",
        },
        {
          label: "headers",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKDict",
        },
        {
          label: "data",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKDict",
        },
        {
          label: "path_params",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKDict",
        },
        {
          label: "query_params",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKDict",
        },
        {
          label: "header_params",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKDict",
        },
        {
          label: "body_params",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKDict",
        },
        {
          label: "cookies",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKDict",
        },
        {
          label: "COOKIES",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKDict",
        },
        {
          label: "meta",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKDict",
        },
        {
          label: "META",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveSDKDict",
        },
        {
          label: "files",
          kind: vscode.CompletionItemKind.Property,
          detail: "MultiValueDict | QueryDict | Empty",
        },
        {
          label: "FILES",
          kind: vscode.CompletionItemKind.Property,
          detail: "MultiValueDict | QueryDict | Empty",
        },
        {
          label: "user",
          kind: vscode.CompletionItemKind.Property,
          detail: "ReveCustomTable",
        },
      ],
      "reve.database": [
        {
          label: "get",
          kind: vscode.CompletionItemKind.Method,
          detail: "ReveSDKTable",
        },
      ],
      "reve.settings": [
        {
          label: "get",
          kind: vscode.CompletionItemKind.Method,
          detail: "Any",
        },
        {
          label: "items",
          kind: vscode.CompletionItemKind.Method,
          detail: "ItemsView",
        },
        {
          label: "update",
          kind: vscode.CompletionItemKind.Method,
          detail: "void",
        },
      ],
    };

    const items = completionsMap[variableName];
    if (!items) return;

    return items.map((item) => {
      const completion = new vscode.CompletionItem(item.label, item.kind);
      completion.detail = item.detail;
      return completion;
    });
  }
}
