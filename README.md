# SkyReve APY Formatter for VS Code

SkyReve APY Formatter is a VS Code extension designed for formatting **Applicable Python (APY) files**. APY files contain only function bodies, with hidden function prototypes and predefined global variables such as `reve`. This extension provides **auto formatting and auto completion** to enhance the APY development experience.

## Features

- **Code Formatting:** Supports multiple formatters (`Black`, `Ruff`, and `autopep8`) for APY files.
- **Auto Completion:** Provides completions based on `reve` global members and hidden imports.
- **Customizable Formatting Rules:** Users can configure formatting preferences for each formatter.
- **Seamless Integration:** Works like Python in VS Code while adapting to the APY function-body-only structure.

## Requirements

- **Python 3.7+** must be installed and available in the system's `PATH`.
- At least one of the following formatters must be installed:
  - [Black](https://pypi.org/project/black/) (`pip install black`)
  - [Ruff](https://docs.astral.sh/ruff/) (`pip install ruff`)
  - [autopep8](https://pypi.org/project/autopep8/) (`pip install autopep8`)

## Extension Settings

The extension provides customizable settings under `applicablePythonFormatter`. Users can adjust formatter options as follows:

```json
{
  "applicablePythonFormatter.formatter": "black",
  "applicablePythonFormatter.lineLength": 88,
  "applicablePythonFormatter.executablePath": "/path/to/formatter-executable"
}
```

## Known Issues

- Completion suggestions are limited to the `reve` global variable.
- Formatting may be inconsistent if multiple formatters are installed but not properly configured.

If you encounter any bugs, issues, or have feature requests, please report them on [GitHub Issues](https://github.com/SkyReve/reve-apy-formatter/issues)

## License

This extension is licensed under the **MIT License**.