/* eslint-disable no-unused-vars */
import { hydrostatic_table } from "../data/hydrostatic_table"; // Assurez-vous que le chemin est correct

//  Fonctions de la logique section initial
export const calculateMeanFore = (forePort, foreStbd) => {
  const meanFore = ((Number(forePort) || 0) + (Number(foreStbd) || 0)) / 2;

  return meanFore.toFixed(2);
};

export const calculateMeanAft = (aftPort, aftStbd) => {
  const meanAft = ((Number(aftPort) || 0) + (Number(aftStbd) || 0)) / 2;

  return meanAft.toFixed(2);
};

export const calculateMeanMid = (midPort, midStbd) => {
  const meanMid = ((Number(midPort) || 0) + (Number(midStbd) || 0)) / 2;
  return meanMid.toFixed(2);
};

export const calculateTrim = (meanAft, meanFore) => {
  const trim = Number(meanAft) - Number(meanFore);

  return trim.toFixed(2);
};

export const calculateLbm = (foreDistance, aftDistance, lbp) => {
  // Ensure lbp, foreDistance, and aftDistance have valid numeric values
  const lbpValue = Number(lbp) || 0;
  const foreDistanceValue = Number(foreDistance) || 0;
  const aftDistanceValue = Number(aftDistance) || 0;

  let lbm = lbpValue;

  // Calcul du LBM en fonction des types de distance
  if (foreDistanceValue < 0 && aftDistanceValue > 0) {
    // LBM = LBP - Distance Avant - Distance Arrière
    lbm = lbpValue - foreDistanceValue - aftDistanceValue;
  } else if (foreDistanceValue > 0 && aftDistanceValue < 0) {
    // LBM = LBP + Distance Avant + Distance Arrière
    lbm = lbpValue + foreDistanceValue + aftDistanceValue;
  } else if (foreDistanceValue < 0 && aftDistanceValue < 0) {
    // LBM = LBP - Distance Avant - Distance Arrière
    lbm = lbpValue - foreDistanceValue - aftDistanceValue;
  } else if (foreDistanceValue > 0 && aftDistanceValue > 0) {
    // LBM = LBP + Distance Avant - Distance Arrière
    lbm = lbpValue + foreDistanceValue - aftDistanceValue;
  } else if (foreDistanceValue === 0 && aftDistanceValue < 0) {
    // LBM = LBP - Distance Arrière
    lbm = lbpValue - aftDistanceValue;
  } else if (foreDistanceValue === 0 && aftDistanceValue > 0) {
    // LBM = LBP - Distance Arrière
    lbm = lbpValue - aftDistanceValue;
  } else if (foreDistanceValue < 0 && aftDistanceValue === 0) {
    // LBM = LBP - Distance Avant
    lbm = lbpValue - foreDistanceValue;
  } else if (foreDistanceValue > 0 && aftDistanceValue === 0) {
    // LBM = LBP + Distance Avant
    lbm = lbpValue + foreDistanceValue;
  } else if (foreDistanceValue === 0 && aftDistanceValue === 0) {
    // LBM = LBP
    lbm = lbpValue;
  }
  return lbm.toFixed(2); // Convert lbm to meters
};

export const calculateForeCorrected = (trim, foreDistance, lbm, meanFore) => {
  // Convert inputs to numbers
  const trimValue = Number(trim);
  const foreDistanceValue = Number(foreDistance);
  const lbmValue = Number(lbm);
  const meanForeValue = Number(meanFore);

  // Validate inputs
  if (
    isNaN(trimValue) ||
    isNaN(foreDistanceValue) ||
    isNaN(lbmValue) ||
    isNaN(meanForeValue)
  ) {
    console.error("Invalid inputs for foreCorrected calculation");
    return "0.00";
  }

  // Perform fore corrected calculation
  let foreCorrected;
  if (foreDistanceValue < 0) {
    foreCorrected = meanForeValue + ((trimValue * foreDistanceValue) / lbmValue);
  } else if (foreDistanceValue > 0) {
    foreCorrected =
      meanForeValue +
      ((trimValue * foreDistanceValue) / lbmValue);
  } else {
    foreCorrected = meanForeValue;
  }
  console.log('foreCorrected :', foreCorrected);
  return foreCorrected.toFixed(2);
};

export const calculateAftCorrected = (trim, aftDistance, lbm, meanAft) => {
  // Convert inputs to numbers
  const trimValue = Number(trim);
  const aftDistanceValue = Number(aftDistance);
  const lbmValue = Number(lbm);
  const meanAftValue = Number(meanAft);

  // Validate inputs
  if (
    isNaN(trimValue) ||
    isNaN(aftDistanceValue) ||
    isNaN(lbmValue) ||
    isNaN(meanAftValue)
  ) {
    console.error("Invalid inputs for aftCorrected calculation");
    return "0.00";
  }

  // Perform aft corrected calculation
  let aftCorrected;
  if (aftDistanceValue < 0) {
    aftCorrected =
      meanAftValue +
      ((trimValue * aftDistanceValue) / lbmValue);
  } else if (aftDistanceValue > 0) {
    aftCorrected =
      meanAftValue +
      ((trimValue * aftDistanceValue) / lbmValue);
  } else {
    aftCorrected = meanAftValue;
  }

  return aftCorrected.toFixed(2);
};

