import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Outfit, OutfitItem } from '@/types';
import { useOutfitContext } from '@/context/OutfitContext';
import { useToast } from '@/components/ui/use-toast';

interface OutfitRecommendationProps {
  outfit: Outfit;
  onTryOn: (outfit: Outfit) => void;
}

export const OutfitRecommendation: React.FC<OutfitRecommendationProps> = ({ outfit, onTryOn }) => {
  const { saveOutfit } = useOutfitContext();
  const { toast } = useToast();
  const [isSaved, setIsSaved] = useState(false);
  
  const handleSaveOutfit = () => {
    saveOutfit(outfit);
    setIsSaved(true);
    toast({
      title: "Outfit Saved",
      description: "This outfit has been saved to your collection."
    });
  };

  const handleTryOn = () => {
    onTryOn(outfit);
  };

  return (
    <Card className="outfit-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Suggested Outfit</CardTitle>
        <CardDescription>
          Perfect for your {outfit.bodyShape} body shape
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {outfit.items.map((item) => (
            <OutfitItemCard key={item.id} item={item} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-3 border-t">
        <Button 
          variant="outline" 
          className="border-fashion-300 hover:bg-fashion-50"
          onClick={handleTryOn}
        >
          Virtual Try-On
        </Button>
        <Button
          variant={isSaved ? "secondary" : "default"}
          className={isSaved ? "bg-fashion-200 text-fashion-700" : "fashion-gradient"}
          onClick={handleSaveOutfit}
          disabled={isSaved}
        >
          {isSaved ? "Saved" : "Save Outfit"}
        </Button>
      </CardFooter>
    </Card>
  );
};

interface OutfitItemCardProps {
  item: OutfitItem;
}

const OutfitItemCard: React.FC<OutfitItemCardProps> = ({ item }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="h-48 overflow-hidden bg-gray-100">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-3">
        <h4 className="font-medium text-fashion-700">{item.name}</h4>
        <p className="text-sm text-gray-500">{item.brand}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-semibold">${item.price.toFixed(2)}</span>
          <a 
            href={item.purchaseLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-fashion-600 hover:text-fashion-800 hover:underline"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};