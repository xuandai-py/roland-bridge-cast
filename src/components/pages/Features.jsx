
import { Box, Flex, Heading, Text, Image, Button, Container } from '@chakra-ui/react'
import ReactPlayer from 'react-player'
import { AiFillPlayCircle } from 'react-icons/ai'

// import data from '../../content.json'
// const path = data.features

import { ContentItemWrapper, AnimateSection, SectionStyle } from '../SuggestItems'

import { useArticle } from '../../helper'
const host = import.meta.env.VITE_HOST
const baseURL = `${host}/features?populate[thumbnail][fields][1]=url&populate[featChild][populate]=*`

const Features = () => {
  const [article] = useArticle(baseURL)
  console.log(article)
  return (
    <>
      {article && article.data?.map((item, index) => (
        <SectionType type={item.attributes.displayType} item={item} />
      ))}
    </>
  )
}


const SectionType = (props) => {
  switch (props.type) {
    case 'overview':
      return (
        <Overview {...props} />
      )
    case 'setup':
      return (
        <Steps {...props} />
      )

    case 'normal':
      return (
        <Section {...props} />
      )
    default:
      return (
        <Section {...props} />
      )
  }
}
// http://localhost:1337/api/features?populate[types][populate]&[featChild][populate]=*
const Section = (props) => (
  <Flex
    direction={'column'}
  >
    <Box display={props.item.attributes.imagePosition !== 'top' && 'none'}>
      <Image src={props.item.attributes.thumbnail.data[0].attributes.url} />
    </Box>
 
    <ContentItemWrapper>
      <Container
        maxW={{ base: 'lg', md: 'container.lg' }}
      >
        <Flex
          direction='column'
          py={'20px'}

          gap={4}
          alignItems={'center'}
        >
          <Heading mb={{ base: 1, md: 3 }} size={{ base: 'xl', lg: '2xl' }}>{props.item.attributes.heading}</Heading>
          <Text px={4} lineHeight={'7'} fontSize={{ md: 'md', lg: 'lg' }}>{props.item.attributes.overview}</Text>
        </Flex>
      </Container>
    </ContentItemWrapper>

    <Box display={props.item.attributes.imagePosition !== 'bottom' && 'none'}>
      <Image src={props.item.attributes.thumbnail.data[0]?.attributes.url} />
    </Box>

  </Flex >
)

const Steps = () => { }



const Overview = (props) => (
  <Flex
    direction={'column'}
  >
    <Container maxW={'container.xl'}>

      <ContentItemWrapper>
        <Flex
          direction='column'
          p={'60px 30px'}
          gap={6}
        >
          <AnimateSection  >
            <Heading mb={{ base: 3, md: 10, lg: 14 }} size={{ base: 'xl', lg: '2xl' }}>{props.item.attributes.heading}</Heading>
          </AnimateSection>
          <Image src={props.item.attributes.thumbnail} />
          <Text fontSize={{ md: 'lg', lg: 'xl' }} lineHeight={7}>{props.item.attributes.overview}</Text>
        </Flex>
      </ContentItemWrapper>
    </Container>

    {props.item.attributes.featChild && props.item.attributes.featChild.map((item, index) => (
      <>
        <Box m={'0 auto'} >
          <video
            src={item.video.data.attributes.url}
            width={1000}
            height={562}
            poster={item.thumbnail.data[0]?.attributes.formats.large.url}
            controls
            muted

          />


        </Box>
        <Container maxW={'container.md'}>

          <ContentItemWrapper>
            <Flex
              direction='column'
              // p={'30px'}
              gap={4}
              alignItems={'center'}
            >
              <Heading mb={{ base: 1, md: 3 }} size={{ base: 'lg', lg: 'xl' }}>{item.heading}</Heading>
              <Text fontSize={{ md: 'md', lg: 'lg' }} lineHeight={7}>{item.text}gfag</Text>
              <Button
                size='md' py={8} bgColor='#fff' borderRadius={0} borderY={'1px solid #e0e0e0'}
                color={'#949999'} fontWeight={500} w='fit-content'
                leftIcon={<AiFillPlayCircle size={40} />}
                _hover={{
                  bg: '#fff'
                }}

              >Watch the Video</Button>
            </Flex>
          </ContentItemWrapper>
        </Container>
      </>
    ))}
  </Flex >
)


// const Elevate = () => {
//   const ele = path.elevate
//   return (
//     <SectionStyle
//       heading={ele.heading}
//       thumbnail={ele.thumbnail}
//       text={ele.overview_text}
//       styleInfo={{
//         backgroundColor: '#7e929b'
//       }}
//     />
//   )
// }

// const Personal = () => {
//   const per = path.personal
//   return (
//     <>
//       <SectionStyle heading={per.heading} thumbnail={per.thumbnail} text={per.overview_text} />
//       <SectionStyle heading={per.sound.heading} thumbnail={per.sound.thumbnail} text={per.sound.text} />
//       <SectionStyle heading={per.vocal.heading} thumbnail={per.vocal.thumbnail} text={per.vocal.text} />
//     </>
//   )


// }


// const Audio = () => {
//   const audio = path.audio
//   return (
//     <SectionStyle
//       heading={audio.heading} thumbnail={audio.thumbnail} text={audio.overview_text}

//     />
//   )
// }

// const Brand = () => {
//   const brand = path.brand
//   return (
//     <SectionStyle
//       heading={brand.heading} thumbnail={brand.thumbnail} text={brand.overview_text}

//     />
//   )
// }

// const Command = () => {
//   const command = path.command
//   return (

//     <SectionStyle show={false}
//       heading={command.heading} thumbnail={command.thumbnail} text={command.overview_text}

//     />
//   )
// }

// const App = () => {
//   const app = path.app
//   return (
//     <SectionStyle
//       heading={app.heading} thumbnail={app.thumbnail} text={app.overview_text}

//     />
//   )
// }

// const Curated = () => {
//   const curated = path.curated
//   return (
//     <SectionStyle
//       heading={curated.heading} thumbnail={curated.thumbnail} text={curated.overview_text}

//     />
//   )
// }






export default Features