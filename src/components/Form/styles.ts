import { styled } from '@/styles/setup'
export const Container = styled('section', {
  width: '100vw',
  margin: '0 auto'
})
export const Title = styled('div', {
  width: '90vw',
  margin: '0 auto',
  backgroundImage: 'linear-gradient(to left, #192031, #14AF4E, #16A34A)',
  fontSize: '$6',
  h1: {
    color: '#FFF'
  }
})

export const Content = styled('div', {
  width: '90vw',
  height: '80vh',
  margin: '0 auto',
  marginTop: '3rem',
  backgroundColor: 'rgba(255, 255, 255, 0.06)',
  border: '1px solid #FFF',
  h1: {
    color: '$green600',
    fontSize: '$6',
    borderBottom: '5px solid #16a34a '
  },
  '@media (min-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})

export const GroupTitle = styled('div', {
  display: 'flex',
  maxWidth: '200rem',
  textAlign: 'center',
  justifyContent: 'center',
  gap: '50rem'
})
export const GroupCadastro = styled('div', {
  width: '70vw',
  height: '50vh',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '3rem',

  form: {
    borderTop: '3px solid #16A34A',
    width: '30rem',
    height: '30rem',
    display: 'flex',
    gap: '1rem',
    flexDirection: 'column',
    borderBottom: '3px solid #16A34A'
  },

  input: {
    backgroundColor: '#374151',
    width: '30rem',
    padding: '1.5rem',
    marginTop: '2rem',
    color: '#FFF'
  },
  h2: {
    marginTop: '15rem',
    color: '#FFF',
    fontSize: '$4'
  }
})
export const Linha = styled('span', {})
export const ElementosEsquerda = styled('div', {})
export const ElementosDireita = styled('div', {
  width: '40rem',

  button: {
    color: '#FFF',
    marginTop: '2rem',
    marginLeft: '2rem',
    background: 'transparent',
    border: '1px solid #FFF',
    borderRadius: '2rem',
    padding: '2rem',
    fontWeight: 'bold',
    fontSize: '$5',
    cursor: 'pointer'
  }
})
