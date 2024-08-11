import axios from 'axios'

export async function getTracks(query) {
  const res = await axios.get(`https://musicbrainz.org/ws/2/release-group?fmt=json&query=${query}`)
  return res.data
}
