import { NextApiRequest, NextApiResponse } from 'next'
import { tmdbFetcher } from '../../../libs/fetcher'

export default async function seriesDetails(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  const series = await tmdbFetcher(`/tv/${id}`, { append_to_response: 'external_ids' })
  const { results: providers } = await tmdbFetcher(`/tv/${id}/watch/providers`)
  series['providers'] = providers.hasOwnProperty('BR') ? providers.BR : []

  return res.status(200).json(series)
}
