import React from 'react';
import { MeasurementForm } from '@/components/MeasurementForm';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <section className="py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 section-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fashion-700">
                Find Your Perfect Fit with AI Style Recommendations
              </h1>
              <p className="text-lg text-gray-600">
                Our AI analyzes your body measurements and shape to recommend outfits that flatter your unique figure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="fashion-gradient" asChild>
                  <Link to="#measurement-section">Get Started</Link>
                </Button>
                <Button variant="outline" className="border-fashion-400 text-fashion-600" asChild>
                  <Link to="/virtual-fit">Try Virtual Fitting</Link>
                </Button>
              </div>
            </div>
            <div className="relative section-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-fashion-100 rounded-full transform -translate-x-4 translate-y-4"></div>
              <img 
                src="/placeholder.jpg" 
                alt="Fashion model" 
                className="relative z-10 rounded-lg w-full"
              />
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16 border-t">
          <div className="text-center mb-10 section-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-fashion-700 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our advanced AI technology takes your measurements and creates personalized recommendations just for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-fashion-100 bg-white section-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 rounded-full bg-fashion-100 text-fashion-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-fashion-600 mb-2">Enter Measurements</h3>
              <p className="text-gray-600">
                Provide your body measurements and details so our AI can analyze your unique shape.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-fashion-100 bg-white section-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 rounded-full bg-fashion-100 text-fashion-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-fashion-600 mb-2">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized outfit suggestions that flatter your specific body shape.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-fashion-100 bg-white section-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="w-16 h-16 rounded-full bg-fashion-100 text-fashion-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-fashion-600 mb-2">Virtual Try-On</h3>
              <p className="text-gray-600">
                See how recommended outfits look on your body shape before making a purchase.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16 border-t" id="measurement-section">
          <div className="text-center mb-10 section-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-fashion-700 mb-4">
              Enter Your Measurements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Provide accurate measurements to get the most personalized outfit recommendations.
            </p>
          </div>
          
          <div className="section-fade-in" style={{ animationDelay: '0.9s' }}>
            <MeasurementForm />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;