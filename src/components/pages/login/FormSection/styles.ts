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

  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  alignItems: 'center',
  justifyContent: 'center',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  width: 'min(100%, 500px)',

  padding: '5rem',
  borderRadius: '$1',

  backgroundColor: '$slate900',

  button: {
    marginTop: '1.6rem',
    borderRadius: '$1',
    width: '100%',
    backgroundColor: '$green600',
    color: '$white',
    fontSize: '2rem',
    cursor: 'pointer',
    border: 'none',
    padding: '1.3rem',

    transition: 'filter 0.4s ease',

    '&:hover': {
      filter: 'brightness(0.8)'
    }
  },

  input: {
    borderRadius: '$1',
    width: '100%',
    padding: '1.7rem 3rem',
    backgroundColor: '$gray700',
    border: 'none',
    color: '$white',
    fontSize: '1.5rem',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '$gray700',
    outline: 'none',

    transition: 'border 0.5s ease',

    '&:focus': {
      borderColor: '$green600'
    },

    '&::placeholder': {
      color: '$gray400'
    }
  }
})

export const GroupText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  width: 'min(100%, 400px)',
  color: '$white',

  h1: {
    fontSize: '5rem'
  },

  p: {
    fontSize: '$3',
    color: '$gray200'
  }
})

export const Logo = styled('span', {
  color: '$white',
  fontWeight: 'bolder',
  fontFamily: '$secondary',
  fontSize: '$4'
})