export const calculateMidCorrected = (trim, midDistance, lbm, meanMid) => {
  // Convert inputs to numbers
  const trimValue = Number(trim);
  const midDistanceValue = Number(midDistance);
  const lbmValue = Number(lbm);
  const meanMidValue = Number(meanMid);

  // Validate inputs
  if (trim == null || midDistance == null || lbm == null || meanMid == null) {
    throw new Error("Invalid inputs for midCorrected calculation");
  }

  // Perform mid corrected calculation
  let midCorrected;
  if (midDistanceValue < 0) {
    midCorrected =
      Number(meanMidValue) +
      ((Number(trimValue) * Number(midDistanceValue)) / Number(lbmValue));
  } else if (midDistanceValue > 0) {
    midCorrected =
      Number(meanMidValue) +
      ((Number(trimValue) * Number(midDistanceValue)) / Number(lbmValue));
  } else {
    midCorrected = Number(meanMidValue);
  }

  return midCorrected.toFixed(2);
};

export const calculateTrimCorrected = (meanAftCorrected, meanForeCorrected) => {
  const foreCorrectedValue = Number(meanForeCorrected);
  const aftCorrectedValue = Number(meanAftCorrected);


  const trimCorrected = aftCorrectedValue - foreCorrectedValue;

  return trimCorrected.toFixed(2);
};


export const calculateMeanForeAft = (calculatedForeCorrected, calculatedAftCorrected) => {
  let meanForeAft = 0;
  const foreCorrectedValue = Number(calculatedForeCorrected);
  const aftCorrectedValue = Number(calculatedAftCorrected);

  console.log('the foreCorrected :',foreCorrectedValue);
  console.log('the Aft Corrected :', aftCorrectedValue); 

  meanForeAft = (foreCorrectedValue + aftCorrectedValue) / 2;
  console.log('the meanForeAft :', meanForeAft);
  return meanForeAft.toFixed(3);
};

export const calculateMeanOfMean = (midCorrected, meanForeAft) => {
  let meanOfMean = 0;
  const midCorrectedValue = Number(midCorrected);
  const meanForeAftValue = Number(meanForeAft);

  meanOfMean = (midCorrectedValue + meanForeAftValue) / 2;
  return meanOfMean.toFixed(3);
};

export const calculateQuarterMean = (midCorrected, meanOfMean) => {
  let quarterMean = 0;
  const midCorrectedValue = Number(midCorrected);
  const meanOfMeanValue = Number(meanOfMean);

  quarterMean = (midCorrectedValue + meanOfMeanValue) / 2;
  return quarterMean.toFixed(3);
};


export const getHydrostaticValues = (draft, hydrostatic_table) => {
  console.log("Draft reçu:", draft); // Affiche le draft reçu
  console.log("Type de hydrostatic_table:", Array.isArray(hydrostatic_table)); // Vérifiez si c'est un tableau
  console.log("Tableau hydrostatique:", hydrostatic_table); // Affiche le tableau hydrostatique

  if (!Array.isArray(hydrostatic_table)) {
    console.error("hydrostatic_table n'est pas un tableau ou est undefined");
    return {
      displacement: 0,
      tpc: 0,
      lcf: 0,
      mtcPlus50: 0,
      mtcMinus50: 0,
    };
  }

  // Convertir le draft en nombre
  const draftValue = parseFloat(draft);
  console.log("Draft converti:", draftValue);
  if (isNaN(draftValue)) {
    console.error("Draft n'est pas un nombre valide :", draft);
    return {
      displacement: 0,
      tpc: 0,
      lcf: 0,
      mtcPlus50: 0,
      mtcMinus50: 0,
    };
  }

  // Vérifiez que le tableau hydrostatique contient des valeurs numériques pour DRAFT
  const entry = hydrostatic_table.find(item => {
    console.log("Comparaison:", parseFloat(item.DRAFT), draftValue); // Affiche la comparaison
    return parseFloat(item.DRAFT) === draftValue; // Assurez-vous que les deux sont des nombres
  });

  console.log("Entrée trouvée pour le draft:", entry); // Affiche l'entrée trouvée

  // Calculer les drafts ajustés pour quarterPlus50 et quarterMinus50
  const quarterPlus50 = (Number(Math.round(draftValue * 10) / 10) + 0.5).toFixed(2);
  const quarterMinus50 = (Number(Math.round(draftValue * 10) / 10) - 0.5).toFixed(2);

  const mtcEntryPlus = hydrostatic_table.find(item => {
    console.log("Comparaison pour MTC +0.5 (quarterPlus50):", parseFloat(item.DRAFT), parseFloat(quarterPlus50)); // Affiche la comparaison pour MTC +0.5
    return parseFloat(item.DRAFT) === parseFloat(quarterPlus50);
  });

  const mtcEntryMinus = hydrostatic_table.find(item => {
    console.log("Comparaison pour MTC -0.5 (quarterMinus50):", parseFloat(item.DRAFT), parseFloat(quarterMinus50)); // Affiche la comparaison pour MTC -0.5
    return parseFloat(item.DRAFT) === parseFloat(quarterMinus50);
  });

  console.log("Entrée trouvée pour MTC +0.5:", mtcEntryPlus); // Affiche l'entrée trouvée pour MTC +0.5
  console.log("Entrée trouvée pour MTC -0.5:", mtcEntryMinus); // Affiche l'entrée trouvée pour MTC -0.5

  if (entry) {
    return {
      displacement: entry.DISPLACEMENT,
      tpc: entry.TPC,
      lcf: entry.LCF,
      mtcPlus50: mtcEntryPlus ? mtcEntryPlus.MTC : 0, // Si mtcEntryPlus existe, retourner MTC, sinon 0
      mtcMinus50: mtcEntryMinus ? mtcEntryMinus.MTC : 0, // Si mtcEntryMinus existe, retourner MTC, sinon 0
    };
  } else {
    console.warn("Aucune entrée trouvée pour le draft donné :", draft);
    return {
      displacement: 0,
      tpc: 0,
      lcf: 0,
      mtcPlus50: 0, // Retourner 0 si aucune entrée trouvée
      mtcMinus50: 0, // Retourner 0 si aucune entrée trouvée
    };
  }
};

