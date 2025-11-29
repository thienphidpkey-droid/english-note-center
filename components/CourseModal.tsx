
import React from 'react';
import { X, Calendar, Clock, BookOpen, Target, CheckCircle } from 'lucide-react';
import { Course } from '../types';
import { LEVEL_COLORS } from '../constants';

interface CourseModalProps {
   course: Course | null;
   onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
   if (!course) return null;

   const colorClass = LEVEL_COLORS[course.level] || 'bg-white border-gray-200';

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
         {/* Backdrop */}
         <div
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
            onClick={onClose}
         ></div>

         {/* Modal Content - Designed like a file folder */}
         <div className={`relative w-full max-w-3xl ${colorClass} rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up border-2`}>
            {/* Header with image */}
            <div className="relative h-48 sm:h-64 shrink-0">
               <img loading="lazy" src={course.image} alt={course.title} className="w-full h-full object-cover" />
               <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-red-100 hover:text-red-500 transition-colors shadow-md"
               >
                  <X size={24} />
               </button>
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full text-xs font-bold mb-2 uppercase tracking-wide">
                     {course.level}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white shadow-sm font-hand">{course.title}</h2>
               </div>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 text-gray-800">
               <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                     <div>
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                           <BookOpen className="text-primary" size={20} />
                           Giới thiệu khóa học
                        </h3>
                        <p className="leading-relaxed text-gray-700">{course.description}</p>
                     </div>

                     <div>
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                           <Target className="text-secondary" size={20} />
                           Mục tiêu đầu ra
                        </h3>
                        <div className="bg-white/50 p-4 rounded-lg border border-black/5">
                           <p className="font-medium text-gray-800">{course.target}</p>
                        </div>
                     </div>

                     <div>
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                           <CheckCircle className="text-green-600" size={20} />
                           Nội dung đào tạo
                        </h3>
                        <ul className="space-y-2">
                           {course.curriculum.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                 <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>

                     {/* Detailed Syllabus */}
                     {course.syllabus && (
                        <div>
                           <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                              <BookOpen className="text-blue-600" size={20} />
                              Lộ trình chi tiết
                           </h3>
                           <div className="space-y-4">
                              {course.syllabus.map((item, idx) => (
                                 <div key={idx} className="bg-white/60 p-4 rounded-lg border border-black/5 hover:bg-white/80 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                       <h4 className="font-bold text-lg text-primary">{item.topic}</h4>
                                       <span className="text-xs font-bold bg-secondary/10 text-secondary px-2 py-1 rounded-full">{item.week}</span>
                                    </div>
                                    <ul className="space-y-1">
                                       {item.content.map((line, i) => (
                                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                             <span className="text-primary/60 mt-1">•</span>
                                             {line}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}
                  </div>

                  {/* Sidebar Info */}
                  <div className="md:col-span-1 space-y-4">
                     <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="mb-4">
                           <p className="text-sm text-gray-500 mb-1 flex items-center gap-1"><Clock size={14} /> Thời lượng</p>
                           <p className="font-bold">{course.duration}</p>
                        </div>
                        <div className="mb-4">
                           <p className="text-sm text-gray-500 mb-1 flex items-center gap-1"><Calendar size={14} /> Lịch học</p>
                           <p className="font-bold">{course.schedule}</p>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                           <p className="text-sm text-gray-500 mb-1">Học phí trọn khóa</p>
                           <p className="text-2xl font-black text-primary">{course.price}</p>
                        </div>
                     </div>

                     <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        Đăng Ký Tư Vấn
                     </button>
                     <p className="text-xs text-center text-gray-500 italic">Cam kết không phát sinh chi phí</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
