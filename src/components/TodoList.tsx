import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import CommonColumn from "./global/CommonColumn";
import { mockColumns } from "../mockColumns";
import { useTodo } from "../context/TodoContext";

const TodoList = () => {
  const { state } = useTodo();
  const [columns, updateColumns] = useState<any>(mockColumns);

  // useEffect(() => {
  //   // columns.todo.items = state;
  //   const newColumn = () => {
  //     // updateColumns({
  //     //   ...columns,
  //     //   todo: {
  //     //     ...columns.todo,
  //     //     items: state,
  //     //   },
  //     // });
  //   };
  // }, [state, columns]);

  const handleOnDragEnd = (result: any) => {
    const { source, destination } = result;

    // Unknown destination
    if (!destination) return;

    if (destination.droppableId !== source.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destinationColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destinationColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      updateColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destinationColumn,
          items: destItems,
        },
      });
    } else {
      const sourceColumn = columns[source.droppableId];
      const copiedItems = [...sourceColumn.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      updateColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: copiedItems,
        },
      });
    }
  };

  console.log(columns);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Box px={8} display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={4}>
        {Object.entries(columns).map(([columnId, column]: any) => (
          <CommonColumn key={columnId} column={column} />
        ))}
      </Box>
    </DragDropContext>
  );
};

export default TodoList;
