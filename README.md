# Repro for issue 8929

## Versions

platform: macOS<br>
firebase-tools: v14.11.2<br>
Firebase Data Connect VSCode extension: 1.5.0

## Steps to reproduce

1. Run `firebase dataconnect:sdk:generate`
   - Outputs

```
$ firebase dataconnect:sdk:generate
I0805 20:58:03.129571   38222 codegen.go:82] [connector "default" javascriptSdk] Generating sources into "/Users/<PATH>/8929-0/dataconnect-generated/js"
I0805 20:58:03.149698   38222 codegen.go:82] [connector "default" llmTools] Generating sources into "/Users/<PATH>/8929-0/dataconnect-generated/tools.json"
E0805 20:58:03.150129   38222 cmd.go:45] Failed to generate SDKs:
[connector "default" llmTools]: failed to generate sources:
Unsupported type for tool parameter: Enum


Error: Unable to generate your Data Connect SDKs (exit code 1): I0805 20:58:03.129571   38222 codegen.go:82] [connector "default" javascriptSdk] Generating sources into "/Users/<PATH>/8929-0/dataconnect-generated/js"
I0805 20:58:03.149698   38222 codegen.go:82] [connector "default" llmTools] Generating sources into "/Users/<PATH>/8929-0/dataconnect-generated/tools.json"
E0805 20:58:03.150129   38222 cmd.go:45] Failed to generate SDKs:
[connector "default" llmTools]: failed to generate sources:
Unsupported type for tool parameter: Enum
```
