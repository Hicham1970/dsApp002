import { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Box from "@mui/material/Box";

export default function PrintToPdf() {
  const [isLoader, setIsLoader] = useState(false);

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
    <Box
      display="flex"
      justifyContent="center" // Centre le contenu horizontalement
      alignItems="center" // Centre le contenu verticalement
      mt={2} // Marge supérieure
      mb={2} // Marge inférieure
      sx={{
        // Styles supplémentaires
        padding: "25px", // Espacement interne
        backgroundColor: "rgb(255, 165, 0)", // Couleur de fond
        borderRadius: "8px", // Coins arrondis
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        border: "2px solid #1976d2",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#e0e0e0",
        },
      }}
    >
      <button onClick={handleDownload} disabled={isLoader}>
        {isLoader ? "Téléchargement..." : "Télécharger PDF"}
      </button>
      {isLoader && <span>Chargement en cours...</span>}
    </Box>
  );
}
