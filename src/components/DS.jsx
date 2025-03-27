/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import { tokens } from "./../theme";

import {
  calculateMeanFore,
  calculateMeanAft,
  calculateMeanMid,
  calculateTrim,
  calculateForeCorrected,
  calculateAftCorrected,
  calculateMidCorrected,
  calculateTrimCorrected,
  calculateMeanForeAft,
  calculateMeanOfMean,
  calculateQuarterMean,
  calculateDisplacement,
  calculateTpc,
  calculateLcf,
  calculateDisplacementTrimCorrected,
  calculateFirstTrimCorrection,
  calculateSecondTrimCorrection,
  calculateDisplacementDstyCorrected,
  calculateTotal,
  calculateNetLight,
  calculateLbm,
  calculateConstant,
  calculateNetLoad,
  calculateCargo,
  calculateMeanForeFinal,
  calculateMeanAftFinal,
  calculateMeanMidFinal,
  calculateTrimFinal,
  calculateLbmFinal,
  calculateForeCorrectedFinal,
  calculateAftCorrectedFinal,
  calculateMidCorrectedFinal,
  calculateTrimCorrectedFinal,
  calculateMeanForeAftFinal,
  calculateMeanOfMeanFinal,
  calculateQuarterMeanFinal,
  calculateDisplacementFinal,
  calculateTpcFinal,
  calculateLcfFinal,
  calculateDisplacementTrimCorrectedFinal,
  calculateFirstTrimCorrectionFinal,
  calculateSecondTrimCorrectionFinal,
  calculateDisplacementDstyCorrectedFinal,
  calculateTotalFinal,
} from "../functions/calculationUtils";
import Footer from "./Footer";
import VesselInfos from './Infos';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { auth } from '../firebase';


