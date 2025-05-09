import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { SavedOutfits } from '@/components/SavedOutfits';
import { Button } from '@/components/ui/button';
import { useOutfitContext } from '@/context/OutfitContext';
import { Outfit } from '@/types';

const SavedItems = () => {
  const { userProfile } = useOutfitContext();
  const navigate = useNavigate();
  
  const handleTryOn = (outfit: Outfit) => {
    navigate('/virtual-fit', { state: { outfit } });
  };
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-fashion-700">Your Saved Outfits</h1>
          
          <Button 
            className="fashion-gradient"
            onClick={() => navigate('/recommendations')}
          >
            Explore More Outfits
          </Button>
        </div>
        
        <SavedOutfits onTryOn={handleTryOn} />
      </div>
    </Layout>
  );
};

export default SavedItems;