// Ajoutez une fonction pour obtenir les valeurs pour draftInf
export const getHydrostaticValuesInf = (draftInf, hydrostatic_table) => {
  return getHydrostaticValues(draftInf, hydrostatic_table);
};

// Ajoutez une fonction pour obtenir les valeurs pour draftInf
export const getHydrostaticValuesSup = (draftSup, hydrostatic_table) => {
  return getHydrostaticValues(draftSup, hydrostatic_table);
};


export const getMtcPlus50FromTable = (quarterPlus50, hydrostatic_table) => {
  const entry = hydrostatic_table.find(item => item.QUARTER_PLUS50 === parseFloat(quarterPlus50));
  return entry ? entry.MTC : 0; // Remplacez MTC_PLUS_50 par le nom de la colonne appropriée
};

export const getMtcMinus50FromTable = (quarterMinus50, hydrostatic_table) => {
  const entry = hydrostatic_table.find(item => item.QUARTER_MINUS50 === parseFloat(quarterMinus50));
  return entry ? entry.MTC : 0;
};
//  Calcul du displacement

export const calculateDisplacement = (
  draftInf,
  draftSup,
  quarterMean,
  displacementInf,
  displacementSup
) => {
  // Convert inputs to numbers with error handling
  const draftInfValue = Number(draftInf);
  const draftSupValue = Number(draftSup);
  const quarterMeanValue = Number(quarterMean);
  const displacementInfValue = Number(displacementInf);
  const displacementSupValue = Number(displacementSup);

  // Check for invalid inputs
  if (
    isNaN(draftInfValue) ||
    isNaN(draftSupValue) ||
    isNaN(quarterMeanValue) ||
    isNaN(displacementInfValue) ||
    isNaN(displacementSupValue)
  ) {
    console.error("Invalid input values for displacement calculation");
    return "0.00";
  }

  // Prevent division by zero
  if (draftSupValue === draftInfValue) {
    console.error(
      "Draft sup and draft inf are the same, cannot calculate displacement"
    );
    return "0.00";
  }

  // Perform displacement calculation
  const displacement =
    displacementInfValue +
    ((displacementSupValue - displacementInfValue) /
      (draftSupValue - draftInfValue)) *
    (draftSupValue - quarterMeanValue);

  return displacement.toFixed(2);
};

// Calcul du Tpc:

export const calculateTpc = (quarterMean, tpcSup, tpcInf, draftInf, draftSup) => {
  let tpc = 0;
  const tpcSupValue = tpcSup;
  const tpcInfValue = tpcInf;
  // draft sup et draft inf

  const draftInfValue = Number(draftInf);
  const draftSupValue = Number(draftSup);
  const quarterMeanValue = quarterMean;

  tpc =
    Number(tpcInfValue) +
    ((Number(tpcSupValue) - Number(tpcInfValue)) /
      (Number(draftSupValue) - Number(draftInfValue))) *
    (Number(draftSupValue) - Number(quarterMeanValue));

  return tpc.toFixed(2);
};

