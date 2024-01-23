まず、`gcloud auth print-access-token`から`VERTEX_API_KEY`環境変数を設定します。また、Google Cloud Platformプロジェクトに対応する`VERTEX_PROJECT_ID`も設定します。

次に、promptfooconfig.yamlを編集します。

その後、以下のコマンドを実行します：

```
npx promptfoo@latest eval
```

最後に、`npx promptfoo@latest view`を実行することで結果を確認できます。
