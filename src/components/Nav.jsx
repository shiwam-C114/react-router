import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Flex m={"10px"} p="10px" color="red.400" justifyContent={"space-evenly"} bg={"teal"}>
            <Link to="/">
            <Button>Home</Button>
            </Link>
            <Link to="/products">
            <Button>Products</Button>
            </Link>
        </Flex>
    </div>
  )
}

export default Nav