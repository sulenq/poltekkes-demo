import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Center,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaqItem } from "../const/types";
import { CaretDown } from "@phosphor-icons/react";

type Props = {
  faq: FaqItem;
};

export default function FaqItemComponent({ faq }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <AccordionItem
      borderRadius={16}
      border={"1px solid var(--divider)"}
      boxShadow={"1px 1px 2px 1px var(--divider)"}
      mb={4}
    >
      <AccordionButton
        p={6}
        borderRadius={16}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        onClick={() => {
          if (isOpen) {
            onClose();
          } else {
            onOpen();
          }
        }}
      >
        <Text
          fontSize={[16, null, 18]}
          fontWeight={500}
          textAlign={"left"}
          mr={8}
        >
          {faq.question}
        </Text>

        <Center
          bg={isOpen ? "p.500" : "var(--divider)"}
          borderRadius={"full"}
          p={2}
        >
          <Icon
            as={CaretDown}
            fontSize={[18, null, 20]}
            weight="bold"
            color={isOpen ? "white" : "p.500"}
            transform={isOpen ? "rotate(-180deg)" : ""}
            transition={"200ms"}
          />
        </Center>
      </AccordionButton>

      <AccordionPanel p={6}>
        <Text lineHeight={"187.5%"}>{faq.answer}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
}
