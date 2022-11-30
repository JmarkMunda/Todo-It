// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  mainBg: {
    100: '#FFFF',
    200: '#FCFCFC',
    300: '#FAFAFA',
    400: '#F0F0F0'
  },
}

export const theme = extendTheme({ colors })
