import { Box } from "@chakra-ui/react";
import Dashboard from "./containers/Dashboard";
import Header from "./containers/Header";
// import Sidebar from "./containers/Sidebar";

// TODO: Remove sidebar

function App() {
  return (
    <Box display="flex" bg="mainBg.200" color="gray.500">
      {/* <Sidebar /> */}
      <Box display="flex" flexDir="column" w="full">
        <Header />
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;
