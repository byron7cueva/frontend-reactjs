import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const getById = async (request: NextApiRequest, response: NextApiResponse) => {
  const {
    query: { id },
  } = request
  const db = new DB()
  const avo = await db.getById(id as string)

  response.status(200).json(avo)
}

export default getById
