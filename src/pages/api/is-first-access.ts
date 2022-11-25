import { prisma } from '@/prisma/setup'
import { NextApiHandler } from 'next'

export const handler: NextApiHandler = async (req, res) => {
  const users = await prisma.user.findMany()

  const is_first_access = users.length === 0

  return res.json({
    is_first_access
  })
}

export default handler
