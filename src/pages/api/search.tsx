import { NextApiRequest, NextApiResponse } from 'next'
import { tmdbFetcher } from '../../libs/fetcher'

export default async function searchAPI(req: NextApiRequest, res: NextApiResponse) {
  const { query: { value } } = req
  const result = await tmdbFetcher('/search/tv', { query: value })

  return res.status(200).json(result)
}
