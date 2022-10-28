import * as S from './styles'

export const FormSection = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.GroupText>
          <S.Logo>Farmy</S.Logo>
          <h1>
            Software <br /> Para Gestão <br /> de Fazendas
          </h1>
          <p>Gerencie toda sua propriedade agrícola em um só lugar!</p>
        </S.GroupText>
        <S.Form>
          <input type="text" placeholder="Digite seu email" />
          <input type="text" placeholder="Senha" />
          <button>ENTRAR</button>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  )
}
