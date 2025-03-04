import { Box } from "@mui/material";
import Header from "../../components/Header";
import DS from "../../components/DS"; // Updated import statement

const DSComponent = () => {
  return (
    <Box m="20px">
      <Box display={"flex"} justifyContent="space-between" alignItems="center">
        <Header title="DRAFT SURVEY" subtitle="Draft Survey Report" />
      </Box>
      <Box height={700} m="20px">
        <DS /> {/* Updated component reference */}
      </Box>
    </Box>
  );
};

export default DSComponent;
