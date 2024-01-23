この例は`promptfooconfig.yaml`に事前設定されています（両方とも同一の例）。つまり、次のコマンドを実行するだけです：

```
npx promptfoo@latest eval
```

プロンプト、プロバイダ、出力などを上書きするには、次のコマンドを実行します：

```
npx promptfoo@latest eval --prompts prompt1.json prompt2.json --providers openai:chat:gpt-3.5-turbo --output output.json
```

