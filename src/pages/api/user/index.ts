import { prisma } from '@/prisma/setup'
import { NextApiHandler } from 'next'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = z.object({
  username: z.string().trim(),
  password: z.string().trim(),
  is_admin: z.boolean(),
  farm_id: z.number().min(1).optional(),
  employee_id: z.number().min(1).optional()
})

export const handler: NextApiHandler = async (req, res) => {
  if (!['POST', 'GET'].includes(req.method as string))
    return res.status(405).setHeader('Method', 'not-allowed').end()

  if (req.method === 'POST') {
    const userResult = await userSchema.spa(req.body)

    if (!userResult.success) {
      return res.status(400).json({
        message: 'invalid field(s)'
      })
    }

    const isCreationEnableddWithoutToken =
      (await prisma.user.findMany()).length === 0
    let user_id = null

    if (!isCreationEnableddWithoutToken) {
      const token = req.headers.authorization as string
      const secret = process.env.SECRET_KEY as string

      const isValidToken = jwt.verify(token, secret)

      if (!isValidToken) {
        return res.status(403).json({
          message: 'Unauthorized'
        })
      }

      user_id = Number((jwt.decode(token) as { user_id: string }).user_id)
    }

    const user = userResult.data
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(user.password, salt)

    await prisma.user
      .create({
        data: {
          username: user.username,
          password,
          is_admin: user.is_admin,
          employee_id: user.employee_id,
          created_by: user_id
        }
      })
      .then(() => res.status(201).end())
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: 'Internal server error'
        })
      })
  }
}

export default handler
