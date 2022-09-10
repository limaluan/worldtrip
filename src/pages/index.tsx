import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../Components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Text>Home</Text>
    </>
  );
};

export default Home;
