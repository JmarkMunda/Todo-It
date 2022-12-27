import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { mockColumns } from "../mockColumns";

type ContextType = {
  state: [];
  dispatch: Dispatch<ActionTypes>;
};

const TodoContext = createContext<ContextType>({
  state: [],
  dispatch: () => undefined,
});

export enum ACTIONS {
  ADD_TODO = "ADD",
  EDIT_TODO = "EDIT",
  DELETE_TODO = "DELETE",
}

interface IAddAction {
  type: ACTIONS.ADD_TODO;
  payload: { id: string; title: string; description: string };
}

interface IDeleteAction {
  type: ACTIONS.DELETE_TODO;
  payload: { id: string };
}

type ActionTypes = IAddAction | IDeleteAction;

const TodoReducer = (
  state = mockColumns.todo.items,
  action: ActionTypes
): any => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload];
    case ACTIONS.DELETE_TODO:
      return [...state.filter((item: any) => item.id !== action.payload.id)];
    default:
      return state;
  }
};

const TodoProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(TodoReducer, mockColumns.todo.items);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};

export { TodoProvider, TodoContext };
