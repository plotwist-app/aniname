import { Message } from '../../@types/message.js'

export function createNewMessageFunction(
  messages: Message[],
  rawMessage: string,
) {
  const newMessage: Message = {
    role: 'assistant',
    content: rawMessage,
  }

  const updatedMessages = [...messages, newMessage]

  return updatedMessages
}
