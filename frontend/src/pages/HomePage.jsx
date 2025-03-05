import { Container, SimpleGrid, VStack, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useProductStore } from "../store/product"
import ProductCard from "../components/ProductCard"

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts]);
  console.log(products)

  return (
    <Container>
      <VStack borderSpacing={2}>
        <Text>Current Products</Text>
        <SimpleGrid columns={{
          base: 1,
          md: 2,
          lg: 3}}
          padding={4}
          borderSpacing={2}
          w={"full"}
          >
            {products.map((product) => (<ProductCard
            key={product._id} product={product}>


            </ProductCard>))}



        </SimpleGrid>

      </VStack>
      {products.length === 0 && <Text>
        No products found.
      </Text>}
    </Container>
  )
}


export default HomePage