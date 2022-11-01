import * as S from './styles'
import Arrow from '../../../public/Arrow.png'
import plus from '../../../public/plus.png'
import Image from 'next/image'
import Link from 'next/link';

export const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
          <Link href="/escrituracao"><Image src={Arrow} alt="Arrow" /></Link>
        
        <button>
          <Image src={plus} alt="Arrow" />
        </button>
      </S.Wrapper>
    </S.Container>
  )
}
