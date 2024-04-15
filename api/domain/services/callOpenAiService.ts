import console from 'console'
import { Message } from '../../@types/message.js'

import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey, // This is the default and can be omitted
})

export async function callOpenAiService(incomingMessages: Message[]) {
  const defaultMessage: Message = {
    role: 'system',
    content: 'Your objective is guess an anime name based on description',
  }

  const messages = [defaultMessage, ...incomingMessages]

  const completion = await openai.chat.completions.create({
    messages,
    model: 'gpt-4-turbo',
  })

  console.log(completion.choices[0].message.content)
}
