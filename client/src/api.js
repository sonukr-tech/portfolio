import axios from 'axios'

const api = axios.create({
  baseURL: 'https://portfolio-backend-t1ns.onrender.com/api',
  headers: { 'Content-Type': 'application/json' }
})

export default api
