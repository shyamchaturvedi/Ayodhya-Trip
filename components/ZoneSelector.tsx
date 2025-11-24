import React from 'react';
import { ZoneType, ZONES } from '../types';

interface ZoneSelectorProps {
  activeZone: ZoneType;
  onSelectZone: (zone: ZoneType) => void;
}

const ZoneSelector: React.FC<ZoneSelectorProps> = ({ activeZone, onSelectZone }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
      {ZONES.map((zone) => {
        const isActive = activeZone === zone;
        return (
          <button
            key={zone}
            onClick={() => onSelectZone(zone)}
            className={`
              px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md text-sm md:text-base
              ${isActive 
                ? 'bg-teal-700 text-white ring-2 ring-gold-500 ring-offset-2 ring-offset-saffron-50 transform scale-105' 
                : 'bg-white text-gray-700 hover:bg-saffron-100 hover:text-saffron-700'
              }
            `}
          >
            {zone}
          </button>
        );
      })}
    </div>
  );
};

export default ZoneSelector;