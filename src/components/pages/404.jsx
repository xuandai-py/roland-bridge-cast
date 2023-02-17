import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button,
    Link
} from '@chakra-ui/react'
import '../style.scss'

import { Link as ReactRouterDomLink } from 'react-router-dom';

import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <Container>
            <Heading as="h1">Not found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <Link
                    href="/"
                    _hover={{
                        textDecoration: 'none',

                    }}
                >
                    <Button
                        className='pulse'
                        backgroundColor='#ff5a00'
                        fontWeight='500'
                        color='#fff'
                        _hover={{
                            backgroundColor: '#e14344'
                        }}
                    >
                        Back to homepage
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

export default NotFound