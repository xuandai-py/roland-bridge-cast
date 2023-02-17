import {
  Avatar, Box, Button, Drawer, Link,
  DrawerContent, Flex, Image, Menu,
  MenuButton, MenuItem, MenuList, Slide, useDisclosure
} from '@chakra-ui/react';
import { BiMenu, BiUserCircle } from 'react-icons/bi';

import { capitalizeFirstLetter } from '../../helper';
import NAV from '../../nav.json';
import { DesktopNav, MobileNav } from '../Navigation';

const Header = () => {

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const { onToggle: onToggleUserNav, onClose: onCloseUserNav, isOpen: isOpenUserNav, onOpen: onOpenUserNav } = useDisclosure();
  const { onToggle: onToggleNav, onClose: onCloseNav, isOpen: isOpenNav, onOpen: onOpenNav } = useDisclosure();
  return (
    <>
      <Box maxH={'4.5rem'} bgColor={'#000'} pos='relative' zIndex='10'>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Link href='/'>
            <Box bgColor={'#ff5a00'} minH={'4.5rem'} px={3} py={1}>
              <Image
                maxW='150px'
                objectFit='contain'
                src='Roland.png'
                alt='Roland.com'
              />
            </Box>
          </Link>

          <Flex flex={{ base: 1 }} mx={1} display={{ base: 'none', md: 'flex' }} color='#666' justify={{ base: 'center', md: 'start' }}>
            <DesktopNav />
          </Flex>

          <Flex alignItems={'center'} px={{ base: 2, md: 10 }} >
            {/* <Stack direction={'row'} spacing={1}  > */}


            <Box display={{ base: 'none', md: 'block' }}>
              <Menu >
                <MenuButton
                  as={Button}

                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar

                    size={'md'}
                    icon={<BiUserCircle fontSize='1.8rem' />}
                    backgroundColor='#000'
                    w='auto'
                  />
                </MenuButton>
                <MenuList bgColor={'#000'} p={0} border={'1px solid #1f1f1f'}>
                  {NAV.topuser.map((navItem) => (
                    <MenuItem
                      bgColor={'#000'}
                      borderRadius={0}
                      color={'#666'}
                      p={2}
                      _hover={{
                        textDecoration: 'none',
                        color: '#ccc',
                        borderBlock: '1px solid #1f1f1f'
                      }}
                      _focus={{
                        textDecoration: 'none',
                        color: '#ccc'

                      }}>
                      {capitalizeFirstLetter(navItem.label)}
                    </MenuItem>
                  ))}

                </MenuList>
              </Menu>
            </Box>

            <Flex
              // ml={{ base: -2 }}
              mr={4}
              display={{ base: 'flex', md: 'none' }}
              gap={3}
            >
              <Avatar
                onClick={onToggleUserNav}
                size={'md'}
                icon={<BiUserCircle fontSize='1.8rem' />}
                backgroundColor='#000'
                w='auto'
              />
              <Avatar
                onClick={onToggleNav}
                size={'md'}
                icon={<BiMenu fontSize='1.8rem' />}
                backgroundColor='#000'
                w='auto'
              />
            </Flex>
            {/* </Stack> */}
          </Flex>
        </Flex>
      </Box>

      {/* <Box>
        <Slide in={isOpen} style={{ zIndex: '100', backgroundColor: 'lightgray', top: isOpenUserNav ? '70px' : '0', position: onOpenUserNav ? 'absolute' : '' }} direction='top' animateOpacity>
          <MobileNav top={false}/>
        </Slide>
      </Box> */}
      <Box>
        <Drawer
          isOpen={isOpenNav}
          onClose={onCloseNav}
          placement="top"
        >
          <DrawerContent >
            <Slide in={isOpenNav} onClose={onCloseNav} style={{ zIndex: '100', top: isOpenNav ? '70px' : '0' }} direction='top' animateOpacity>
              <MobileNav top={true} />
            </Slide>
          </DrawerContent>
        </Drawer>

        <Drawer
          isOpen={isOpenUserNav}
          onClose={onCloseUserNav}
          placement="top"
        >
          <DrawerContent>
            <Slide in={isOpenUserNav} onClose={onCloseUserNav} style={{ zIndex: '100', backgroundColor: 'lightgray', top: isOpenUserNav ? '70px' : '0' }} direction='top' animateOpacity>
              <MobileNav top={false} />
            </Slide>
          </DrawerContent>
        </Drawer>


      </Box>

    </>
  )
}

export default Header