import { Box, Badge, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [data, setData] = useState({});
  const { id } = useParams();
  function getPage() {
    fetch(`http://localhost:8080/products/${id}`)
      .then((r) => r.json())
      .then(setData).catch(console.log);
  }
  useEffect(() => {
    getPage();
  }, []);

  return (
    <div>
      {
        <Flex justifyContent={"space-around"} >
            {
                data.id != null
                ?
                <>
                <Badge fontSize="6xl" color={"blue.400"} >NAME: {data.name}</Badge>
                <Badge fontSize="6xl"  >PRICE: ₹ {data.price}</Badge>
                </>
                :
                <Badge fontSize="6xl" color={"red.400"}> page not found</Badge>
            }
        </Flex>
      }
    </div>
  );
}

export default ProductDetails;
