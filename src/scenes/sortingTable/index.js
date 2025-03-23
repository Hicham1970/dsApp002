import { Box } from "@mui/material";
import Header from "../../components/Header";
import SortingTable from "../../components/Sorting_Table"; // Updated import statement

const SortingTableComponent = () => {
  return (
    <Box m="20px">
      <Box display={"flex"} justifyContent="space-between" alignItems="center">
        <Header title="TABLE Assortie" subtitle="Table assortie" />
      </Box>
      <Box height={700} m="20px">
        <SortingTable />
      </Box>
    </Box>
  );
};

export default SortingTableComponent;