export const calculateLcf = (quarterMean, lcfSup, lcfInf, draftSup, draftInf) => {
  let lcf = 0;
  const lcfSupValue = Number(lcfSup);
  const lcfInfValue = Number(lcfInf);
  // draft sup et draft inf
  let draftSupValue = Number(draftSup);
  let draftInfValue = Number(draftInf);

  const quarterMeanValue = Number(quarterMean);

  lcf =
    lcfInfValue +
    (lcfSupValue - lcfInfValue) /
    (draftSupValue - draftInfValue) *
    (draftSupValue - quarterMeanValue);

  return lcf.toFixed(2);
};

// Calcul du displacement Corrigé:

export const calculateFirstTrimCorrection = (trimCorrected, tpc, lcf, lbp) => {
  let firstTrimCorrection = 0;
  const trimCorrectedValue = Number(trimCorrected);

  const tpcValue = Number(tpc);
  const lcfValue = Number(lcf);
  const lbpValue = Number(lbp);

  firstTrimCorrection =
    (trimCorrectedValue * 100 * tpcValue * lcfValue) /
    lbpValue;

  return firstTrimCorrection.toFixed(2);
};

export const calculateSecondTrimCorrection = (
  trimCorrected,
  mtcPlus50,
  mtcMinus50,
  lbp
) => {
  let secondTrimCorrection = 0;
  const trimCorrectedValue = Number(trimCorrected);
  const mtcPlus50Value = Number(mtcPlus50);
  const mtcMinus50Value = Number(mtcMinus50);

  const mtcValue = mtcPlus50Value - mtcMinus50Value;
  const lbpValue = Number(lbp);

  secondTrimCorrection =
    (trimCorrectedValue *
      trimCorrectedValue *
      mtcValue *
      50) /
    lbpValue;

  return secondTrimCorrection.toFixed(2);
};

export const calculateDisplacementTrimCorrected = (
  displacement,
  firstTrimCorrection,
  secondTrimCorrection
) => {
  const displacementValue = Number(displacement);
  const firstTrimCorrectionValue = Number(firstTrimCorrection);
  const secondTrimCorrectionValue = Number(secondTrimCorrection);

  const displacementTrimCorrected =
    displacementValue +
    firstTrimCorrectionValue +
    secondTrimCorrectionValue;

  return displacementTrimCorrected.toFixed(2);
};

export const calculateDisplacementDstyCorrected = (
  density,
  displacementTrimCorrected
) => {
  let displacementDstyCorrected = 0;
  const densityValue = density;
  const displacementTrimCorrectedValue = displacementTrimCorrected;

  displacementDstyCorrected =
    (Number(displacementTrimCorrectedValue) * Number(densityValue)) / 1.025;

  return displacementDstyCorrected.toFixed(2);
};

export const calculateTotal = (
  ballast,
  freshWater,
  fuel,
  diesel,
  lubOil,
  others
) => {
  let total = 0;
  const ballastValue = ballast;
  const freshWaterValue = freshWater;
  const fuelValue = fuel;
  const dieselValue = diesel;
  const lubOilValue = lubOil;
  const othersValue = others;

  total =
    Number(ballastValue) +
    Number(freshWaterValue) +
    Number(fuelValue) +
    Number(dieselValue) +
    Number(lubOilValue) +
    Number(othersValue);

  return total.toFixed(2);
};

export const calculateConstant = (netLight, lightship) => {
  let constant = 0;
  const netLightValue = netLight;
  const lightshipValue = lightship;

  constant = Number(netLightValue) - Number(lightshipValue);

  return constant.toFixed(2);
};


export const calculateCargoAndConstant = (netLoad, lightship)=>{
  let cargoAndConstant; 
  const netLoadValue= Number(netLoad); 
  const lightshipValue= Number(lightship) ; 

  cargoAndConstant = netLoadValue - lightshipValue; 
  return cargoAndConstant.toFixed(2); 
}


//  Fonctions de la logique section final
export const calculateMeanForeFinal = (forePortFinal, foreStbdFinal) => {
  const meanForeFinal = ((Number(forePortFinal) || 0) + (Number(foreStbdFinal) || 0)) / 2;

  return meanForeFinal.toFixed(2);
};

export const calculateMeanAftFinal = (aftPortFinal, aftStbdFinal) => {
  const meanAftFinal = ((Number(aftPortFinal) || 0) + (Number(aftStbdFinal) || 0)) / 2;

  return meanAftFinal.toFixed(2);
};

export const calculateMeanMidFinal = (midPortFinal, midStbdFinal) => {
  const meanMid = ((Number(midPortFinal) || 0) + (Number(midStbdFinal) || 0)) / 2;
  return meanMid.toFixed(2);
};

export const calculateTrimFinal = (meanAftFinal, meanForeFinal) => {
  const trimFinal = Number(meanAftFinal) - Number(meanForeFinal);

  return trimFinal.toFixed(2);
};

