import React, { useState } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-secondary text-white p-2 rounded-sm rotate-3 shadow-sm">
              <BookOpen size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-primary font-hand">English Note</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <a href="#courses" className="hover:text-primary transition-colors">Khóa Học</a>
            <a href="#teachers" className="hover:text-primary transition-colors">Giảng Viên</a>
            <a href="#news" className="hover:text-primary transition-colors">Tin Tức</a>
            <a href="#contact" className="hover:text-primary transition-colors">Liên Hệ</a>
            <button className="bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-600 shadow-md transition-all hover:-translate-y-0.5 font-bold text-sm">
              Đăng Ký Ngay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-primary">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
          <div className="flex flex-col p-4 space-y-4 font-medium text-center">
            <a href="#courses" onClick={toggleMenu} className="block py-2 text-gray-600">Khóa Học</a>
            <a href="#teachers" onClick={toggleMenu} className="block py-2 text-gray-600">Giảng Viên</a>
            <a href="#news" onClick={toggleMenu} className="block py-2 text-gray-600">Tin Tức</a>
            <a href="#contact" onClick={toggleMenu} className="block py-2 text-gray-600">Liên Hệ</a>
          </div>
        </div>
      )}
    </nav>
  );
};