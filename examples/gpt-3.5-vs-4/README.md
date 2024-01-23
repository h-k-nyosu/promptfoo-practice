この例では、promptfooを使用してGPT 3とGPT 4の出力を比較するための並列評価を生成する方法を示しています。

`promptfooconfig.yaml`で設定します。以下のように実行します：

```
npx promptfoo@latest eval
```

完全なコマンドラインの同等物：

```
npx promptfoo@latest eval --prompts prompts.txt --providers openai:gpt-3.5-turbo openai:gpt-4 --no-cache -o output.csv output.html
```

