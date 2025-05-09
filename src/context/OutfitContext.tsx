import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BodyShape, Gender, BodyComplexion, BodyMeasurements, Outfit } from '@/types';
import { determineBodyShape } from '@/utils/bodyShapeUtils';

export type UserProfile = {
  email: string;
  name: string;
  authenticated: boolean;
  gender?: Gender;
  complexion?: BodyComplexion;
  bodyShape?: BodyShape;
  measurements?: BodyMeasurements;
  savedOutfits?: Outfit[];
};

interface OutfitContextType {
  userProfile: UserProfile | null;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  updateMeasurements: (measurements: BodyMeasurements) => void;
  updateGender: (gender: Gender) => void;
  updateComplexion: (complexion: BodyComplexion) => void;
  saveOutfit: (outfit: Outfit) => void;
  removeOutfit: (outfitId: string) => void;
  resetProfile: () => void;
  loading: boolean;
}

const defaultUserProfile: UserProfile = {
  email: '',
  name: '',
  authenticated: false,
  gender: 'female',
  complexion: 'medium',
  measurements: {
    bust: 0,
    waist: 0,
    hips: 0,
    height: 0,
    weight: 0,
    shoulders: 0
  },
  bodyShape: undefined,
  savedOutfits: [],
};

const OutfitContext = createContext<OutfitContextType | undefined>(undefined);

export const OutfitProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    } else {
      setUserProfile(defaultUserProfile);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
  }, [userProfile]);

  const updateMeasurements = (measurements: BodyMeasurements) => {
    if (!userProfile) return;

    const bodyShape = determineBodyShape(measurements, userProfile.gender ?? 'female');

    setUserProfile({
      ...userProfile,
      measurements,
      bodyShape
    });
  };

  const updateGender = (gender: Gender) => {
    if (!userProfile) return;

    const bodyShape =
      userProfile.measurements && userProfile.measurements.bust > 0
        ? determineBodyShape(userProfile.measurements, gender)
        : undefined;

    setUserProfile({
      ...userProfile,
      gender,
      bodyShape
    });
  };

  const updateComplexion = (complexion: BodyComplexion) => {
    if (!userProfile) return;

    setUserProfile({
      ...userProfile,
      complexion
    });
  };

  const saveOutfit = (outfit: Outfit) => {
    if (!userProfile) return;

    const existingOutfitIndex = userProfile.savedOutfits?.findIndex(
      savedOutfit => savedOutfit.id === outfit.id
    );

    if (existingOutfitIndex !== undefined && existingOutfitIndex >= 0) {
      const updatedOutfits = [...(userProfile.savedOutfits ?? [])];
      updatedOutfits[existingOutfitIndex] = outfit;

      setUserProfile({
        ...userProfile,
        savedOutfits: updatedOutfits
      });
    } else {
      setUserProfile({
        ...userProfile,
        savedOutfits: [...(userProfile.savedOutfits ?? []), outfit]
      });
    }
  };

  const removeOutfit = (outfitId: string) => {
    if (!userProfile) return;

    setUserProfile({
      ...userProfile,
      savedOutfits: (userProfile.savedOutfits ?? []).filter(outfit => outfit.id !== outfitId)
    });
  };

  const resetProfile = () => {
    setUserProfile(defaultUserProfile);
  };

  return (
    <OutfitContext.Provider
      value={{
        userProfile,
        setUserProfile,
        updateMeasurements,
        updateGender,
        updateComplexion,
        saveOutfit,
        removeOutfit,
        resetProfile,
        loading
      }}
    >
      {children}
    </OutfitContext.Provider>
  );
};

export const useOutfitContext = (): OutfitContextType => {
  const context = useContext(OutfitContext);
  if (context === undefined) {
    throw new Error('useOutfitContext must be used within an OutfitProvider');
  }
  return context;
};