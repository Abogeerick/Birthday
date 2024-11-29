import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <Heart className="w-5 h-5 text-pink-500" />
          <p className="text-gray-600">
            Made with love for Deee's special day
          </p>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Celebrating both your birthday and graduation! 🎉🎓
        </p>
      </div>
    </footer>
  );
};

export default Footer;