import { InfoOutlineIcon } from "@chakra-ui/icons";
import { VStack, Box, Heading, Text, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { City } from "./City";

export default function Continent() {
  const router = useRouter();
  const continent_name =
    String(router.query.continent).charAt(0).toUpperCase() +
    router.query.continent?.slice(1);

  return (
    <Box background="light.heading">
      <Head>
        <title>{continent_name} | WorldTrip</title>
      </Head>
      <VStack>
        <Box
          width="100%"
          height="500px"
          position="relative"
          _before={{
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
          }}
        >
          <Heading
            color="light.heading"
            position="absolute"
            bottom="60px"
            left="140px"
          >
            {continent_name}
          </Heading>
        </Box>
        <Flex
          maxW="1160px"
          maxH="700px"
          gap="60px"
          padding="80px 20px"
          align="center"
          direction={["column", "column", "row"]}
        >
          <Text maxW="600px" fontSize="24px">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>
          <Flex textAlign="center" gap="40px" direction={["column", "row"]}>
            <Heading color="orange.highlight" lineHeight="7">
              50 <br />
              <Text as="span" color="dark.heading" fontSize="24px">
                países
              </Text>
            </Heading>
            <Heading color="orange.highlight" lineHeight="7">
              60 <br />
              <Text as="span" color="dark.heading" fontSize="24px">
                línguas
              </Text>
            </Heading>
            <Heading color="orange.highlight" lineHeight="7">
              27 <br />
              <Text as="span" color="dark.heading" fontSize="24px">
                cidades+100
                <InfoOutlineIcon color="dark.info" fontSize="12px" />
              </Text>
            </Heading>
          </Flex>
        </Flex>

        <VStack maxW="1160px" position="relative">
          <Heading alignSelf="start" pb="30px" fontWeight="medium">
            Cidades +100
          </Heading>
          <Flex width="100%" gap="45px" flexWrap="wrap" paddingBottom="1.5rem">
            <City />
            <City />
            <City />
            <City />
            <City />
          </Flex>
        </VStack>
      </VStack>
    </Box>
  );
}
