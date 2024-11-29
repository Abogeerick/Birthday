import React from 'react';
import { Heart, GraduationCap, Gift, Cake } from 'lucide-react';

const Message: React.FC = () => {
  return (
    <div className="space-y-8 text-center">
      <div className="animate-bounce">
        <Heart className="w-16 h-16 text-pink-500 mx-auto" />
      </div>
      
      <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Happy Birthday Deee! 🎉
      </h1>
      
      <div className="flex justify-center items-center space-x-2">
        <GraduationCap className="w-8 h-8 text-indigo-600" />
        <h2 className="text-3xl font-semibold text-indigo-600">
          + Congratulations on Your Graduation!
        </h2>
      </div>

      <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        I was to make this yesterday and was so busy hope am not too late with it. Anyway hope you have enjoyed your day and all I can 
        say is that you have been a wonderful friend and a great person to talk to. Now you wont have to say am just a child btw
      </p>

      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-xl max-w-xl mx-auto">
        <Gift className="w-8 h-8 text-pink-500 mx-auto mb-4" />
        <p className="text-lg text-gray-800">
          Hopefully I will have thought of a proper gift by the time you are from Mombasa
        </p>
      </div>

      <div className="flex justify-center items-center space-x-4">
        <Cake className="w-8 h-8 text-pink-500 animate-pulse" />
        <p className="text-2xl font-medium text-pink-500">
          Here's to your special double celebration! 🎓🎂
        </p>
      </div>
    </div>
  );
};

export default Message;