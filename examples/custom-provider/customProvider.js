const fetch = require('node-fetch');

class CustomApiProvider {
  constructor(options) {
    // 呼び出し元がプロバイダIDを上書きできます（例：同じプロバイダの複数インスタンスを使用する場合）
    this.providerId = options.id || 'custom provider';

    // configオブジェクトには、設定ファイルでプロバイダに渡されたオプションが含まれます。
    this.config = options.config;
  }

  id() {
    return this.providerId;
  }

  async callApi(prompt) {
    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: prompt,
      }],
      max_tokens: parseInt(this.config?.max_tokens, 10) || 1024,
      temperature: parseFloat(this.config?.temperature) || 0,
    };
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    const ret = {
      output: data.choices[0].message.content,
      tokenUsage: {
        total: data.usage.total_tokens,
        prompt: data.usage.prompt_tokens,
        completion: data.usage.completion_tokens,
      },
    };
    return ret;
  }
}

module.exports = CustomApiProvider;
