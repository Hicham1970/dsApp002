import { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Button } from "@mui/material";
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import { tokens } from "../theme";
import { useTheme } from "@mui/material";


export default function PrintToPdf() {
  const [isLoader, setIsLoader] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const handleDownload = () => {
    const capturePage = document.querySelector("#printMe");
    if (!capturePage) {
      console.error("Element with id 'printMe' not found.");
      return;
    }
    setIsLoader(true); // Démarre le chargement

    html2canvas(capturePage, {
      backgroundColor: null,
      scale: 2, // Augmente l'échelle pour une meilleure résolution
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pageHeight = pdf.internal.pageSize.getHeight();
        const pageWidth = pdf.internal.pageSize.getWidth();

        const imgWidth = pageWidth - 2 * 10;
        const imgHeight = (imgWidth * canvas.height) / canvas.width;
        const imgY = (pageHeight - imgHeight) / 6;
        const imgX = (pageWidth - imgWidth) / 2;
        pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth, imgHeight);

        pdf.save("page.pdf");
        setIsLoader(false); // Arrête le chargement après le téléchargement
      })
      .catch((error) => {
        console.error("Error capturing page:", error);
        setIsLoader(false); // Arrête le chargement en cas d'erreur
      });
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownload}
      disabled={isLoader}
      startIcon={<PrintOutlinedIcon />}
      sx={{
        mt: 2,
        backgroundColor: colors.greenAccent[200],
        color: colors.grey[700],
        '&:hover': {
          backgroundColor: colors.greenAccent[600],
        },
        padding: "10px 20px",
        borderRadius: "8px",
        textTransform: "none", // Empêche les majuscules automatiques
        fontSize: "16px",
        display: 'flex',
        alignItems: 'center',
        gap: 1, // Espace entre l'icône et le texte
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:disabled': {
          backgroundColor: colors.grey[500],
          opacity: 0.7,
        }
      }}
    >
      {isLoader ? (
        <>
          <span>Téléchargement...</span>
        </>
      ) : (
        <>
          Télécharger PDF
        </>
      )}
    </Button>

  );
}
