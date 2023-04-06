import React from "react";
import {
  ChakraProvider,
  Heading,
  Text,
  Box,
  Flex,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import checkmarkicon from "./icons/checkmarkicon";

export default function Pricing() {
  return (
    // container starts
    <Box
      maxW="850px"
      mx={{ base: "20px", md: "auto", lg: "auto" }}
      mt="-150"
      bg="white"
      borderRadius="16px"
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
    >
      <Flex direction={{ base: "column", md: "row", lg: "row" }}>
        <Box bg={"#9581c2"} p={"60px"} textAlign={"center"}>
          {/* Left Box */}
          <Text fontWeight={"bold"} fontSize={"24px"}>
            Premium PRO
          </Text>
          <Heading fontSize={"60px "}>$329</Heading>
          <Text fontSize={"18px"}>billed just once</Text>
          <Button mt={"20px"} bg={"pink.300 "} color={"white"} w={"280px"}>
            Get Started
          </Button>
        </Box>
        {/* Right Box */}
        <Box pt={"60px"} pl={"20px"} pr={"10px"}>
          <Text mb="15px">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mb="20px">
            <Icon as={checkmarkicon}></Icon>
            <Text>International calling and messaging API</Text>
          </HStack>

          <HStack mb="20px">
            <Icon as={checkmarkicon}></Icon>
            <Text>Additional phone numbers</Text>
          </HStack>

          <HStack mb="15px">
            <Icon as={checkmarkicon}></Icon>
            <Text>Automated messages via Zapier</Text>
          </HStack>

          <HStack mb="15px">
            <Icon as={checkmarkicon}></Icon>
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
    // Container Ends
  );
}
