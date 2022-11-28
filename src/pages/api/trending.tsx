import { NextApiRequest, NextApiResponse } from 'next'
import { fetcher } from '../../libs/fetcher'

export default async function trendingAPI(req: NextApiRequest, res: NextApiResponse) {
  const result = await fetcher('/trending/tv/week')

  return res.status(200).json(result)
}
