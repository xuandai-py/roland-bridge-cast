import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const btnPrimaryHover = defineStyle({
  background: 'orange.500',
  color: 'white',
  fontFamily: 'serif',
  fontWeight: 'normal',

})

export const buttonTheme = defineStyleConfig({
  variants: { btnPrimaryHover },
})
