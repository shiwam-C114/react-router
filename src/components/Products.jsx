import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,

  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'


function Products() {
    const [data, setData] = useState([])
    function getData() {
        fetch('http://localhost:8080/products').then(r=>r.json()).then(setData)
    }
    useEffect(() => {
      getData()
    
    }, [])
    
  return (
    <div>

            <TableContainer>
            <Table colorScheme="red" variant='simple'>
              <TableCaption>Product Listing page</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th isNumeric>Price</Th>
                  <Th >More Details</Th>
                </Tr>
              </Thead>
        {data?.map((item)=>(

              <Tbody>
                <Tr>
                  <Td>{item.name}</Td>
                  <Td isNumeric> Rs. {item.price}</Td>
                  
                  <Td ><Link to={`/products/${item.id}`} color={"teal.400"}> More details</Link></Td>
                </Tr>
                
              </Tbody>
              ))}
             
            </Table>
          </TableContainer>
        
    </div>
  )
}

export default Products