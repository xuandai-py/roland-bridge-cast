import { Box, Divider, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { PageContent, PageContentWrapper } from '../SuggestItems'

import { useArticle } from '../../helper'
const host = import.meta.env.VITE_HOST
const baseURL = `${host}/supports/?populate=*`


const Support = () => {

    const [article] = useArticle(baseURL)
    console.log(article)
    return (

        <PageContentWrapper>
            <PageContent style={{ backgroundColor: '#f1f1f1' }}>
                <Flex direction={'column'} gap={5} py={7}>

                    <Heading fontSize='4xl' textTransform='uppercase' fontWeight={100}>support</Heading>
                    <Heading fontSize='x-small' textTransform='uppercase' fontWeight={100}>owner's manuals</Heading>
                </Flex>

                <Divider color={'#ccc'} />
                <Box bgColor={'#fff'} m={2} p={8} textAlign='left'>
                If you have questions about operating your Roland product, please check our Knowledge Base for answers to the most common questions. You can also contact our Product Support through Roland Backstage. In addition, we have a library of Owner's Manuals and Support Documents that you can download and reference.
                </Box>
                <Divider color={'#ccc'} />

                <Flex direction={'column'} textAlign='left' m={2}>
                    <Heading fontSize='2xl' textTransform='uppercase' fontWeight={100}>owner's manual</Heading>

                    {article && article.data?.map(item => (
                        <Link href={item.attributes.href} isExternal>
                            <Flex
                                bgColor={'#fff'}
                                gap={2}
                                p={4}
                                align={'center'}
                                direction='row'
                            >
                                <Icon as={RiArrowRightSLine} bgColor='#ff5a00' color='#fff' />
                                <Text fontSize='sm' fontWeight='100'>{item.attributes.heading}</Text>
                            </Flex>
                        </Link>
                    ))}
                </Flex>
            </PageContent>
        </PageContentWrapper >

    )
}
export default Support