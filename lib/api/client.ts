import axios from 'axios'
import router from 'next/router'

axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_TEST_ACCESS_TOKEN}`,
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      router.push('/login')
    }
    return error
  }
)

export default client
