import * as vscode from "vscode";
import { BlackFormatter } from "./formatter/black";
import { APYCompletionProvider } from "./auto-completion/auto-completion";
import { AutoPEP8Formatter } from "./formatter/autopep8";
import { RuffFormatter } from "./formatter/ruff";

let currentFormatterDisposable: vscode.Disposable | undefined;

function registerFormatter(
  context: vscode.ExtensionContext,
  selector: vscode.DocumentSelector
) {
  if (currentFormatterDisposable) {
    currentFormatterDisposable.dispose();
  }

  const config = vscode.workspace.getConfiguration("applicablePythonFormatter");
  const choice = config.get<string>("formatter", "None");

  let formatter: vscode.DocumentFormattingEditProvider;
  switch (choice) {
    case "None":
      return;
    case "black":
      formatter = new BlackFormatter();
      break;
    case "autopep8":
      formatter = new AutoPEP8Formatter();
      break;
    case "ruff":
      formatter = new RuffFormatter();
      break;
    default:
      vscode.window.showErrorMessage(`Unknown formatter (${choice}) selected`);
      return;
  }

  currentFormatterDisposable =
    vscode.languages.registerDocumentFormattingEditProvider(
      selector,
      formatter
    );
  context.subscriptions.push(currentFormatterDisposable);
}

function registerAutoCompletion(
  context: vscode.ExtensionContext,
  selector: vscode.DocumentSelector
) {
  const completion = vscode.languages.registerCompletionItemProvider(
    selector,
    new APYCompletionProvider(),
    "."
  );
  context.subscriptions.push(completion);
}

export function activate(context: vscode.ExtensionContext) {
  const selector = { language: "applicablePython", scheme: "file" };

  registerFormatter(context, selector);

  vscode.workspace.onDidChangeConfiguration((e) => {
    if (e.affectsConfiguration("applicablePythonFormatter.formatter")) {
      registerFormatter(context, selector);
    }
  });

  registerAutoCompletion(context, selector);
}

export function deactivate() {}
