import { globalCss } from './setup'

export const globalStyles = globalCss({
  '*': {
    m: '0',
    padding: '0',
    boxSizing: 'border-box'
  },

  html: {
    fontSize: '62.5%', // 1rem === 10px // 100% === 16px

    '@medium': {
      fontSize: '50%' // 1rem === 8px
    }
  },

  body: {
    size: '100%',
    backgroundColor: '$green',
    fontFamily: '$primary'
  }
})
