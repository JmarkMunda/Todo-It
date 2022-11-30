import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import Searchbar from "../components/Searchbar";

const Header = () => {
  return (
    <Box w="100%" h="full" p={8}>
      <Stack spacing={4}>
        <Searchbar placeholder="Search..." width="50%" />
        <Divider />
      </Stack>
    </Box>
  );
};

export default Header;
