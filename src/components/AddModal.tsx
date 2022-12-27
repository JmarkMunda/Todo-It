import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Textarea,
} from "@chakra-ui/react";
import React, { Dispatch, useState } from "react";
import CommonModal from "./global/CommonModal";
import { ACTIONS, useTodo } from "../context/TodoContext";
import uuid from "react-uuid";

interface IAddModalProps {
  isOpen: boolean;
  setShowAddModal: Dispatch<React.SetStateAction<boolean>>;
}

const AddModal = ({ isOpen, setShowAddModal }: IAddModalProps) => {
  const { dispatch } = useTodo();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleModalClose = () => {
    setShowAddModal(false);
  };

  const handleSave = () => {
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { id: uuid(), title, description },
    });
    setTitle("");
    setDescription("");
    handleModalClose();
  };

  return (
    <CommonModal
      title="Add Task"
      isOpen={isOpen}
      onClose={handleModalClose}
      closeOnOverlayClick={false}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          placeholder="What will you do"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder="Min. 20 words"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={handleSave}>
          Save
        </Button>
        <Button onClick={handleModalClose}>Cancel</Button>
      </ModalFooter>
    </CommonModal>
  );
};

export default AddModal;
