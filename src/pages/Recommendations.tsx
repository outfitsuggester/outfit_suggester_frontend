import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { OutfitRecommendation } from '@/components/OutfitRecommendation';
import { BodyShapeAnalyzer } from '@/components/BodyShapeAnalyzer';
import { useOutfitContext } from '@/context/OutfitContext';
import { getOutfitRecommendations } from '@/utils/outfitRecommender';
import { Outfit, OutfitRecommendation as OutfitRecommendationType } from '@/types';
import { useToast } from '@/components/ui/use-toast';

const Recommendations = () => {
  const { userProfile } = useOutfitContext();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [recommendations, setRecommendations] = useState<OutfitRecommendationType | null>(null);
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(null);
  
  useEffect(() => {
    // Check if user is authenticated
    if (!userProfile || userProfile.authenticated !== true) {
      toast({
        title: "Authentication required",
        description: "Please sign in to view recommendations",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }
    
    // If user has no profile or incomplete measurements, redirect to home
    if (!userProfile.bodyShape) {
      toast({
        title: "Profile incomplete",
        description: "Please complete your body measurements first",
      });
      navigate('/');
      return;
    }
    
    // Get outfit recommendations based on user profile
    const outfitRecommendations = getOutfitRecommendations(
      userProfile.bodyShape,
      userProfile.gender,
      userProfile.complexion
    );
    
    setRecommendations(outfitRecommendations);
  }, [userProfile, navigate, toast]);
  
  const handleTryOn = (outfit: Outfit) => {
    setSelectedOutfit(outfit);
    navigate('/virtual-fit', { state: { outfit } });
  };
  
  if (!userProfile || !userProfile.bodyShape || !recommendations) {
    return (
      <Layout>
        <div className="max-w-5xl mx-auto text-center py-12">
          <div className="animate-spin h-10 w-10 border-4 border-fashion-500 rounded-full border-t-transparent mx-auto mb-4"></div>
          <p>Loading recommendations...</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-10">
        <section>
          <h1 className="text-3xl font-bold text-fashion-700 mb-6">Your Style Recommendations</h1>
          
          <BodyShapeAnalyzer bodyShape={userProfile.bodyShape} />
        </section>
        
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-fashion-600">Recommended Outfits</h2>
          </div>
          
          {recommendations.explanation && (
            <div className="bg-fashion-50 p-4 rounded-lg border border-fashion-100 mb-8">
              <p className="text-gray-700">{recommendations.explanation}</p>
            </div>
          )}
          
          {recommendations.outfits.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.outfits.map((outfit) => (
                <OutfitRecommendation 
                  key={outfit.id}
                  outfit={outfit}
                  onTryOn={handleTryOn}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 border rounded-lg">
              <p className="text-gray-500">
                No outfit recommendations available for your body shape and preferences.
              </p>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Recommendations;