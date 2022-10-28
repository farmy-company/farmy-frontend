import { styled } from '@/styles/setup'

export const Container = styled('section', {
  width: '100vw',
  height: '100vh',

  backgroundImage: `url('/fundo(capa).png')`,
  backgroundColor: '$green',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  position: 'relative',

  '&::after': {
    content: '',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',

    zIndex: '0',

    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },

  button: {
    // borderRadius: '3rem', // 30px,
    width: '10rem',
    height: '4rem',
    backgroundColor: 'transparent',

    color: 'rgba(5, 255, 0, 1)',
    borderColor: '#FFF',
    fontSize: '2rem',
    cursor: 'pointer'
  }
})

export const Wrapper = styled('div', {
  width: '90%',
  maxWidth: '108rem',
  marginInline: 'auto',
  paddingTop: '3rem',

  position: 'relative',

  height: '100%',

  zIndex: '$max',

  '@media (min-width: 768px)': {
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export const Form = styled('form', {
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
    borderRadius: '3rem',
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

export const GroupText = styled('div', {
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

export const Text = styled('div', {
  h1: {
    fontSize: '$6',
    color: '#FFF',
    marginTop: ' 10px',
    span: {
      fontWeight: 'bold'
    }
  }
})

export const Content = styled('div', {
  display: 'flex',
  gap: '10px'
})
