import OpenAI from 'openai'

import { Message } from '../../@types/message.js'

const apiKey = process.env.OPEN_AI_KEY

const openai = new OpenAI({
  apiKey,
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
