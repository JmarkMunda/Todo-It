import { Box, Heading } from "@chakra-ui/react";
import CommonButton from "../components/global/CommonButton";
import { IoAddSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <Box w={200} h="100vh" bg="mainBg.100" py={8} textAlign="center">
      <Heading size="lg" color="gray.500" mb={10}>
        Todo-It
      </Heading>

      <Box>
        <CommonButton variant="ghost" py={6} w="full" mb={4}>
          <IoAddSharp /> Create Task
        </CommonButton>
        <CommonButton variant="ghost" py={6} w="full" mb={4}>
          Dashboard
        </CommonButton>
        <CommonButton variant="ghost" py={6} w="full" mb={4}>
          Collections
        </CommonButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
