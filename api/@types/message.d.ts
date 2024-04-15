import { ChatCompletionMessageParam } from 'openai/resources/index.mjs'

export interface Message extends ChatCompletionMessageParam {
  role: string
  content: string
}
