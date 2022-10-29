import { styled } from '@/styles/setup'

export const Container = styled('section', {
  width: '90vw',
  margin: '0 auto'
})

export const Wrapper = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',

  button: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  }
})
