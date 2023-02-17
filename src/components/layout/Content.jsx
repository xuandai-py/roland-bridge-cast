import { Box } from '@chakra-ui/react'
import React from 'react'
import Features from '../pages/Features'
import Specs from '../pages/Specs'
import {Outlet} from 'react-router-dom'
const Content = () => {
    return (
        <>
            <Box minH={{ md: '50px' }}>

            </Box>
           
            <Outlet />
        </>
    )
}

export default Content