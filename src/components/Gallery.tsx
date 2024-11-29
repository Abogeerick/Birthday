import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../public/deee1.jpeg'
import img2 from '../public/deee2.jpeg'
import img3 from '../public/deee3.jpeg'

const Gallery = () => {
  const images = [
    {
      url: img1,
      caption: "Birthday Style ✨"
    },
    {
      url: img2,
      caption: "Glowing and Growing 💫"
    },
    {
      url: img3,
      caption: "Night Out Vibes 🌟"
    }
  ];

  return (
    <section id="gallery" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Capturing Your Special Moments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="absolute bottom-4 left-4 text-white font-medium">
                  {image.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;