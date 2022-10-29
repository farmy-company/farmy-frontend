import * as S from './styles'
import Arrow from '../../../public/Arrow.png'
import plus from '../../../public/plus.png'
import Image from 'next/image'
export const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <button>
          <Image src={Arrow} alt="Arrow" />
        </button>
        <button>
          <Image src={plus} alt="Arrow" />
        </button>
      </S.Wrapper>
    </S.Container>
  )
}
