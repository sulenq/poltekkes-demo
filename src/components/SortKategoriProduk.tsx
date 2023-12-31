import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ArrowDown, ArrowUp, CaretDown } from "@phosphor-icons/react";
import React from "react";
import { iconSize } from "../const/sizes";
import useSortKategoriProduk from "../globalState/useSortKategoriProduk";

export default function SortKategoriProduk() {
  const { sortBy, sortOrder, setSortOrder } = useSortKategoriProduk();

  return (
    <Menu>
      <MenuButton
        as={Button}
        flexShrink={0}
        variant={"outline"}
        colorScheme="ap"
        pr={"12px"}
        rightIcon={<Icon as={CaretDown} fontSize={iconSize} />}
      >
        Urutkan
      </MenuButton>

      <MenuList
      // minW={"140px"}
      >
        <MenuGroup title="Nama Kategori">
          <MenuItem
            onClick={() => {
              setSortOrder("asc");
            }}
          >
            <HStack
              className="sortItem"
              color={
                sortBy === "namaKategori" && sortOrder === "asc" ? "p.500" : ""
              }
            >
              <Text>A-Z</Text>
              <Icon as={ArrowUp} fontSize={iconSize} />
            </HStack>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSortOrder("desc");
            }}
          >
            <HStack
              className="sortItem"
              color={
                sortBy === "namaKategori" && sortOrder === "desc" ? "p.500" : ""
              }
            >
              <Text>Z-A</Text>
              <Icon as={ArrowDown} fontSize={iconSize} />
            </HStack>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
