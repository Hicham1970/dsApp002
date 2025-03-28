/* eslint-disable no-unused-vars */
import { Grid, Box, TextField, Typography } from "@mui/material";
import { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../theme";
import PrintToPdf from "../functions/PrintToPdf";
import { useEffect } from "react";

export default function ValeursFinal() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoader, setIsLoader] = useState(false);
  const [lbp, setLbp] = useState();
  const [keelCorrection, setKeelCorrection] = useState();
  const [foreDistance, setForeDistance] = useState();
  const [aftDistance, setAftDistance] = useState();
  const [midDistance, setMidDistance] = useState();
  const [forePort, setForePort] = useState();
  const [foreStbd, setForeStbd] = useState();
  const [meanFore, setMeanFore] = useState();
  const [aftPort, setAftPort] = useState();
  const [aftStbd, setAftStbd] = useState();
  const [meanAft, setMeanAft] = useState();
  const [midPort, setMidPort] = useState();
  const [midStbd, setMidStbd] = useState();
  const [meanMid, setMeanMid] = useState();
  const [trim, setTrim] = useState();
  const [lbm, setLbm] = useState();
  const [foreCorrected, setForeCorrected] = useState();
  const [aftCorrected, setAftCorrected] = useState();
  const [midCorrected, setMidCorrected] = useState();
  const [trimCorrected, setTrimCorrected] = useState();
  const [meanOfMean, setMeanOfMean] = useState();
  const [quarterMean, setQuarterMean] = useState();
  const [meanForeAft, setMeanForeAft] = useState();
  const [density, setDensity] = useState();
  const [draftSup, setDraftSup] = useState();
  const [draftInf, setDraftInf] = useState();
  const [displacementSup, setDisplacementSup] = useState();
  const [displacementInf, setDisplacementInf] = useState();
  const [displacement, setDisplacement] = useState();
  const [tpc, setTpc] = useState();
  const [lcf, setLcf] = useState();
  const [quarter, setQuarter] = useState();
  const [mtc, setMtc] = useState();
  const [tpcSup, setTpcSup] = useState();
  const [tpcInf, setTpcInf] = useState();
  const [lcfSup, setLcfSup] = useState();
  const [lcfInf, setLcfInf] = useState();
  const [quarterMinus50, setQuarterMinus50] = useState();
  const [mtcMinus50, setMtcMinus50] = useState();
  const [firstTrimCorrection, setFirstTrimCorrection] = useState();
  const [secondTrimCorrection, setSecondTrimCorrection] = useState();
  const [displacementTrimCorrected, setDisplacementTrimCorrected] = useState();
  const [displacementDstyCorrected, setDisplacementDstyCorrected] = useState();
  const [mtcPlus50, setMtcPlus50] = useState();
  const [quarterPlus50, setQuarterPlus50] = useState();
  const [ballast, setBallast] = useState();
  const [freshWater, setFreshWater] = useState();
  const [fuel, setFuel] = useState();
  const [diesel, setDiesel] = useState();
  const [lubOil, setLubOil] = useState();
  const [others, setOthers] = useState();
  const [total, setTotal] = useState();
  const [lightship, setLightship] = useState();
  const [constant, setConstant] = useState();
  const [netLight, setNetLight] = useState();
  const [cargo, setCargo] = useState();
  const [netLoad, setNetLoad] = useState();
  const [constantDéclarée, setConstantDéclarée] = useState();
  const [signature, setSignature] = useState();
  const [hydrostatic_table, setHydrostatic_table] = useState([]);
  const [draft, setDraft] = useState();

  // Section Final
  const [keelCorrectionFinal, setKeelCorrectionFinal] = useState();
  const [foreDistanceFinal, setForeDistanceFinal] = useState();
  const [aftDistanceFinal, setAftDistanceFinal] = useState();
  const [midDistanceFinal, setMidDistanceFinal] = useState();
  const [forePortFinal, setForePortFinal] = useState();
  const [foreStbdFinal, setForeStbdFinal] = useState();
  const [meanForeFinal, setMeanForeFinal] = useState();
  const [aftPortFinal, setAftPortFinal] = useState();
  const [aftStbdFinal, setAftStbdFinal] = useState();
  const [meanAftFinal, setMeanAftFinal] = useState();
  const [midPortFinal, setMidPortFinal] = useState();
  const [midStbdFinal, setMidStbdFinal] = useState();
  const [meanMidFinal, setMeanMidFinal] = useState();
  const [trimFinal, setTrimFinal] = useState();
  const [lbmFinal, setLbmFinal] = useState();
  const [foreCorrectedFinal, setForeCorrectedFinal] = useState();
  const [aftCorrectedFinal, setAftCorrectedFinal] = useState();
  const [midCorrectedFinal, setMidCorrectedFinal] = useState();
  const [trimCorrectedFinal, setTrimCorrectedFinal] = useState();
  const [meanOfMeanFinal, setMeanOfMeanFinal] = useState();
  const [quarterMeanFinal, setQuarterMeanFinal] = useState();
  const [meanForeAftFinal, setMeanForeAftFinal] = useState();
  const [densityFinal, setDensityFinal] = useState();
  const [draftSupFinal, setDraftSupFinal] = useState();
  const [draftInfFinal, setDraftInfFinal] = useState();
  const [displacementSupFinal, setDisplacementSupFinal] = useState();
  const [displacementInfFinal, setDisplacementInfFinal] = useState();
  const [displacementFinal, setDisplacementFinal] = useState();
  const [tpcFinal, setTpcFinal] = useState();
  const [lcfFinal, setLcfFinal] = useState();
  const [quarterFinal, setQuarterFinal] = useState();
  const [mtcFinal, setMtcFinal] = useState();
  const [tpcSupFinal, setTpcSupFinal] = useState();
  const [tpcInfFinal, setTpcInfFinal] = useState();
  const [lcfSupFinal, setLcfSupFinal] = useState();
  const [lcfInfFinal, setLcfInfFinal] = useState();
  const [quarterMinus50Final, setQuarterMinus50Final] = useState();
  const [mtcMinus50Final, setMtcMinus50Final] = useState();
  const [firstTrimCorrectionFinal, setFirstTrimCorrectionFinal] = useState();
  const [secondTrimCorrectionFinal, setSecondTrimCorrectionFinal] = useState();
  const [displacementTrimCorrectedFinal, setDisplacementTrimCorrectedFinal] =
    useState();
  const [displacementDstyCorrectedFinal, setDisplacementDstyCorrectedFinal] =
    useState();
  const [mtcPlus50Final, setMtcPlus50Final] = useState();
  const [quarterPlus50Final, setQuarterPlus50Final] = useState();
  const [ballastFinal, setBallastFinal] = useState();
  const [freshWaterFinal, setFreshWaterFinal] = useState();
  const [fuelFinal, setFuelFinal] = useState();
  const [dieselFinal, setDieselFinal] = useState();
  const [lubOilFinal, setLubOilFinal] = useState();
  const [othersFinal, setOthersFinal] = useState();
  const [totalFinal, setTotalFinal] = useState();




  return (
    <Box m={2}>
      <Grid container spacing={3}>
        {/**INITIAL */}

        <Grid item xs={12}>
          <Grid item xs={2}>
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Lbp"
              value={lbp}
              onChange={(e) => setLbp(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Debut de la partie Initial */}
          <Typography variant="h4" fontWeight="bold" sx={{ color: colors.greenAccent[600], marginTop: "20px", mb: 2 }}>
            Initial Draft Survey
          </Typography>
          <Grid container spacing={0.5}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Keel Correction"
                  value={keelCorrection}
                  onChange={(e) => setKeelCorrection(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Density"
                  value={density}
                  onChange={(e) => setDensity(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Trim"
                  value={trim}
                  onChange={(e) => setTrim(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Lbm"
                  value={lbm}
                  onChange={(e) => setLbm(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{
            borderBottom: "4px solid",
            borderColor: colors.greenAccent[500],
            width: "100%",
            my: 2
          }}>
          </Box>
          <Typography variant="h5" fontWeight="bold" sx={{ color: colors.greenAccent[500] }}>
            Initial Draft Observed
          </Typography>
          {/* /**2éme Ligne */}
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Fore Port"
                  value={forePort}
                  onChange={(e) => setForePort(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Fore Stbd"
                  value={foreStbd}
                  onChange={(e) => setForeStbd(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Fore Distance"
                  value={foreDistance}
                  onChange={(e) => setForeDistance(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Mean Fore"
                  value={meanFore}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* /**3éme Ligne  */}
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Aft Port"
                  value={aftPort}
                  onChange={(e) => setAftPort(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Aft Stbd"
                  value={aftStbd}
                  onChange={(e) => setAftStbd(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Aft Distance"
                  value={aftDistance}
                  onChange={(e) => setAftDistance(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Mean Aft"
                  value={meanAft}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* /**4éme Ligne  */}
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Mid Port"
                  value={midPort}
                  onChange={(e) => setMidPort(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Mid Stbd"
                  value={midStbd}
                  onChange={(e) => setMidStbd(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Mid Distance"
                  value={midDistance}
                  onChange={(e) => setMidDistance(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Mean Mid"
                  value={meanMid}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* /**5éme Ligne  */}
          <Grid item xs={12}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Fore Corrected"
                  value={foreCorrected}
                  onChange={(e) => setForeCorrected(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Aft Corrected"
                  value={aftCorrected}
                  onChange={(e) => setAftCorrected(e.target.value)}
                />
              </Grid>

              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Mid Corrected"
                  value={midCorrected}
                  onChange={(e) => setMidCorrected(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* /**6éme Ligne  */}
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Trim Corrected"
                  value={trimCorrected}
                  onChange={(e) => setTrimCorrected(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Mean Fore Aft"
                  value={meanForeAft}
                  onChange={(e) => setMeanForeAft(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Mean Of Mean"
                  value={meanOfMean}
                  onChange={(e) => setMeanOfMean(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Quarter Mean"
                  value={quarterMean}
                  onChange={(e) => setQuarterMean(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{
            borderBottom: "4px solid",
            borderColor: colors.greenAccent[500],
            width: "100%",
            my: 2
          }}>
          </Box>
          <Typography variant="h6" fontWeight="bold" sx={{ color: colors.greenAccent[500] }}>
            Hydrostatic Table
          </Typography>
          {/**7éme ligne Hydrostatic table */}
          <Grid container spacing={0.5}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  type="number"
                  label="Draft Inf"
                  value={draftInf}
                  onChange={(e) => setDraftInf(e.target.value)}
                  sx={{ width: "100px" }} // Largeur fixe
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Displacement Inf"
                  value={displacementInf}
                  onChange={(e) => setDisplacementInf(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Tpc Inf"
                  value={tpcInf}
                  onChange={(e) => setTpcInf(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Lcf Inf"
                  value={lcfInf}
                  onChange={(e) => setLcfInf(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              {/* Espace pour les deux nouveaux Grid items */}
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Quarter +50"
                  value={quarterPlus50}
                  onChange={(e) => setQuarterPlus50(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="MTC +50"
                  value={mtcPlus50}
                  onChange={(e) => setMtcPlus50(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/**8éme ligne Hydrostatic table */}
          <Grid item xs={12}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  type="number"
                  label="Quarter"
                  value={quarterMean}
                  onChange={(e) => setQuarterMean(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Displacement"
                  value={displacement}
                  onChange={(e) => setDisplacement(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Tpc"
                  value={tpc}
                  onChange={(e) => setTpc(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Lcf"
                  value={lcf}
                  onChange={(e) => setLcf(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>

              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="MTC"
                  value={mtc}
                  onChange={(e) => setMtc(e.target.value)}
                  sx={{ width: "120px", marginLeft: "50px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/**9éme ligne Hydrostatic table */}
          <Grid item xs={12}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  type="number"
                  label="Draft Sup"
                  value={draftSup}
                  onChange={(e) => setDraftSup(e.target.value)}
                  sx={{ width: "100px" }} // Largeur fixe
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Displacement Sup"
                  value={displacementSup}
                  onChange={(e) => setDisplacementSup(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Tpc Sup"
                  value={tpcSup}
                  onChange={(e) => setTpcSup(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Lcf Sup"
                  value={lcfSup}
                  onChange={(e) => setLcfSup(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              {/* Espace pour les deux nouveaux Grid items */}
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Quarter -50"
                  value={quarterMinus50}
                  onChange={(e) => setQuarterMinus50(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="MTC -50"
                  value={mtcMinus50}
                  onChange={(e) => setMtcMinus50(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/**10éme Ligne Hydro */}
          <Grid item xs={12}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={4} sm={2}>
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  type="number"
                  label="F t C"
                  value={firstTrimCorrection}
                  onChange={(e) => setFirstTrimCorrection(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  label="S T C "
                  value={secondTrimCorrection}
                  onChange={(e) => setSecondTrimCorrection(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  label="D C T"
                  value={displacementTrimCorrected}
                  onChange={(e) => setDisplacementTrimCorrected(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  label="D C D "
                  value={displacementDstyCorrected}
                  onChange={(e) => setDisplacementDstyCorrected(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{
            borderBottom: "4px solid",
            borderColor: colors.greenAccent[500],
            width: "100%",
            my: 2
          }}>
          </Box>
          <Typography variant="h5" fontWeight="bold" sx={{ color: colors.greenAccent[500] }}>
            Deductibles
          </Typography>
          {/**11éme ligne Deductibles */}
          <Grid container spacing={0.5}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  type="number"
                  label="Ballast"
                  value={ballast}
                  onChange={(e) => setBallast(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="F W"
                  value={freshWater}
                  onChange={(e) => setFreshWater(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Fuel"
                  value={fuel}
                  onChange={(e) => setFuel(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Diesel"
                  value={diesel}
                  onChange={(e) => setDiesel(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              {/* Espace pour les deux nouveaux Grid items */}
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Lub"
                  value={lubOil}
                  onChange={(e) => setLubOil(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Others"
                  value={others}
                  onChange={(e) => setOthers(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/**12éme Line  */}
          <Grid item xs={12}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={4} sm={2}>
                <TextField
                  sx={{ width: "100px" }}

                  variant="filled"
                  label="Light Ship"
                  value={lightship}
                  onChange={(e) => setLightship(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sm={2} >
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  type="number"
                  label="Total"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  label="Net Light"
                  value={netLight}
                  onChange={(e) => setNetLight(e.target.value)}
                />
              </Grid>

              <Grid item xs={4} sm={2}>
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  label="Constant"
                  value={constant}
                  onChange={(e) => setConstant(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>

          {/**Fin de la partie Initial */}

        </Grid>
        {/**FINAL */}
        <Grid item xs={12} md={6}>

          {/* Debut de la partie Final */}
          <Typography variant="h4" fontWeight="bold" sx={{ color: colors.greenAccent[600], marginTop: "20px", mb: 2 }}>
            Final Draft Survey
          </Typography>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Keel Correction"
                  value={keelCorrectionFinal}
                  onChange={(e) => setKeelCorrectionFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Density"
                  value={densityFinal}
                  onChange={(e) => setDensityFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Trim"
                  value={trimFinal}
                  onChange={(e) => setTrimFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Lbm"
                  value={lbmFinal}
                  onChange={(e) => setLbmFinal(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{
            borderBottom: "4px solid",
            borderColor: colors.greenAccent[500],
            width: "100%",
            my: 2
          }}>
          </Box>
          <Typography variant="h5" fontWeight="bold" sx={{ color: colors.greenAccent[500] }}>
            Final Draft Observed
          </Typography>
          {/* /**2éme Ligne */}
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Fore Port"
                  value={forePortFinal}
                  onChange={(e) => setForePortFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Fore Stbd"
                  value={foreStbdFinal}
                  onChange={(e) => setForeStbdFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Fore Distance"
                  value={foreDistanceFinal}
                  onChange={(e) => setForeDistanceFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Mean Fore"
                  value={meanForeFinal}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* /**3éme Ligne  */}
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Aft Port"
                  value={aftPortFinal}
                  onChange={(e) => setAftPortFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Aft Stbd"
                  value={aftStbdFinal}
                  onChange={(e) => setAftStbdFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Aft Distance"
                  value={aftDistanceFinal}
                  onChange={(e) => setAftDistanceFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Mean Aft"
                  value={meanAftFinal}
                  onChange={(e) => setMeanAftFinal(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* /**4éme Ligne  */}
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Mid Port"
                  value={midPortFinal}
                  onChange={(e) => setMidPortFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Mid Stbd"
                  value={midStbdFinal}
                  onChange={(e) => setMidStbdFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Mid Distance"
                  value={midDistanceFinal}
                  onChange={(e) => setMidDistanceFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Mean Mid"
                  value={meanMidFinal}
                  onChange={(e) => setMeanMidFinal(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* /**5éme Ligne  */}
          <Grid item xs={12}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Fore Corrected"
                  value={foreCorrectedFinal}
                  onChange={(e) => setForeCorrectedFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Aft Corrected"
                  value={aftCorrectedFinal}
                  onChange={(e) => setAftCorrectedFinal(e.target.value)}
                />
              </Grid>

              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Mid Corrected"
                  value={midCorrectedFinal}
                  onChange={(e) => setMidCorrectedFinal(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* /**6éme Ligne  */}
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Trim Corrected"
                  value={trimCorrectedFinal}
                  onChange={(e) => setTrimCorrectedFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Mean Fore Aft"
                  value={meanForeAftFinal}
                  onChange={(e) => setMeanForeAftFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Mean Of Mean"
                  value={meanOfMeanFinal}
                  onChange={(e) => setMeanOfMeanFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Quarter Mean"
                  value={quarterMeanFinal}
                  onChange={(e) => setQuarterMeanFinal(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{
            borderBottom: "4px solid",
            borderColor: colors.greenAccent[500],
            width: "100%",
            my: 2
          }}>
          </Box>
          <Typography variant="h6" fontWeight="bold" sx={{ color: colors.greenAccent[500] }}>
            Hydrostatic Table
          </Typography>
          {/**7éme ligne Hydrostatic table */}
          <Grid container spacing={0.5}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  type="number"
                  label="Draft Inf"
                  value={draftInfFinal}
                  onChange={(e) => setDraftInfFinal(e.target.value)}
                  sx={{ width: "100px" }} // Largeur fixe
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Displacement Inf"
                  value={displacementInfFinal}
                  onChange={(e) => setDisplacementInfFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Tpc Inf"
                  value={tpcInfFinal}
                  onChange={(e) => setTpcInfFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Lcf Inf"
                  value={lcfInfFinal}
                  onChange={(e) => setLcfInfFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              {/* Espace pour les deux nouveaux Grid items */}
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Quarter +50"
                  value={quarterPlus50Final}
                  onChange={(e) => setQuarterPlus50Final(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="MTC +50"
                  value={mtcPlus50Final}
                  onChange={(e) => setMtcPlus50Final(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/**8éme ligne Hydrostatic table */}
          <Grid item xs={12}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  type="number"
                  label="Quarter"
                  value={quarterMeanFinal}
                  onChange={(e) => setQuarterMeanFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Displacement"
                  value={displacementFinal}
                  onChange={(e) => setDisplacementFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Tpc"
                  value={tpcFinal}
                  onChange={(e) => setTpcFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Lcf"
                  value={lcfFinal}
                  onChange={(e) => setLcfFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>

              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="MTC"
                  value={mtcFinal}
                  onChange={(e) => setMtcFinal(e.target.value)}
                  sx={{ width: "120px", marginLeft: "50px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/**9éme ligne Hydrostatic table */}
          <Grid item xs={12}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  type="number"
                  label="Draft Sup"
                  value={draftSupFinal}
                  onChange={(e) => setDraftSupFinal(e.target.value)}
                  sx={{ width: "100px" }} // Largeur fixe
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Displacement Sup"
                  value={displacementSupFinal}
                  onChange={(e) => setDisplacementSupFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Tpc Sup"
                  value={tpcSupFinal}
                  onChange={(e) => setTpcSupFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Lcf Sup"
                  value={lcfSupFinal}
                  onChange={(e) => setLcfSupFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              {/* Espace pour les deux nouveaux Grid items */}
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Quarter -50"
                  value={quarterMinus50Final}
                  onChange={(e) => setQuarterMinus50Final(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="MTC -50"
                  value={mtcMinus50Final}
                  onChange={(e) => setMtcMinus50Final(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/**10éme Ligne Hydro */}
          <Grid item xs={12}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={4} sm={2}>
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  type="number"
                  label="F t C"
                  value={firstTrimCorrectionFinal}
                  onChange={(e) => setFirstTrimCorrectionFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  label="S T C "
                  value={secondTrimCorrectionFinal}
                  onChange={(e) => setSecondTrimCorrectionFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  label="D C T"
                  value={displacementTrimCorrectedFinal}
                  onChange={(e) => setDisplacementTrimCorrectedFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  label="D C D "
                  value={displacementDstyCorrectedFinal}
                  onChange={(e) => setDisplacementDstyCorrectedFinal(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{
            borderBottom: "4px solid",
            borderColor: colors.greenAccent[500],
            width: "100%",
            my: 2
          }}>
          </Box>
          <Typography variant="h5" fontWeight="bold" sx={{ color: colors.greenAccent[500] }}>
            Deductibles
          </Typography>
          {/**11éme ligne Deductibles */}
          <Grid container spacing={0.5}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  type="number"
                  label="Ballast"
                  value={ballastFinal}
                  onChange={(e) => setBallastFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="F W"
                  value={freshWaterFinal}
                  onChange={(e) => setFreshWaterFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Fuel"
                  value={fuelFinal}
                  onChange={(e) => setFuelFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Diesel"
                  value={dieselFinal}
                  onChange={(e) => setDieselFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              {/* Espace pour les deux nouveaux Grid items */}
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Lub"
                  value={lubOilFinal}
                  onChange={(e) => setLubOilFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  variant="filled"
                  label="Others"
                  value={othersFinal}
                  onChange={(e) => setOthersFinal(e.target.value)}
                  sx={{ width: "100px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/**12éme Line  */}
          <Grid item xs={12}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={4} sm={2}>
                <TextField
                  sx={{ width: "100px" }}
                  variant="filled"
                  label="Light Ship"
                  value={lightship}
                  onChange={(e) => setLightship(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sm={2} >
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  type="number"
                  label="Total"
                  value={totalFinal}
                  onChange={(e) => setTotalFinal(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  label="Net Load"
                  value={netLoad}
                  onChange={(e) => setNetLoad(e.target.value)}
                />
              </Grid>

              <Grid item xs={4} sm={2}>
                <TextField
                  sx={{ width: "100px" }}
                  disabled
                  variant="outlined"
                  label="Cargo"
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>


          {/**Fin de la partie Initial */}

        </Grid>
      </Grid>

    </Box>
  );
}