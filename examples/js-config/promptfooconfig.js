module.exports = {
  description: 'LLMで構築された翻訳機能',
  prompts: ['prompts.txt'],
  providers: ['openai:gpt-3.5-turbo'],
  tests: [
    {
      vars: {
        language: '日本語',
        body: 'Hello world',
      },
    },
    {
      vars: {
        language: '日本語',
        body: "I'm hungry.",
      },
    },
    {
      vars: {
        language: '海賊語',
        body: 'こんにちは、世界',
      },
    },
    {
      vars: {
        language: '海賊語',
        body: 'お腹が空いた',
      },
    },
  ],
};
