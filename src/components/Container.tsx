import { VStack } from "@chakra-ui/react";
import React from "react";

export default function Container(props: any) {
  const children: JSX.Element = props.children;

  return (
    <VStack
      {...props}
      w={props.w || "100%"}
      gap={0}
      maxW={props.maxW || "1280px"}
      mx={"auto"}
      align={"stretch"}
      px={[4, null, 6]}
    >
      {children}
    </VStack>
  );
}
