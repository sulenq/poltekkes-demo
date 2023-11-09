import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function MissingPage() {
  return (
    <VStack justify={"center"} minH={"100vh"} p={8}>
      <Image src="/vector/404.webp" maxW={"400px"} />

      <Text textAlign={"center"} fontSize={32} fontWeight={600}>
        404 Page Not Found
      </Text>

      <Text textAlign={"center"} mb={4}>
        You probably mistype the URL or the page you are looking for is missing
      </Text>

      <Button
        w={"100%"}
        maxW={"300px"}
        variant={"outline"}
        colorScheme="ap"
        className="lg-clicky"
        onClick={() => {
          window.history.back();
        }}
        mb={2}
      >
        Back
      </Button>

      <Button
        variant={"unstyled"}
        className="lg-clicky"
        as={Link}
        to={"/"}
        mx={"auto"}
        color={"p.500"}
      >
        Go to Landing Page
      </Button>
    </VStack>
  );
}
