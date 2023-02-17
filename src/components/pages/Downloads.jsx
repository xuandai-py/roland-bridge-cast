import { Divider, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { PageContent, PageContentWrapper } from '../SuggestItems'

import { useArticle } from '../../helper'
const host = import.meta.env.VITE_HOST
const baseURL = `${host}/downloads`

const Downloads = () => {

    const [article] = useArticle(baseURL)
    return (

        <PageContentWrapper>
            <PageContent style={{ backgroundColor: '#f1f1f1' }}>
                <Flex direction={'column'} gap={5} py={7}>

                    <Heading fontSize='4xl' textTransform='uppercase' fontWeight={100}>downloads</Heading>
                    <Heading fontSize='x-small' textTransform='uppercase' fontWeight={100}>updates & drivers</Heading>
                </Flex>

                <Divider color={'#ccc'} />

                <Flex direction={'column'} textAlign='left' m={2} gap={2}>

                    <Heading fontSize='2xl' textTransform='uppercase' fontWeight={100}>updates & drivers</Heading>

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


};

export default Downloads