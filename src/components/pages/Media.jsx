import { Divider, Flex, Heading, Icon, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { BsPlayCircle } from 'react-icons/bs'
import { PageContent, PageContentWrapper } from '../SuggestItems'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style.scss'
import Slider from 'react-slick'
const host = import.meta.env.VITE_HOST
const baseURL = `${host}/medias/?populate=*`
import { useArticle } from '../../helper'


const Media = () => {

    const [article] = useArticle(baseURL)
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
       dotsClass: `slick-dots dots`
    };


    return (
        <PageContentWrapper>
            <PageContent style={{display: useBreakpointValue({base: 'none', md: 'block'})}}>
                <Slider {...settings}>
                    {
                        article && article.data[0]?.attributes && article.data[0].attributes.sliders.data?.map((item, index) => (
                            <>
                                <Image
                                    src={item.attributes.url}
                                />
                                <Divider orientation='vertical'/>
                            </>
                        ))
                    }
                </Slider>
            </PageContent>
            <PageContent style={{display: useBreakpointValue({base: 'block', md: 'none'})}}>
                {
                    article && article.data[0]?.attributes && article.data[0].attributes.sliders.data?.map((item, index) => (
                        <Image
                            src={item.attributes.url}
                        />
                    ))
                }
            </PageContent>
            <Divider />
            <PageContent>
                <Heading fontSize='lg' textTransform='uppercase' as='h5' fontWeight={100}>video library</Heading>
                <Flex
                    bgColor={'#e5e5e5'}
                    gap={5}
                    p={5}
                    align={'center'}
                >
                    <Icon as={BsPlayCircle} boxSize={7} />
                    <Text fontSize='sm' fontWeight='100'>BRIDGE CAST Gaming Audio Mixer</Text>
                </Flex>
            </PageContent >

        </PageContentWrapper>

    )
}
export default Media