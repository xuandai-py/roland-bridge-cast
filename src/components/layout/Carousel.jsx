import React from 'react'
import { motion } from 'framer-motion'
import '../style.scss'
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  keyframes,
  Box
} from '@chakra-ui/react';

const img = 'https://static.roland.com/products/bridge_cast/images/bridge_cast_hero.jpg'
const video = `https://static.roland.com/products/bridge_cast/media/bridge_cast_hero.mp4`

const Carousel = () => {
  return (
    <Flex
      w={'100%'}
      // minH={{base: '85vh', md: '60vh'}}
      h={'80vh'}
      position={'relative'}
      align={'center'}
    >
      <video className='videoTag' style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <VStack
        w={'full'}
        position={'absolute'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
      // bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'center'} justify='center'>
          <Text
            color={'white'}
            fontWeight={600}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '7xl', md: '4xl', lg: '8xl' })}>
            BRIDGE CAST
          </Text>
          <Text
            color={'white'}
            textTransform={'uppercase'}
            fontWeight={500}
            lineHeight={1.3}

            fontSize={useBreakpointValue({ base: 'lg', md: '4xl' })}>

            dual bus gaming mixer
          </Text>
          <Stack direction={'row'}>

            <Button
              className='pulse'
              backgroundColor='#ff5a00'
              fontWeight='500'
              color='#fff'
              _hover={{
                backgroundColor: '#e14344'
              }}
            >
              Show me more
            </Button>


          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}

export default Carousel