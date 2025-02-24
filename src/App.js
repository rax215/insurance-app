import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BeginQuote from './components/BeginQuote';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import VehicleInfo from './components/VehicleInfo';
import QuoteInfo from './components/QuoteInfo';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<BeginQuote />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/address-info" element={<AddressInfo />} />
            <Route path="/vehicle-info" element={<VehicleInfo />} />
            <Route path="/quote-info" element={<QuoteInfo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
