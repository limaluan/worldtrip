import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      width="100%"
      height={["50px", "50px", "50px", "100px"]}
    >
      <Image src="logo.svg" alt="WorldTrip" />
    </Flex>
  );
}
