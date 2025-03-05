import { Box, Image, Heading, Text, HStack, IconButton } from '@chakra-ui/react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from "react-icons/md";
import React from 'react'
import { useColorModeValue } from './ui/color-mode'
import { useProductStore } from '../store/product';
import { Toaster, toaster } from '../components/ui/toaster';

const ProductCard = ({product}) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const {success, message} = await deleteProduct(pid);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error"
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success"
      });
    }
  }

  return (
    <Box
    shadow={"lg"}
    rounded={"lg"}
    overflow={"hidden"}
    transition={"all 0.3s"}
    _hover={{ transform: "translateV(-5px)", shadow: "x1"}}
    >
      <Image src={product.image} alt={product.name} h={48} w="full" objectFit={"cover"} />
      <Box>
        <Heading as={"h3"} fontWeight={"bold"} mb={2}>
          {product.name}
        </Heading>
        <Text fontSize={"x1"} mb={4}>
          ${product.price}
        </Text>
        <HStack padding={2}>
          <IconButton colorScheme={"blue"}><FaRegEdit /></IconButton>
          <IconButton colorScheme={"red"} onClick={() => {handleDeleteProduct(product._id)}}><MdDeleteOutline /></IconButton>
        </HStack>
      </Box>

      <Toaster />
    </Box>
  )
}

export default ProductCard