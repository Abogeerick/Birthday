import React from 'react';
import { motion } from 'framer-motion';
import { Heart, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="birthday" className="text-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="flex justify-center space-x-4">
          <Heart className="w-16 h-16 text-pink-500 animate-bounce" />
          <GraduationCap className="w-16 h-16 text-indigo-600 animate-bounce" />
        </div>
        
        <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Happy Birthday Deee!
        </h1>
        
        <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Celebrating your special day and your amazing achievement! 
          From birthday joy to graduation glory - you're absolutely incredible! 🎉🎓
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-xl max-w-xl mx-auto">
          <p className="text-lg text-gray-800 italic">
            "Better late than sorry anyway...and I was supposed to make this yesterday
            Can't wait to give you your gift when you're back from Mombasa! 🎁✨"
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;