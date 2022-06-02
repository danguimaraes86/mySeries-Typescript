import { NextApiRequest, NextApiResponse } from "next"
import { fetcher } from "../../libs/fetcher"

export default async function searchAPI(req: NextApiRequest, res: NextApiResponse) {
  const { query: { value } } = req
  const result = await fetcher('/search/tv', { query: value })

  return res.status(200).json(result)
}