export const calculateLbmFinal = (foreDistanceFinal, aftDistanceFinal, lbp) => {
  // Ensure lbp, foreDistance, and aftDistance have valid numeric values
  const lbpValue = Number(lbp) || 0;
  const foreDistanceFinalValue = Number(foreDistanceFinal) || 0;
  const aftDistanceFinalValue = Number(aftDistanceFinal) || 0;

  let lbmFinal = lbpValue;

  // Calcul du LBM en fonction des types de distance
  if (foreDistanceFinalValue < 0 && aftDistanceFinalValue > 0) {
    // LBM = LBP - Distance Avant - Distance Arrière
    lbmFinal = lbpValue - foreDistanceFinalValue - aftDistanceFinalValue;
  } else if (foreDistanceFinalValue > 0 && aftDistanceFinalValue < 0) {
    // LBM = LBP + Distance Avant + Distance Arrière
    lbmFinal = lbpValue + foreDistanceFinalValue + aftDistanceFinalValue;
  } else if (foreDistanceFinalValue < 0 && aftDistanceFinalValue < 0) {
    // LBM = LBP - Distance Avant - Distance Arrière
    lbmFinal = lbpValue - foreDistanceFinalValue - aftDistanceFinalValue;
  } else if (foreDistanceFinalValue > 0 && aftDistanceFinalValue > 0) {
    // LBM = LBP + Distance Avant - Distance Arrière
    lbmFinal = lbpValue + foreDistanceFinalValue - aftDistanceFinalValue;
  } else if (foreDistanceFinalValue === 0 && aftDistanceFinalValue < 0) {
    // LBM = LBP - Distance Arrière
    lbmFinal = lbpValue - aftDistanceFinalValue;
  } else if (foreDistanceFinalValue === 0 && aftDistanceFinalValue > 0) {
    // LBM = LBP - Distance Arrière
    lbmFinal = lbpValue - aftDistanceFinalValue;
  } else if (foreDistanceFinalValue < 0 && aftDistanceFinalValue === 0) {
    // LBM = LBP - Distance Avant
    lbmFinal = lbpValue - foreDistanceFinalValue;
  } else if (foreDistanceFinalValue > 0 && aftDistanceFinalValue === 0) {
    // LBM = LBP + Distance Avant
    lbmFinal = lbpValue + foreDistanceFinalValue;
  } else if (foreDistanceFinalValue === 0 && aftDistanceFinalValue === 0) {
    // LBM = LBP
    lbmFinal = lbpValue;
  }
  return lbmFinal.toFixed(2); // Convert lbm to meters
};

export const calculateForeCorrectedFinal = (trimFinal, foreDistanceFinal, lbmFinal, meanForeFinal) => {
  // Convert inputs to numbers
  const trimFinalValue = Number(trimFinal);
  const foreDistanceFinalValue = Number(foreDistanceFinal);
  const lbmFinalValue = Number(lbmFinal);
  const meanForeFinalValue = Number(meanForeFinal);

  // Validate inputs
  if (
    isNaN(trimFinalValue) ||
    isNaN(foreDistanceFinalValue) ||
    isNaN(lbmFinalValue) ||
    isNaN(meanForeFinalValue)
  ) {
    console.error("Invalid inputs for foreCorrected calculation");
    return "0.00";
  }

  // Perform fore corrected calculation
  let foreCorrectedFinal;
  if (foreDistanceFinalValue < 0) {
    foreCorrectedFinal =
      meanForeFinalValue +
      ((trimFinalValue * foreDistanceFinalValue) / lbmFinalValue);
  } else if (foreDistanceFinalValue > 0) {
    foreCorrectedFinal =
      meanForeFinalValue +
      ((trimFinalValue * foreDistanceFinalValue) / lbmFinalValue);
  } else {
    foreCorrectedFinal = meanForeFinalValue;
  }

  return foreCorrectedFinal.toFixed(2);
};

export const calculateAftCorrectedFinal = (trimFinal, aftDistanceFinal, lbmFinal, meanAftFinal) => {
  // Convert inputs to numbers
  const trimFinalValue = Number(trimFinal);
  const aftDistanceFinalValue = Number(aftDistanceFinal);
  const lbmFinalValue = Number(lbmFinal);
  const meanAftFinalValue = Number(meanAftFinal);

  // Validate inputs
  if (
    isNaN(trimFinalValue) ||
    isNaN(aftDistanceFinalValue) ||
    isNaN(lbmFinalValue) ||
    isNaN(meanAftFinalValue)
  ) {
    console.error("Invalid inputs for aftCorrected calculation");
    return "0.00";
  }

  // Perform aft corrected calculation
  let aftCorrectedFinal;
  if (aftDistanceFinalValue < 0) {
    aftCorrectedFinal =
      meanAftFinalValue +
      ((trimFinalValue * aftDistanceFinalValue) / lbmFinalValue);
  } else if (aftDistanceFinalValue > 0) {
    aftCorrectedFinal =
      meanAftFinalValue +
      ((trimFinalValue * aftDistanceFinalValue) / lbmFinalValue);
  } else {
    aftCorrectedFinal = meanAftFinalValue;
  }

  return aftCorrectedFinal.toFixed(2);
};

