import type { VercelRequest, VercelResponse } from '@vercel/node'

const req = (req: VercelRequest, res: VercelResponse) => {
  res.status(200).send('Hello World!')
}

export default req
