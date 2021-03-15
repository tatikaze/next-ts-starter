import { NextApiHandler } from 'next'
import { verifyRequest } from '~/lib/verifiedToken'

const helloHandler: NextApiHandler = async (req, res) => {
  try {
    await verifyRequest(req)
    res.status(200).json({ name: 'John Doe' })
  } catch (err) {
    res.status(500).json(err)
  }
}

export default helloHandler
