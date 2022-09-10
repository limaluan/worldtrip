import { Flex } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      width="100%"
      height={["50px", "50px", "50px", "100px"]}
    >
      <img src="logo.svg" alt="WorldTrip" />
    </Flex>
  );
}
