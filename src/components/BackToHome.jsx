import { Flex, Button, Icon } from '@chakra-ui/react'
import { RiArrowUpSLine } from 'react-icons/ri'

const BackToHome = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  };

  return (
    <Flex
      bgColor={'#e5e5e5'}
      minHeight={'150px'}
      justify={'center'}
      align={'center'}
    >
      <Button
        onClick={scrollToTop}
        p={6}
        boxSize={'60px'}
        borderRadius={'50%'}
        border={'1px solid #fff'}
        bgColor={'#e5e5e5'}
        _hover={{
          bgColor: '#fff',
          color: '#ff5a00'
        }}

      >
        <Icon
          as={RiArrowUpSLine}
          boxSize={'30px'}
          fontWeight={500}
        />
      </Button>
    </Flex>
  )
}

export default BackToHome