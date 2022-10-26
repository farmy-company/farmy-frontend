import { Headers } from '@/components/Header/Headers'
import { styled } from '@/styles/setup'
export const Initial = () => {
  return (
    <Container>
      <Headers />
      <Wrapper>
        <ALS>
          <GroupText>
            <button>Logo</button>
            <h1>
              Software para Gestão de <span>Fazendas</span>
            </h1>
            <h3>Gerencie toda sua propriedade agrícola em um só lugar!</h3>
          </GroupText>
          <GroupLogin>
            <h1>Faça seu Login</h1>
            <input type="text" placeholder="Digite seu email" />
            <input type="text" placeholder="Senha" />
            <input type="text" placeholder="Propriedade Selecione" />
            <button>Acessar</button>
          </GroupLogin>
        </ALS>
      </Wrapper>
    </Container>
  )
}
const Container = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%',
  minHeight: '800px',
  flexDirection: 'column',
  backgroundImage: `url('/fundo(capa).png')`,
  backgroundColor: '$green',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  button: {
    borderRadius: '30px',
    width: '100px',
    height: '40px',
    backgroundColor: 'transparent',

    color: 'rgba(5, 255, 0, 1)',
    borderColor: '#FFF',
    fontSize: '20px',
    cursor: 'pointer'
  }
})
const Wrapper = styled('div', {
  marginTop: '40px'
})
const GroupLogin = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  height: '500px',
  border: '2px solid #FFF',
  justifyContent: 'center',
  alignItems: 'center',
  h1: {
    color: '#fff',
    fontSize: '$6',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '20px'
  },
  button: {
    borderRadius: '10px',
    width: '100px',
    height: '40px',
    backgroundColor: '#27B82B',
    color: '#FFF',
    fontSize: '20px',
    cursor: 'pointer',
    marginLeft: '28rem'
  },
  input: {
    width: '30rem',
    height: '5rem',
    paddingLeft: '10px',
    marginBottom: '25px',
    backgroundColor: '$green'
  }
})
const ALS = styled('div', {
  display: 'flex',
  gap: '40rem'
})

const GroupText = styled('div', {
  display: 'flex',
  width: '400px',
  flexDirection: 'column',
  color: '#FFF',
  h1: {
    fontSize: '$7'
  },
  h3: {
    fontSize: '$5'
  }
})
