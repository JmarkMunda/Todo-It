import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Todos, { ITodo } from "../Todos";
// import { IoTrashOutline } from "react-icons/io5";

export interface IColumn {
  id: string;
  label: string;
  headerColor: string;
  bodyColor: string;
  items: Array<ITodo>;
}

interface ICommonColumnProps {
  column: IColumn;
}

// TODO: Fix the trash icon

const CommonColumn = ({ column }: ICommonColumnProps) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided, { isDraggingOver }) => (
        <Box border={isDraggingOver ? `2px` : "none"} borderColor="gray.500">
          <Text fontSize="2xl" textAlign="center" bg={column.headerColor}>
            {column.label}
          </Text>
          <Wrap
            spacing="30px"
            p={4}
            h="450px"
            overflowY="auto"
            className={column.id}
            bg={column.bodyColor}
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {column.items.length > 0 &&
              column.items.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided, snapshot) => (
                    <WrapItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <Todos todo={todo} snapshot={snapshot} />
                    </WrapItem>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}

            {/* <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="full"
              h="full"
              bg="#FFF">
              {column.id === "trash" && <IoTrashOutline size="80px" />}
            </Box> */}
          </Wrap>
        </Box>
      )}
    </Droppable>
  );
};

export default CommonColumn;
