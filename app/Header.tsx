import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
export default function Header() {
  return (
    <Box
      textAlign={{ base: "left", md: "left", lg: "center" }}
      pl={{ base: "15px", md: "center" }}
      bg="#6B46C1"
      pt="90px"
      pb="250"
      color="white"
    >
      <Heading mb={"10px"}>
        Usman's First UI created with Chakra-Next.JS
      </Heading>
      <Text>Plans that are carefully crafted to suit your business.</Text>
    </Box>
  );
}
