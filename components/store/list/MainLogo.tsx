import Image from 'next/image'

type mainLogoProps = {
  mainLogo: string
}

const MainLogo = ({ mainLogo }: mainLogoProps) => {
  return (
    <Image
      width={320}
      height={128}
      layout="responsive"
      src={mainLogo}
      alt="main-logo"
    />
  )
}

export default MainLogo
