import React from 'react';

function ExperienceCard({ image, title, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <a href={link} className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full inline-block hover:bg-green-600 transition duration-300">
          Xem chi tiết
        </a>
      </div>
    </div>
  );
}

export default ExperienceCard;