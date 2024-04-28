import { VercelRequest, VercelResponse } from '@vercel/node'

import { guessAnimeService } from '../domain/services/guessAnimeService.js'
import { Message } from '../@types/message.js'
import { IncomingHttpHeaders } from 'http'

interface BodyParams {
  messages: Message[]
}

const apiKeyEnv = process.env.API_KEY

export async function guessController(req: VercelRequest, res: VercelResponse) {
  const body: BodyParams = req.body

  const headers: IncomingHttpHeaders = req.headers

  if (!headers.api_key) {
    return res.status(401).json({
      message: 'No api Key provided',
    })
  }

  if (headers.api_key !== apiKeyEnv) {
    return res.status(401).json({
      message: 'Wrong API key',
    })
  }

  const response = await guessAnimeService(body.messages)

  if (!body.messages) {
    return res.status(422).json({
      message:
        'There are missing messages, you need to pass an message to aniname',
    })
  }

  res.status(200).json({
    messages: response,
  })
}
