import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Slider() {
  const swiper = useSwiper();

  return (
    <Box maxW="1280px" h="450px" margin="50px auto">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        style={{ height: "100%" }}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{delay: 5000}}
      >
        <SwiperSlide>
          <VStack width="100%" height="100%" justify="center">
            <Heading color="light.heading">Europa</Heading>
            <Text color="light.info">O continente mais antigo</Text>
          </VStack>
          <Image
            position="absolute"
            zIndex="-1"
            top="0"
            objectFit="cover"
            width="100%"
            height="100%"
            src="https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80"
            alt="Europe"
            filter="brightness(0.6)"
          />
        </SwiperSlide>
        <SwiperSlide>
          <VStack width="100%" height="100%" justify="center">
            <Heading color="light.heading">America</Heading>
            <Text color="light.info" onClick={() => swiper.slideNext()}>
              O continente do cinema
            </Text>
          </VStack>
          <Image
            position="absolute"
            zIndex="-1"
            top="0"
            objectFit="cover"
            width="100%"
            height="100%"
            src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="America"
            filter="brightness(0.6)"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
