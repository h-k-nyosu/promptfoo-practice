この例では、`customProvider.js`にカスタムAPIプロバイダを使用しています。また、CSVテストケースも使用しています。

実行方法：

```
npx promptfoo@latest eval
```

完全なコマンドラインの同等物：

```
promptfoo eval --prompts prompts.txt --tests vars.csv --providers openai:chat --output output.json --providers customProvider.js
```
