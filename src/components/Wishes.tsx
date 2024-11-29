import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';

const Wishes = () => {
  const wishes = [
    "May your day be filled with joy and laughter! 🎉",
    "Congratulations on your graduation! You've worked so hard for this! 🎓",
    "Here's to new beginnings and amazing achievements! ⭐",
    "Can't wait to celebrate with you this weekend! 🎁"
  ];

  return (
    <section id="wishes" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Birthday & Graduation Wishes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {wishes.map((wish, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-start space-x-4">
              {index % 2 === 0 ? (
                <Star className="w-6 h-6 text-yellow-500 flex-shrink-0" />
              ) : (
                <Heart className="w-6 h-6 text-pink-500 flex-shrink-0" />
              )}
              <p className="text-lg text-gray-700">{wish}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Wishes;