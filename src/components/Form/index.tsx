import * as S from './styles'
import Image from 'next/image'
import content from '../../../public/image3.png'
export const Form = () => {
  return (
    <S.Container>
      <S.Title>
        <h1>Cadastro Animal</h1>
      </S.Title>
      <S.Content>
        <S.GroupTitle>
          <h1>Cadastro 1</h1>
          <h1>Cadastro 2</h1>
        </S.GroupTitle>
        <S.GroupCadastro>
          <S.ElementosEsquerda>
            <form>
              <input type="text" placeholder="Identificação o Animal(NOME)" />
              <input type="text" placeholder="Gênero" />
              <input type="text" placeholder="Raça" />
              <input type="text" placeholder="Código do Animal" />
              <input type="text" placeholder="Idade" />
            </form>

            <h2>
              Esssas informações são obrigatórias para <br />
              registro do animal no seu banco de dados.*
            </h2>
          </S.ElementosEsquerda>
          <S.ElementosDireita>
            <Image src={content} alt="content" />
            <button>Proximo</button>
            <button>Salvar</button>
          </S.ElementosDireita>
        </S.GroupCadastro>
      </S.Content>
    </S.Container>
  )
}
