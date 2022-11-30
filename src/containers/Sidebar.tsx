import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";
import CommonButton from "../components/CommonButton";

const Sidebar = () => {
  return (
    <Box w={250} h="100vh" bg="mainBg.100" py={8} textAlign="center">
      <Heading size="lg" color="gray.500" mb={10}>
        Todo-It
      </Heading>

      <List spacing={3}>
        <CommonButton isLoading>Sample</CommonButton>
        <ListItem>Dashboard</ListItem>
        <ListItem>Dashboard</ListItem>
        <ListItem>Dashboard</ListItem>
        <ListItem>Dashboard</ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
