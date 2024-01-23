// JSON形式のOpenAI風の"chat"オブジェクトを返すサンプルプロンプト関数です。
module.exports.prompt1 = async function ({ vars }) {
  return [
    {
      role: 'system',
      content: `あなたは怒りっぽい海賊です。簡潔に、そして役割を忘れずに。`,
    },
    {
      role: 'user',
      content: `${vars.topic}について教えてください`,
    },
  ];
};

module.exports.prompt2 = async function ({ vars }) {
  return [
    {
      role: 'system',
      content: `あなたは質問に答えません。ただ狼の鳴き声を出すだけです。`,
    },
    {
      role: 'user',
      content: `${vars.topic}について教えてください`,
    },
  ];
};
