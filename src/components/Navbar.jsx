import React from 'react';

function Navbar() {
  return (
    <nav className="bg-green-500 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-xl font-bold">Mekong Realism</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-green-200">Home</a>
          <a href="#" className="hover:text-green-200">Day Tours</a>
          <a href="#" className="hover:text-green-200">Multi-Day Tours</a>
          <a href="#" className="hover:text-green-200">Contact</a>
          <a href="#" className="hover:text-green-200">About us</a>
        </div>
        <button className="bg-white text-green-500 font-semibold py-2 px-4 rounded-full hover:bg-green-200 hover:text-white transition duration-300">
          BOOK NOW
        </button>
        {/* Thêm icon menu cho responsive nếu cần */}
      </div>
    </nav>
  );
}

export default Navbar;