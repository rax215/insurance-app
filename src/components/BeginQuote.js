import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BeginQuote = () => {
  const [insuranceType, setInsuranceType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (insuranceType) {
      navigate('/personal-info');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Get Your Insurance Quote</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Insurance Coverage"
          className="w-full h-48 object-cover rounded-lg mb-6"
        />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Select Insurance Type
            </label>
            <select
              value={insuranceType}
              onChange={(e) => setInsuranceType(e.target.value)}
              className="form-input"
              required
            >
              <option value="">Select an option</option>
              <option value="auto">Auto Insurance</option>
              <option value="homeowner">Homeowner Insurance</option>
              <option value="business">Business Insurance</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn-primary w-full"
          >
            Start Your Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeginQuote;
