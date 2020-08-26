import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const getById = async (request: NextApiRequest, response: NextApiResponse) => {
  const {
    query: { id },
  } = request
  const db = new DB()
  const data = await db.getById(id as string)

  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({ data }))
}

export default getById
