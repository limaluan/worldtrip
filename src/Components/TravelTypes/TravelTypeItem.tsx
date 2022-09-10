import { VStack, Image, Text, Hide, Show, Flex, Box } from "@chakra-ui/react";

interface ITravelTypeItemProps {
  src: string;
  title: string;
  alt?: string;
  width?: string;
}

export function TravelTypeItem({
  src,
  alt,
  title,
  width = "80px",
}: ITravelTypeItemProps) {
  return (
    <VStack align="center">
      <Hide breakpoint="(max-width: 1000px)">
        <Image src={src} width={width} alt={alt} />
      </Hide>
      <Flex fontWeight="semibold" align="center" gap="10px">
        <Show breakpoint="(max-width: 1000px)">
          <Box // Orange Circle
            width="10px"
            height="10px"
            bgColor="orange.highlight"
            borderRadius="100%"
          />
        </Show>
        <Text>{title}</Text>
      </Flex>
    </VStack>
  );
}
