import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'

const isGoogleLoginResponse = (
  value: GoogleLoginResponse | GoogleLoginResponseOffline
): value is GoogleLoginResponse => {
  return (value as GoogleLoginResponse).accessToken !== undefined
}

export default isGoogleLoginResponse
