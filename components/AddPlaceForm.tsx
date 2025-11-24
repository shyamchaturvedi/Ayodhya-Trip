import React, { useState } from 'react';
import { Place, ZoneType, ZONES } from '../types';
import { PlusCircle, Save } from 'lucide-react';

interface AddPlaceFormProps {
  onAddPlace: (place: Place) => void;
}

const AddPlaceForm: React.FC<AddPlaceFormProps> = ({ onAddPlace }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Place>>({
    name: '',
    distance: '',
    mapLink: '',
    description: '',
    zone: ZoneType.RAM_MANDIR
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.distance && formData.description && formData.zone) {
      const newPlace: Place = {
        id: Date.now().toString(),
        name: formData.name,
        distance: formData.distance,
        mapLink: formData.mapLink || 'https://maps.google.com',
        description: formData.description,
        zone: formData.zone as ZoneType
      };
      onAddPlace(newPlace);
      setFormData({
        name: '',
        distance: '',
        mapLink: '',
        description: '',
        zone: ZoneType.RAM_MANDIR
      });
      setIsOpen(false);
      alert('Sthal safaltapurvak joda gaya!');
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-teal-700 hover:bg-teal-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center space-x-2"
        aria-label="Add new place"
      >
        <PlusCircle className="w-6 h-6" />
        <span className="hidden md:inline font-medium">Naya Sthal Jodein</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in">
        <div className="bg-saffron-600 px-6 py-4 flex justify-between items-center">
            <h2 className="text-white font-bold text-lg flex items-center">
                <PlusCircle className="w-5 h-5 mr-2" />
                Naya Sthal Jodein (Add Place)
            </h2>
            <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white text-2xl leading-none"
            >
                &times;
            </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Naam (Name)</label>
                <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                    placeholder="Mandir ka naam"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Doori (Distance)</label>
                <input
                    type="text"
                    required
                    value={formData.distance}
                    onChange={(e) => setFormData({...formData, distance: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                    placeholder="e.g. 1.5 km"
                />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Zone (Kshetra)</label>
            <select
                value={formData.zone}
                onChange={(e) => setFormData({...formData, zone: e.target.value as ZoneType})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all bg-white"
            >
                {ZONES.map(z => <option key={z} value={z}>{z}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Map Link (Optional)</label>
            <input
                type="url"
                value={formData.mapLink}
                onChange={(e) => setFormData({...formData, mapLink: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all"
                placeholder="https://maps.google.com/..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vivaran (Description)</label>
            <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Chota vivaran likhein..."
            ></textarea>
          </div>

          <div className="flex space-x-3 pt-2">
            <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
                Radd Karein
            </button>
            <button
                type="submit"
                className="flex-1 px-4 py-2 bg-saffron-600 text-white rounded-lg hover:bg-saffron-700 transition-colors flex justify-center items-center shadow-md"
            >
                <Save className="w-4 h-4 mr-2" />
                Save Karein
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlaceForm;