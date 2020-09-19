import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api',
  // baseURL:'http://localhost:2700/blog/web/api'
})

export default http