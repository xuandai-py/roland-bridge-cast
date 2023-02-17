import React, { useState, useEffect } from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import {
    Box,
    Flex,
    SimpleGrid,
    Link,
    Container,

    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
    Center,
    Icon,
    Collapse,
    Text,
    extendTheme,
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Heading
} from '@chakra-ui/react';
import './style.scss'
import { BiUserCircle, BiMenu, BiSearch, BiAlarm } from 'react-icons/bi'
import { GiMusicalKeyboard } from 'react-icons/gi'
import NAV from '../nav.json'
import { capitalizeFirstLetter } from '../helper';
import { SectionStyle } from './SuggestItems';


const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            px={2}
            backgroundColor='#262626'
            align='center'
        // h={'fit-content'}
        >
            <Stack direction={'row'} align={'center'}
                px={6}
                m='auto 0'
                borderTop={'1px solid #fff'}
                h={'100%'}
                _notFirst={{
                }}
            >
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: '#ff5a00' }}
                        textDecoration={'none'}
                        fontWeight={500}>
                        {label}
                    </Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'#ff5a00'} w={5} h={5} as={GiMusicalKeyboard} />
                </Flex>
            </Stack>
        </Link>
    );
};

const DesktopNav = () => {
    const linkColor = useColorModeValue('#666', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={{ base: 4, lg: 7 }} w={'100%'} justify={'center'} align={'center'} >
            {NAV.top.map((navItem) => (
                <Box key={navItem.label} >
                    <Popover trigger={'hover'} styleConfig={{width: '100% !important'}} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                // p={2}
                                href={navItem.href ?? '#'}
                                fontSize={{ base: 'sm', lg: 'md' }}
                                textTransform={'uppercase'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: '#ccc'
                                }}
                                _focus={{
                                    textDecoration: 'none',
                                    color: '#ccc'

                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={'none'}
                                boxShadow={'xl'}
                                w={'100%'}
                                top={5}
                                backgroundColor='#262626'
                                color={'#ccc'}
                                p={4}
                                rounded={'none'}
                                textDecoration={'none'}
                                minW={'sm'}
                            // border={'1px solid pink'}
                            >
                                {/* <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack> */}
                                <Flex justify={'center'} gap={6}>
                                    <SimpleGrid columns={2}  >
                                        {navItem.children.map((child) => (
                                            <DesktopSubNav key={child.label} {...child} />
                                        ))}
                                    </SimpleGrid>
                                    <SimpleGrid columns={{ base: 1, lg: 2 }} p={4} spacing={6} >
                                        <MiniSectionInNav
                                            heading='FP-X Series'
                                            text='Matching on-the-move designs with supreme playability and heavyweight features, the FP-X series represents a fresh generation of portable pianos.'
                                            thumbnail='https://static.roland.com/assets/promos/png/menu_fp-x_series.png'
                                            href='https://www.roland.com/us/promos/fp_series/'
                                        />

                                        <MiniSectionInNav
                                            heading='VERSELAB MV-1'
                                            text='All-in-one song production with authentic Roland sounds and songwriting tools to assist modern music makers at any level.'
                                            thumbnail='https://static.roland.com/assets/promos/png/menu_verselab_mv-1.png'
                                            href='https://www.roland.com/us/products/verselab_mv-1/'
                                        />


                                    </SimpleGrid>
                                </Flex>

                            </PopoverContent>
                        )}

                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};
export const MiniSectionInNav = (props) => (
    <Link href={props.href} isExternal>
        <Flex direction='column' maxW={'48'}>
            <Image src={props.thumbnail} />
            <Flex
                direction='column'
            // alignItems={'center'}
            >
                <Heading size={'sm'} fontWeight={600}>{props.heading}</Heading>
                <Text fontSize={'sm'}>{props.text}</Text>
            </Flex>
        </Flex>
    </Link>
)

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle, onOpen } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle} >
            <Flex
                py={4}
                as={Link}
                href={href ?? '#'}
                justify={'center'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                    color: '#ccc'
                }}
                _focus={{
                    backgroundColor: '#262626',
                    color: '#ccc'

                }}
            >
                <Text
                    fontWeight={400}
                    textTransform='uppercase'
                >
                    {label}
                </Text>
                {/* {children && (
                    <Icon
                        as={BiSearch}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )} */}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0', backgroundColor: '#262626' }}>
                <SimpleGrid
                    direction={'row'}
                    columns={2}
                    align={'center'}
                    fontSize={'sm'}
                    spacing={'1px'}
                >
                    {children &&
                        children.map((child) => (

                            <Link key={child.label} py={2} href={child.href} bgColor={'#151515'}>
                                {child.label}
                            </Link>
                        ))}
                </SimpleGrid>
            </Collapse>
        </Stack>
    );
};

