import { Flex } from "@chakra-ui/react/flex"
import { Text } from "@chakra-ui/react/text"

export default function Home() {
  console.log("teste")
  return (
    <Flex height="100vh" justifyContent="center">
      <Text fontSize={"56px"} fontWeight={"bold"} >Monster Display</Text>
    </Flex>
  );
}
