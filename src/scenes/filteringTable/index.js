import { Box } from "@mui/material";
import Header from "../../components/Header";
import FilteringTable from "../../components/FilteringTable"; // Updated import statement

const FilteringTableComponent = () => {
  return (
    <Box m="20px">
      <Box display={"flex"} justifyContent="space-between" alignItems="center">
        <Header title="TABLE GLOBAL FILTER" subtitle="Table filtrée " />
      </Box>
      <Box height={700} m="20px">
        <FilteringTable />
      </Box>
    </Box>
  );
};

export default FilteringTableComponent;
