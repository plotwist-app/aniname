import { VercelRequest, VercelResponse } from '@vercel/node'
import { guessAnimeService } from '../domain/services/guessAnimeService.js'
import { Message } from '../@types/message.js'

interface BodyParams {
  messages: Message[]
}

export async function guessController(req: VercelRequest, res: VercelResponse) {
  const body: BodyParams = req.body

  const response = await guessAnimeService(body.messages)

  if (!body.messages) {
    res.status(422).json({
      message:
        'There are missing message, you need to pass an message to aniname',
    })

    return
  }

  res.status(200).json(response)
}
