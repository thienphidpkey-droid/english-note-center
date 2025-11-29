import React, { useState } from 'react';
import { Users, MapPin, Phone, Facebook, Mail, ArrowRight, Calendar, Youtube, Instagram } from 'lucide-react';
import { PaperCard } from './components/PaperCard';
import { ChatBot } from './components/ChatBot';
import { CourseModal } from './components/CourseModal';
import { CountUp } from './components/CountUp';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { COURSES, TEACHERS, NEWS, CONTACT_INFO, LEVEL_COLORS, BRANCHES } from './constants';
import { Course, CourseLevel } from './types';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = activeFilter === 'ALL' 
    ? COURSES 
    : COURSES.filter(c => c.level === activeFilter);

  return (
    <div className="min-h-screen font-sans text-gray-800 overflow-x-hidden selection:bg-secondary selection:text-white bg-[#F3F4F6]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6 z-10">
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-2">
              #1 TRUNG TÂM ANH NGỮ THỰC CHIẾN
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Biến tiếng Anh thành <br/>
              <span className="text-primary relative inline-block transform -rotate-1">
                <span className="relative z-10 px-2">Sức mạnh</span>
                <span className="absolute inset-0 bg-yellow-200 h-1/2 bottom-0 -z-10 rounded-sm opacity-60"></span>
              </span> 
              của bạn
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Phương pháp học tập hiện đại, không gian sáng tạo như những trang giấy note đầy màu sắc. Từ mất gốc đến IELTS 8.0+, chúng tôi đồng hành cùng bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Kiểm tra trình độ <ArrowRight size={20} />
              </button>
              <button className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-lg font-bold hover:border-primary hover:text-primary transition-all">
                Xem lộ trình
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
             {/* Decorative background blobs */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative grid grid-cols-2 gap-4 rotate-2">
              <PaperCard className="col-span-1" type="tape" rotate colorClass="bg-white">
                <img loading="lazy" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Student" className="rounded-sm mb-3 grayscale hover:grayscale-0 transition-all duration-500" />
                <p className="font-hand text-lg text-center font-bold text-primary">Happy Learning!</p>
              </PaperCard>
              <PaperCard className="col-span-1 mt-12" type="clip" colorClass="bg-yellow-50">
                 <div className="h-full flex flex-col items-center justify-center text-center p-2">
                    <span className="text-5xl font-black text-secondary">98%</span>
                    <span className="text-sm font-semibold text-gray-600 mt-2">Học viên đạt mục tiêu cam kết</span>
                 </div>
              </PaperCard>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white relative">
        <div className="absolute top-0 w-full h-12 bg-gradient-to-b from-[#F3F4F6] to-white"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Khóa Học Đa Sắc Màu</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600">Chọn màu sắc phù hợp với lứa tuổi và mục tiêu của bạn. Mỗi tờ note là một hành trình tri thức mới.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button 
              onClick={() => setActiveFilter('ALL')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeFilter === 'ALL' ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Tất cả
            </button>
            {Object.values(CourseLevel).map((level) => (
              <button
                key={level}
                onClick={() => setActiveFilter(level)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${activeFilter === level ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} onClick={() => setSelectedCourse(course)} className="cursor-pointer group">
                <PaperCard 
                  type="none" 
                  className="h-full flex flex-col transform transition-transform group-hover:-translate-y-2" 
                  rotate
                  colorClass={LEVEL_COLORS[course.level]}
                >
                  <div className="relative overflow-hidden rounded-sm mb-4 h-48 border border-black/5">
                    <img loading="lazy" src={course.image} alt={course.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-bold rounded-sm shadow-sm text-primary uppercase">
                      {course.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-70 mb-3">{course.level}</p>
                  <p className="text-gray-700/80 mb-6 flex-1 text-sm leading-relaxed">{course.description}</p>
                  <div className="flex items-center justify-between border-t border-black/10 pt-4 mt-auto">
                    <div className="flex items-center gap-1 opacity-70 text-sm font-medium">
                      <Users size={16} />
                      <span>{course.students} học viên</span>
                    </div>
                    <button className="font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Xem chi tiết <ArrowRight size={16} />
                    </button>
                  </div>
                </PaperCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20 px-4 bg-[#F9FAFB]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">Đội Ngũ "Siêu Sao"</h2>
              <p className="text-gray-600">Những người truyền lửa đam mê, 100% có chứng chỉ giảng dạy quốc tế (TESOL/CELTA).</p>
            </div>
            <button className="hidden md:flex items-center gap-2 font-bold text-primary hover:text-blue-700 transition-colors mt-4 md:mt-0">
              Xem toàn bộ đội ngũ <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEACHERS.map((teacher, idx) => (
              <div key={teacher.id} className="relative group mt-8 sm:mt-0">
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/50 backdrop-blur-sm border-l border-r border-gray-200 rotate-2 z-20 shadow-sm"></div>
                
                <div className="bg-white p-6 pt-10 rounded-sm shadow-paper hover:shadow-paper-hover transition-all duration-300 h-full flex flex-col items-center text-center border border-gray-100">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-50 shadow-md mb-4 group-hover:scale-105 transition-transform">
                    <img loading="lazy" src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{teacher.name}</h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-wide mb-3">{teacher.role}</p>
                  <p className="text-gray-500 text-sm italic mb-4 flex-1">"{teacher.bio}"</p>
                  <div className="w-full pt-4 border-t border-gray-100">
                     <p className="text-xs text-gray-400 font-semibold text-left mb-1">KINH NGHIỆM:</p>
                     <p className="text-xs text-gray-700 text-left leading-snug">{teacher.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner with Animation */}
      <section className="bg-primary py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           {[
             { label: 'Cơ sở đào tạo', val: 5, suffix: '+' },
             { label: 'Học viên tốt nghiệp', val: 12000, suffix: '+' },
             { label: 'Đối tác doanh nghiệp', val: 50, suffix: '+' },
             { label: 'Giáo viên Quốc tế', val: 100, suffix: '%' }
           ].map((stat, idx) => (
             <div key={idx} className="space-y-2 p-4 rounded-lg hover:bg-white/5 transition-colors">
                <h3 className="text-4xl md:text-5xl font-black font-hand">
                  <CountUp end={stat.val} suffix={stat.suffix} />
                </h3>
                <p className="text-blue-100 font-medium">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Bảng Tin & Sự Kiện Mới Nhất</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEWS.map((item, index) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                    <img loading="lazy" src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded shadow-md">
                        {item.tag}
                    </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                   <span className="text-xs text-gray-400 font-mono mb-2 flex items-center gap-1">
                      <Calendar size={12}/> {item.date}
                   </span>
                   <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                       {item.title}
                   </h3>
                   <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{item.summary}</p>
                   <a href="#" className="text-sm font-bold text-primary hover:underline mt-auto flex items-center gap-1">
                       Đọc tiếp <ArrowRight size={14} />
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <div className="inline-block bg-primary px-3 py-1 rounded text-xs font-bold mb-4">KẾT NỐI NGAY</div>
              <h2 className="text-3xl font-bold mb-6">Bạn Đã Sẵn Sàng Bứt Phá?</h2>
              <p className="text-gray-400 mb-8">
                Để lại thông tin hoặc ghé thăm văn phòng English Note gần nhất. Chúng tôi luôn có trà ngon và những lời khuyên bổ ích cho lộ trình của bạn.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-full text-secondary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Trụ sở chính</h4>
                    <p className="text-gray-400">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-full text-secondary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Hotline tư vấn</h4>
                    <p className="text-gray-400 font-mono text-xl">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 p-3 rounded-full text-secondary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email hỗ trợ</h4>
                    <p className="text-gray-400">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <a href="#" className="bg-[#1877F2] p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:-translate-y-1">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-[#FF0000] p-3 rounded-full hover:bg-red-700 transition-colors shadow-lg hover:-translate-y-1">
                  <Youtube size={20} />
                </a>
                <a href="#" className="bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] p-3 rounded-full hover:opacity-90 transition-opacity shadow-lg hover:-translate-y-1">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-96 bg-gray-800 rounded-2xl overflow-hidden relative group border-4 border-gray-700 shadow-2xl rotate-1">
                {/* Simplified Map representation */}
                <div className="w-full h-full opacity-60 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                   <div className="bg-secondary text-white p-4 rounded-full animate-bounce shadow-lg ring-4 ring-secondary/30">
                      <MapPin size={40} fill="currentColor" />
                   </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white text-gray-900 p-4 rounded-xl shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                       <p className="font-bold text-lg">English Note Center</p>
                       <p className="text-xs text-gray-500">{CONTACT_INFO.address}</p>
                    </div>
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Opening</div>
                  </div>
                </div>
            </div>
          </div>
          
          {/* Branch System */}
          <div className="pt-16 border-t border-gray-800">
            <h3 className="text-2xl font-bold mb-8 text-center">Hệ Thống Chi Nhánh</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {BRANCHES.map(branch => (
                 <div key={branch.id} className="group relative">
                    <PaperCard className="h-full bg-white text-gray-800 hover:-translate-y-1 transition-transform duration-300" rotate type="clip" colorClass="bg-white">
                        <div className="h-40 -mx-6 -mt-6 mb-4 overflow-hidden relative">
                           <img loading="lazy" src={branch.image} alt={branch.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                           <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-primary">{branch.name}</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                           <p className="flex items-start gap-2">
                              <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                              {branch.address}
                           </p>
                           <p className="flex items-center gap-2">
                              <Phone size={16} className="shrink-0 text-secondary" />
                              {branch.phone}
                           </p>
                        </div>
                    </PaperCard>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Popups & Widgets */}
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      <ChatBot />
    </div>
  );
};

export default App;