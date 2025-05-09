import { BodyMeasurements, BodyShape, Gender } from '@/types';

export const determineBodyShape = (measurements: BodyMeasurements, gender: Gender): BodyShape => {
  const { bust, waist, hips, shoulders } = measurements;
  
  // Return default if we don't have complete measurements
  if (!bust || !waist || !hips || !shoulders) {
    return gender === 'male' ? 'rectangle' : 'hourglass';
  }

  // Calculate difference between measurements
  const bustToWaist = bust - waist;
  const hipsToWaist = hips - waist;
  const shouldersToHips = shoulders - hips;
  
  if (gender === 'female') {
    // Female body shape analysis
    // Hourglass: defined waist with balanced bust and hips
    if (bustToWaist >= 7 && hipsToWaist >= 7 && Math.abs(bust - hips) < 4) {
      return 'hourglass';
    }
    
    // Pear: hips significantly larger than bust
    if (hips > bust && hipsToWaist >= 7) {
      return 'pear';
    }
    
    // Apple: waist larger or similar to bust and hips
    if (waist >= bust || (bust - waist < 4 && hips - waist < 4)) {
      return 'apple';
    }
    
    // Inverted triangle: significantly broader shoulders and bust compared to hips
    if (bust > hips && (bust - hips) >= 5) {
      return 'inverted-triangle';
    }
    
    // Rectangle: minimal difference between bust, waist, and hips
    if (bustToWaist < 7 && hipsToWaist < 7 && Math.abs(bust - hips) < 4) {
      return 'rectangle';
    }
    
    // Default to rectangle if no clear shape
    return 'rectangle';
  } else {
    // Male body shape analysis
    // Inverted triangle: shoulders significantly wider than waist
    if (shoulders > waist && (shoulders - waist) > 6) {
      return 'inverted-triangle';
    }
    
    // Athletic: balanced shoulders and hips with defined waist
    if (shoulders >= hips && (shoulders - waist) >= 6 && (hips - waist) >= 2) {
      return 'athletic';
    }
    
    // Rectangle: minimal difference between shoulders, waist, and hips
    if ((shoulders - waist) < 6 && (hips - waist) < 4) {
      return 'rectangle';
    }
    
    // Apple: waist larger or similar to hips
    if (waist >= hips || (waist - hips) > -2) {
      return 'apple';
    }
    
    // Default to rectangle if no clear shape
    return 'rectangle';
  }
};

export const getBodyShapeDescription = (shape: BodyShape): string => {
  switch (shape) {
    case 'hourglass':
      return 'Your body has a well-defined waist with balanced bust and hip measurements. Your shoulders are aligned with your hips, creating a balanced silhouette.';
    
    case 'pear':
      return 'Your hips are wider than your bust, with a defined waist. Your lower body carries more weight than your upper body.';
    
    case 'apple':
      return 'Your midsection is fuller, with less defined waist. Your bust and shoulders may be broader, with slimmer legs.';
    
    case 'inverted-triangle':
      return 'Your shoulders and bust are broader than your hips. You likely have a wider upper body with narrower hips and a less defined waist.';
    
    case 'rectangle':
      return 'Your bust, waist, and hips have similar measurements, creating a straight silhouette without significant curves.';
    
    case 'athletic':
      return 'You have a muscular build with shoulders and hips roughly the same width and a moderately defined waist.';
    
    default:
      return 'Body shape could not be determined from provided measurements.';
  }
};
