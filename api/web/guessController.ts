import { VercelRequest, VercelResponse } from '@vercel/node'
// import { guessAnimeService } from '../domain/services/guessAnimeService.js'
// import { Message } from '../@types/message.js'

// interface BodyParams {
//   messages: Message[]
// }

export async function guessController(req: VercelRequest, res: VercelResponse) {
  // const body: BodyParams = req.body

  // const response = await guessAnimeService(body.messages)

  // if (!body.messages) {
  //   res.status(422).json({
  //     message:
  //       'There are missing message, you need to pass an message to aniname',
  //   })

  //   return
  // }

  res.status(200).json({
    message:
      "The anime you are referring to is The Genius Prince's Guide to Raising a Nation Out of Debt (Tensai Ouji no Akaji Kokka Saisei Jutsu in Japanese). The story follows Prince Wein, who is intelligent and capable but wishes to sell his impoverished kingdom to live a leisurely life. His plans are often complicated by unexpected events and the responsibilities of leadership. His aid and consort in his endeavors is Ninym, his white-haired childhood friend and advisor.",
  })
}
