import { Message } from '../../@types/message.js'

import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey, // This is the default and can be omitted
})

const defaultMessage = {
  role: 'system',
  content: 'You are a helpful assistant.',
}

export async function callOpenAiService(messages: Message[]) {
  messages.at(1)

  const messagesToSent = [defaultMessage, ...messages]

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'Your objective is guess an anime name based on description',
      },
      {
        role: 'user',
        content: 'What is the anime that the MC want to sell your kingdom',
      },
    ],
    model: 'gpt-3.5-turbo-0125',
  })

  console.log(completion.choices[0].message.content)
}
