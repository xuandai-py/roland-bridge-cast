import { motion } from 'framer-motion'
import { Container, Flex, Link, Heading, Text, chakra, shouldForwardProp, Box, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'

import styled from '@emotion/styled'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})


export const AnimateSection = ({ delay = 0, type, children }) => {
    switch (type) {
        case 'heading':
            return <StyledDiv
                visible={{ opacity: 1, scale: 4, transition: { duration: 1 } }}
                hidden={{ opacity: 0, scale: 0 }}
                mb={6}
            >
                {children}
            </StyledDiv>
        default:
            return <StyledDiv
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay }}
                mb={6}
            >

                {children}
            </StyledDiv>
    }
}


export const SectionStyle = ({ type, heading, thumbnail, text, show = true }, props) => {
    switch (type) {
        case 'imageFirst':
            return <>
                <SimpleGrid columns={2}>
                    {/* TO be continued */}
                </SimpleGrid>
            </>
        default:
            return <>
                <Flex
                    direction={'column'}
                >
                    <SectionImage {...{ show, thumbnail }} />
                    <SectionInfo {...{ props, heading, text }} />
                    <SectionImage thumbnail={thumbnail} show={!show} />

                </Flex >
            </>

    }
}

const SectionImage = ({ show, thumbnail }) => (
    <Box display={show ? 'block' : 'none'} >
        {Array.isArray(thumbnail) && thumbnail.length > 0 ? thumbnail.map((item, index) => (
            < Image src={item} m='0 auto' />
        ))
            : < Image src={thumbnail} m='0 auto' />
        }
    </Box>
)

const SectionInfo = ({ heading, text }, props) => (
    <ContentItemWrapper>
        <Container
            maxW={{ base: 'lg', md: 'container.lg' }}
        >
            <Flex
                direction='column'
                py={'20px'}
                style={props.styleInfo}
                gap={4}
                alignItems={'center'}
            >
                <Heading mb={{ base: 1, md: 3 }} size={{ base: 'xl', lg: '2xl' }}>{heading}</Heading>
                <Text px={4} lineHeight={'7'} fontSize={{ md: 'md', lg: 'lg' }}>{text}</Text>
            </Flex>
        </Container>
    </ContentItemWrapper>
)






export const GridItem = ({ alt, href, thumbnail }) => (
    <Box w={{ base: '100%', md: '50%' }} marginTop={0} margin='0 !important'>
        <LinkBox cursor="pointer">
            <LinkOverlay href={href} target="_blank">
                <Image
                    src={thumbnail}
                    alt={alt}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                    w='100%'
                />
            </LinkOverlay>
        </LinkBox>
    </Box>
)

export const ContentItemWrapper = ({ children, style }) => (
    <Box
        py={{ base: 14, md: 16 }}
        style={style}
    >
        {children}
    </Box >
)

export const SectionArticles = ({ heading, thumbnail, text, href }) => (
    <Flex direction={{base: 'column', md: 'row'}} gap={5}   >
        <Link href={href} isExternal>
            <Box w={{md: '300px'}}>
                <Image src={thumbnail} w={'100%'} />
            </Box>
        </Link>
        <ContentItemWrapper style={{ padding: '0' }}>
            <Flex
                direction='column'
                gap={2}
            >
                <Heading mb={{ base: 1, md: 3 }} fontWeight={100} size={{ base: 'md', lg: 'lg' }}>{heading}</Heading>
                <Text fontSize={{ md: 'md', lg: 'lg' }}>{text}</Text>
            </Flex>
        </ContentItemWrapper>
    </Flex>
)

export const PageContentWrapper = ({ children, style }) => (
    <Box py={10} style={style}>
        {children}
    </Box>
)

export const PageContent = ({ children, style }) => (
    <Container maxW={{ base: 'container.md', md: 'container.lg' }}>
        <Flex
            direction={'column'}
            gap={3}
            py={5}
            style={style}
        >
            {children}
        </Flex >

    </Container>
)



export const SimpleGridLinkWrap = ({ href, children }) => (
    <Link
        _notLast={{
            borderBottom: '1px solid #333'
        }}
        _last={{
            // w: '97vw'
        }}
        _odd={{
            borderRight: '1px solid #333'
        }}
        py={5}
        href={href}
    >
        {children}
    </Link>
)
export const SimpleGridLinkWrapMd = ({ href, children }) => (
    <Link
        align={'center'}
        _notLast={{
            base: {
                borderRight: '1px solid #333'
            },
            md: {
                border: '0'
            }
        }}
        href={href}
        px={5}
    >
        {children}
    </Link>
)

