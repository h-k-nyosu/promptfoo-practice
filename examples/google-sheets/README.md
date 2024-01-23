この例では、外部のGoogleシートを使用してテストを実行する方法を示しています。始めるには、
まずOPENAI_API_KEY環境変数を設定してください。

次に、promptfooconfig.yamlのGoogleシートを複製し、URLを置き換えてください。

その後、以下のコマンドを実行します：

```
npx promptfoo@latest eval
```

その後、`npx promptfoo@latest view`を実行することで結果を確認することができます。