export const calculateMidCorrectedFinal = (trimFinal, midDistanceFinal, lbmFinal, meanMidFinal) => {
  // Convert inputs to numbers
  const trimFinalValue = Number(trimFinal);
  const midDistanceFinalValue = Number(midDistanceFinal);
  const lbmFinalValue = Number(lbmFinal);
  const meanMidFinalValue = Number(meanMidFinal);

  // Validate inputs
  if (
    isNaN(trimFinalValue) ||
    isNaN(midDistanceFinalValue) ||
    isNaN(lbmFinalValue) ||
    isNaN(meanMidFinalValue)
  ) {
    console.error("Invalid inputs for midCorrected calculation");
    return "0.00";
  }

  // Perform mid corrected calculation
  let midCorrectedFinal;
  if (midDistanceFinalValue < 0) {
    midCorrectedFinal =
      meanMidFinalValue +
      ((trimFinalValue * midDistanceFinalValue) / lbmFinalValue);
  } else if (midDistanceFinalValue > 0) {
    midCorrectedFinal =
      meanMidFinalValue +
      ((trimFinalValue * midDistanceFinalValue) / lbmFinalValue);
  } else {
    midCorrectedFinal = meanMidFinalValue;
  }

  return midCorrectedFinal.toFixed(2);
};

export const calculateTrimCorrectedFinal = (meanAftCorrectedFinal, meanForeCorrectedFinal) => {
  const foreCorrectedFinalValue = Number(meanForeCorrectedFinal);
  const aftCorrectedFinalValue = Number(meanAftCorrectedFinal);


  const trimCorrectedFinal = aftCorrectedFinalValue - foreCorrectedFinalValue;

  return trimCorrectedFinal.toFixed(2);
};

export const calculateMeanForeAftFinal = (foreCorrectedFinal, aftCorrectedFinal) => {
  let meanForeAftFinal = 0;
  const foreCorrectedFinalValue = foreCorrectedFinal;
  const aftCorrectedFinalValue = aftCorrectedFinal;

  meanForeAftFinal = (Number(foreCorrectedFinalValue) + Number(aftCorrectedFinalValue)) / 2;
  return meanForeAftFinal.toFixed(2);
};

export const calculateMeanOfMeanFinal = (midCorrectedFinal, meanForeAftFinal) => {
  let meanOfMeanFinal = 0;
  const midCorrectedFinalValue = midCorrectedFinal;
  const meanForeAftFinalValue = meanForeAftFinal;

  meanOfMeanFinal = (Number(midCorrectedFinalValue) + Number(meanForeAftFinalValue)) / 2;
  return meanOfMeanFinal.toFixed(2);
};

export const calculateQuarterMeanFinal = (midCorrectedFinal, meanOfMeanFinal) => {
  let quarterMeanFinal = 0;
  const midCorrectedFinalValue = midCorrectedFinal;
  const meanOfMeanFinalValue = meanOfMeanFinal;

  quarterMeanFinal = (Number(midCorrectedFinalValue) + Number(meanOfMeanFinalValue)) / 2;
  return quarterMeanFinal.toFixed(2);
};


export const getHydrostaticFinalValuesInf = (draftInfFinal, hydrostatic_table) => {
  return getHydrostaticValues(draftInfFinal, hydrostatic_table);
};

// Ajoutez une fonction pour obtenir les valeurs pour draftInf
export const getHydrostaticFinalValuesSup = (draftSupFinal, hydrostatic_table) => {
  return getHydrostaticValues(draftSupFinal, hydrostatic_table);
};


// Extraction des Valeurs Finals hydrostatic table
export const getHydrostaticFinalValues = (draftFinal, hydrostatic_table) => {
  console.log("Draft Final reçu:", draftFinal); // Affiche le draft reçu
  console.log("Tableau hydrostatique:", hydrostatic_table); // Affiche le tableau hydrostatique

  // Convertir le draft en nombre
  const draftFinalValue = parseFloat(draftFinal);
  console.log("Draft Final converti:", draftFinalValue); // Affiche le draft converti

  // Vérifiez que le tableau hydrostatique contient des valeurs numériques pour DRAFT
  const entry = hydrostatic_table.find(item => {
    console.log("Comparaison:", item.DRAFT, draftFinalValue); // Affiche la comparaison
    return item.DRAFT === draftFinalValue;
  });

  console.log("Entrée trouvée:", entry); // Affiche l'entrée trouvée

  if (entry) {
    return {
      displacementFinal: entry.DISPLACEMENT,
      tpcFinal: entry.TPC,
      lcfFinal: entry.LCF,
    };
  } else {
    console.warn("Aucune entrée trouvée pour le draft donné :", draftFinal);
    return {
      displacementFinal: 0,
      tpcFinal: 0,
      lcfFinal: 0,
    };
  }
};



