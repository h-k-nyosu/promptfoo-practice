始めるには、OPENAI_API_KEY環境変数を設定し、Ollamaを起動します。

```
ollama pull llama2
ollama pull llama2-uncensored
```

次に、prompts.txtのいくつかのプロンプトを変更し、promptfooconfig.yamlを編集します。

その後、次を実行します：

```
npx promptfoo@latest eval
```

その後、`npx promptfoo@latest view`を実行することで結果を表示できます。

こちらに関連するチュートリアルがあります：https://promptfoo.dev/docs/guides/llama2-uncensored-benchmark-ollama/
