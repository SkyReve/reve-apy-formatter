import * as vscode from "vscode";

export type CompletionNode = {
  __completions__?: {
    label: string;
    kind: vscode.CompletionItemKind;
    detail: string;
    documentation?: vscode.MarkdownString;
    insertText?: vscode.SnippetString;
  }[];
  [key: string]: CompletionNode | any;
};

export const completionTree: CompletionNode = {
  reve: {
    __completions__: [
      { label: "request", kind: vscode.CompletionItemKind.Property },
      { label: "database", kind: vscode.CompletionItemKind.Property },
      { label: "libs", kind: vscode.CompletionItemKind.Property },
      { label: "settings", kind: vscode.CompletionItemKind.Property },
      {
        label: "user",
        kind: vscode.CompletionItemKind.Property,
        detail: "ReveCustomTable",
      },
      { label: "utils", kind: vscode.CompletionItemKind.Property },
    ],
    request: {
      __completions__: [
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
    },
    database: {
      __completions__: [
        { label: "get", kind: vscode.CompletionItemKind.Method },
        { label: "expressions", kind: vscode.CompletionItemKind.Property },
        { label: "exceptions", kind: vscode.CompletionItemKind.Property },
      ],
      expressions: {
        __completions__: [
          { label: "Q", kind: vscode.CompletionItemKind.Class },
          { label: "F", kind: vscode.CompletionItemKind.Class },
          { label: "Func", kind: vscode.CompletionItemKind.Class },
          { label: "Value", kind: vscode.CompletionItemKind.Class },
          { label: "OuterRef", kind: vscode.CompletionItemKind.Class },
          { label: "Subquery", kind: vscode.CompletionItemKind.Class },

          { label: "Avg", kind: vscode.CompletionItemKind.Class },
          { label: "Count", kind: vscode.CompletionItemKind.Class },
          { label: "Min", kind: vscode.CompletionItemKind.Class },
          { label: "Max", kind: vscode.CompletionItemKind.Class },
          { label: "Sum", kind: vscode.CompletionItemKind.Class },
          { label: "StDev", kind: vscode.CompletionItemKind.Class },
          { label: "Variance", kind: vscode.CompletionItemKind.Class },

          { label: "Abs", kind: vscode.CompletionItemKind.Class },
          { label: "ACos", kind: vscode.CompletionItemKind.Class },
          { label: "ASin", kind: vscode.CompletionItemKind.Class },
          { label: "ATan", kind: vscode.CompletionItemKind.Class },
          { label: "ATan2", kind: vscode.CompletionItemKind.Class },
          { label: "Cast", kind: vscode.CompletionItemKind.Class },
          { label: "Ceil", kind: vscode.CompletionItemKind.Class },
          { label: "Chr", kind: vscode.CompletionItemKind.Class },
          { label: "Coalesce", kind: vscode.CompletionItemKind.Class },
          { label: "Collate", kind: vscode.CompletionItemKind.Class },
          { label: "Concat", kind: vscode.CompletionItemKind.Class },
          { label: "ConcatPair", kind: vscode.CompletionItemKind.Class },
          { label: "Cos", kind: vscode.CompletionItemKind.Class },
          { label: "Cot", kind: vscode.CompletionItemKind.Class },
          { label: "CumeDist", kind: vscode.CompletionItemKind.Class },
          { label: "Degrees", kind: vscode.CompletionItemKind.Class },
          { label: "DenseRank", kind: vscode.CompletionItemKind.Class },
          { label: "Exp", kind: vscode.CompletionItemKind.Class },
          { label: "Extract", kind: vscode.CompletionItemKind.Class },
          { label: "ExtractDay", kind: vscode.CompletionItemKind.Class },
          { label: "ExtractHour", kind: vscode.CompletionItemKind.Class },
          { label: "ExtractIsoYear", kind: vscode.CompletionItemKind.Class },
          { label: "ExtractIsoWeekDay", kind: vscode.CompletionItemKind.Class },
          { label: "ExtractMinute", kind: vscode.CompletionItemKind.Class },
          { label: "ExtractMonth", kind: vscode.CompletionItemKind.Class },
          { label: "ExtractQuarter", kind: vscode.CompletionItemKind.Class },
          { label: "ExtractSecond", kind: vscode.CompletionItemKind.Class },
          { label: "ExtractWeek", kind: vscode.CompletionItemKind.Class },
          { label: "ExtractWeekDay", kind: vscode.CompletionItemKind.Class },
          { label: "ExtractYear", kind: vscode.CompletionItemKind.Class },
          { label: "FirstValue", kind: vscode.CompletionItemKind.Class },
          { label: "Floor", kind: vscode.CompletionItemKind.Class },
          { label: "Greatest", kind: vscode.CompletionItemKind.Class },
          { label: "JSONObject", kind: vscode.CompletionItemKind.Class },
          { label: "Lag", kind: vscode.CompletionItemKind.Class },
          { label: "LastValue", kind: vscode.CompletionItemKind.Class },
          { label: "Lead", kind: vscode.CompletionItemKind.Class },
          { label: "Least", kind: vscode.CompletionItemKind.Class },
          { label: "Left", kind: vscode.CompletionItemKind.Class },
          { label: "Length", kind: vscode.CompletionItemKind.Class },
          { label: "Ln", kind: vscode.CompletionItemKind.Class },
          { label: "Log", kind: vscode.CompletionItemKind.Class },
          { label: "Lower", kind: vscode.CompletionItemKind.Class },
          { label: "LPad", kind: vscode.CompletionItemKind.Class },
          { label: "LTrim", kind: vscode.CompletionItemKind.Class },
          { label: "MD5", kind: vscode.CompletionItemKind.Class },
          { label: "Mod", kind: vscode.CompletionItemKind.Class },
          { label: "Now", kind: vscode.CompletionItemKind.Class },
          { label: "NthValue", kind: vscode.CompletionItemKind.Class },
          { label: "Ntile", kind: vscode.CompletionItemKind.Class },
          { label: "NullIf", kind: vscode.CompletionItemKind.Class },
          { label: "Ord", kind: vscode.CompletionItemKind.Class },
          { label: "PercentRank", kind: vscode.CompletionItemKind.Class },
          { label: "Pi", kind: vscode.CompletionItemKind.Class },
          { label: "Power", kind: vscode.CompletionItemKind.Class },
          { label: "Radians", kind: vscode.CompletionItemKind.Class },
          { label: "Random", kind: vscode.CompletionItemKind.Class },
          { label: "Rank", kind: vscode.CompletionItemKind.Class },
          { label: "Repeat", kind: vscode.CompletionItemKind.Class },
          { label: "Replace", kind: vscode.CompletionItemKind.Class },
          { label: "Reverse", kind: vscode.CompletionItemKind.Class },
          { label: "Right", kind: vscode.CompletionItemKind.Class },
          { label: "Round", kind: vscode.CompletionItemKind.Class },
          { label: "RowNumber", kind: vscode.CompletionItemKind.Class },
          { label: "RPad", kind: vscode.CompletionItemKind.Class },
          { label: "RTrim", kind: vscode.CompletionItemKind.Class },
          { label: "SHA1", kind: vscode.CompletionItemKind.Class },
          { label: "SHA224", kind: vscode.CompletionItemKind.Class },
          { label: "SHA256", kind: vscode.CompletionItemKind.Class },
          { label: "SHA384", kind: vscode.CompletionItemKind.Class },
          { label: "SHA512", kind: vscode.CompletionItemKind.Class },
          { label: "Sign", kind: vscode.CompletionItemKind.Class },
          { label: "Sin", kind: vscode.CompletionItemKind.Class },
          { label: "Sqrt", kind: vscode.CompletionItemKind.Class },
          { label: "StrIndex", kind: vscode.CompletionItemKind.Class },
          { label: "Substr", kind: vscode.CompletionItemKind.Class },
          { label: "Tan", kind: vscode.CompletionItemKind.Class },
          { label: "Trim", kind: vscode.CompletionItemKind.Class },
          { label: "Trunc", kind: vscode.CompletionItemKind.Class },
          { label: "TruncDate", kind: vscode.CompletionItemKind.Class },
          { label: "TruncDay", kind: vscode.CompletionItemKind.Class },
          { label: "TruncHour", kind: vscode.CompletionItemKind.Class },
          { label: "TruncMinute", kind: vscode.CompletionItemKind.Class },
          { label: "TruncMonth", kind: vscode.CompletionItemKind.Class },
          { label: "TruncQuarter", kind: vscode.CompletionItemKind.Class },
          { label: "TruncSecond", kind: vscode.CompletionItemKind.Class },
          { label: "TruncTime", kind: vscode.CompletionItemKind.Class },
          { label: "TruncWeek", kind: vscode.CompletionItemKind.Class },
          { label: "TruncYear", kind: vscode.CompletionItemKind.Class },
          { label: "Upper", kind: vscode.CompletionItemKind.Class },
        ],
      },
      exceptions: {
        __completions__: [
          {
            label: "ObjectDoesNotExist",
            kind: vscode.CompletionItemKind.Class,
          },
          { label: "IntegrityError", kind: vscode.CompletionItemKind.Class },
        ],
      },
    },
    libs: {
      __completions__: [
        { label: "base64", kind: vscode.CompletionItemKind.Class },
        { label: "datetime", kind: vscode.CompletionItemKind.Class },
        { label: "json", kind: vscode.CompletionItemKind.Class },
        { label: "math", kind: vscode.CompletionItemKind.Class },
        { label: "random", kind: vscode.CompletionItemKind.Class },
        { label: "re", kind: vscode.CompletionItemKind.Class },
        { label: "typing", kind: vscode.CompletionItemKind.Class },
        { label: "urllib", kind: vscode.CompletionItemKind.Class },
        { label: "zoneinfo", kind: vscode.CompletionItemKind.Class },
      ],
    },
    settings: {
      __completions__: [
        {
          label: "get",
          kind: vscode.CompletionItemKind.Method,
          detail: "Any",
        },
        {
          label: "items",
          kind: vscode.CompletionItemKind.Property,
          detail: "ItemsView",
        },
        {
          label: "update",
          kind: vscode.CompletionItemKind.Method,
          detail: "void",
        },
      ],
    },
    utils: {
      __completions__: [
        { label: "encode_password", kind: vscode.CompletionItemKind.Method },
        { label: "check_password", kind: vscode.CompletionItemKind.Method },
        { label: "encrypt_aes256_cbc", kind: vscode.CompletionItemKind.Method },
        { label: "decrypt_aes256_cbc", kind: vscode.CompletionItemKind.Method },
        {
          label: "encode_sha256_base64",
          kind: vscode.CompletionItemKind.Method,
        },
        {
          label: "generate_random_string",
          kind: vscode.CompletionItemKind.Method,
        },
        {
          label: "has_letter_in_string",
          kind: vscode.CompletionItemKind.Method,
        },
        {
          label: "has_digit_in_string",
          kind: vscode.CompletionItemKind.Method,
        },
        {
          label: "has_punctuation_in_string",
          kind: vscode.CompletionItemKind.Method,
        },
        { label: "substring", kind: vscode.CompletionItemKind.Method },
      ],
    },
  },
};
