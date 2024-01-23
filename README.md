# promtpfooの練習リポジトリ

公式ドキュメント読んでもちょっと難しかったので、[GitHub Repository]()の`examples`を日本語に翻訳しながら、勉強してみました。


## 準備

実行にあたって、API Keyがいくつか必要となります。主には`OPENAI_API_KEY`があれば色々と動かして遊んでみることができます。

```
export OPENAI_API_KEY=sk-abcd1234
```

他にもOSSで公開されている様々なモデルをAPIとして利用することができる[Replicate](https://replicate.com/)を活用したexampleもあります。

```
export REPLICATE_API_KEY
```

## 実行

```
git clone git@github.com:h-k-nyosu/promptfoo-practice.git

cd examples/xxx
```

プロンプトの評価実行

```
npx promptfoo@latest eval
```

promptの評価結果をGUIで確認

```
npx promptfoo@latest view
```