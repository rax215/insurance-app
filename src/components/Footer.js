import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: support@insurance.com</p>
            <p>Phone: 1-800-INSURANCE</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#privacy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-300">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:text-gray-300">Facebook</a>
              <a href="#twitter" className="hover:text-gray-300">Twitter</a>
              <a href="#linkedin" className="hover:text-gray-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-gray-600">
          <p>&copy; 2025 Insurance Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
