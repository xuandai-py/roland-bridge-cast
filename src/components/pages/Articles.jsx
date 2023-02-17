import { PageContent, PageContentWrapper, SectionArticles } from '../SuggestItems'
import { Container, Divider, Heading } from '@chakra-ui/react'

import { useArticle } from '../../helper'
const host = import.meta.env.VITE_HOST
const baseURL = `${host}/articles/?populate=*`


const Articles = () => {

    const [article] = useArticle(baseURL)
    console.log(article)
    return (

        <PageContentWrapper>
            <PageContent style={{ textAlign: 'left' }}>
                {article && article.data?.map(item => (
                    <>
                        <SectionArticles
                            thumbnail={item.attributes.thumbnail.data.attributes.url}
                            heading={item.attributes.heading}
                            text={item.attributes.overview}
                            href={item.attributes.href}
                        />
                        <Divider color="#ccc" />
                    </>
                ))
                }
            </PageContent>
        </PageContentWrapper>

    )
}

export default Articles