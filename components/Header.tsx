import React from 'react';
import { Temple, Map } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-saffron-600 to-saffron-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
             <Temple className="w-8 h-8 text-gold-400" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold leading-tight">Ayodhya Darshan</h1>
            <p className="text-xs md:text-sm text-saffron-100 opacity-90">Mahatvapurn Sthal & Distance Guide</p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-2 text-saffron-50 text-sm">
            <Map className="w-4 h-4" />
            <span>Yatra Guide</span>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-gold-500 via-yellow-300 to-gold-500"></div>
    </header>
  );
};

export default Header;