import React from 'react';
import { BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-10 text-center text-sm border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-2 mb-4">
          <BookOpen className="text-gray-700" size={20} />
          <span className="font-bold text-gray-300 text-lg">English Note</span>
        </div>
        <p>© 2024 English Note Center. All rights reserved.</p>
        <p className="mt-2 text-xs">Designed with Passion & Paper Style.</p>
      </div>
    </footer>
  );
};