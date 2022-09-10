import { Divider, VStack, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../Components/Header";
import { HomeBanner } from "../Components/HomeBanner";
import { TravelTypes } from "../Components/TravelTypes";

const Home: NextPage = () => {
  return (
    <VStack>
      <Header />
      <HomeBanner />
      <TravelTypes />
      <Divider
        bgColor="dark.heading"
        height="1px"
        width={["15vw", "15vw", "15vw", "5vw"]}
      />
      <Heading fontWeight="medium" textAlign="center" p="52px 0">
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>
    </VStack>
  );
};

export default Home;
