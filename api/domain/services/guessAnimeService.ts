import { Message } from '../../@types/message.js'
import { callOpenAiService } from './callOpenAiService.js'

export async function guessAnimeService(messages: Message[]) {
  return await callOpenAiService(messages)
}
