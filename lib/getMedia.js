import { API_URL } from './api'
import Axios from 'axios'

export const getMedia = async (id) => {
  return Axios.get(`${API_URL}/media/${id}`).then((response) => {
    let mediaUrl = response.data.media_details.sizes.full.source_url
    return mediaUrl
  })
}
