# standalone-action.yamlの解説

このファイルは、GitHub Actionsのワークフローを定義しています。GitHub Actionsは、リポジトリ内の特定のイベントに対して自動化されたタスクを実行するためのツールです。

1. `name: LLM Prompt Evaluation` - この行は、ワークフローの名前を設定します。

2. `on: pull_request: paths: - 'prompts/**'` - この行は、ワークフローがトリガーされるイベントを定義します。この場合、'prompts'ディレクトリ内の任意のファイルがプルリクエストによって変更されたときにワークフローが開始されます。

3. `jobs: evaluate: runs-on: ubuntu-latest` - この行は、ワークフローのジョブを定義します。このジョブは'evaluate'と名付けられ、最新のUbuntuランナー上で実行されます。

4. `steps:` - この行以下に、ジョブで実行されるステップのリストが続きます。

5. `- name: Checkout base ref (original)` - このステップでは、actions/checkout@v2アクションを使用して、プルリクエストのベースリファレンス（変更前のコード）をチェックアウトします。

6. `- name: Checkout head ref (modified)` - このステップでは、同じくactions/checkout@v2アクションを使用して、プルリクエストのヘッドリファレンス（変更後のコード）をチェックアウトします。

7. `- name: Cache promptfoo data` - このステップでは、actions/cache@v2アクションを使用して、promptfooのデータをキャッシュします。これにより、同じデータを再度ダウンロードする必要がなくなり、ワークフローの実行時間が短縮されます。

8. `- name: Set up Node.js` - このステップでは、actions/setup-node@v2アクションを使用して、Node.jsをセットアップします。

9. `- name: Run promptfoo evaluation` - このステップでは、promptfooの評価を実行します。この評価は、プルリクエストによって変更されたプロンプトの品質を評価します。

10. `- name: Comment PR` - この最終ステップでは、actions/github-script@v6アクションを使用して、プルリクエストにコメントを追加します。このコメントには、promptfooの評価結果が含まれます。

