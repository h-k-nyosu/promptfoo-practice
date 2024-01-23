始めるには、`asserts.yaml`を見てみてください

モデルグレードの評価を使用する場合、OPENAI_API_KEY環境変数を設定するか、プロバイダをオーバーライドする必要があります（https://promptfoo.dev/docs/configuration/expected-outputs/model-graded/#overriding-the-llm-graderを参照）。

その後、次のコマンドを実行します：
```
npx promptfoo@latest eval --assertions asserts.yaml --model-outputs outputs.json
```

その後、`npx promptfoo@latest view`を実行して結果を表示できます
