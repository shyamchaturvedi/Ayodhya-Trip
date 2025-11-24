import React from 'react';
import { Place } from '../types';
import { MapPin, Navigation, Info } from 'lucide-react';

interface PlaceCardProps {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 overflow-hidden flex flex-col h-full">
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-saffron-600 transition-colors">
            {place.name}
          </h3>
          <span className="bg-teal-50 text-teal-700 text-xs font-bold px-2 py-1 rounded-md border border-teal-100 shrink-0 ml-2">
            {place.distance}
          </span>
        </div>
        
        <div className="flex items-start mt-3 space-x-2">
          <Info className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
          <p className="text-gray-600 text-sm leading-relaxed">
            {place.description}
          </p>
        </div>
      </div>

      <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex justify-between items-center mt-auto">
         <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">
            {place.zone}
         </span>
         <a 
            href={place.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-saffron-600 hover:text-saffron-700 font-semibold text-sm bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-lg transition-colors"
         >
            <Navigation className="w-4 h-4" />
            <span>Map Dekhen</span>
         </a>
      </div>
    </div>
  );
};

export default PlaceCard;