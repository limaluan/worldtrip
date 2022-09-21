import { Box, VStack, Text } from "@chakra-ui/react";

interface ICityProps {
  cityName: string;
  countryName: string;
  countryImg: string;
  thumbnail: string;
}

export function City({
  cityName,
  countryName,
  countryImg,
  thumbnail,
}: ICityProps) {
  return (
    <VStack
      width="256px"
      height="279px"
      border="1px solid rgba(255, 186, 8, 0.5)"
      borderRadius="0.5em"
      position="relative"
    >
      <Box
        width="100%"
        height="174px"
        backgroundImage={`url(${thumbnail})`}
        backgroundSize="cover"
        borderRadius="0.5em 0.5em 0 0"
      />
      <VStack
        bgColor="light.white"
        width="100%"
        height="40%"
        borderRadius="0 0 0.5rem 0.5rem"
        align="start"
        justify="center"
        padding="10px 20px"
      >
        <Text>{cityName}</Text>
        <Text color="dark.info">{countryName}</Text>
        <Box
          width="30px"
          height="30px"
          backgroundImage={`url(${countryImg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          borderRadius="full"
          position="absolute"
          right="20px"
        />
      </VStack>
    </VStack>
  );
}
