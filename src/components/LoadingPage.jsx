/* eslint-disable no-unused-vars */
import { Button, TextField, Stack, Box } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";
import { useState } from "react";
import { auth } from "../firebase";
import Faq from "../scenes/faq/Faq"

const LoadingPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Faq />
    </Box>
  );
};
export default LoadingPage;
