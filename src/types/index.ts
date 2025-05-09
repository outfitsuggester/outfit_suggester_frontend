export type Gender = 'male' | 'female' | 'other';

export type BodyComplexion = 'fair' | 'medium' | 'olive' | 'dark';

export type BodyMeasurements = {
  bust: number; // Chest/bust in inches
  waist: number; // Waist in inches
  hips: number; // Hips in inches
  height: number; // Height in inches
  weight: number; // Weight in pounds
  shoulders: number; // Shoulder width in inches
  inseam?: number; // Inseam in inches (optional)
};

export type BodyShape = 
  | 'hourglass'
  | 'pear'
  | 'rectangle'
  | 'apple'
  | 'inverted-triangle'
  | 'athletic';

export type OutfitItem = {
  id: string;
  type: 'top' | 'bottom' | 'dress' | 'outerwear' | 'accessory';
  name: string;
  description: string;
  imageUrl: string;
  purchaseLink: string;
  price: number;
  brand: string;
  color: string;
};

export type Outfit = {
  id: string;
  items: OutfitItem[];
  bodyShape: BodyShape;
  gender: Gender;
  occasion?: string;
  season?: string;
};

export type UserProfile = {
  gender: Gender;
  complexion: BodyComplexion;
  measurements: BodyMeasurements;
  bodyShape?: BodyShape;
  savedOutfits: Outfit[];
  // Added authentication-related fields
  authenticated?: boolean;
  name?: string;
  email?: string;
};

export type OutfitRecommendation = {
  outfits: Outfit[];
  bodyShape: BodyShape;
  gender: Gender;
  explanation: string;
};