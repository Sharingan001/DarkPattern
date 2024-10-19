import React from 'react';

const DarkPatternCard = ({ pattern }) => {
  const Icon = pattern.icon;

  return (
    <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
      <div className="flex items-center mb-4">
        <Icon size={24} className="text-yellow-400 mr-2" />
        <h3 className="text-xl font-semibold">{pattern.type}</h3>
      </div>
      <p className="text-gray-300">{pattern.description}</p>
    </div>
  );
};

export default DarkPatternCard;