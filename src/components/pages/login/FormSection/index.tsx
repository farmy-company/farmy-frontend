import * as S from './styles'

export const FormSection = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.GroupText>
          <button>Logo</button>
          <h1>
            Software para Gestão de <span>Fazendas</span>
          </h1>
          <h3>Gerencie toda sua propriedade agrícola em um só lugar!</h3>
        </S.GroupText>
        <S.Form>
          <h1>Faça seu Login</h1>
          <input type="text" placeholder="Digite seu email" />
          <input type="text" placeholder="Senha" />
          <input type="text" placeholder="Propriedade Selecione" />
          <button>Acessar</button>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  )
}
