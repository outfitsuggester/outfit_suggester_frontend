import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useOutfitContext } from '@/context/OutfitContext';
import { useToast } from '@/components/ui/use-toast';
import { Outfit } from '@/types';

interface SavedOutfitsProps {
  onTryOn?: (outfit: Outfit) => void;
}

export const SavedOutfits: React.FC<SavedOutfitsProps> = ({ onTryOn }) => {
  const { userProfile, removeOutfit } = useOutfitContext();
  const { toast } = useToast();

  if (!userProfile || userProfile.savedOutfits.length === 0) {
    return (
      <Card className="border-dashed border-2">
        <CardHeader>
          <CardTitle>No Saved Outfits</CardTitle>
          <CardDescription>
            You haven't saved any outfits yet. Browse recommendations to find and save outfits.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const handleRemoveOutfit = (outfitId: string) => {
    removeOutfit(outfitId);
    toast({
      title: "Outfit Removed",
      description: "The outfit has been removed from your saved collection."
    });
  };

  const handleTryOn = (outfit: Outfit) => {
    if (onTryOn) {
      onTryOn(outfit);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-fashion-700">Your Saved Outfits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userProfile.savedOutfits.map((outfit) => (
          <Card key={outfit.id} className="outfit-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Saved Outfit</CardTitle>
              <CardDescription>
                For {outfit.bodyShape} body shape
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                {outfit.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 border-b pb-2">
                    <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-fashion-700 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.brand} - ${item.price.toFixed(2)}</p>
                      <a 
                        href={item.purchaseLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-fashion-600 hover:underline"
                      >
                        Purchase
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-3 border-t">
              {onTryOn && (
                <Button 
                  variant="outline" 
                  className="border-fashion-300 hover:bg-fashion-50"
                  onClick={() => handleTryOn(outfit)}
                >
                  Try On
                </Button>
              )}
              <Button 
                variant="destructive" 
                className="ml-auto"
                onClick={() => handleRemoveOutfit(outfit.id)}
              >
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};