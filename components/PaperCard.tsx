import React from 'react';

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  rotate?: boolean;
  type?: 'tape' | 'clip' | 'none';
  colorClass?: string; // Prop mới để chỉnh màu nền
}

export const PaperCard: React.FC<PaperCardProps> = ({ 
  children, 
  className = '', 
  rotate = false,
  type = 'none',
  colorClass = 'bg-white' // Mặc định là trắng
}) => {
  const rotationClass = rotate 
    ? (Math.random() > 0.5 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0') 
    : 'hover:-translate-y-1';

  return (
    <div className={`relative ${colorClass} text-gray-800 p-6 shadow-paper hover:shadow-paper-hover transition-all duration-300 ease-out border rounded-sm ${rotationClass} ${className}`}>
      {type === 'tape' && <div className="tape"></div>}
      {type === 'clip' && <div className="paper-clip"></div>}
      {children}
    </div>
  );
};