まず、OPENAI_API_KEY環境変数を設定します。

次に、prompt.jsonを見て、promptfooconfig.yamlを編集します。プロンプトは、次のシグネチャを持つ特別な組み込み変数`_conversation`を使用します：

```ts
type Completion = {
  prompt: string | object;
  input: string;
  output: string;
};

type Conversation = Completion[];
```

`_conversation`をループ処理するとき、Nunjucksプロンプトテンプレートで`completion.prompt`を使用して、前の出力を使用します。例えば、`completion.prompt[completion.prompt.length - 1].content`は、チャット形式のプロンプトで送信された最後のユーザーメッセージです。

`completion.input`はプロンプトの最後の部分です。チャット形式の会話では、`completion.prompt[completion.prompt.length - 1].content`と等しくなります。他の会話では、`completion.prompt[completion.prompt.length - 1]`と等しくなります。

`completion.output`を使用して、そのメッセージに対するアシスタントの応答を取得します。

次に実行します：

```
npx promptfoo@latest eval
```

その後、`npx promptfoo@latest view`を実行して結果を表示できます。
