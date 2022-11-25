import { prisma } from '@/prisma/setup'
import { NextApiHandler } from 'next'
import { z } from 'zod'
import jwt from 'jsonwebtoken'

const farmSchema = z.object({
  cnpj: z.string().length(14),
  name: z.string().trim(),
  total_field_area: z.number().min(1),
  corporate_name: z.string().trim(),
  disctrict_subscription: z.string().trim(),
  street: z.string().trim(),
  district: z.string().trim(),
  zipCode: z.string().trim().length(8),
  city: z.string().trim(),
  uf: z.string().trim().length(2),
  phone_area_code: z.string().trim().length(2),
  phone: z.string().trim().length(9),
  cell_area_code: z.string().trim().length(2),
  cell: z.string().trim().length(9),
  email: z.string().trim().email()
})

export const handler: NextApiHandler = async (req, res) => {
  if (!['POST'].includes(req.method as string))
    return res.status(405).setHeader('Method', 'not-allowed').end()

  const token = req.headers.authorization as string
  const secret = process.env.SECRET_KEY as string

  const isValidToken = jwt.verify(token, secret)

  if (!isValidToken) {
    return res.status(403).json({
      message: 'Unauthorized'
    })
  }

  const user_id = Number((jwt.decode(token) as { user_id: string }).user_id)

  if (req.method === 'POST') {
    const farmResult = await farmSchema.spa(req.body)

    if (!farmResult.success) {
      console.log(farmResult.error)

      return res.status(400).json({
        message: 'invalid field(s)'
      })
    }

    const farm = farmResult.data

    await prisma.farm
      .create({
        data: {
          cnpj: farm.cnpj,
          name: farm.name,
          total_field_area: farm.total_field_area,
          corporate_name: farm.corporate_name,
          disctrict_subscription: farm.disctrict_subscription,
          street: farm.street,
          district: farm.district,
          zipCode: farm.zipCode,
          city: farm.city,
          uf: farm.uf,
          phone_area_code: farm.phone_area_code,
          phone: farm.phone,
          cell_area_code: farm.cell_area_code,
          cell: farm.cell,
          email: farm.email,
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
