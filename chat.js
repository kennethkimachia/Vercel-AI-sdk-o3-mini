import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import 'dotenv/config'
const { text, usage, providerMetadata } = await generateText({
  apiKey:process.env.OPENAI_API_KEY,
    model: openai('o3-mini'),
    prompt: 'Invent a new holiday and describe its traditions.',

    providerOptions: {
      openai: {
        reasoningEffort: 'low',
      },
    },
  });
  
  console.log(text);
  console.log('Usage:', {
    ...usage,
    reasoningTokens: providerMetadata?.openai?.reasoningTokens,
  });