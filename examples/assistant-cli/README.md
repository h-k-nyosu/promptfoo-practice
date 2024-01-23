この例では、promptfooを使用して、eコマースチャットボットのための2つのプロンプトのサイドバイサイド評価を生成する方法を示しています。

設定は `promptfooconfig.yaml` にあります。実行：

```
npx promptfoo@latest eval
```

完全なコマンドラインの同等形：

```
promptfoo eval --prompts prompts.txt --tests tests.csv --providers openai:gpt-3.5-turbo --output output.json
```