export const calculateDisplacementFinal = (
  draftInfFinal,
  draftSupFinal,
  quarterMeanFinal,
  displacementInfFinal,
  displacementSupFinal
) => {
  // Convert inputs to numbers with error handling
  const draftInfFinalValue = Number(draftInfFinal);
  const draftSupFinalValue = Number(draftSupFinal);
  const quarterMeanFinalValue = Number(quarterMeanFinal);
  const displacementInfFinalValue = Number(displacementInfFinal);
  const displacementSupFinalValue = Number(displacementSupFinal);

  console.log("draftInfFinalValue :", draftInfFinalValue);
  console.log("draftSupFinalValue :", draftSupFinalValue);
  console.log("quarterMeanFinalValue :", quarterMeanFinalValue);
  console.log("displacementInfFinalValue :", displacementInfFinalValue);
  console.log("displacementSupFinalValue :", displacementSupFinalValue);
  // Check for invalid inputs
  if (
    isNaN(draftInfFinalValue) ||
    isNaN(draftSupFinalValue) ||
    isNaN(quarterMeanFinalValue) ||
    isNaN(displacementInfFinalValue) ||
    isNaN(displacementSupFinalValue)
  ) {
    console.error("Invalid input values for displacement calculation");
    return "0.00";
  }

  // Prevent division by zero
  if (draftSupFinalValue === draftInfFinalValue) {
    console.error(
      "Draft sup and draft inf are the same, cannot calculate displacement"
    );
    return "0.00";
  }

  // Perform displacement calculation
  const displacementFinal =
    displacementInfFinalValue +
    (displacementSupFinalValue - displacementInfFinalValue) /
    (draftSupFinalValue - draftInfFinalValue) *
    (draftSupFinalValue - quarterMeanFinalValue);
  console.log("draftInfFinalValue :", draftInfFinalValue);
  console.log("draftSupFinalValue :", draftSupFinalValue);
  console.log("quarterMeanFinalValue :", quarterMeanFinalValue);
  console.log(displacementFinal);
  return displacementFinal.toFixed(2);
};

export const calculateTpcFinal = (
  draftInfFinal,
  draftSupFinal,
  quarterMeanFinal,
  tpcInfFinal,
  tpcSupFinal
) => {
  // Convert inputs to numbers with error handling
  const draftInfFinalValue = Number(draftInfFinal);
  const draftSupFinalValue = Number(draftSupFinal);
  const quarterMeanFinalValue = Number(quarterMeanFinal);
  const tpcInfFinalValue = Number(tpcInfFinal);
  const tpcSupFinalValue = Number(tpcSupFinal);

  console.log("draftInfFinalValue :", draftInfFinalValue);
  console.log("draftSupFinalValue :", draftSupFinalValue);
  console.log("quarterMeanFinalValue :", quarterMeanFinalValue);
  console.log("tpcInfFinalValue :", tpcInfFinalValue);
  console.log("tpcSupFinalValue :", tpcSupFinalValue);
  // Check for invalid inputs
  if (
    isNaN(draftInfFinalValue) ||
    isNaN(draftSupFinalValue) ||
    isNaN(quarterMeanFinalValue) ||
    isNaN(tpcInfFinalValue) ||
    isNaN(tpcSupFinalValue)
  ) {
    console.error("Invalid input values for TPC calculation");
    return "0.00";
  }

  // Prevent division by zero
  if (draftSupFinalValue === draftInfFinalValue) {
    console.error(
      "Draft sup and draft inf are the same, cannot calculate TPC"
    );
    return "0.00";
  }

  // Perform TPC calculation
  const tpcFinal =
    tpcInfFinalValue +
    (tpcSupFinalValue - tpcInfFinalValue) /
    (draftSupFinalValue - draftInfFinalValue) *
    (draftSupFinalValue - quarterMeanFinalValue);

  console.log("tpcFinal :", tpcFinal);
  return tpcFinal.toFixed(2);
};


export const calculateLcfFinal = (quarterMeanFinal, lcfSupFinal, lcfInfFinal, draftSupFinal, draftInfFinal) => {
  let lcfFinal = 0;
  const lcfSupFinalValue = Number(lcfSupFinal);
  const lcfInfFinalValue = Number(lcfInfFinal);
  // draft sup et draft inf
  let draftSupFinalValue = Number(draftSupFinal);
  let draftInfFinalValue = Number(draftInfFinal);

  const quarterMeanFinalValue = Number(quarterMeanFinal);

  lcfFinal =
    lcfInfFinalValue +
    (lcfSupFinalValue - lcfInfFinalValue) /
    (draftSupFinalValue - draftInfFinalValue) *
    (draftSupFinalValue - quarterMeanFinalValue);

  return lcfFinal.toFixed(2);
};

