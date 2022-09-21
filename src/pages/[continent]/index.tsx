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

        <VStack maxW="1160px" position="relative" pt="60px">
          <Heading alignSelf="start" pb="30px" fontWeight="medium">
            Cidades +100
          </Heading>
          <Flex
            width="100%"
            gap="45px"
            flexWrap="wrap"
            paddingBottom="1.5rem"
            direction={["column", "column", "row"]}
          >
            <City
              cityName="Londres"
              countryImg="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
              countryName="Reino Unido"
              thumbnail="https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <City
              cityName="Paris"
              countryName="França"
              countryImg="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png"
              thumbnail="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <City
              cityName="Roma"
              countryName="Itália"
              countryImg="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png"
              thumbnail="https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            />
            <City
              cityName="Praga"
              countryName="República Tcheca"
              countryImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAAIVBMVEX////XFBoRRX5YfKTn7PJTNV3GGCIhUYegtcsiQXaVJDv1T9UEAAADGUlEQVR4nOXSCXbbUAxD0UCdu/8F123a1HFkDV/8JAByBbwH7+XT55fWt3z7Xv1C6S3L0jqBm791Asuf65vAq79vAsu/a5rAm79pAsvddUzg3t8xgeX9tUvgwd8ugUd/twQ++nslsOJvlcCqv1EC6/4+CTzzd0ngqb9JAhv+Fgls+TsksO33T2DHb5/Art88gX2/dwJH/M4JHPIbJ3DQb5vAUb9rAsf9ngmc8FsmcMpvmMA5v18CZ/1uCZz2myUw4LdKYMTvlMCY3yeBQb9NAsN+kwTG/R4JXPE7JHDJb5DARb98Alf96glc92snEOCXTiDEL5xAjF83gSi/agJhftEEAv2SCUT6FROI9eslEOyXSyDcL5ZAvF8rgRl+pQSm+IUSmOSXSWCWXyWBeX6NBCb6JRKY6hdIYK6fP4HZfvYEpvvJE0jwUyeQ4WdOIMfPm0CSnzaBND9pAnl+zgQy/YwJpPoJE0j20yWQ7WdLIN/PlUCBnyqBEj9RAjV+ngSq/CwJlPlJEij0UyRQ6WdIoNb/5Stqr9T/42exvtZfPn6pn2B8FPoZxkeZn2N8VPlJxkeNn2Z8lPh5xkeBn2l85Pupxke2n2x8JPvZxkeqn298ZPoJx0een3J8pPk5x0eSn3V85Phpx0eGn3h8JPiZx8d0P/f4mO0nHx9z/fTjY6qff3xM9CuMj3l+ifExyy8yPib5VcbHFL/O+JjhFxof8X6p8RHu1xofwX618RHrlxsfkX7B8RHoVxwfYX7N8RHlFx0fMX7Z8RHi1x0fAX7l8XHdLz0+rvrFx8dFv/r4uOTXHx9X/AbjY9xvMT6G/R7jY9DvMj7G/DbjY8RvND4G/E7j47Tfa3yc9ZuNj3N+u/Fxyu83Pk74HcfHcb/l+DjqNx0fB/2u4+OQ33d8HPEbj499v/X42PV7j48dv/v42Pbbj48tf4PxseHvMD6e+nuMj2f+JuNj3d9mfKz6+4yPFX+n8fHR32p8PPqbjY8Hf7fx8c7fb3zc+xuOj//+luPjzd9zfPz1dx0fr/624+O3v/H4t3vpPP7tfgGGgJseBZBUxAAAAABJRU5ErkJggg=="
              thumbnail="https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <City
              cityName="Amsterdã"
              countryName="Holanda"
              countryImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEX///+uHCghRousABYLPIffJaIXAAABB0lEQVR4nO3QuRGAAAzAsPDsPzN9XFJAIU3g8xxs83XAD3lSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKe1FxsAwAAAAAAAAAAAAAAAAAAAMB7N9ucbJ6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Ul5Up6UJ+VJeVKelCflSXlSnpQn5Uk9Q6/I4nGDdNoAAAAASUVORK5CYII="
              thumbnail="https://images.unsplash.com/photo-1566075390964-69cf4aa8f931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </Flex>
        </VStack>
      </VStack>
    </Box>
  );
}
