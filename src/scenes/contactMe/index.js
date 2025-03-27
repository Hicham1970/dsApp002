import { Box } from "@mui/material";
import Header from "../../components/Header";
import ContactMe from "../../components/ContactMe"; // Updated import statement

const ContactMeComponent = () => {
  return (
    <Box m="20px">
      <Box display={"flex"} justifyContent="space-between" alignItems="center">
        <Header title="CONTACT ME" subtitle="Contact Us" />
      </Box>
      <Box height={700} m="20px">
        <ContactMe /> {/* Updated component reference */}
      </Box>
    </Box>
  );
};

export default ContactMeComponent;
