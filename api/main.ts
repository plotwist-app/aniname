import type { VercelRequest, VercelResponse } from '@vercel/node'
import { guessController } from './web/guessController.js'

const req = (req: VercelRequest, res: VercelResponse) => {
  guessController(req, res)
}

export default req
