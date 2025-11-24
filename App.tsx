import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ZoneSelector from './components/ZoneSelector';
import PlaceCard from './components/PlaceCard';
import AddPlaceForm from './components/AddPlaceForm';
import { Place, ZoneType } from './types';
import { INITIAL_PLACES } from './constants';
import { Search } from 'lucide-react';

const App: React.FC = () => {
  const [activeZone, setActiveZone] = useState<ZoneType>(ZoneType.RAM_MANDIR);
  const [places, setPlaces] = useState<Place[]>(INITIAL_PLACES);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddPlace = (newPlace: Place) => {
    setPlaces(prev => [...prev, newPlace]);
  };

  const filteredPlaces = useMemo(() => {
    return places.filter(place => {
      const matchesZone = place.zone === activeZone;
      const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            place.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesZone && matchesSearch;
    });
  }, [places, activeZone, searchTerm]);

  return (
    <div className="min-h-screen bg-orange-50/50 pb-20">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        
        {/* Intro Section */}
        <div className="text-center mb-8">
          <div className="inline-block p-1 border-b-2 border-gold-400 mb-4">
             <h2 className="text-gray-800 text-lg md:text-xl font-medium">Jai Shri Ram</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ayodhya ke sabse mahatvapurn, itihasik aur dharmik sthalon ki suchi.
            Yatra ki yojana banane ke liye zone chunein.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center">
            <ZoneSelector activeZone={activeZone} onSelectZone={setActiveZone} />
            
            {/* Search Bar */}
            <div className="relative w-full max-w-md mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2.5 border border-orange-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 sm:text-sm shadow-sm transition-shadow"
                    placeholder={`${activeZone} mein khojein...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-xl shadow-sm border border-orange-100">
              <p className="text-gray-500 text-lg">Is zone mein koi sthal nahi mila.</p>
              <p className="text-sm text-gray-400 mt-2">Kripya search term badlein ya naya sthal jodein.</p>
            </div>
          )}
        </div>

      </main>

      <AddPlaceForm onAddPlace={handleAddPlace} />

      <footer className="bg-teal-800 text-teal-100 py-6 mt-12 text-center text-sm border-t-4 border-gold-500">
        <p>© {new Date().getFullYear()} Ayodhya Darshan Guide. All rights reserved.</p>
        <p className="mt-1 opacity-70 text-xs">Shraddha aur Vishwas ke sath banaya gaya.</p>
      </footer>
    </div>
  );
};

export default App;