import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { useOutfitContext } from '@/context/OutfitContext';
import { LogIn, LogOut, User } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Only use useLocation if we're in browser context and not during SSR
  let location;
  try {
    location = useLocation();
  } catch (e) {
    // This will happen during initial render if not in a Router context
    // We'll handle this gracefully by providing a default
    location = { pathname: '/' };
  }
  
  const navigate = useNavigate();
  const { userProfile, setUserProfile } = useOutfitContext();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/recommendations', label: 'Recommendations' },
    { path: '/virtual-fit', label: 'Virtual Try-On' },
    { path: '/saved-items', label: 'Saved Items' },
  ];
  
  const handleLogout = () => {
    // Remove authentication status
    setUserProfile(prev => prev ? {
      ...prev,
      authenticated: false
    } : null);
    
    // Redirect to home page
    navigate('/');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-4xl font-bold text-fashion-600">Outfit</span>
              <span className="text-4xl text-fashion-400 font-medium">Suggester</span>
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-fashion-600 border-b-2 border-fashion-400'
                      : 'text-gray-600 hover:text-fashion-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              {userProfile?.authenticated ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-fashion-700 hidden sm:inline-block">
                    {userProfile.name || 'User'}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-fashion-200"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} className="mr-2" />
                    <span className="hidden sm:inline">Logout</span>
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-fashion-200" 
                  onClick={() => navigate('/auth')}
                >
                  <LogIn size={16} className="mr-2" />
                  <span className="hidden sm:inline">Sign In</span>
                </Button>
              )}
            </div>
            
            <div className="md:hidden">
              {/* Mobile menu button would go here */}
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto p-4 md:p-6 pt-8">
        {children}
      </main>
      
      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} Outfit Suggester. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-fashion-500">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-fashion-500">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-fashion-500">Contact</a>
            </div>
          </div>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};