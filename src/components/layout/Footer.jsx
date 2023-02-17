import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Icon,
  Tag,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

import { BsChevronRight } from 'react-icons/bs'
import { GridItem, SimpleGridLinkWrap, SimpleGridLinkWrapMd } from '../SuggestItems';

const Logo = () => {
  return (
    <>
      logo
    </>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ src, href }) => {
  return (
    <>
      <Link href={href} isExternal >
        <Image src={src} boxSize='25px' />
      </Link>

    </>
  );
};

const Footer = () => {
  return (
    <Box
      bg={'#141414'}
      color={'#999'}
      px={{ base: 0, md: 4, lg: 6, xl: 10 }}
    >
      <Container
        as={Stack}
        maxW={'6xl'}

        px={0}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <SimpleGrid columns={{ base: 2 }} p={4} display={{ base: 'grid', md: 'block' }} w={{ base: '100%' }} borderY={'1px solid #333'} >
          <SimpleGridLinkWrapMd href={'#'}>
            <Icon as={BsChevronRight} boxSize={3} color={'#ff5a00'} />
            Introduction Page
          </SimpleGridLinkWrapMd>
          <SimpleGridLinkWrapMd href={'#'}>
            <Icon as={BsChevronRight} boxSize={3} color={'#ff5a00'} />
            Roland Stores
          </SimpleGridLinkWrapMd>
        </SimpleGrid>
      </Container>

      <Container
        as={Stack}
        maxW={'100%'}
        py={4}
        px={0}
        direction={{ base: 'column', md: 'row' }}
        spacing={5}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        mb={5}
        borderY={{ base: 0, md: '1px solid #333' }}

      >

        <Stack direction='row' spacing={4}>
          <SocialButton href='#' src='./images/facebook.png' />
          <SocialButton href='#' src='./images/twitter.png' />
          <SocialButton href='#' src='./images/youtube.png' />
          <SocialButton href='#' src='./images/instagram.png' />
          <SocialButton href='#' src='./images/flickr.png' />
          <SocialButton href='#' src='./images/soundcloud.png' />
        </Stack>

        <SimpleGrid display={{ base: 'grid', md: 'none' }} w={{ base: '100%', md: '70%' }} fontSize={{ base: 'md', md: 'x-small' }} borderY={'1px solid #333'} columns={{ base: 2, md: 4 }}>
          <SimpleGridLinkWrap href={'#'}>Blog</SimpleGridLinkWrap>
          <SimpleGridLinkWrap href={'#'}>Contact</SimpleGridLinkWrap>
          <SimpleGridLinkWrap href={'#'}>Blog</SimpleGridLinkWrap>
          <SimpleGridLinkWrap href={'#'}>Contact</SimpleGridLinkWrap>
        </SimpleGrid>

        <SimpleGrid display={{ base: 'none', md: 'flex' }} w={{ base: '100%', md: 'auto' }} fontSize={{ base: 'md', md: 'sm' }}>
          <SimpleGridLinkWrapMd href={'#'}>Blog</SimpleGridLinkWrapMd>
          <SimpleGridLinkWrapMd href={'#'}>Contact</SimpleGridLinkWrapMd>
          <SimpleGridLinkWrapMd href={'#'}>Blog</SimpleGridLinkWrapMd>
          <SimpleGridLinkWrapMd href={'#'}>Blog</SimpleGridLinkWrapMd>
          <SimpleGridLinkWrapMd href={'#'}>Contact</SimpleGridLinkWrapMd>
        </SimpleGrid>
      </Container>

      <Container maxW={'10xl'}>
        <Box as={Stack} py={4} px={0}>
          <SimpleGrid columns={{ base: 2, md: 6 }} pb={4} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Product</ListHeader>
              <Link href={'#'}>Overview</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Features</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'}>Tutorials</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Releases</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#'}>Partners</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Legal</ListHeader>
              <Link href={'#'}>Cookies Policy</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Law Enforcement</Link>
              <Link href={'#'}>Status</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Dribbble</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Legal</ListHeader>
              <Link href={'#'}>Cookies Policy</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Law Enforcement</Link>
              <Link href={'#'}>Status</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Dribbble</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Box >


        <Box
          color={useColorModeValue('gray.700', 'gray.200')}>
          <Stack direction={{ base: 'column', md: 'row' }}>
            <GridItem
              href={'http://www.boss.info/us/'}
              alt={'BOSS'}
              thumbnail={'https://static.roland.com/global/images/promo_boss.jpg'}
            />
            <GridItem
              href={'http://v-moda.com/'}
              alt={'MODA'}
              thumbnail={'https://static.roland.com/global/images/promo_v-moda.png'}
            />
          </Stack>
        </Box>
      </Container>

      <Container
        as={Stack}
        maxW={'6xl'}
        py={14}
        px={0}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
      // align={{ base: 'center', md: 'center' }}

      >
        {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={6} border={'1px solid orange'}>
            <Link href={'#'} w='50%' border={'1px solid red'}>Home</Link>
            <Link href={'#'} w='50%'>About</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact</Link>
          </Stack> */}
        <SimpleGrid display={{ base: 'grid', md: 'none' }} w={{ base: '100%', md: '70%' }} fontSize={{ base: 'md', md: 'x-small' }} borderY={'1px solid #333'} columns={{ base: 2, md: 4 }}>
          <SimpleGridLinkWrap href={'#'}>Blog</SimpleGridLinkWrap>
          <SimpleGridLinkWrap href={'#'}>Contact</SimpleGridLinkWrap>
          <SimpleGridLinkWrap href={'#'}>Blog</SimpleGridLinkWrap>
          <SimpleGridLinkWrap href={'#'}>Blog</SimpleGridLinkWrap>
          <SimpleGridLinkWrap href={'#'}>Contact</SimpleGridLinkWrap>
        </SimpleGrid>

        <SimpleGrid display={{ base: 'none', md: 'flex' }} w={{ base: '100%', md: 'auto' }} fontSize={{ base: 'md', md: 'sm' }}>
          <SimpleGridLinkWrapMd href={'#'}>Blog</SimpleGridLinkWrapMd>
          <SimpleGridLinkWrapMd href={'#'}>Contact</SimpleGridLinkWrapMd>
          <SimpleGridLinkWrapMd href={'#'}>Blog</SimpleGridLinkWrapMd>
          <SimpleGridLinkWrapMd href={'#'}>Blog</SimpleGridLinkWrapMd>
          <SimpleGridLinkWrapMd href={'#'}>Contact</SimpleGridLinkWrapMd>
        </SimpleGrid>
        <Text w={{ md: '30%' }} fontSize={{ base: 'md', md: 'x-small' }}>© 2022 Chakra. All rights reserved</Text>
      </Container>
    </Box>
  );
}



export default Footer