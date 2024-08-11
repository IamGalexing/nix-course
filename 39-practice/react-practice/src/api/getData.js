import axios from 'axios'
import { API } from '../constants/API'

export const getData = async (endpoint) => {
  const response = await axios.get(`${API}${endpoint}`)
  return { data: response.data, totalItems: response.headers['x-total-count'] }
}
