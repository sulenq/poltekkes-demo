import {
  Box,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Layout } from "@phosphor-icons/react";
import React, { useState } from "react";

type Props = {
  active: string;
};

export default function AdminNav({ active }: Props) {
  const navBg = useColorModeValue("white", "dark");
  const [isOpen, setIsOpen] = useState(false);

  const handleOnOpen = () => {
    setIsOpen(true);
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <Box
      w={"80px"}
      bg={navBg}
      _hover={{ w: "312px" }}
      transition={"200ms"}
      onMouseEnter={handleOnOpen}
      onMouseLeave={handleOnClose}
      // position={"absolute"}
      // left={0}
      // top={0}
      minH={"100vh"}
    >
      <VStack gap={0} h={"152px"} p={6}>
        <Image src="/logo192.png" w={"48px"} mb={2} />

        {isOpen && (
          <Text textAlign={"center"} animation={"fade-in 500ms"}>
            <b>Laboratorium Poltekkes Kemenkes </b>Semarang
          </Text>
        )}
      </VStack>

      <Box>
        <HStack
          gap={6}
          className={
            active === "Dashboards" ? "active adminNavItem" : "adminNavItem"
          }
        >
          <Icon as={Layout} fontSize={24} />
          {isOpen && <Text animation={"fade-in 500ms"}>Dashboards</Text>}
        </HStack>
      </Box>
    </Box>
  );
}
