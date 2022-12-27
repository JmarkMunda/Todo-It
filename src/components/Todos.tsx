import { Box, Text, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";

import { AttachmentIcon } from "@chakra-ui/icons";
import { DraggableStateSnapshot } from "react-beautiful-dnd";

export interface ITodo {
  id: string;
  title: string;
  description: string;
}

interface ITodosProps {
  todo: ITodo;
  snapshot: DraggableStateSnapshot;
}

const Todos = ({ todo, snapshot }: ITodosProps) => {
  return (
    <Box
      bg="#FFFF"
      rounded="lg"
      boxShadow={snapshot.isDragging ? "2xl" : "sm"}
      p={6}
      w="250px"
      maxW="250px"
      h="200px"
      position="relative">
      {!snapshot.isDragging && (
        <AttachmentIcon
          position="absolute"
          top="-5px"
          right="-5px"
          fontSize={25}
          color="gray.600"
        />
      )}

      {/* CONTENT */}
      <Box
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        h="full">
        <Box>
          <Text mb={2}>{todo.title}</Text>
          <Text fontSize={12} color="gray.400">
            {todo.description}
          </Text>
        </Box>

        <Tag variant="subtle" colorScheme="cyan" w="50%">
          <TagLeftIcon boxSize="12px" />
          <TagLabel>Cyan</TagLabel>
        </Tag>
      </Box>
    </Box>
  );
};

export default Todos;
