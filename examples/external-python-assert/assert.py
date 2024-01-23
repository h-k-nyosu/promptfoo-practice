import json
import sys


def main():
    if len(sys.argv) >= 3:
        output = sys.argv[1]
        context = json.loads(sys.argv[2])
    else:
        raise ValueError("promptfooからモデルの出力とコンテキストが期待されます。")

    # `output`と`context`をここで自由に使ってください。
    # ...

    return "バナナ" in output.lower()


# このスクリプトからの出力はアサーションの結果として解釈されます。
print(main())
