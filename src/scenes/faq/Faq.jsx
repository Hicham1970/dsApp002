import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

export default function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display={'flex'} justifyContent="space-between" alignItems="center">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      </Box>
      {/* Question N°1 */}
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is a Draft Survey?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Draft survey ou lecture des tirants d'eau est une méthode de mesure qui permet au marin et au surveillants de déterminer les quantités chargées ou déchargée abord d'un navire.
          </Typography>
        </AccordionDetails>
      </Accordion >
      {/* Question N°2 */}
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Que doit avoir comme competences un inspecteur maritime?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Material-UI est une bibliothèque de composants React qui implémente
            les spécifications de Material Design de Google. Elle fournit une
            collection de composants réutilisables et prêts à l'emploi pour
            la création d'interfaces utilisateur modernes et élégantes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Question N°3 */}
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How to use Mui Material?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Pour utiliser Material-UI dans votre projet React, vous devez d'abord installer la bibliothèque via npm ou yarn. Ensuite, vous pouvez importer les composants que vous souhaitez utiliser dans vos fichiers de composants React. Material-UI fournit également un thème par défaut que vous pouvez personnaliser selon vos besoins.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Question N°4 */}
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            And what about the other libraries?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React Router est une bibliothèque de gestion des routes dans React. Elle permet de créer des pages dynamiques et de gérer les routes de votre application.
            React Pro Sidebar est une bibliothèque React qui permet de créer des panneaux latéraux personnalisables et réactives. Elle est conçue pour être facile à utiliser et à personnaliser. Formik est une bibliothèque React qui permet de valider des formulaires en utilisant des règles de validation personnalisées.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Question N°5 */}
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What about the Novo Framework?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Le Novo Framework est un framework de développement web basé sur ReactJS et Material-UI. Il fournit une collection de composants réutilisables et prêts à l'emploi pour la création d'interfaces utilisateur modernes et élégantes. Il est conçu pour être facile à utiliser et à personnaliser, et pour vous permettre de créer des sites web réactifs et performants.
          </Typography>
        </AccordionDetails>
      </Accordion >
      {/* Question N°6 */}
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Final Question. What is the purpose of this website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This website is a demo dashboard to illustrate how web development can be done with the ReactJS and Material-UI framework. It is designed to illustrate the basic concepts of ReactJS and Material-UI and to allow you to familiarize yourself with the tools and techniques used in modern web development.
          </Typography>
        </AccordionDetails>
      </Accordion>


    </Box>
  )

}
