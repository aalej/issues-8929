# Repro for issue 8929

## Versions

platform: macOS<br>
firebase-tools: v14.11.2

## Steps to reproduce

1. Run `firebase dataconnect:sdk:generate`
   - Outputs

```
$ firebase dataconnect:sdk:generate
I0804 22:16:47.447483    6688 codegen.go:82] [connector "default" javascriptSdk] Generating sources into "/Users/<PATH>/issues/8929-0/dataconnect-generated/js"
I0804 22:16:47.462421    6688 codegen.go:82] [connector "default" llmTools] Generating sources into "/Users/<PATH>/issues/8929-0/dataconnect-generated/tools.json"
I0804 22:16:47.463354    6688 generate.go:40] Generated all sources. Writing them to disk...
I0804 22:16:47.466940    6688 collector.go:107] connector "default" javascriptSdk wrote into "/Users/<PATH>/issues/8929-0/dataconnect-generated/js"
Generated sources: index.d.ts [1230B] esm/index.esm.js [705B] esm/package.json [17B] react/index.d.ts [633B] react/esm/package.json [17B] react/index.cjs.js [560B] react/README.md [11644B] index.cjs.js [826B] package.json [849B] README.md [7178B] react/package.json [457B] react/esm/index.esm.js [531B]
I0804 22:16:47.468447    6688 installsdk.go:55] Package @movies/dataconnect is already installed. Skipping installation
I0804 22:16:47.468685    6688 collector.go:107] connector "default" llmTools wrote into "/Users/<PATH>/issues/8929-0/dataconnect-generated/tools.json"
Generated sources:  [193B]


Generated SDKs for default
```
