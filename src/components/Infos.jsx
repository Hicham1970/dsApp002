import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const Infos = () => {
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

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez traiter les données ici
    console.log({
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
    });
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
            />
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              label="Port d'Enregistrement"
              value={portOfRegistration}
              onChange={(e) => setPortOfRegistration(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              label="Nom du Vaisseau"
              value={vessel}
              onChange={(e) => setVessel(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              label="Cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Port"
              value={port}
              onChange={(e) => setPort(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Port de Chargement"
              value={portOfLoading}
              onChange={(e) => setPortOfLoading(e.target.value)}
              margin="normal"
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
            />
            <TextField
              fullWidth
              type="number"
              variant="outlined"
              label="Poids BL"
              value={blWeight}
              onChange={(e) => setBlWeight(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Date BL"
              type="date"
              value={blDate}
              onChange={(e) => setBlDate(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Vessel Arrived"
              value={vesselArrived}
              onChange={(e) => setVesselArrived(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Vessel Berthed"
              value={vesselBerthed}
              onChange={(e) => setVesselBerthed(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Initial Survey Commenced"
              value={initialSurveyCommenced}
              onChange={(e) => setInitialSurveyCommenced(e.target.value)}
              margin="normal"
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
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Operation Commenced"
              value={operationCommenced}
              onChange={(e) => setOperationCommenced(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Operation Completed"
              value={operationCompleted}
              onChange={(e) => setOperationCompleted(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Final Survey Commenced"
              value={finalSurveyCommenced}
              onChange={(e) => setFinalSurveyCommenced(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Final Survey Completed"
              value={finalSurveyCompleted}
              onChange={(e) => setFinalSurveyCompleted(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              label="Vessel Departed"
              value={vesselDeparted}
              onChange={(e) => setVesselDeparted(e.target.value)}
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Soumettre
        </Button>
      </form>
    </Box>
  );
};

export default Infos;