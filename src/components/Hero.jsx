import React from 'react';
import heroImage from '../assets/hero-image.jpg'; // Thay thế bằng hình ảnh phù hợp

function Hero() {
  return (
    <div className="relative">
      <img src={heroImage} alt="Mekong Delta" className="w-full h-auto max-h-[600px] object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Khám phá vẻ đẹp miền Tây sông nước</h1>
        <p className="text-lg">Trải nghiệm những điều tuyệt vời nhất tại Cần Thơ và vùng lân cận.</p>
        <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full mt-6 hover:bg-green-600 transition duration-300">
          Xem các tour ngay
        </button>
      </div>
    </div>
  );
}

export default Hero;