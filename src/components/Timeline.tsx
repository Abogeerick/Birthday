import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, GraduationCap, Gift, PartyPopper } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      icon: PartyPopper,
      title: "Birthday Celebration",
      description: "Another year of being amazing!",
      date: "Today"
    },
    {
      icon: GraduationCap,
      title: "Moringa Graduation",
      description: "Achieving new heights in your career",
      date: "Today"
    },
    {
      icon: Gift,
      title: "Special Surprise",
      description: "Weekend celebration when you're back from Mombasa",
      date: "Coming Soon"
    }
  ];

  return (
    <section id="graduation" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Your Special Timeline
      </h2>
      <div className="max-w-3xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex gap-4 mb-8"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <event.icon className="w-6 h-6 text-indigo-600" />
              </div>
              {index !== events.length - 1 && (
                <div className="w-0.5 h-full bg-indigo-200 mt-2"></div>
              )}
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md flex-1">
              <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <span className="text-sm text-indigo-600 font-medium mt-2 inline-block">
                {event.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;