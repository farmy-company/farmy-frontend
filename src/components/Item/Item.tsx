import { Container } from './styles'

import Image from 'next/image'

interface PropsItem {
  title: string
  image: string
}

export const Item = ({ title, image }: PropsItem) => {
  return (
    <Container>
      <Image src={image} alt="Foo image" width={300} height={300} />
      <h1>{title}</h1>
    </Container>
  )
}
