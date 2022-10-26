import { styled } from '@/styles/setup'

export const Container = styled('div', {
  display: 'flex',
  backgroundColor: 'rgba(0, 0, 0, 0.56)',
  width: '100%',
  height: '70px',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',

  top: '0',

  left: '0',

  zIndex: '999px',
  button: {
    borderRadius: '30px',
    width: '100px',
    height: '40px',
    backgroundColor: 'transparent',
    color: 'rgba(5, 255, 0, 1)',
    borderColor: '#FFF',
    fontSize: '20px',
    cursor: 'pointer',
    marginRight: '20px'
  }
})

export const Title = styled('div', {
  color: '#FFF',
  fontSize: '$6',
  marginLeft: '40px'
})
