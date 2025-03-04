import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QuoteInfo = () => {
  const navigate = useNavigate();
  const [premium, setPremium] = useState(0);
  const [originalPremium, setOriginalPremium] = useState(0);
  const [showDiscount, setShowDiscount] = useState(false);

  useEffect(() => {
    // Generate random 3-digit premium between 100 and 999
    const randomPremium = Math.floor(Math.random() * 900) + 100;
    setOriginalPremium(randomPremium);
    
    if (randomPremium > 300) {
      setShowDiscount(true);
      const discountedPremium = randomPremium * 0.95;
      setPremium(discountedPremium);
    } else {
      setShowDiscount(false);
      setPremium(randomPremium);
    }
  }, []);

  const handleBack = () => {
    navigate('/vehicle-info');
  };

  const handleIssuance = () => {
    // Handle insurance issuance logic here
    alert('Thank you for choosing our insurance! Our team will contact you shortly.');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Your Quote</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <img 
          src={require('../images/quoteInfo.jpg')}
          alt="Quote Information"
          className="w-full h-48 object-cover rounded-lg mb-6"
        />
        
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Monthly Premium</h3>
          {showDiscount && (
            <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mb-4">
              <p className="font-semibold">5% Good Payer Discount Applied!</p>
              <p className="text-sm"><span className="line-through">${originalPremium}</span> → ${premium.toFixed(2)}</p>
            </div>
          )}
          <div className="bg-success bg-opacity-20 rounded-lg p-6 inline-block">
            <span className="text-success text-4xl font-bold">${premium.toFixed(2)}</span>
            <span className="text-success text-xl ml-1">/month</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold mb-4">Coverage Includes:</h4>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Comprehensive Coverage
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Collision Coverage
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Personal Injury Protection
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              24/7 Roadside Assistance
            </li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleBack}
            className="btn-secondary flex-1"
          >
            Back
          </button>
          <button
            onClick={handleIssuance}
            className="btn-primary flex-1"
          >
            Issue Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteInfo;
