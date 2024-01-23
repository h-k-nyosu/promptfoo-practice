この例では、事前に定義された期待に従ってLLMが自分の出力を評価する方法を示しています。

`promptfooconfig.yaml`には同一の設定が提供されています。

実行:

```
npx promptfoo@latest eval
```

また、CSVファイルでテストを定義することもできます:

```
npx promptfoo@latest eval --tests tests.csv
`
