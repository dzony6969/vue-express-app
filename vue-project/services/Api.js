
import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `/api`,
    headers: {'Content-Type': 'application/json',},
  })
}