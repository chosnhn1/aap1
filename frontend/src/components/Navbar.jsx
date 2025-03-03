import { Container, Flex, Text, HStack, Button } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode"
import { Link } from "react-router-dom"
import { CiSquarePlus } from "react-icons/ci"
import { VscColorMode } from "react-icons/vsc"

const Navbar = () => {
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();
  
  return (
    <Container maxW={"1280px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
      >
        <Text
          fontSize={{
            base: "22",
            sm: "28"
          }}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"to-r"}
          gradientFrom={"green.300"}
          gradientTo={"green.800"}
          bgClip={"text"}
        >
          ProductMGMT
        </Text>
        <HStack borderSpacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            { colorMode === "light" ? "L" : "D"  }
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar