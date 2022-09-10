import { Flex } from "@chakra-ui/react";
import { TravelTypeItem } from "./TravelTypeItem";

export function TravelTypes() {
  return (
    <Flex
      width={["70vw", "70vw", "70vw", "80vw"]}
      gap="1rem"
      justify="space-around"
      gridColumn="1fr 1fr 1fr 1fr 1fr"
      pt={["30px", "30px", "30px", "80px"]}
      pb={["30px", "30px", "30px", "80px"]}
      flexWrap="wrap"
    >
      <TravelTypeItem
        title="vida noturna"
        src="./cocktail.svg"
        alt="Coquetel"
      />
      <TravelTypeItem title="praia" src="./surf.svg" alt="Prancha de surfe" />
      <TravelTypeItem title="moderno" src="./building.svg" alt="Prédio" />
      <TravelTypeItem title="clássico" src="./museum.svg" alt="Museu" />
      <TravelTypeItem title="e mais..." src="./earth.svg" alt="Planeta Terra" />
    </Flex>
  );
}
