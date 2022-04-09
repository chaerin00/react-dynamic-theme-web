import { useThemeState } from '@contexts/ThemeContext'
import Image from 'next/image'

const MainLogo = () => {
  const { main_logo } = useThemeState()

  return (
    <>
      {main_logo && (
        <Image
          width={320}
          height={128}
          layout="responsive"
          src={main_logo}
          alt="main-logo"
        />
      )}
    </>
  )
}

export default MainLogo
