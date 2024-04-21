import OpenAI from 'openai'

import { Message } from '../../@types/message.js'

const apiKey = process.env.OPEN_AI_KEY

const openai = new OpenAI({
  apiKey,
})

export async function guessAnimeService(incomingMessages: Message[]) {
  const defaultMessage: Message = {
    role: 'assistant',
    content: 'Your objective is guess an anime name based on description',
  }

  const messages = [defaultMessage, ...incomingMessages]

  const { choices } = await openai.chat.completions.create({
    messages,
    model: 'gpt-4-turbo',
  })

  const content = choices[0].message.content!.replace(/[/*\\]/g, '')

  const response: Message = {
    role: 'assistant',
    content,
  }

  return [...incomingMessages, response]
}
