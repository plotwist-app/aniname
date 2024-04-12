import { Message } from '../../@types/message.js'
import { callOpenAiService } from './callOpenAiService.js'

export async function guessAnimeService(messages: Message[]) {
  // pegar a mensagem, enviar para a OPEN AI

  await callOpenAiService(messages)
  // pegar a resposta e e adicionar no messages
  // devolver para o controller
}
