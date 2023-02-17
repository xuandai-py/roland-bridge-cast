import { MidNavTop, MidNavMobile, MidNavDesktop } from './components/Navigation'
import './App.css'
import Carousel from './components/layout/Carousel'
import Content from './components/layout/Content'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import BackToHome from './components/BackToHome'
import { Box } from '@chakra-ui/react'
import ScrollToTop from './helper'
function App() {

  return (
    <div className="App" >
        <Header />
        <Carousel />
        {/* // 656 - <768px */}
        <MidNavMobile />
        <Box display={{ base: 'none', md: 'block' }}>
          <MidNavTop />
          <MidNavDesktop />
        </Box>
        <ScrollToTop />

        <Content h='80vh' />
        <BackToHome />
        <Footer />

      {/* ------------------------- */}

    </div >
  )
}

export default App
