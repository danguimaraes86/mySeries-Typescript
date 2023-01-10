import { NextApiRequest, NextApiResponse } from 'next'
import { tmdbFetcher } from '../../libs/fetcher'

export default async function trendingAPI(req: NextApiRequest, res: NextApiResponse) {
  const result = await tmdbFetcher('/trending/tv/week')

  return res.status(200).json(result)
}
