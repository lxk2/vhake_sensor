import axios from 'axios'
import { BASE_URL } from './statusCode'

export default {
  request: (options) => {
    let {
      url,
      data,
      method,
      headers,
      success
    } = options
    axios({
      method: method || 'POST',
      url: BASE_URL + url,
      data,
      headers: headers || {}
    })
      .then(res => {
        let data = res.data
        success(data)
      })
      .catch(res => {
        throw res
      })
  }
}
