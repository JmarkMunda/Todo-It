import { Box, Button, Stack, Text, Tooltip } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import Searchbar from "../components/Searchbar";
import { useSearch } from "../hooks/useSearch";
import { BsCardChecklist, BsFilter, BsPlusLg } from "react-icons/bs";
import React, { useState } from "react";
import AddModal from "../components/AddModal";
import { useTodo } from "../context/TodoContext";

const Header = () => {
  const [value, changeValue, reset] = useSearch();
  const [showAddModal, setShowAddModal] = useState(false);
  const { state } = useTodo();

  return (
    <>
      <Box p={8}>
        <Stack spacing={4}>
          <Box display="flex" justifyContent="space-between">
            <Searchbar
              placeholder="Search..."
              width="50%"
              value={value}
              onChange={changeValue}
              reset={reset}
            />

            <Box>
              <Tooltip label="Add Task" bg="gray.500" fontSize="md">
                <Button size="sm" mr={4} onClick={() => setShowAddModal(true)}>
                  <BsPlusLg />
                </Button>
              </Tooltip>
              <Tooltip label="Colections" bg="gray.500" fontSize="md">
                <Button size="sm" mr={4}>
                  <BsCardChecklist />
                </Button>
              </Tooltip>
              <Tooltip label="Filter" bg="gray.500" fontSize="md">
                <Button size="sm" mr={4}>
                  <BsFilter />
                </Button>
              </Tooltip>
            </Box>

            <Text fontSize="2xl">Total Tasks: {state.length}</Text>
          </Box>
          <Divider />
        </Stack>
      </Box>
      {/* MODALS */}
      <AddModal isOpen={showAddModal} setShowAddModal={setShowAddModal} />
    </>
  );
};

export default Header;
