import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { VirtualTryOn } from '@/components/VirtualTryOn';
import { Button } from '@/components/ui/button';
import { Outfit } from '@/types';

const VirtualFit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const outfit = location.state?.outfit as Outfit | undefined;
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-fashion-700">Virtual Try-On</h1>
          
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="outline" 
              className="border-fashion-300 text-fashion-700"
              onClick={() => navigate('/recommendations')}
            >
              Find Outfits
            </Button>
            
            <Button 
              variant="outline" 
              className="border-fashion-300 text-fashion-700"
              onClick={() => navigate('/saved-items')}
            >
              Saved Items
            </Button>
          </div>
        </div>
        
        <VirtualTryOn outfit={outfit} />
      </div>
    </Layout>
  );
};

export default VirtualFit;