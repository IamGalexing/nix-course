import axios from 'axios'
import { API } from '../constants'

export const getCurrenciesData = async (endpoint) => {
  const currencies = await axios.get(`${API}/${endpoint}`, {
    headers: {
      apikey: `cur_live_0pAQ1vKTZ9MD3knpUJPOwkxoPMqPrGE0ge8wp5LA`,
      'Content-Type': 'application/json',
    },
  })
  return currencies.data
}
