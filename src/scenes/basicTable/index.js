import { Box } from "@mui/material";
import Header from "../../components/Header";
import BasicTable from "../../components/BasicTable"; // Updated import statement

const BasicTableComponent = () => {
  return (
    <Box m="20px">
      <Box display={"flex"} justifyContent="space-between" alignItems="center">
        <Header title="TABLE DE BORD" subtitle="Contacts de l'entreprise" />
      </Box>
      <Box height={700} m="20px">
        <BasicTable />
      </Box>
    </Box>
  );
};

export default BasicTableComponent;
