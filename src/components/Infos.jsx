/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import PrintToPdf from "./../functions/PrintToPdf";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../theme';
import { auth, db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Infos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [loading, setLoading] = useState(false);

  // Créer un composant Button personnalisé qui sera caché à l'impression
  const NonPrintableButton = styled(Button)`
@media print {
  display: none !important;
}
`;
  // État pour stocker les valeurs des champs
  const [nationality, setNationality] = useState('');
  const [portOfRegistration, setPortOfRegistration] = useState('');
  const [vessel, setVessel] = useState('');
  const [cargo, setCargo] = useState('');
  const [port, setPort] = useState('');
  const [portOfLoading, setPortOfLoading] = useState('');
  const [portOfDischarging, setPortOfDischarging] = useState('');
  const [blWeight, setBlWeight] = useState('');
  const [blDate, setBlDate] = useState('');
  const [vesselArrived, setVesselArrived] = useState('');
  const [vesselBerthed, setVesselBerthed] = useState('');
  const [initialSurveyCommenced, setInitialSurveyCommenced] = useState('');
  const [initialSurveyCompleted, setInitialSurveyCompleted] = useState('');
  const [operationCommenced, setOperationCommenced] = useState('');
  const [operationCompleted, setOperationCompleted] = useState('');
  const [finalSurveyCommenced, setFinalSurveyCommenced] = useState('');
  const [finalSurveyCompleted, setFinalSurveyCompleted] = useState('');
  const [vesselDeparted, setVesselDeparted] = useState('');

  //? TODO Fonction pour gérer la soumission du formulaire
  //! TODO * Il y un composant qui re-render sans cesse en raison de la soumission du formulaire 

  const handleSubmit = (e) => {
    e.preventDefault();
    // champs remplis ou non
    if (
      !nationality ||
      !portOfRegistration ||
      !vessel ||
      !cargo ||
      !port ||
      !portOfLoading ||
      !portOfDischarging ||
      !blWeight ||
      !blDate ||
      !vesselArrived ||
      !vesselBerthed ||
      !initialSurveyCommenced ||
      !initialSurveyCompleted ||
      !operationCommenced ||
      !operationCompleted ||
      !finalSurveyCommenced ||
      !finalSurveyCompleted ||
      !vesselDeparted) {
      alert("Veuillez remplir tous les champs.");
      return;
    };
    setLoading(true);

    // Création de l'objet de données
    const infoData = {
      nationality,
      portOfRegistration,
      vessel,
      cargo,
      port,
      portOfLoading,
      portOfDischarging,
      blWeight,
      blDate,
      vesselArrived,
      vesselBerthed,
      initialSurveyCommenced,
      initialSurveyCompleted,
      operationCommenced,
      operationCompleted,
      finalSurveyCommenced,
      finalSurveyCompleted,
      vesselDeparted,
      createdBy: auth.currentUser.uid,
      createdAt: new Date(),
    };

    addDoc(collection(db, 'infos'), infoData)
      .then((docRef) => {
        console.log("Document ajouté avec l'ID: ", docRef.id);
        alert("Informations enregistrées avec succès !");
        handleClear(); // Réinitialiser le formulaire après succès
      })
      .catch((error) => {
        console.error("Erreur lors de l'enregistrement:", error);
        alert("Erreur lors de l'enregistrement des informations.");
      })
      .finally(() => {
        setLoading(false);
      });

  };

  // Fonction pour effacer les champs remplis:
  const handleClear = () => {
    setNationality('');
    setPortOfRegistration('');
    setVessel('');
    setCargo('');
    setPort('');
    setPortOfLoading('');
    setPortOfDischarging('');
    setBlWeight('');
    setBlDate('');
    setVesselArrived('');
    setVesselBerthed('');
    setInitialSurveyCommenced('');
    setInitialSurveyCompleted('');
    setOperationCommenced('');
    setOperationCompleted('');
    setFinalSurveyCommenced('');
    setFinalSurveyCompleted('');
    setVesselDeparted('');
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        Informations sur le Vaisseau
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Colonne 1 */}
          <Grid item xs={4}>
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              label="Nationalité"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              label="Port d'Enregistrement"
              value={portOfRegistration}
              onChange={(e) => setPortOfRegistration(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              label="Nom du Vaisseau"
              value={vessel}
              onChange={(e) => setVessel(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              label="Cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Port"
              value={port}
              onChange={(e) => setPort(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Port de Chargement"
              value={portOfLoading}
              onChange={(e) => setPortOfLoading(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
          </Grid>

          {/* Colonne 2 */}
          <Grid item xs={4}>
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              label="Port de Déchargement"
              value={portOfDischarging}
              onChange={(e) => setPortOfDischarging(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              type="number"
              variant="outlined"
              label="Poids BL"
              value={blWeight}
              onChange={(e) => setBlWeight(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Date BL"
              type="date"
              value={blDate}
              onChange={(e) => setBlDate(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Vessel Arrived"
              value={vesselArrived}
              onChange={(e) => setVesselArrived(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Vessel Berthed"
              value={vesselBerthed}
              onChange={(e) => setVesselBerthed(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Initial Survey Commenced"
              value={initialSurveyCommenced}
              onChange={(e) => setInitialSurveyCommenced(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
          </Grid>

          {/* Colonne 3 */}
          <Grid item xs={4}>
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Initial Survey Completed"
              value={initialSurveyCompleted}
              onChange={(e) => setInitialSurveyCompleted(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Operation Commenced"
              value={operationCommenced}
              onChange={(e) => setOperationCommenced(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Operation Completed"
              value={operationCompleted}
              onChange={(e) => setOperationCompleted(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Final Survey Commenced"
              value={finalSurveyCommenced}
              onChange={(e) => setFinalSurveyCommenced(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Final Survey Completed"
              value={finalSurveyCompleted}
              onChange={(e) => setFinalSurveyCompleted(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Vessel Departed"
              value={vesselDeparted}
              onChange={(e) => setVesselDeparted(e.target.value)}
              margin="normal"
              sx={{
                '& .MuiInputLabel-root': {
                  transform: 'translate(0, -1.5px) scale(0.75)',
                  transformOrigin: 'top left',
                  '&.Mui-disabled': {
                    color: colors.greenAccent[500],
                  },
                },
                '& .MuiInput-root': {
                  marginTop: '16px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                  '&:hover fieldset': {
                    borderColor: colors.greenAccent[400],
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.greenAccent[500],
                  },
                },
                '& .MuiInputBase-input': {
                  color: colors.grey[100], // Pour le texte en mode dark
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colors.greenAccent[500],
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2} // Espacement entre les éléments
          sx={{
            display: 'flex',
            flexDirection: 'row', // Aligne les éléments horizontalement
            justifyContent: 'space-between', // Espace les éléments uniformément
            alignItems: 'center',
            mt: 2, // Marge en haut
            width: '100%' // Assure que la Grid prend toute la largeur
          }}
        >
          <Grid item>
            <NonPrintableButton
              variant="contained"
              startIcon={<CancelOutlinedIcon />}
              sx={{
                backgroundColor: colors.blueAccent[200],
                color: colors.grey[700],
                '&:hover': {
                  backgroundColor: colors.blueAccent[600],
                },
                padding: "10px 20px",
                borderRadius: "8px",
                textTransform: "none",
                fontSize: "16px",
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:disabled': {
                  backgroundColor: colors.grey[500],
                  opacity: 0.7,
                }
              }}
              onClick={handleClear}
            >
              Effacer
            </NonPrintableButton>
          </Grid>

          <Grid item>
            <NonPrintableButton
              type="submit"
              variant="contained"
              startIcon={<BackupOutlinedIcon />}
              sx={{
                backgroundColor: colors.redAccent[200],
                color: colors.grey[700],
                '&:hover': {
                  backgroundColor: colors.redAccent[600],
                },
                padding: "10px 20px",
                borderRadius: "8px",
                textTransform: "none",
                fontSize: "16px",
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:disabled': {
                  backgroundColor: colors.grey[500],
                  opacity: 0.7,
                }
              }}
            >
              Soumettre
            </NonPrintableButton>
          </Grid>

          <Grid item>
            <PrintToPdf />
          </Grid>


        </Grid>
        <Box
          sx={{
            mt: "10px",
            borderBottom: "5px solid",
            color: colors.greenAccent[500],
          }}
        ></Box>

      </form>
    </Box>
  );
};

export default Infos;