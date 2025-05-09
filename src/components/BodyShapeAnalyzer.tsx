import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BodyShape } from '@/types';
import { getBodyShapeDescription } from '@/utils/bodyShapeUtils';

interface BodyShapeAnalyzerProps {
  bodyShape?: BodyShape;
}

export const BodyShapeAnalyzer: React.FC<BodyShapeAnalyzerProps> = ({ bodyShape }) => {
  if (!bodyShape) {
    return null;
  }

  const shapeImages: Record<BodyShape, string> = {
    'hourglass': '/hourglass.jpg',
    'pear': '/pear.jpg',
    'rectangle': '/rectangular.jpg',
    'apple': '/apple.jpg',
    'inverted-triangle': '/inverted-triangle.jpg',
    'athletic': '/athletic.jpg',
  };

  const bodyShapeDisplayName = bodyShape.charAt(0).toUpperCase() + bodyShape.slice(1).replace('-', ' ');

  return (
    <Card className="overflow-hidden bg-white">
      <CardHeader className="bg-fashion-400 text-white">
        <CardTitle>Your Body Shape: {bodyShapeDisplayName}</CardTitle>
        <CardDescription className="text-white/90">
          Understanding your proportions helps find the most flattering styles
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/3">
            <img
              src={shapeImages[bodyShape]}
              alt={`${bodyShape} body shape illustration`}
              className="w-full max-w-[180px] mx-auto"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 mb-4">{getBodyShapeDescription(bodyShape)}</p>
            <h4 className="font-medium text-fashion-600 mb-2">General Style Tips:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {bodyShape === 'hourglass' && (
                <>
                  <li>Emphasize your waist with fitted or belted styles</li>
                  <li>Choose wrap dresses and tops that flatter your curves</li>
                  <li>High-waisted bottoms work well for your figure</li>
                </>
              )}
              {bodyShape === 'pear' && (
                <>
                  <li>Draw attention to your upper body with interesting necklines</li>
                  <li>Balance proportions with A-line skirts and wide-leg pants</li>
                  <li>Choose darker colors for bottoms and brighter colors on top</li>
                </>
              )}
              {bodyShape === 'rectangle' && (
                <>
                  <li>Create curves with peplum tops and structured jackets</li>
                  <li>Use belts to define your waist</li>
                  <li>Try ruffles, layers and details that add dimension</li>
                </>
              )}
              {bodyShape === 'apple' && (
                <>
                  <li>Emphasize your legs with shorter skirts or well-fitted pants</li>
                  <li>Choose V-necks and open necklines to elongate your torso</li>
                  <li>Empire waist styles draw attention above the midsection</li>
                </>
              )}
              {bodyShape === 'inverted-triangle' && (
                <>
                  <li>Balance your shoulders with voluminous bottoms</li>
                  <li>Choose V-necks and scoop necks to narrow shoulders visually</li>
                  <li>Add detail and volume to your lower body</li>
                </>
              )}
              {bodyShape === 'athletic' && (
                <>
                  <li>Choose fitted styles that showcase your balanced proportions</li>
                  <li>Add softer fabrics to balance muscular definition</li>
                  <li>Experiment with layers to add dimension</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};