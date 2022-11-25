import { NextApiHandler } from 'next'
import bcrypt from 'bcrypt'
import { prisma } from '@/prisma/setup'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

const loginSchema = z.object({
  username: z.string().trim(),
  password: z.string().trim()
})

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST')
    return res.status(405).setHeader('Method', 'not-allowed').end()

  const validationResult = await loginSchema.spa(req.body)

  if (!validationResult.success) {
    return res.status(400).json({
      message: 'invalid field(s)'
    })
  }

  const user = await prisma.user.findFirst({
    where: {
      username: validationResult.data.username
    }
  })

  if (!user) {
    return res.status(400).json({
      message: 'Invalid username or password'
    })
  }

  const isValidPassword = await bcrypt.compare(
    validationResult.data.password,
    user.password
  )

  if (!isValidPassword) {
    return res.status(400).json({
      message: 'Invalid username or password'
    })
  }

  const token = jwt.sign(
    { user_id: user.id, username: user.username },
    process.env.SECRET_KEY as string
  )

  return res.json({
    message: token
  })
}

export default handler
