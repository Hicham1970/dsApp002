/* eslint-disable no-unused-vars */
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import LoadingPage from '../loadingPage';

export default function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [faqs, setFaqs] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchFaqs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'faq'));
      const faqList = [];
      querySnapshot.forEach((doc) => {
        faqList.push({ id: doc.id, ...doc.data() });
      });
      setFaqs(faqList);
    } catch (error) {
      console.error("Erreur lors de la récupération des FAQs:", error);
    }
  };


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
      setLoading(false);

      if (user) {
        setIsAuthenticated(true);
        fetchFaqs(); // Fonction pour récupérer les FAQs
      } else {
        setIsAuthenticated(false);
        return <LoadingPage />;
      }
    });

    return () => unsubscribe();
  }, []);



  if (!isAuthenticated) {
    return (
      <Box m="20px">
        <Typography variant="h4" color="error">
          Veuillez vous connecter pour accéder aux FAQs
        </Typography>
      </Box>
    );
  }

  return (
    <Box m="20px">
      <Box display={'flex'} justifyContent="space-between" alignItems="center">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      </Box>

      {faqs.map((faq) => (
        <Accordion key={faq.id} defaultExpanded={false}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {faq.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.content}
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>
              {faq.createdBy}
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>
              {faq.createdAt.toDate().toLocaleString()}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}