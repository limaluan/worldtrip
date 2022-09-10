import { Divider, VStack } from "@chakra-ui/react";
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
      <Divider bgColor="dark.heading" height="1px" width="5vw" />
    </VStack>
  );
};

export default Home;
