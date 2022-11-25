import { useAuth } from '@/hooks/useAuth'
import { FormEvent, useRef, useState } from 'react'
import * as S from './styles'

type Props = {
  isFirstAccess: boolean
}

export const FormSection = (props: Props) => {
  const { signIn } = useAuth()
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const username = usernameRef.current?.value as string
    const password = passwordRef.current?.value as string

    if (!username || !password) {
      alert('Campos vazios')
    }

    setIsLoading(true)
    await signIn({ username, password }).finally(() => setIsLoading(false))
  }

  return (
    <>
      {isLoading && (
        <S.Loading>
          <p>Carregando...</p>
        </S.Loading>
      )}
      <S.Container>
        <S.Wrapper>
          <S.GroupText>
            <S.Logo>Farmy</S.Logo>
            <h1>Software para Gestão de Fazendas</h1>
            <p>Gerencie toda sua propriedade agrícola em um só lugar!</p>
          </S.GroupText>
          <S.Form onSubmit={handleSubmit}>
            {props.isFirstAccess ? (
              <S.Message>
                No primeiro acesso, ocorrerá a criaçao do usuário
              </S.Message>
            ) : (
              <S.Message>Faça seu login</S.Message>
            )}
            <input ref={usernameRef} type="text" placeholder="Usuário" />
            <input ref={passwordRef} type="password" placeholder="Senha" />
            <button>ENTRAR</button>
          </S.Form>
        </S.Wrapper>
      </S.Container>
    </>
  )
}
