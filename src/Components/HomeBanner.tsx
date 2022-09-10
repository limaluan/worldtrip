import { Flex, Heading, Hide, Box, Text, Image } from "@chakra-ui/react";

export function HomeBanner() {
  return (
    <Flex
      bgImage="./home_background.svg"
      backgroundSize="cover"
      width="100%"
      height={["200px", "200px", "360px"]}
      justifyContent="space-around"
      align="center"
      padding="16px"
    >
      <Box width="450px">
        <Heading
          fontSize={["20px", "20px", "36px"]}
          lineHeight={["30px", "30px", "54px"]}
          pb="20px"
          color="light.white"
          as="h2"
          fontWeight="medium"
        >
          5 Continentes, infinitas possibilidades.
        </Heading>
        <Text fontSize={["14px", "14px", "20px"]} color="light.info">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      <Hide breakpoint="(max-width: 1000px)">
        <Image
          transform="auto"
          translateY="65px"
          src="./airplane.svg"
          alt="Avião"
        />
      </Hide>
    </Flex>
  );
}
