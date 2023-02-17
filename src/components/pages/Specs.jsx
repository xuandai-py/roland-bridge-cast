
import { Box, Flex, Heading, Text, SimpleGrid, Button, Link } from '@chakra-ui/react'
import { ContentItemWrapper, PageContent, PageContentWrapper } from '../SuggestItems'

import { useArticle } from '../../helper'
const host = import.meta.env.VITE_HOST
const baseURL = `${host}/specifications/?populate[specParent][populate]=*`



const Specs = () => {

    const [article] = useArticle(baseURL)

    return (

        <PageContentWrapper>
            <PageContent >
                {article && article.data[0].attributes && article.data[0].attributes.specParent?.map(item => (
                    <>
                        <Heading textTransform={'uppercase'} my={3} px={3} textAlign='left' size={'md'}>{item.heading}</Heading>
                        {item.specChild.map(childItem => (

                            <Box textAlign={'left'} borderTop={'1px solid #ccc'} p={3}>
                                <SimpleGrid columns={2}>
                                    <Heading size='md' fontWeight='100'>{childItem.label}</Heading>
                                    <Flex direction={'column'} whiteSpace={'pre-line'} verticalAlign={'bottom'}>{childItem.data}</Flex>
                                </SimpleGrid>
                            </Box>
                        ))}
                    </>
                ))}
            </PageContent>
        </PageContentWrapper>

    )
}

export default Specs