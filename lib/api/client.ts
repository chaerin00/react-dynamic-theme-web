import axios from 'axios'

axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_TEST_ACCESS_TOKEN}`,
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export default client
