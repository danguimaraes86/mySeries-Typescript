import { NextApiRequest, NextApiResponse } from "next"
import { fetcher } from "../../../libs/fetcher"

export default async function seriesDetails(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  
  const series = await fetcher(`/tv/${id}`, { append_to_response: 'external_ids' })
  const { results: providers } = await fetcher(`/tv/${id}/watch/providers`)
  series['providers'] = providers.hasOwnProperty('BR') ? providers.BR : []

  return res.status(200).json(series)
}
