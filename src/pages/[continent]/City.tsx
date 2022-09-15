import { Box, VStack, Text } from "@chakra-ui/react";

export function City() {
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
        backgroundImage="url(https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
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
        <Text>Londres</Text>
        <Text color="dark.info">Reino Unido</Text>
        <Box
          width="30px"
          height="30px"
          backgroundImage="url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png)"
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