export const calculateFirstTrimCorrectionFinal = (trimCorrectedFinal, tpcFinal, lcfFinal, lbp) => {
  let firstTrimCorrectionFinal = 0;
  const trimCorrectedFinalValue = Number(trimCorrectedFinal);

  const tpcFinalValue = Number(tpcFinal);
  const lcfFinalValue = Number(lcfFinal);
  const lbpValue = lbp;

  firstTrimCorrectionFinal =
    (Number(trimCorrectedFinalValue) * 100 * Number(tpcFinalValue) * Number(lcfFinalValue)) /
    Number(lbpValue);

  return firstTrimCorrectionFinal.toFixed(2);
};

export const calculateSecondTrimCorrectionFinal = (
  trimCorrectedFinal,
  mtcPlus50Final,
  mtcMinus50Final,
  lbp
) => {
  let secondTrimCorrectionFinal = 0;
  const trimCorrectedFinalValue = trimCorrectedFinal;
  const mtcPlus50FinalValue = mtcPlus50Final;
  const mtcMinus50FinalValue = mtcMinus50Final;

  const mtcFinalValue = mtcPlus50FinalValue - mtcMinus50FinalValue;
  const lbpValue = lbp;

  secondTrimCorrectionFinal =
    (Number(trimCorrectedFinalValue) *
      Number(trimCorrectedFinalValue) *
      Number(mtcFinalValue) *
      50) /
    Number(lbpValue);

  return secondTrimCorrectionFinal.toFixed(2);
};

export const calculateDisplacementTrimCorrectedFinal = (
  displacementFinal,
  firstTrimCorrectionFinal,
  secondTrimCorrectionFinal
) => {
  let displacementTrimCorrectedFinal = 0;
  const displacementFinalValue = displacementFinal;
  const firstTrimCorrectionFinalValue = firstTrimCorrectionFinal;
  const secondTrimCorrectionFinalValue = secondTrimCorrectionFinal;

  displacementTrimCorrectedFinal =
    Number(displacementFinalValue) +
    Number(firstTrimCorrectionFinalValue) +
    Number(secondTrimCorrectionFinalValue);

  return displacementTrimCorrectedFinal.toFixed(2);
};

export const calculateDisplacementDstyCorrectedFinal = (
  densityFinal,
  displacementTrimCorrectedFinal
) => {
  let displacementDstyCorrectedFinal = 0;
  const densityFinalValue = Number(densityFinal);
  const displacementTrimCorrectedFinalValue = Number(displacementTrimCorrectedFinal);

  displacementDstyCorrectedFinal =
    (Number(displacementTrimCorrectedFinalValue) * Number(densityFinalValue)) / 1.025;

  return displacementDstyCorrectedFinal.toFixed(2);
};

export const calculateTotalFinal = (
  ballastFinal,
  freshWaterFinal,
  fuelFinal,
  dieselFinal,
  lubOilFinal,
  othersFinal
) => {
  let totalFinal = 0;
  const ballastFinalValue = Number(ballastFinal);
  const freshWaterFinalValue = Number(freshWaterFinal);
  const fuelFinalValue = Number(fuelFinal);
  const dieselFinalValue = Number(dieselFinal);
  const lubOilFinalValue = Number(lubOilFinal);
  const othersFinalValue = Number(othersFinal);

  totalFinal =
    Number(ballastFinalValue) +
    Number(freshWaterFinalValue) +
    Number(fuelFinalValue) +
    Number(dieselFinalValue) +
    Number(lubOilFinalValue) +
    Number(othersFinalValue);

  return totalFinal.toFixed(2);
};

// Si on est en Loading Phase  
export const calculateNetLoad = (total, displacementDstyCorrected) => {
  let netLoad = 0;
  const totalValue = Number(total);
  const displacementDstyCorrectedValue = Number(displacementDstyCorrected);
  console.log("displacementDstyCorrectedValue :", displacementDstyCorrectedValue);
  console.log('totalValue :', totalValue);

  netLoad = Number(displacementDstyCorrectedValue) - Number(totalValue);
  console.log('Net Load:', netLoad);
  return netLoad.toFixed(2);
};


export const calculateNetLight = (total, displacementDstyCorrected) => {
  let netLight = 0;
  const totalValue = Number(total);
  const displacementDstyCorrectedValue = Number(displacementDstyCorrected);

  netLight = Number(displacementDstyCorrectedValue) - Number(totalValue);

  return netLight.toFixed(2);
};


export const calculateCargo = (netLoad, netLight) => {
  let cargo = 0;

  console.log('netLoad:', netLoad);
  console.log('netLight:', netLight);
  cargo = Number(netLoad) - Number(netLight);
  console.log('Cargo:', cargo);
  return cargo.toFixed(2);
};


