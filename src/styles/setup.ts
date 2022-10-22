import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss, config, keyframes } =
  createStitches({
    media: {
      medium: '(width <= 768px)'
    },
    theme: {
      colors: {
        gray50: '#FAFAFA',
        gray200: '#D9D9D9',
        gray600: '#424B54',
        gray900: '#212529',
        blue300: '#0275D8',
        blue700: '#37466B',
        blue900: '#192031',
        white: '#ffffff',
        black: '#000000'
      },
      space: {
        1: '0.5rem',
        2: '1rem',
        3: '1.5rem'
      },
      fontSizes: {
        1: '1.2rem',
        2: '1.6rem',
        3: '2rem',
        4: '2.4rem',
        5: '3.2rem',
        6: '4.8rem',
        7: '6.4rem'
      },
      fonts: {
        primary: 'Inter, apple-system, sans-serif',
        secondary: 'Sora, apple-system, sans-serif'
      },
      lineHeights: {
        1: '1.2rem',
        2: '2.4rem',
        3: '3.6rem',
        4: '4.8rem'
      },
      sizes: {
        1: '108rem'
      },
      borderWidths: {
        1: '1px',
        2: '2px'
      },
      radii: {
        1: '5px',
        2: '8px',
        3: '11px',
        4: '15px',
        5: '18px',
        6: '29px',
        7: '45px',
        8: '107px'
      },
      shadows: {
        1: '0px 2px 9px 1px rgba(0, 0, 0, 0.15)',
        2: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      zIndices: {
        0: -1,
        1: 5,
        2: 10,
        3: 20,
        4: 30,
        5: 40,
        6: 50,
        7: 60,
        8: 100,
        9: 110,
        max: 999
      }
    },
    utils: {
      m: (value: string) => ({
        margin: value
      }),
      size: (value: string) => ({
        width: value,
        height: value
      })
    }
  })
