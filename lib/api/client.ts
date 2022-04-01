import axios from 'axios'

const headers =
  typeof window !== 'undefined'
    ? {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('x-access-token') || '',
      }
    : {
        'Content-Type': 'application/json',
        'x-auth-token': '',
      }

const client = axios.create({
  baseURL:
    // process.env.NODE_ENV === 'development' ? '/' : 'https://takeus.shop',
    'https://takeus.shop',
  headers,
})

export default client