const MobileNav = ({ top }) => {
    return (
        <Stack
            backgroundColor='#000'
            color={'#666'}
            display={{ md: 'none' }}>

            {
                top ? NAV.top.map((navItem) => (
                    <MobileNavItem key={navItem.label} {...navItem} />
                )) : NAV.topuser.map((navItem) => (
                    <MobileNavItem key={navItem.label} {...navItem} />
                ))

            }
        </Stack>
    );
};




const MidNavMobile = () => {

    return (
        <Flex direction='column' display={{ base: 'flex', md: 'none' }}>
            <Heading textAlign={'left'} size='md' p={4} textTransform={'uppercase'}>bridge cast</Heading>
            <SimpleGrid columns='2'>
                {NAV.mid.map((navItem) => (
                    <Box key={navItem.label} border={'1px solid #ccc'} py={3}>
                        <Link
                            as={ReactRouterDomLink}
                            to={navItem.path}
                            p={2}
                            fontSize={'sm'}
                            fontWeight={500}
                            color={'#333333'}
                            _hover={{
                                textDecoration: 'none',
                                color: '#000',
                                fontWeight: 600
                            }}
                            _focus={{
                                textDecoration: 'none',
                                color: '#000',
                                fontWeight: 600
                            }}>
                            {capitalizeFirstLetter(navItem.label)}
                        </Link>
                    </Box>
                ))}
            </SimpleGrid>
        </Flex>
    )
}

const MidNavDesktop = () => {

    const [visible, setVisible] = useState(false)

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            let windowH = window.scrollY
            let windowScreenWidth = window.screen.width
            if ((windowScreenWidth > 768 && windowH < 560)) return setVisible(true)
            setVisible(false)
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            }
        }
    }, [])

    return (
        <Box
            zIndex='1000'
            w='100%' borderBottom='1px solid #ccc'
            display={visible ? 'block' : 'none'}
            bgColor='#fff'
        >
            <RowMidNav />
        </Box>
    )
}

const RowMidNav = () => (
    <Container maxW={'5xl'} p={0}>
        <Stack
            className='midnav'
            direction={'row'}
            spacing={4}
            // m={'0 auto'}
            p={3}
            // maxW={{ xl: '980px' }}
            // w={{ base: '100%', md: '77%' }}
            justify={'space-between'}
            align={'center'}
        >
            <Heading size={{ base: 'md', md: 'lg' }} >Bridge cast</Heading>
            <Flex
                // m={'0 auto !important'}
                gap={2}
            >
                {NAV.mid.map((navItem) => (
                    <Box key={navItem.label}>
                        <Link
                            as={ReactRouterDomLink}
                            to={navItem.path}
                            p={2}
                            fontWeight={500}
                            color={'#333333'}
                            _hover={{
                                textDecoration: 'none',
                                color: '#000',
                                fontWeight: 600
                            }}

                            _focus={{
                                textDecoration: 'none',
                                color: '#000',
                                fontWeight: 600
                            }}>
                            {capitalizeFirstLetter(navItem.label)}
                        </Link>
                    </Box>
                ))}
            </Flex>
        </Stack>
    </Container>
)

const MidNavTop = () => {

    const [visible, setVisible] = useState(false)

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            let windowH = window.scrollY
            let windowScreenWidth = window.screen.width
            if ((windowScreenWidth > 768 && windowH > 601)) return setVisible(true)
            setVisible(false)
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            }
        }
    }, [])

    return (
        <Box
            zIndex='1000'
            w='100%' borderBottom='1px solid #ccc'
            display={visible ? 'block' : 'none'}
            top={visible ? 0 : ''}
            position={visible ? 'fixed' : 'relative'}
            bgColor='#fff'
        >
            <RowMidNav />


        </Box>
    )
}

export {
    DesktopNav,
    DesktopSubNav,
    MobileNavItem,
    MobileNav,
    MidNavTop,
    MidNavDesktop,
    MidNavMobile
}