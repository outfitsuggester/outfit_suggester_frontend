import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Outfit, OutfitItem, Gender } from '@/types';
import { useOutfitContext } from '@/context/OutfitContext';

interface VirtualTryOnProps {
  outfit?: Outfit;
}

export const VirtualTryOn: React.FC<VirtualTryOnProps> = ({ outfit }) => {
  const { userProfile } = useOutfitContext();
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | undefined>(outfit);
  const [avatarImage, setAvatarImage] = useState<string>('/placeholder.svg');
  const [isLoading, setIsLoading] = useState(false);
  
  const gender = userProfile?.gender || 'female';
  const bodyShape = userProfile?.bodyShape;
  
  if (!userProfile) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Virtual Try-On</CardTitle>
          <CardDescription>
            Please complete your profile before using the virtual try-on feature.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }
  
  const generateAvatar = () => {
    if (!selectedOutfit) return;
    
    setIsLoading(true);
    
    // In a real application, this would call an AI service to generate an image
    // For now, we'll simulate a delay and then show a placeholder
    setTimeout(() => {
      setAvatarImage('/placeholder.svg');
      setIsLoading(false);
    }, 2000);
  };
  
  const handleOutfitSelect = (outfit: Outfit) => {
    setSelectedOutfit(outfit);
    setAvatarImage('/placeholder.svg'); // Reset the avatar image
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-fashion-700">Virtual Try-On</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Virtual Fitting Room</CardTitle>
              <CardDescription>
                See how the selected outfit looks on your body type
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6 h-[400px] bg-gray-50">
              {isLoading ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-fashion-600 mx-auto mb-4"></div>
                  <p className="text-fashion-600">Generating your virtual try-on...</p>
                </div>
              ) : (
                <div className="text-center">
                  <img 
                    src={avatarImage} 
                    alt="Virtual try-on" 
                    className="mx-auto max-h-[350px]"
                  />
                  {!selectedOutfit && (
                    <p className="mt-4 text-gray-500">Select an outfit to try on</p>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                onClick={generateAvatar} 
                className="fashion-gradient w-full"
                disabled={!selectedOutfit || isLoading}
              >
                {isLoading ? "Generating..." : "Generate Virtual Try-On"}
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Outfit Selection</CardTitle>
              <CardDescription>
                Choose an outfit to try on virtually
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="current" className="w-full">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="current">Current</TabsTrigger>
                  <TabsTrigger value="saved">Saved</TabsTrigger>
                </TabsList>
                
                <TabsContent value="current" className="space-y-4">
                  {outfit ? (
                    <OutfitSelectionItem 
                      outfit={outfit}
                      isSelected={selectedOutfit?.id === outfit.id}
                      onSelect={() => handleOutfitSelect(outfit)}
                    />
                  ) : (
                    <p className="text-gray-500 text-center py-4">No current outfit selected.</p>
                  )}
                </TabsContent>
                
                <TabsContent value="saved" className="space-y-4 max-h-[300px] overflow-y-auto">
                  {userProfile.savedOutfits.length > 0 ? (
                    userProfile.savedOutfits.map((savedOutfit) => (
                      <OutfitSelectionItem
                        key={savedOutfit.id}
                        outfit={savedOutfit}
                        isSelected={selectedOutfit?.id === savedOutfit.id}
                        onSelect={() => handleOutfitSelect(savedOutfit)}
                      />
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">No saved outfits yet.</p>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface OutfitSelectionItemProps {
  outfit: Outfit;
  isSelected: boolean;
  onSelect: () => void;
}

const OutfitSelectionItem: React.FC<OutfitSelectionItemProps> = ({ outfit, isSelected, onSelect }) => {
  return (
    <div 
      className={`p-3 rounded-lg border cursor-pointer transition-all ${
        isSelected 
          ? 'border-fashion-400 bg-fashion-50 shadow-sm' 
          : 'border-gray-200 hover:border-fashion-200'
      }`}
      onClick={onSelect}
    >
      <h4 className="font-medium text-sm mb-2">
        Outfit for {outfit.bodyShape} shape
      </h4>
      <div className="flex flex-wrap gap-2">
        {outfit.items.map((item) => (
          <div key={item.id} className="text-xs bg-white rounded px-2 py-1 border">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};