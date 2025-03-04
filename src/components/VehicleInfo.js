import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// const CAR_MAKES = [
//   'Acura', 'Audi', 'BMW', 'Chevrolet', 'Chrysler', 'Dodge', 'Ford', 'Honda',
//   'Hyundai', 'Infiniti', 'Jeep', 'Kia', 'Lexus', 'Mazda', 'Mercedes-Benz',
//   'Nissan', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen'
// ];

const CAR_MAKES = [
 'Ford', 'Honda','Toyota'];

const CAR_MODELS = {
  Toyota: ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Prius'],
  Honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'HR-V'],
  Ford: ['F-150', 'Escape', 'Explorer', 'Mustang', 'Edge'],
  // Add more makes and models as needed
};

const VehicleInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    ownership: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'make' ? { model: '' } : {}) // Reset model when make changes
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/quote-info');
  };

  const handleBack = () => {
    navigate('/address-info');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Vehicle Information</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <img 
          src={require('../images/vehicleInfo.jpg')}
          alt="Vehicle Information"
          className="w-full h-48 object-cover rounded-lg mb-6"
        />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Make
              </label>
              <select
                name="make"
                value={formData.make}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Select make</option>
                {CAR_MAKES.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Model
              </label>
              <select
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="form-input"
                required
                disabled={!formData.make}
              >
                <option value="">Select model</option>
                {formData.make && CAR_MODELS[formData.make]?.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Year
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              min="1990"
              max="2025"
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Do you own, lease or finance?
            </label>
            <div className="flex space-x-4">
              {['Own', 'Lease', 'Finance'].map(option => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="ownership"
                    value={option.toLowerCase()}
                    checked={formData.ownership === option.toLowerCase()}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={handleBack}
              className="btn-secondary flex-1"
            >
              Back
            </button>
            <button
              type="submit"
              className="btn-primary flex-1"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleInfo;
