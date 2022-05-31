import axios from "axios"

const customAxios = axios.create({
  baseURL: process.env.TMDB_BASEURL,
  headers: {
    'Authorization': `Bearer ${process.env.TMDB_APIKEY}`
  },
  params:  { language: 'pt-BR' }
})

export default customAxios