export default function DS() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoader, setIsLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDischarging, setIsDischarging] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [loading, setLoading] = useState(false);

  const [lbp, setLbp] = useState(84.99);
  // Section Initial
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



  const handleLoadingTypeChange = () => {
    setIsLoading(true);
    setIsDischarging(false);

  }

  const handleDischargingTypeChange = () => {
    setIsDischarging(true);
    setIsLoading(false);
  }

  // Initial Memoized calculation results
  const meanForeCalculated = useMemo(
    () => calculateMeanFore(forePort, foreStbd),
    [forePort, foreStbd]
  );

  const meanAftCalculated = useMemo(
    () => calculateMeanAft(aftPort, aftStbd),
    [aftPort, aftStbd]
  );

  const meanMidCalculated = useMemo(
    () => calculateMeanMid(midPort, midStbd),
    [midPort, midStbd]
  );

  const trimCalculated = useMemo(
    () => calculateTrim(meanAftCalculated, meanForeCalculated),
    [meanAftCalculated, meanForeCalculated]
  );

  const lbmCalculated = useMemo(
    () => calculateLbm(lbp, foreDistance, aftDistance),
    [lbp, foreDistance, aftDistance]
  );

  const foreCorrectedCalculated = useMemo(
    () =>
      calculateForeCorrected(
        trimCalculated,
        foreDistance,
        lbmCalculated,
        meanForeCalculated
      ),
    [trimCalculated, foreDistance, lbmCalculated, meanForeCalculated]
  );

  const aftCorrectedCalculated = useMemo(
    () =>
      calculateAftCorrected(
        trimCalculated,
        aftDistance,
        lbmCalculated,
        meanAftCalculated
      ),
    [trimCalculated, aftDistance, lbmCalculated, meanAftCalculated]
  );

  const midCorrectedCalculated = useMemo(() => {
    const lbmValue = Number(lbmCalculated);
    const meanMidValue = Number(meanMidCalculated);
    const midDistanceValue = Number(midDistance);
    const trimValue = Number(trimCalculated);



    // Vérifiez que toutes les valeurs sont valides
    if (
      isNaN(lbmValue) ||
      isNaN(meanMidValue) ||
      isNaN(midDistanceValue) ||
      isNaN(trimValue)
    ) {
      console.error("Invalid inputs for midCorrected calculation");
      return null; // Ou une valeur par défaut
    }

    return calculateMidCorrected(
      trimValue,
      midDistanceValue,
      lbmValue,
      meanMidValue
    );
  }, [trimCalculated, midDistance, lbmCalculated, meanMidCalculated]);

  const trimCorrectedCalculated = useMemo(
    () => calculateTrimCorrected(aftCorrectedCalculated, foreCorrectedCalculated),
    [aftCorrectedCalculated, foreCorrectedCalculated]
  );

  const meanForeAftCalculated = useMemo(
    () => calculateMeanForeAft(meanForeCalculated, meanAftCalculated),
    [meanForeCalculated, meanAftCalculated]
  );

  const meanOfMeanCalculated = useMemo(
    () => calculateMeanOfMean(meanForeAftCalculated, meanMidCalculated),
    [meanForeAftCalculated, meanMidCalculated]
  );

  const quarterMeanCalculated = useMemo(
    () =>
      calculateQuarterMean(
        meanForeAftCalculated,
        meanMidCalculated,
        meanOfMeanCalculated,
        keelCorrection
      ),
    [
      meanForeAftCalculated,
      meanMidCalculated,
      meanOfMeanCalculated,
      keelCorrection,
    ]
  );

  const displacementCalculated = useMemo(
    () =>
      calculateDisplacement(
        draftInf,
        draftSup,
        quarterMeanCalculated,
        displacementInf,
        displacementSup
      ),
    [
      draftInf,
      draftSup,
      quarterMeanCalculated,
      displacementInf,
      displacementSup,
    ]
  );

  const tpcCalculated = useMemo(
    () =>
      calculateTpc(quarterMeanCalculated, tpcSup, tpcInf, draftInf, draftSup),
    [quarterMeanCalculated, tpcSup, tpcInf, draftInf, draftSup]
  );

  const lcfCalculated = useMemo(
    () =>
      calculateLcf(quarterMeanCalculated, lcfSup, lcfInf, draftSup, draftInf),
    [quarterMeanCalculated, lcfSup, lcfInf, draftSup, draftInf]
  );

  const firstTrimCorrectionCalculated = useMemo(
    () =>
      calculateFirstTrimCorrection(
        trimCorrectedCalculated,
        tpcCalculated,
        lcfCalculated,
        lbp
      ),
    [trimCorrectedCalculated, tpcCalculated, lcfCalculated, lbp]
  );

  const secondTrimCorrectionCalculated = useMemo(
    () =>
      calculateSecondTrimCorrection(
        trimCorrectedCalculated,
        mtcPlus50,
        mtcMinus50,
        lbp
      ),
    [trimCorrectedCalculated, mtcPlus50, mtcMinus50, lbp]
  );

  const displacementTrimCorrectedCalculated = useMemo(
    () =>
      calculateDisplacementTrimCorrected(
        displacementCalculated,
        firstTrimCorrectionCalculated,
        secondTrimCorrectionCalculated
      ),
    [
      displacementCalculated,
      firstTrimCorrectionCalculated,
      secondTrimCorrectionCalculated,
    ]
  );

  const displacementDstyCorrectionCalculated = useMemo(
    () =>
      calculateDisplacementDstyCorrected(
        displacementTrimCorrectedCalculated,
        density
      ),
    [displacementTrimCorrectedCalculated, density]
  );

  const totalCalculated = useMemo(
    () => calculateTotal(ballast, freshWater, fuel, diesel, lubOil, others),
    [ballast, freshWater, fuel, diesel, lubOil, others]
  );

  const netLightCalculated = useMemo(
    () =>
      calculateNetLight(totalCalculated, displacementDstyCorrectionCalculated),
    [totalCalculated, displacementDstyCorrectionCalculated]
  );

  const constantCalculated = useMemo(
    () => calculateConstant(netLightCalculated, lightship),
    [netLightCalculated, lightship]
  );

  // Final Memoized calculation results
  const meanForeFinalCalculated = useMemo(
    () => calculateMeanForeFinal(forePortFinal, foreStbdFinal),
    [forePortFinal, foreStbdFinal]
  );

  const meanAftFinalCalculated = useMemo(
    () => calculateMeanAftFinal(aftPortFinal, aftStbdFinal),
    [aftPortFinal, aftStbdFinal]
  );

  const meanMidFinalCalculated = useMemo(
    () => calculateMeanMidFinal(midPortFinal, midStbdFinal),
    [midPortFinal, midStbdFinal]
  );

  const trimFinalCalculated = useMemo(
    () => calculateTrimFinal(meanAftFinalCalculated, meanForeFinalCalculated),
    [meanAftFinalCalculated, meanForeFinalCalculated]
  );

  const lbmFinalCalculated = useMemo(
    () => calculateLbmFinal(lbp, foreDistanceFinal, aftDistanceFinal),
    [lbp, foreDistanceFinal, aftDistanceFinal]
  );

  const foreCorrectedFinalCalculated = useMemo(
    () =>
      calculateForeCorrectedFinal(
        trimFinalCalculated,
        foreDistanceFinal,
        lbmFinalCalculated,
        meanForeFinalCalculated
      ),
    [
      trimFinalCalculated,
      foreDistanceFinal,
      lbmFinalCalculated,
      meanForeFinalCalculated,
    ]
  );

  const aftCorrectedFinalCalculated = useMemo(
    () =>
      calculateAftCorrectedFinal(
        trimFinalCalculated,
        aftDistanceFinal,
        lbmFinalCalculated,
        meanAftFinalCalculated
      ),
    [
      trimFinalCalculated,
      aftDistanceFinal,
      lbmFinalCalculated,
      meanAftFinalCalculated,
    ]
  );

  const midCorrectedFinalCalculated = useMemo(
    () =>
      calculateMidCorrectedFinal(
        trimFinalCalculated,
        midDistanceFinal,
        lbmFinalCalculated,
        meanMidFinalCalculated
      ),
    [
      trimFinalCalculated,
      midDistanceFinal,
      lbmFinalCalculated,
      meanMidFinalCalculated,
    ]
  );

  const trimCorrectedFinalCalculated = useMemo(
    () =>
      calculateTrimCorrectedFinal(
        aftCorrectedFinalCalculated,
        foreCorrectedFinalCalculated
      ),
    [aftCorrectedFinalCalculated, foreCorrectedFinalCalculated]
  );

  const meanForeAftFinalCalculated = useMemo(
    () =>
      calculateMeanForeAftFinal(
        foreCorrectedFinalCalculated,
        aftCorrectedFinalCalculated
      ),
    [foreCorrectedFinalCalculated, aftCorrectedFinalCalculated]
  );

  const meanOfMeanFinalCalculated = useMemo(
    () =>
      calculateMeanOfMeanFinal(
        midCorrectedFinalCalculated,
        meanForeAftFinalCalculated
      ),
    [midCorrectedFinalCalculated, meanForeAftFinalCalculated]
  );

  const quarterMeanFinalCalculated = useMemo(
    () =>
      calculateQuarterMeanFinal(
        midCorrectedFinalCalculated,
        meanOfMeanFinalCalculated,
        keelCorrectionFinal
      ),
    [
      midCorrectedFinalCalculated,
      meanOfMeanFinalCalculated,
      keelCorrectionFinal,
    ]
  );

  const displacementFinalCalculated = useMemo(
    () =>
      calculateDisplacementFinal(
        draftInfFinal,
        draftSupFinal,
        quarterMeanFinalCalculated,
        displacementInfFinal,
        displacementSupFinal
      ),
    [
      displacementInfFinal,
      displacementSupFinal,
      draftInfFinal,
      draftSupFinal,
      quarterMeanFinalCalculated,
    ]
  );

  const tpcFinalCalculated = useMemo(
    () =>
      calculateTpcFinal(
        draftInfFinal,
        draftSupFinal,
        quarterMeanFinalCalculated,
        tpcSupFinal,
        tpcInfFinal
      ),
    [
      draftInfFinal,
      draftSupFinal,
      quarterMeanFinalCalculated,
      tpcSupFinal,
      tpcInfFinal,
    ]
  );

  const lcfFinalCalculated = useMemo(
    () =>
      calculateLcfFinal(
        quarterMeanFinalCalculated,
        lcfSupFinal,
        lcfInfFinal,
        draftSupFinal,
        draftInfFinal
      ),
    [
      quarterMeanFinalCalculated,
      lcfSupFinal,
      lcfInfFinal,
      draftSupFinal,
      draftInfFinal,
    ]
  );

  const firstTrimCorrectionFinalCalculated = useMemo(
    () =>
      calculateFirstTrimCorrectionFinal(
        trimCorrectedFinalCalculated,
        tpcFinalCalculated,
        lcfFinalCalculated,
        lbp
      ),
    [trimCorrectedFinalCalculated, tpcFinalCalculated, lcfFinalCalculated, lbp]
  );

  const secondTrimCorrectionFinalCalculated = useMemo(
    () =>
      calculateSecondTrimCorrectionFinal(
        trimCorrectedFinalCalculated,
        mtcPlus50Final,
        mtcMinus50Final,
        lbp
      ),
    [trimCorrectedFinalCalculated, mtcPlus50Final, mtcMinus50Final, lbp]
  );

  const displacementTrimCorrectedFinalCalculated = useMemo(
    () =>
      calculateDisplacementTrimCorrected(
        displacementFinalCalculated,
        firstTrimCorrectionFinalCalculated,
        secondTrimCorrectionFinalCalculated
      ),
    [
      displacementFinalCalculated,
      firstTrimCorrectionFinalCalculated,
      secondTrimCorrectionFinalCalculated,
    ]
  );


  const draftSupCalculated = useMemo(
    () => (Number(quarterMean) - Number(keelCorrection) + 0.1).toFixed(2),
    [quarterMean, keelCorrection]
  );

  const draftInfCalculated = useMemo(
    () => (Number(quarterMean) - Number(keelCorrection) - 0.1).toFixed(2),
    [quarterMean, keelCorrection]
  );

  const quarterPlus50Calculated = useMemo(
    () => (Number(quarterMean) - Number(keelCorrection) + 0.5).toFixed(2),
    [quarterMean, keelCorrection]
  );

  const quarterMinus50Calculated = useMemo(
    () => (Number(quarterMean) - Number(keelCorrection) - 0.5).toFixed(2),
    [quarterMean, keelCorrection]
  );

  // Pour la partie final 
  const draftSupFinalCalculated = useMemo(
    () => (Number(quarterMeanFinal) - Number(keelCorrectionFinal) + 0.1).toFixed(2),
    [quarterMeanFinal, keelCorrectionFinal]
  );

  const draftInfFinalCalculated = useMemo(
    () => (Number(quarterMeanFinal) - Number(keelCorrectionFinal) - 0.1).toFixed(2),
    [quarterMeanFinal, keelCorrectionFinal]
  );

  const quarterPlus50FinalCalculated = useMemo(
    () => (Number(quarterMeanFinal) - Number(keelCorrectionFinal) + 0.5).toFixed(2),
    [quarterMeanFinal, keelCorrectionFinal]
  );

  const quarterMinus50FinalCalculated = useMemo(
    () => (Number(quarterMeanFinal) - Number(keelCorrectionFinal) - 0.5).toFixed(2),
    [quarterMeanFinal, keelCorrectionFinal]
  );



  const displacementDstyCorrectedFinalCalculated = useMemo(
    () =>
      calculateDisplacementDstyCorrectedFinal(
        displacementTrimCorrectedFinalCalculated,
        densityFinal
      ),
    [displacementTrimCorrectedFinalCalculated, densityFinal]
  );

  const totalFinalCalculated = useMemo(
    () =>
      calculateTotalFinal(
        ballastFinal,
        freshWaterFinal,
        fuelFinal,
        dieselFinal,
        lubOilFinal,
        othersFinal
      ),
    [
      ballastFinal,
      freshWaterFinal,
      fuelFinal,
      dieselFinal,
      lubOilFinal,
      othersFinal,
    ]
  );

  const netLoadCalculated = useMemo(
    () =>
      calculateNetLoad(totalFinalCalculated, displacementDstyCorrectedFinal),
    [totalFinalCalculated, displacementDstyCorrectedFinal]
  );

  const cargoCalculated = useMemo(
    () => calculateCargo(netLoadCalculated, netLightCalculated),
    [netLoadCalculated, netLightCalculated]
  );


  const handleDraftSurvey = (e) => {
    e.preventDefault();
    
    // Vérifier si l'utilisateur est authentifié
    if (!auth.currentUser) {
      alert('Veuillez vous connecter avant de soumettre le rapport.');
      return;
    }
  
    // Vérifier si tous les champs sont remplis
    if (!lbp || !keelCorrection || !foreDistance || !aftDistance ||
      !midDistance || !forePort || !foreStbd || !meanFore || !aftPort ||
      !aftStbd || !meanAft || !midPort || !midStbd || !meanMid || !trim ||
      !lbm || !foreCorrected || !aftCorrected || !midCorrected || !trimCorrected ||
      !meanOfMean || !quarterMean || !meanForeAft || !density || !ballast || !freshWater ||
      !fuel || !diesel || !lubOil || !others || !lightship || !constant || !netLight ||
      !netLoad || !cargo || !total || !displacement || !displacementFinal || !keelCorrectionFinal ||
      !densityFinal || !forePortFinal || !foreStbdFinal || !foreDistanceFinal ||
      !aftPortFinal || !aftStbdFinal || !aftDistanceFinal || !midPortFinal ||
      !midStbdFinal || !midDistanceFinal || !trimFinal || !lbmFinal || !draftSupFinal || !draftInfFinal) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
  

    // creation d'un objet draftSurveyReport
    const draftSurveyReport = {
      lbp,
      keelCorrection,
      keelCorrectionFinal,
      forePort,
      forePortFinal,
      foreStbd,
      foreStbdFinal,
      foreDistance,
      foreDistanceFinal,
      aftPort,
      aftPortFinal,
      aftStbd,
      aftStbdFinal,
      aftDistance,
      aftDistanceFinal,
      midPort,
      midPortFinal,
      midStbd,
      midStbdFinal,
      midDistance,
      midDistanceFinal,
      displacementSup,
      displacementSupFinal,
      tpcSup,
      tpcSupFinal,
      lcfSup,
      lcfSupFinal,
      draftSup,
      draftSupFinal,
      draftInf,
      draftInfFinal,
      mtcMinus50,
      mtcMinus50Final,
      mtcPlus50,
      mtcPlus50Final,
      ballast,
      ballastFinal,
      freshWater,
      freshWaterFinal,
      fuel,
      fuelFinal,
      diesel,
      dieselFinal,
      lubOil,
      lubOilFinal,
      others,
      othersFinal,
      lightship,
      constant,
      netLight,
      netLoad,
      cargo,
      total,
      displacement,
      density,
      densityFinal,
      createdBy: auth.currentUser.uid,
      createdAt: new Date(),
    };

    // Enregistrement dans Firestore
    try {
      const docRef =  addDoc(collection(db, 'draftSurveyReports'), draftSurveyReport);
      console.log('Draft survey report saved successfully!');
      alert('Draft survey report saved successfully!');
      // clearValues();
    } catch (error) {
      console.error('Error saving draft survey report:', error);
      alert('Failed to save draft survey report');
    } finally {
      setLoading(false);
    }
  };





  //  fonction to Clear the fields:
  const clearValues = () => {
    setLbp("");
    setKeelCorrection("");
    setForeDistance("");
    setAftDistance("");
    setMidDistance("");
    setForePort("");
    setForeStbd("");
    setMeanFore("");
    setAftPort("");
    setAftStbd("");
    setMeanAft("");
    setMidPort("");
    setMidStbd("");
    setMeanMid("");
    setTrim("");
    setLbm("");
    setForeCorrected("");
    setAftCorrected("");
    setMidCorrected("");
    setTrimCorrected("");
    setMeanOfMean("");
    setQuarterMean("");
    setMeanForeAft("");
    setDensity("");
    setDraftSup("");
    setDraftInf("");
    setDisplacementSup("");
    setDisplacementInf("");
    setDisplacement("");
    setTpc("");
    setTpcSup("");
    setLcfSup("");
    setTpcInf("");
    setLcfInf("");
    setLcf("");
    setQuarter("");
    setMtcPlus50("");
    setQuarterPlus50("");
    setQuarterMinus50("");
    setMtcMinus50("");
    setFirstTrimCorrection("");
    setSecondTrimCorrection("");
    setDisplacementTrimCorrected("");
    setDisplacementDstyCorrected("");
    setBallast("");
    setFreshWater("");
    setFuel("");
    setDiesel("");
    setLubOil("");
    setOthers("");
    setTotal("");
    setLightship("");
    setConstant("");
    setNetLight("");
    setNetLoad("");
    setCargo("");
    setKeelCorrectionFinal("");
    setDensityFinal("");
    setKeelCorrection("");
    setForePortFinal("");
    setForeDistanceFinal("");
    setAftDistanceFinal("");
    setMidDistanceFinal("");
    setForeStbdFinal("");
    setMeanForeFinal("");
    setAftPortFinal("");
    setAftStbdFinal("");
    setMeanAftFinal("");
    setMidPortFinal("");
    setMidStbdFinal("");
    setMeanMidFinal("");
    setTrimFinal("");
    setLbmFinal("");
    setForeCorrectedFinal("");
    setAftCorrectedFinal("");
    setMidCorrectedFinal("");
    setTrimCorrectedFinal("");
    setMeanForeAftFinal("");
    setMeanOfMeanFinal("");
    setQuarterMeanFinal("");
    setDraftSupFinal("");
    setDraftInfFinal("");
    setDisplacementSupFinal("");
    setDisplacementInfFinal("");
    setDisplacementFinal("");
    setTpcFinal("");
    setTpcSupFinal("");
    setTpcInfFinal("");
    setLcfFinal("");
    setLcfSupFinal("");
    setLcfInfFinal("");
    setQuarterMinus50Final("");
    setQuarterPlus50Final("");
    setMtcMinus50Final("");
    setMtcPlus50Final("");
    setBallastFinal("");
    setFreshWaterFinal("");
    setFuelFinal("");
    setDieselFinal("");
    setLubOilFinal("");
    setOthersFinal("");
    setTotalFinal("");
    setDisplacementTrimCorrectedFinal("");
    setDisplacementDstyCorrectedFinal("");
    alert('Champs clairs');

  };

  // Update state with calculated values
  useEffect(() => {
    setMeanFore(meanForeCalculated);
    setMeanAft(meanAftCalculated);
    setMeanMid(meanMidCalculated);
    setTrim(trimCalculated);
    setLbm(lbmCalculated);
    setForeCorrected(foreCorrectedCalculated);
    setAftCorrected(aftCorrectedCalculated);
    setMidCorrected(midCorrectedCalculated);
    setTrimCorrected(trimCorrectedCalculated);
    setMeanForeAft(meanForeAftCalculated);
    setMeanOfMean(meanOfMeanCalculated);
    setQuarterMean(quarterMeanCalculated);
    setDisplacement(displacementCalculated);
    setTpc(tpcCalculated);
    setLcf(lcfCalculated);
    setFirstTrimCorrection(firstTrimCorrectionCalculated);
    setSecondTrimCorrection(secondTrimCorrectionCalculated);
    setDisplacementTrimCorrected(displacementTrimCorrectedCalculated);
    setDisplacementDstyCorrected(displacementDstyCorrectionCalculated);
    setTotal(totalCalculated);
    setNetLight(netLightCalculated);
    setConstant(constantCalculated);
    setNetLoad(netLoadCalculated);
    setCargo(cargoCalculated);

    setMeanForeFinal(meanForeFinalCalculated);
    setMeanAftFinal(meanAftFinalCalculated);
    setMeanMidFinal(meanMidFinalCalculated);
    setTrimFinal(trimFinalCalculated);
    setLbmFinal(lbmFinalCalculated);
    setForeCorrectedFinal(foreCorrectedFinalCalculated);
    setAftCorrectedFinal(aftCorrectedFinalCalculated);
    setMidCorrectedFinal(midCorrectedFinalCalculated);
    setTrimCorrectedFinal(trimCorrectedFinalCalculated);
    setMeanForeAftFinal(meanForeAftFinalCalculated);
    setMeanOfMeanFinal(meanOfMeanFinalCalculated);
    setQuarterMeanFinal(quarterMeanFinalCalculated);
    setDisplacementFinal(displacementFinalCalculated);
    setTpcFinal(tpcFinalCalculated);
    setLcfFinal(lcfFinalCalculated);
    setLcfSupFinal(lcfSupFinal);
    setLcfInfFinal(lcfInfFinal);
    setFirstTrimCorrectionFinal(firstTrimCorrectionFinalCalculated);
    setSecondTrimCorrectionFinal(secondTrimCorrectionFinalCalculated);
    setDisplacementTrimCorrectedFinal(displacementTrimCorrectedFinalCalculated);
    setDisplacementDstyCorrectedFinal(displacementDstyCorrectedFinalCalculated);
    setTotalFinal(totalFinalCalculated);
    setNetLoad(netLoadCalculated);
    setDraftSup(draftSupCalculated);
    setDraftInf(draftInfCalculated);
    setQuarterPlus50(quarterPlus50Calculated);
    setQuarterMinus50(quarterMinus50Calculated);
    setKeelCorrectionFinal(keelCorrectionFinal);
    setDraftSupFinal(draftSupFinalCalculated);
    setDraftInfFinal(draftInfFinalCalculated);
    setQuarterPlus50Final(quarterPlus50FinalCalculated);
    setQuarterMinus50Final(quarterMinus50FinalCalculated);
    setQuarterMeanFinal(quarterMeanFinalCalculated);
  }, [
    meanForeCalculated,
    meanAftCalculated,
    meanMidCalculated,
    trimCalculated,
    lbmCalculated,
    foreCorrectedCalculated,
    aftCorrectedCalculated,
    midCorrectedCalculated,
    trimCorrectedCalculated,
    meanForeAftCalculated,
    meanOfMeanCalculated,
    quarterMeanCalculated,
    displacementCalculated,
    tpcCalculated,
    lcfCalculated,
    firstTrimCorrectionCalculated,
    secondTrimCorrectionCalculated,
    displacementTrimCorrectedCalculated,
    displacementDstyCorrectionCalculated,
    totalCalculated,
    netLightCalculated,
    constantCalculated,
    netLoadCalculated,
    netLoad,
    cargoCalculated,
    cargo,
    meanForeFinalCalculated,
    meanAftFinalCalculated,
    meanMidFinalCalculated,
    trimFinalCalculated,
    lbmFinalCalculated,
    foreCorrectedFinalCalculated,
    aftCorrectedFinalCalculated,
    midCorrectedFinalCalculated,
    trimCorrectedFinalCalculated,
    meanForeAftFinalCalculated,
    meanOfMeanFinalCalculated,
    quarterMeanFinal,

    keelCorrection,
    displacementFinalCalculated,
    tpcFinalCalculated,
    lcfFinalCalculated,

    lcfSupFinal,
    lcfInfFinal,
    firstTrimCorrectionFinalCalculated,
    secondTrimCorrectionFinalCalculated,
    freshWater,
    freshWaterFinal,
    displacementTrimCorrectedFinalCalculated,
    totalFinal,
    ballast,
    ballastFinal,
    totalFinalCalculated,
    displacementDstyCorrectedFinalCalculated,
    draftSup,
    draftInf,
    draftSupCalculated,
    draftInfCalculated,
    quarterPlus50Calculated,
    quarterMinus50Calculated,
    quarterMinus50,
    quarterPlus50,
    quarterMeanFinal,
    quarterMeanFinalCalculated,
    keelCorrection,
    keelCorrectionFinal,
    draftSupFinalCalculated,
    draftInfFinalCalculated,
    quarterPlus50FinalCalculated,
    quarterMinus50FinalCalculated,
  ]);

  // useEffect(() => {
  //   if (quarterMean) {
  //     const calculatedDraftSup =Math.round((Number(quarterMean) - Number(keelCorrection)) + 0.1).toFixed(2);
  //     const calculatedDraftInf = Math.round((Number(quarterMean) - Number(keelCorrection)) - 0.1).toFixed(2);

  //     const calculatedQuarterPlus50 = Math.round(((Number(quarterMean) - Number(keelCorrection)) + 0.5).toFixed(2));
  //     const calculatedQuarterMinus50 = Math.round(((Number(quarterMean) - Number(keelCorrection)) - 0.5).toFixed(2));


  //     setDraftSup(calculatedDraftSup);
  //     setDraftInf(calculatedDraftInf);
  //     setQuarterPlus50(calculatedQuarterPlus50);
  //     setQuarterMinus50(calculatedQuarterMinus50);
  //   }
  // }, [quarterMean, keelCorrection]); // Dépendance sur quarterMean
  // Ajoutez draftInf ici

  // Pour le calcul automatic Final

  // useEffect(() => {
  //   if (quarterMeanFinal) {
  //     const calculatedDraftSupFinal = Math.round((Number(quarterMeanFinal) - Number(keelCorrectionFinal)) + 0.1).toFixed(2);
  //     const calculatedDraftInfFinal = Math.round((Number(quarterMeanFinal) - Number(keelCorrectionFinal)) - 0.1).toFixed(2);

  //     const calculatedQuarterPlus50Final = Math.round((Number(quarterMeanFinal) - Number(keelCorrectionFinal)) + 0.5).toFixed(2);
  //     const calculatedQuarterMinus50Final = Math.round((Number(quarterMeanFinal) - Number(keelCorrectionFinal)) - 0.5).toFixed(2);


  //     setDraftSupFinal(calculatedDraftSupFinal);
  //     setDraftInfFinal(calculatedDraftInfFinal);
  //     setQuarterPlus50Final(calculatedQuarterPlus50Final);
  //     setQuarterMinus50Final(calculatedQuarterMinus50Final);
  //   }
  // }, [quarterMeanFinal, keelCorrectionFinal]);



  return (
    <>
      <Box m="20px" id="printMe">
        <Header title="Mv Arklow Rainbow" subtitle="Draft Survey Calculation" />
        < VesselInfos />
        <Grid container spacing={3}>
          {/**INITIAL */}

          <Grid container
            direction="row"  // Force l'alignement horizontal
            spacing={3}      // Augmente l'espacement entre les éléments
            sx={{
              display: 'flex',
              justifyContent: 'center', // Aligne les éléments depuis le début
              alignItems: 'center',
              mt: 4,
              gap: 4,        // Ajoute un espacement supplémentaire entre les éléments

            }}>
            <Grid  >

              <TextField
                sx={{ width: "130px" }}
                variant="filled"
                type="number"
                label="Lbp"
                value={lbp}
                onChange={(e) => setLbp(e.target.value)}
              />
            </Grid>
            {/**CheckBox pour choisir le type de draft: Loading or Discharging */}
            <Grid item xs={6} sm={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isLoading}
                    onChange={(e) => {
                      setIsLoading(e.target.checked);
                      if (e.target.checked) {
                        setIsDischarging(false);
                      }
                    }}
                    sx={{
                      color: colors.greenAccent[500], // Couleur par défaut
                      '&.Mui-checked': {
                        color: colors.greenAccent[800], // Couleur quand coché
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: 34, // Taille de l'icône
                      },
                      '&:hover': {
                        backgroundColor: colors.greenAccent[200], // Effet hover
                      },
                    }}
                  />
                }
                label="Loading"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '1rem',
                    fontWeight: isLoading ? 600 : 400,
                    color: isLoading ? colors.greenAccent[700] : 'text.primary',
                    transition: 'all 0.2s ease-in-out',
                  },
                }}
              />
            </Grid>

            <Grid item xs={6} sm={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!isLoading}
                    onChange={(e) => {
                      setIsLoading(!e.target.checked);
                      if (e.target.checked) {
                        setIsLoading(false);
                      }
                    }}
                    sx={{
                      color: colors.greenAccent[500], // Couleur par défaut
                      '&.Mui-checked': {
                        color: colors.greenAccent[700], // Couleur quand coché
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: 34, // Taille de l'icône
                      },
                      '&:hover': {
                        backgroundColor: colors.greenAccent[200], // Effet hover
                      },
                    }}
                  />
                }
                label="Discharging"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '1rem',
                    fontWeight: !isLoading ? 600 : 400,
                    color: !isLoading ? colors.greenAccent[700] : 'text.primary',
                    transition: 'all 0.2s ease-in-out',
                  },
                }}
              />
            </Grid>
            {/* grid pour le bouton Submit the draft survey */}
            <Grid item xs={12} sm={3}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleDraftSurvey}
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
                Submit
              </Button>
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
                    disabled
                    variant="standard"
                    label="Trim"
                    value={trim}
                    onChange={(e) => setTrim(e.target.value)}
                    sx={{
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    disabled
                    variant="standard"
                    label="Lbm"
                    value={lbm}
                    onChange={(e) => setLbm(e.target.value)}
                    sx={{
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    variant="standard"
                    label="Mean Fore"
                    value={meanFore}
                    onChange={(e) => setMeanFore(e.target.value)}
                    sx={{
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    variant="standard"
                    label="Mean Aft"
                    value={meanAft}
                    onChange={(e) => setMeanAft(e.target.value)}
                    sx={{
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    variant="standard"
                    label="Mean Mid"
                    value={meanMid}
                    onChange={(e) => setMeanMid(e.target.value)}
                    sx={{
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    variant="standard"
                    type="number"
                    label="Fore Corrected"
                    value={foreCorrected}
                    onChange={(e) => setForeCorrected(e.target.value)}
                    sx={{
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    disabled
                    variant="standard"
                    label="Aft Corrected"
                    value={aftCorrected}
                    onChange={(e) => setAftCorrected(e.target.value)}
                    sx={{
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>

                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    disabled
                    variant="standard"
                    label="Mid Corrected"
                    value={midCorrected}
                    onChange={(e) => setMidCorrected(e.target.value)}
                    sx={{
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    variant="standard"
                    type="number"
                    label="Trim Corrected"
                    value={trimCorrected}
                    onChange={(e) => setTrimCorrected(e.target.value)}
                    sx={{
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    disabled
                    variant="standard"
                    label="Mean Fore Aft"
                    value={meanForeAft}
                    onChange={(e) => setMeanForeAft(e.target.value)}
                    sx={{
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    disabled
                    variant="standard"
                    label="Mean Of Mean"
                    value={meanOfMean}
                    onChange={(e) => setMeanOfMean(e.target.value)}
                    sx={{
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    disabled
                    variant="standard"
                    label="Quarter Mean"
                    value={(Number(quarterMean) - Number(keelCorrection)).toFixed(2)}
                    onChange={(e) => setQuarterMean(e.target.value)}
                    sx={{
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    disabled
                    variant="standard"
                    type="number"
                    label="Draft Inf"
                    value={draftInf}
                    onChange={(e) => setDraftInf(e.target.value)}

                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    disabled
                    variant="standard"
                    label="Quarter +50"
                    value={quarterPlus50}
                    onChange={(e) => setQuarterPlus50(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    disabled
                    variant="standard"
                    type="number"
                    label="Quarter"
                    value={(Number(quarterMean) - Number(keelCorrection)).toFixed(2)}
                    onChange={(e) => setQuarterMean(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={4} sm={2}>
                  <TextField
                    disabled
                    variant="standard"
                    label="Displacement"
                    value={displacement}
                    onChange={(e) => setDisplacement(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={4} sm={2}>
                  <TextField
                    disabled
                    variant="standard"
                    label="Tpc"
                    value={tpc}
                    onChange={(e) => setTpc(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={4} sm={2}>
                  <TextField
                    disabled
                    variant="standard"
                    label="Lcf"
                    value={lcf}
                    onChange={(e) => setLcf(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>

                <Grid item xs={4} sm={2}>
                  <TextField
                    disabled
                    variant="standard"
                    label="MTC"
                    value={(Number(mtcPlus50) - Number(mtcMinus50)).toFixed(2)}
                    onChange={(e) => setMtc(e.target.value)}
                    sx={{
                      width: "120px",
                      marginLeft: "50px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            {/**9éme ligne Hydrostatic table */}
            <Grid item xs={12}>
              <Grid container spacing={0.5} alignItems="center">
                <Grid item xs={4} sm={2}>
                  <TextField
                    disabled
                    variant="standard"
                    type="number"
                    label="Draft Sup"
                    value={draftSup}
                    onChange={(e) => setDraftSup(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    disabled
                    variant="standard"
                    label="Quarter -50"
                    value={quarterMinus50}
                    onChange={(e) => setQuarterMinus50(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                    disabled
                    variant="standard"
                    type="number"
                    label="F t C"
                    value={firstTrimCorrection}
                    onChange={(e) => setFirstTrimCorrection(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                    disabled
                    variant="standard"
                    label="S T C "
                    value={secondTrimCorrection}
                    onChange={(e) => setSecondTrimCorrection(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                    disabled
                    variant="standard"
                    label="D C T"
                    value={displacementTrimCorrected}
                    onChange={(e) => setDisplacementTrimCorrected(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                    disabled
                    variant="standard"
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
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                    disabled
                    variant="standard"
                    type="number"
                    label="Total"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                  />
                </Grid>
                {!isLoading ? ( // Inversé la condition pour plus de clarté logique
                  <>
                    <Grid item xs={4} sm={2}>
                      <TextField
                        sx={{
                          width: "100px",
                          '& .MuiInputLabel-root': {
                            // Style pour le label
                            transform: 'translate(0, -1.5px) scale(0.75)',
                            transformOrigin: 'top left',
                            '&.Mui-disabled': {
                              color: colors.greenAccent[500], // Garde le label visible même en disabled
                            },
                          },
                          '& .MuiInput-root': {
                            // Style pour l'input
                            marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                          },

                        }}
                        disabled
                        variant="standard"
                        label="Net Load"
                        value={netLoad}
                        onChange={(e) => setNetLoad(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={4} sm={2}>
                      <TextField
                        sx={{
                          width: "100px",
                          '& .MuiInputLabel-root': {
                            // Style pour le label
                            transform: 'translate(0, -1.5px) scale(0.75)',
                            transformOrigin: 'top left',
                            '&.Mui-disabled': {
                              color: colors.greenAccent[500], // Garde le label visible même en disabled
                            },
                          },
                          '& .MuiInput-root': {
                            // Style pour l'input
                            marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                          },

                        }}
                        disabled
                        variant="standard"
                        label="Cargo + Cst"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                      />
                    </Grid>
                  </>
                ) : ( // Si isLoading est true
                  <>
                    <Grid item xs={4} sm={2}>
                      <TextField
                        sx={{
                          width: "100px",
                          '& .MuiInputLabel-root': {
                            // Style pour le label
                            transform: 'translate(0, -1.5px) scale(0.75)',
                            transformOrigin: 'top left',
                            '&.Mui-disabled': {
                              color: colors.greenAccent[500], // Garde le label visible même en disabled
                            },
                          },
                          '& .MuiInput-root': {
                            // Style pour l'input
                            marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                          },

                        }}
                        disabled
                        variant="standard"
                        label="Net Light"
                        value={netLight}
                        onChange={(e) => setNetLight(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={4} sm={2}>
                      <TextField
                        sx={{
                          width: "100px",
                          '& .MuiInputLabel-root': {
                            // Style pour le label
                            transform: 'translate(0, -1.5px) scale(0.75)',
                            transformOrigin: 'top left',
                            '&.Mui-disabled': {
                              color: colors.greenAccent[500], // Garde le label visible même en disabled
                            },
                          },
                          '& .MuiInput-root': {
                            // Style pour l'input
                            marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                          },

                        }}
                        disabled
                        variant="standard"
                        label="Constant"
                        value={constant}
                        onChange={(e) => setConstant(e.target.value)}
                      />
                    </Grid>
                  </>
                )}
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
                    disabled
                    variant="standard"
                    label="Trim"
                    value={trimFinal}
                    onChange={(e) => setTrimFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    disabled
                    variant="standard"
                    label="Lbm"
                    value={lbmFinal}
                    onChange={(e) => setLbmFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    variant="standard"
                    label="Mean Fore"
                    value={meanForeFinal}
                    onChange={(e) => setMeanForeFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    variant="standard"
                    label="Mean Aft"
                    value={meanAftFinal}
                    onChange={(e) => setMeanAftFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    variant="standard"
                    label="Mean Mid"
                    value={meanMidFinal}
                    onChange={(e) => setMeanMidFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    variant="standard"
                    type="number"
                    label="Fore Corrected"
                    value={foreCorrectedFinal}
                    onChange={(e) => setForeCorrectedFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    disabled
                    variant="standard"
                    label="Aft Corrected"
                    value={aftCorrectedFinal}
                    onChange={(e) => setAftCorrectedFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>

                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    disabled
                    variant="standard"
                    label="Mid Corrected"
                    value={midCorrectedFinal}
                    onChange={(e) => setMidCorrectedFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    variant="standard"
                    type="number"
                    label="Trim Corrected"
                    value={trimCorrectedFinal}
                    onChange={(e) => setTrimCorrectedFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    disabled
                    variant="standard"
                    label="Mean Fore Aft"
                    value={meanForeAftFinal}
                    onChange={(e) => setMeanForeAftFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    disabled
                    variant="standard"
                    label="Mean Of Mean"
                    value={meanOfMeanFinal}
                    onChange={(e) => setMeanOfMeanFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    disabled
                    variant="standard"
                    label="Quarter Mean"
                    value={(Number(quarterMeanFinal) - Number(keelCorrectionFinal)).toFixed(2)}
                    onChange={(e) => setQuarterMeanFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    disabled
                    variant="standard"
                    type="number"
                    label="Draft Inf"
                    value={draftInfFinal}
                    onChange={(e) => setDraftInfFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    disabled
                    variant="standard"
                    label="Quarter +50"
                    value={quarterPlus50Final}
                    onChange={(e) => setQuarterPlus50Final(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    disabled
                    variant="standard"
                    type="number"
                    label="Quarter"
                    value={quarterMeanFinal}
                    onChange={(e) => setQuarterMeanFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={4} sm={2}>
                  <TextField
                    disabled
                    variant="standard"
                    type="number"
                    label="Displacement"
                    value={displacementFinal}
                    onChange={(e) => setDisplacementFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={4} sm={2}>
                  <TextField
                    disabled
                    variant="standard"
                    type="number"
                    label="Tpc"
                    value={tpcFinal}
                    onChange={(e) => setTpcFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
                <Grid item xs={4} sm={2}>
                  <TextField
                    disabled
                    variant="standard"
                    type="number"
                    label="Lcf"
                    value={lcfFinal}
                    onChange={(e) => setLcfFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>

                <Grid item xs={4} sm={2}>
                  <TextField
                    disabled
                    variant="standard"
                    type="number"
                    label="MTC"
                    value={(Number(mtcPlus50Final) - Number(mtcMinus50Final)).toFixed(2)}
                    onChange={(e) => setMtcFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      marginLeft: "50px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            {/**9éme ligne Hydrostatic table */}
            <Grid item xs={12}>
              <Grid container spacing={0.5} alignItems="center">
                <Grid item xs={4} sm={2}>
                  <TextField
                    disabled
                    variant="standard"
                    type="number"
                    label="Draft Sup"
                    value={draftSupFinal}
                    onChange={(e) => setDraftSupFinal(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    disabled
                    variant="standard"
                    label="Quarter -50"
                    value={quarterMinus50Final}
                    onChange={(e) => setQuarterMinus50Final(e.target.value)}
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
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
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                    disabled
                    variant="standard"
                    type="number"
                    label="F t C"
                    value={firstTrimCorrectionFinal}
                    onChange={(e) => setFirstTrimCorrectionFinal(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                    disabled
                    variant="standard"
                    label="S T C "
                    value={secondTrimCorrectionFinal}
                    onChange={(e) => setSecondTrimCorrectionFinal(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                    disabled
                    variant="standard"
                    label="D C T"
                    value={displacementTrimCorrectedFinal}
                    onChange={(e) => setDisplacementTrimCorrectedFinal(e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                    disabled
                    variant="standard"
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

                <Grid item xs={4} sm={2} >
                  <TextField
                    sx={{
                      width: "100px",
                      '& .MuiInputLabel-root': {
                        // Style pour le label
                        transform: 'translate(0, -1.5px) scale(0.75)',
                        transformOrigin: 'top left',
                        '&.Mui-disabled': {
                          color: colors.greenAccent[500], // Garde le label visible même en disabled
                        },
                      },
                      '& .MuiInput-root': {
                        // Style pour l'input
                        marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                      },

                    }}
                    disabled
                    variant="standard"
                    type="number"
                    label="Total"
                    value={totalFinal}
                    onChange={(e) => setTotalFinal(e.target.value)}
                  />
                </Grid>
                {!isLoading ? (
                  <>
                    <Grid item xs={4} sm={2}>
                      <TextField
                        sx={{
                          width: "100px",
                          '& .MuiInputLabel-root': {
                            // Style pour le label
                            transform: 'translate(0, -1.5px) scale(0.75)',
                            transformOrigin: 'top left',
                            '&.Mui-disabled': {
                              color: colors.greenAccent[500], // Garde le label visible même en disabled
                            },
                          },
                          '& .MuiInput-root': {
                            // Style pour l'input
                            marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                          },

                        }}
                        disabled
                        variant="standard"
                        label="Net Light"
                        value={netLight}
                        onChange={(e) => setNetLight(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={4} sm={2}>
                      <TextField
                        sx={{
                          width: "100px",
                          '& .MuiInputLabel-root': {
                            // Style pour le label
                            transform: 'translate(0, -1.5px) scale(0.75)',
                            transformOrigin: 'top left',
                            '&.Mui-disabled': {
                              color: colors.greenAccent[500], // Garde le label visible même en disabled
                            },
                          },
                          '& .MuiInput-root': {
                            // Style pour l'input
                            marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                          },

                        }}
                        disabled
                        variant="standard"
                        label="Constant"
                        value={constant}
                        onChange={(e) => setConstant(e.target.value)}
                      />
                    </Grid>
                  </>) : (
                  <>
                    <Grid item xs={4} sm={2}>
                      <TextField
                        sx={{
                          width: "100px",
                          '& .MuiInputLabel-root': {
                            // Style pour le label
                            transform: 'translate(0, -1.5px) scale(0.75)',
                            transformOrigin: 'top left',
                            '&.Mui-disabled': {
                              color: colors.greenAccent[500], // Garde le label visible même en disabled
                            },
                          },
                          '& .MuiInput-root': {
                            // Style pour l'input
                            marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                          },

                        }}
                        disabled
                        variant="standard"
                        label="Net Load"
                        value={netLoad}
                        onChange={(e) => setNetLoad(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={4} sm={2}>
                      <TextField
                        sx={{
                          width: "100px",
                          '& .MuiInputLabel-root': {
                            // Style pour le label
                            transform: 'translate(0, -1.5px) scale(0.75)',
                            transformOrigin: 'top left',
                            '&.Mui-disabled': {
                              color: colors.greenAccent[500], // Garde le label visible même en disabled
                            },
                          },
                          '& .MuiInput-root': {
                            // Style pour l'input
                            marginTop: '16px', // Ajoute de l'espace entre le label et la valeur
                          },

                        }}
                        disabled
                        variant="standard"
                        label="Cargo"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                      />
                    </Grid>
                  </>)}

              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: "120px",
            borderBottom: "5px solid",
            color: colors.blueAccent[200],
          }}
        >
        </Box>
      </Box>

      <Footer />
    </>
  );
}
