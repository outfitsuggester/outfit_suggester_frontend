import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useOutfitContext } from '@/context/OutfitContext';
import { BodyMeasurements, Gender, BodyComplexion } from '@/types';
import { getBodyShapeDescription } from '@/utils/bodyShapeUtils';

export const MeasurementForm: React.FC = () => {
  const { userProfile, updateMeasurements, updateGender, updateComplexion } = useOutfitContext();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [measurements, setMeasurements] = useState<BodyMeasurements>({
    bust: 0,
    waist: 0,
    hips: 0,
    height: 0,
    weight: 0,
    shoulders: 0,
    inseam: 0
  });
  
  const [gender, setGender] = useState<Gender>('female');
  const [complexion, setComplexion] = useState<BodyComplexion>('medium');
  
  // Initialize form with existing user data if available
  useEffect(() => {
    if (userProfile) {
      setMeasurements(userProfile.measurements);
      setGender(userProfile.gender);
      setComplexion(userProfile.complexion);
    }
  }, [userProfile]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeasurements({
      ...measurements,
      [name]: parseFloat(value) || 0
    });
  };
  
  const handleGenderChange = (value: Gender) => {
    setGender(value);
    updateGender(value);
  };
  
  const handleComplexionChange = (value: BodyComplexion) => {
    setComplexion(value);
    updateComplexion(value);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate measurements
    if (measurements.bust <= 0 || measurements.waist <= 0 || measurements.hips <= 0 || 
        measurements.height <= 0 || measurements.weight <= 0 || measurements.shoulders <= 0) {
      toast({
        title: "Validation Error",
        description: "Please enter all required measurements.",
        variant: "destructive"
      });
      return;
    }
    
    // Update measurements in context
    updateMeasurements(measurements);
    
    toast({
      title: "Measurements Saved",
      description: "Your body measurements have been saved successfully."
    });
    
    // Navigate to recommendations page
    navigate('/recommendations');
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Body Measurements</CardTitle>
          <CardDescription>
            Enter your body measurements to get personalized outfit recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Gender</h3>
            <RadioGroup value={gender} onValueChange={handleGenderChange} className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Skin Complexion</h3>
            <RadioGroup value={complexion} onValueChange={handleComplexionChange} className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fair" id="fair" />
                <Label htmlFor="fair">Fair</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="olive" id="olive" />
                <Label htmlFor="olive">Olive</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark">Dark</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="bust">Chest/Bust (inches)</Label>
              <Input
                id="bust"
                name="bust"
                type="number"
                value={measurements.bust || ''}
                onChange={handleInputChange}
                min="20"
                max="60"
                step="0.1"
                className="measurement-input"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="waist">Waist (inches)</Label>
              <Input
                id="waist"
                name="waist"
                type="number"
                value={measurements.waist || ''}
                onChange={handleInputChange}
                min="20"
                max="60"
                step="0.1"
                className="measurement-input"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hips">Hips (inches)</Label>
              <Input
                id="hips"
                name="hips"
                type="number"
                value={measurements.hips || ''}
                onChange={handleInputChange}
                min="20"
                max="60"
                step="0.1"
                className="measurement-input"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="shoulders">Shoulders (inches)</Label>
              <Input
                id="shoulders"
                name="shoulders"
                type="number"
                value={measurements.shoulders || ''}
                onChange={handleInputChange}
                min="10"
                max="30"
                step="0.1"
                className="measurement-input"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="height">Height (inches)</Label>
              <Input
                id="height"
                name="height"
                type="number"
                value={measurements.height || ''}
                onChange={handleInputChange}
                min="48"
                max="84"
                step="0.1"
                className="measurement-input"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (pounds)</Label>
              <Input
                id="weight"
                name="weight"
                type="number"
                value={measurements.weight || ''}
                onChange={handleInputChange}
                min="50"
                max="400"
                step="0.1"
                className="measurement-input"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="inseam">Inseam (inches) - Optional</Label>
              <Input
                id="inseam"
                name="inseam"
                type="number"
                value={measurements.inseam || ''}
                onChange={handleInputChange}
                min="20"
                max="40"
                step="0.1"
                className="measurement-input"
              />
            </div>
          </div>
          
          {userProfile?.bodyShape && (
            <div className="bg-fashion-50 p-4 rounded-lg border border-fashion-100">
              <h3 className="font-medium text-fashion-600 mb-1">Your Body Shape: {userProfile.bodyShape.charAt(0).toUpperCase() + userProfile.bodyShape.slice(1)}</h3>
              <p className="text-gray-700">{getBodyShapeDescription(userProfile.bodyShape)}</p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full fashion-gradient">
            Get Outfit Recommendations
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};