import { LoginBody, postToken } from 'lib/api/users'
import router from 'next/router'
import { useMutation } from 'react-query'

export const useLogin = () => {
  return useMutation('social_login', (body: LoginBody) => postToken(body), {
    onSuccess: (data) => {
      const { token, email, id } = data
      localStorage.setItem('x-access-token', token)
      localStorage.setItem('user-email', email)
      localStorage.setItem('user-id', id)
      router.push('/')
    },
    onError: () => {},
  })
}
