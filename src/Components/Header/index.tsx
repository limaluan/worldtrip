import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  return (
    <Flex
      as="header"
      background="light.heading"
      justify="center"
      align="center"
      width="100%"
      height={["50px", "50px", "50px", "100px"]}
    >
      {router.pathname !== "/" && (
        <ChevronLeftIcon
          fontSize="30px"
          position="absolute"
          left="10vw"
          cursor="pointer"
          onClick={() => router.push("/")}
        />
      )}

      <Image
        src="logo.svg"
        alt="WorldTrip"
        onClick={() => router.push("/")}
        cursor="pointer"
      />
    </Flex>
  );
}
