/* eslint-disable no-unused-vars */
import { Button, TextField, Stack, Box, Typography, CircularProgress } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";
import { useState, useEffect } from "react";
import { auth } from "../firebase.js";
import Faq from "../scenes/faq/Faq"

const LoadingPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthenticated) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        gap={2}

        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <ReportProblemOutlinedIcon sx={{ fontSize: 100, color: colors.redAccent[500], height: "100px", width: "100px" }} />
        <Typography variant="h3" color="error">
          Veuillez vous enregistre ou vous connecter pour accéder à cette page
        </Typography>
      </Box>
    );
  }

  return <Faq />;
};

export default LoadingPage;