import OpenAI from 'openai'

import { env } from '../../env/index.js'
import { Message } from '../../@types/message.js'

const apiKey = env.OPEN_AI_KEY

const openai = new OpenAI({
  apiKey, // This is the default and can be omitted
})

export async function callOpenAiService(incomingMessages: Message[]) {
  const defaultMessage: Message = {
    role: 'assistant',
    content: 'Your objective is guess an anime name based on description',
  }

  const messages = [defaultMessage, ...incomingMessages]

  const completion = await openai.chat.completions.create({
    messages,
    model: 'gpt-4-turbo',
  })

  return completion.choices[0].message.content
}
