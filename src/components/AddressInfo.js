import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
];

const AddressInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/vehicle-info');
  };

  const handleBack = () => {
    navigate('/personal-info');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Address Information</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <img 
          src={require('../images/addressInfo.jpg')}
          alt="Address Information"
          className="w-full h-48 object-cover rounded-lg mb-6"
        />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Address Line 1
            </label>
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Address Line 2
            </label>
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                State
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Select a state</option>
                {US_STATES.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Zipcode
            </label>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              pattern="[0-9]{5}"
              className="form-input"
              required
            />
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

export default AddressInfo;
