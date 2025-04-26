import React from 'react';
import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-teal-700 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">LIÊN HỆ</h3>
          <p className="mb-2">+84 9xxxxxxxx</p>
          <p className="mb-2">email@mekongrealism.com</p>
          <p>Địa chỉ của bạn ở Cần Thơ</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">THEO DÕI</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-75"><FaFacebook className="w-6 h-6" /></a>
            <a href="#" className="hover:opacity-75"><FaInstagram className="w-6 h-6" /></a>
            <a href="#" className="hover:opacity-75"><FaTripadvisor className="w-6 h-6" /></a>
          </div>
        </div>
        <div className="text-right">
          <p>&copy; 2023 Mekong Realism</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;