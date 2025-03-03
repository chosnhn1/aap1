import { Container, VStack, Heading, Box, Input, Button } from "@chakra-ui/react"
import { useState } from "react"
import { useColorModeValue } from "../components/ui/color-mode"
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const {createProduct} = useProductStore()
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log("Success:", success);
    console.log("Message:", message);
  };

  return (
    <Container maxH={"container.sm"}>
      <VStack borderSpacing={8}>
        <Heading></Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack borderSpacing={4}>
            <Input placeholder="Product name" name="name" value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
              ></Input>
            <Input placeholder="Price" name="price" value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
              ></Input>
            <Input placeholder="Image URL" name="image" value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
            ></Input>
            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>

          </VStack>

        </Box>
      </VStack>

      
    </Container>
  )
}

export default CreatePage