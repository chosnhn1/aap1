import { Box, Image, Heading, Text, HStack, VStack, IconButton, useDialog, DialogRootProvider, Input, Button } from '@chakra-ui/react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from "react-icons/md";
import React, { useState } from 'react'
import { useColorModeValue } from './ui/color-mode'
import { useProductStore } from '../store/product';
import { Toaster, toaster } from '../components/ui/toaster';
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"

const ProductCard = ({product}) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const dialog = useDialog()

  const { deleteProduct, updateProduct } = useProductStore();

  const [updatedProduct, setUpdatedProduct] = useState({...product});

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
  };
  
  const handleUpdateProduct = async (pid) => {
    const {success, message} = await updateProduct(pid, updatedProduct);
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
      dialog.setOpen(false);
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
      <DialogRootProvider value={dialog}>
      <Image src={product.image} alt={product.name} h={48} w="full" objectFit={"cover"} />
        <Box>
          <Heading as={"h3"} fontWeight={"bold"} mb={2}>
            {product.name}
          </Heading>
          <Text fontSize={"x1"} mb={4}>
            ${product.price}
          </Text>
          <HStack padding={2}>
            <DialogTrigger asChild>
              <IconButton colorScheme={"blue"}><FaRegEdit /></IconButton>
            </DialogTrigger>
            <IconButton colorScheme={"red"} onClick={() => {handleDeleteProduct(product._id)}}><MdDeleteOutline /></IconButton>
          </HStack>
        </Box>

        <DialogContent>
          <DialogHeader>Update</DialogHeader>
          <DialogBody>
            <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
              <VStack borderSpacing={4}>
                <Input placeholder="Product name" name="name" value={updatedProduct.name}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value})}
                  ></Input>
                <Input placeholder="Price" name="price" value={updatedProduct.price}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value})}
                  ></Input>
                <Input placeholder="Image URL" name="image" value={updatedProduct.image}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value})}
                ></Input>
                <Button colorScheme="blue" onClick={() => {handleUpdateProduct(product._id)}} w="full">
                  Update Product
                </Button>
              </VStack>
            </Box>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button>Cancel</Button>
            </DialogActionTrigger>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
        <Toaster />
      </DialogRootProvider>
    </Box>
  )
}

export default ProductCard