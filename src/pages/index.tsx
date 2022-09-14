import { Divider, VStack, Heading } from "@chakra-ui/react";

import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../Components/Header";
import { HomeBanner } from "../Components/HomeBanner";
import { TravelTypes } from "../Components/TravelTypes";
import { Slider } from "../Components/Slider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>
      <VStack>
        <Header />
        <HomeBanner />
        <TravelTypes />
        <Divider
          bgColor="dark.heading"
          height="1px"
          width={["15vw", "15vw", "15vw", "5vw"]}
        />
        <Heading fontWeight="medium" textAlign="center" p="52px 0 0 0">
          Vamos nessa?
          <br /> Então escolha seu continente
        </Heading>
      </VStack>
      <Slider />
    </>
  );
};

export default Home;
