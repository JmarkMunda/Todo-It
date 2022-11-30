import { Box } from "@chakra-ui/react";
import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";

function App() {
  return (
    <Box display="flex" bg="mainBg.200" color="gray.500">
      <Sidebar />
      <Header />
    </Box>
  );
}

export default App;
