
import { Course, CourseLevel, Teacher, NewsItem, Branch } from './types.ts';

// Map colors to levels for sticky note effect
// Kids: Vàng, Teens: Xanh lá, IELTS: Xanh dương, Giao tiếp: Hồng, Căn bản: Cam
export const LEVEL_COLORS: Record<CourseLevel, string> = {
  [CourseLevel.KIDS]: 'bg-yellow-50 border-yellow-200 text-yellow-900',
  [CourseLevel.TEENS]: 'bg-green-50 border-green-200 text-green-900',
  [CourseLevel.IELTS]: 'bg-blue-50 border-blue-200 text-blue-900',
  [CourseLevel.COMMUNICATION]: 'bg-pink-50 border-pink-200 text-pink-900',
  [CourseLevel.BASIC]: 'bg-orange-50 border-orange-200 text-orange-900',
};

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Super Kids Explorer',
    level: CourseLevel.KIDS,
    description: 'Khơi dậy niềm đam mê tiếng Anh cho bé từ 6-10 tuổi qua các hoạt động vui chơi và kể chuyện.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
    duration: '3 tháng / khóa',
    students: 1200,
    price: '3.500.000 VNĐ',
    schedule: 'T7 - CN (8:00 - 10:00)',
    curriculum: [
      'Phát âm chuẩn IPA qua bài hát',
      'Từ vựng chủ đề gia đình, trường học',
      'Kể chuyện tiếng Anh (Storytelling)',
      'Thuyết trình nhí tự tin'
    ],
    target: 'Bé mạnh dạn giao tiếp, yêu thích tiếng Anh'
  },
  {
    id: 'c2',
    title: 'Teen Leaders Academy',
    level: CourseLevel.TEENS,
    description: 'Củng cố ngữ pháp, phát triển 4 kỹ năng chuẩn bị cho các kỳ thi chuyển cấp và Cambridge.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    duration: '6 tháng',
    students: 850,
    price: '5.200.000 VNĐ',
    schedule: 'T2 - T4 - T6 (18:00 - 19:30)',
    curriculum: [
      'Ngữ pháp chuyên sâu cấp 2-3',
      'Luyện đề thi vào lớp 10 chuyên',
      'Kỹ năng viết luận (Essay Writing)',
      'Debate: Tranh biện tiếng Anh'
    ],
    target: 'Điểm tổng kết trên 8.0, đỗ trường chuyên'
  },
  {
    id: 'c3',
    title: 'IELTS Intensive 7.0+',
    level: CourseLevel.IELTS,
    description: 'Chiến thuật làm bài chuyên sâu, cam kết đầu ra với đội ngũ giảng viên 8.5 IELTS.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
    duration: '4 tháng',
    students: 500,
    price: '8.900.000 VNĐ',
    schedule: 'T3 - T5 (19:00 - 21:00)',
    curriculum: [
      'Speaking: Sửa lỗi phát âm 1-1',
      'Writing: Tư duy logic & từ vựng band 8.0',
      'Reading & Listening: Mẹo làm bài nhanh',
      'Thi thử Mock Test hàng tuần'
    ],
    target: 'Cam kết đầu ra IELTS 6.5 - 7.5'
  },
  {
    id: 'c4',
    title: 'Giao Tiếp Công Sở PRO',
    level: CourseLevel.COMMUNICATION,
    description: 'Tự tin thuyết trình, đàm phán và viết email chuyên nghiệp trong môi trường quốc tế.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop',
    duration: '2.5 tháng',
    students: 2100,
    price: '4.500.000 VNĐ',
    schedule: 'T2 - T4 (19:30 - 21:00)',
    curriculum: [
      'Tiếng Anh giao tiếp văn phòng',
      'Kỹ năng viết Email thương mại',
      'Thuyết trình và Đàm phán',
      'Phỏng vấn xin việc tiếng Anh'
    ],
    target: 'Giao tiếp trôi chảy, thăng tiến công việc'
  },
  {
    id: 'c5',
    title: 'Xóa Mù Tiếng Anh (Basic)',
    level: CourseLevel.BASIC,
    description: 'Lấy lại căn bản cho người mất gốc, xây dựng nền tảng từ vựng và ngữ pháp vững chắc.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop',
    duration: '3 tháng',
    students: 1500,
    price: '3.000.000 VNĐ',
    schedule: 'T3 - T5 - T7 (18:00 - 19:30)',
    curriculum: [
      '3000 từ vựng thông dụng nhất',
      '12 thì tiếng Anh cơ bản',
      'Phản xạ nghe nói căn bản',
      'Đọc hiểu văn bản đơn giản'
    ],
    target: 'Nắm vững nền tảng, tự tin học lên cao'
  },
  {
    id: 'c6',
    title: 'IELTS Foundation',
    level: CourseLevel.IELTS,
    description: 'Bước đệm vững chắc cho người mới bắt đầu làm quen với bài thi IELTS Academic.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    duration: '3 tháng',
    students: 600,
    price: '6.000.000 VNĐ',
    schedule: 'T2 - T6 (18:30 - 20:30)',
    curriculum: [
      'Giới thiệu cấu trúc bài thi IELTS',
      'Xây dựng vốn từ Academic',
      'Luyện nghe chép chính tả',
      'Viết câu và đoạn văn chuẩn ngữ pháp'
    ],
    target: 'Đạt band 4.5 - 5.0'
  },
  {
    id: 'c7',
    title: 'Tiếng Anh Mẫu Giáo (Tiny Tots)',
    level: CourseLevel.KIDS,
    description: 'Làm quen tiếng Anh qua bài hát và vận động cho bé 3-5 tuổi.',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop',
    duration: '3 tháng',
    students: 400,
    price: '3.200.000 VNĐ',
    schedule: 'T7 - CN (15:00 - 16:30)',
    curriculum: ['Học qua bài hát', 'Flashcard màu sắc', 'Trò chơi vận động', 'Phản xạ đơn giản'],
    target: 'Bé yêu thích tiếng Anh'
  },
  {
    id: 'c8',
    title: 'Luyện Thi THPT Quốc Gia',
    level: CourseLevel.TEENS,
    description: 'Tổng ôn toàn diện ngữ pháp và giải đề thi đại học các năm.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
    duration: 'Cấp tốc 3 tháng',
    students: 900,
    price: '4.800.000 VNĐ',
    schedule: 'T2 - T4 - T6 (19:30 - 21:00)',
    curriculum: ['Giải đề thi các năm', 'Mẹo tránh bẫy trắc nghiệm', 'Tổng ôn 12 thì', 'Từ vựng SGK 12'],
    target: 'Đạt 8+ thi tốt nghiệp'
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: 't1',
    name: 'Ms. Sarah Nguyen',
    role: 'Head of IELTS',
    bio: 'Truyền cảm hứng với phương pháp dạy tư duy logic, không học vẹt.',
    experience: '8.5 IELTS Overall, Thạc sĩ TESOL tại ĐH Sydney, 10 năm kinh nghiệm luyện thi.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Mr. David Walker',
    role: 'Native Expert',
    bio: 'Vui tính, hài hước, giúp học viên xóa bỏ nỗi sợ nói tiếng Anh.',
    experience: 'Cử nhân Ngôn ngữ học ĐH Oxford, 5 năm kinh nghiệm dạy giao tiếp tại Châu Á.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: 'Cô Lan Anh',
    role: 'Chuyên gia Kids',
    bio: 'Yêu trẻ, kiên nhẫn và luôn sáng tạo các trò chơi trong lớp học.',
    experience: 'Chứng chỉ CELTA YL (Young Learners), 7 năm kinh nghiệm dạy tiếng Anh tiểu học.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop'
  },
  {
    id: 't4',
    name: 'Thầy Minh Trí',
    role: 'Chuyên gia Ngữ Pháp',
    bio: 'Biến những cấu trúc khô khan thành công thức dễ nhớ.',
    experience: 'Thủ khoa ĐH Sư Phạm Anh, tác giả sách "Giải mã ngữ pháp".',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop'
  },
  {
    id: 't5',
    name: 'Ms. Emily Tran',
    role: 'Giao Tiếp Advanced',
    bio: 'Phong cách hiện đại, thực tế, tập trung vào tiếng Anh thương mại.',
    experience: 'MBA tại Mỹ, 6 năm làm việc tại các tập đoàn đa quốc gia.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
  },
  {
    id: 't6',
    name: 'Mr. Robert Brown',
    role: 'IELTS Speaking',
    bio: 'Cựu giám khảo IELTS, giúp bạn hiểu rõ tiêu chí chấm thi.',
    experience: 'Chứng chỉ DELTA, 15 năm giảng dạy tiếng Anh học thuật.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Gala Vinh Danh Học Viên Xuất Sắc Quý I',
    date: '2024-05-15',
    summary: 'Buổi lễ trang trọng trao học bổng tổng trị giá 200 triệu đồng cho các bạn đạt IELTS 8.0+.',
    tag: 'Sự kiện',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'n2',
    title: 'Khai trương cơ sở mới tại Quận 7',
    date: '2024-05-10',
    summary: 'Không gian học tập chuẩn 5 sao, ưu đãi giảm 30% học phí tuần lễ khai trương.',
    tag: 'Thông báo',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'n3',
    title: 'Workshop: Bí kíp Speaking cùng Mr. David',
    date: '2024-05-01',
    summary: 'Chia sẻ độc quyền về cách phát triển ý tưởng và phản xạ tự nhiên trong bài thi nói.',
    tag: 'Góc học tập',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'n4',
    title: 'Cuộc thi "English Voice 2024"',
    date: '2024-06-01',
    summary: 'Sân chơi hùng biện tiếng Anh lớn nhất năm dành cho khối THCS & THPT.',
    tag: 'Cuộc thi',
    image: 'https://images.unsplash.com/photo-1475721027767-pqs437025852?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'n5',
    title: 'Lịch thi thử IELTS miễn phí tháng 6',
    date: '2024-05-25',
    summary: 'Cơ hội cọ xát với đề thi thật và được chấm chữa chi tiết bởi đội ngũ 8.0+.',
    tag: 'Học thuật',
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'n6',
    title: 'Hoạt động ngoại khóa: Summer Camp',
    date: '2024-06-15',
    summary: 'Trại hè tiếng Anh 2 ngày 1 đêm tại Vũng Tàu - Vừa chơi vừa học.',
    tag: 'Hoạt động',
    image: 'https://images.unsplash.com/photo-1526657772421-98579d15024b?q=80&w=2070&auto=format&fit=crop'
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'b1',
    name: 'Cơ sở Quận 1 (Head Office)',
    address: '123 Đường Nguyễn Huệ, P. Bến Nghé, Quận 1, TP. HCM',
    phone: '0909 123 456',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    mapLink: '#'
  },
  {
    id: 'b2',
    name: 'Cơ sở Bình Thạnh',
    address: '456 Đường D2, P. 25, Q. Bình Thạnh, TP. HCM',
    phone: '0909 234 567',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
    mapLink: '#'
  },
  {
    id: 'b3',
    name: 'Cơ sở Quận 7',
    address: '789 Nguyễn Văn Linh, P. Tân Phong, Quận 7, TP. HCM',
    phone: '0909 345 678',
    image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop',
    mapLink: '#'
  },
  {
    id: 'b4',
    name: 'Cơ sở Thủ Đức',
    address: '101 Võ Văn Ngân, P. Linh Chiểu, TP. Thủ Đức',
    phone: '0909 456 789',
    image: 'https://images.unsplash.com/photo-1504384308090-c54be3855091?q=80&w=2070&auto=format&fit=crop',
    mapLink: '#'
  },
  {
    id: 'b5',
    name: 'Cơ sở Gò Vấp',
    address: '234 Phan Văn Trị, P. 10, Q. Gò Vấp, TP. HCM',
    phone: '0909 567 890',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2000&auto=format&fit=crop',
    mapLink: '#'
  },
  {
    id: 'b6',
    name: 'Cơ sở Hà Nội',
    address: '88 Phố Huế, Q. Hai Bà Trưng, Hà Nội',
    phone: '0909 678 901',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop',
    mapLink: '#'
  }
];

export const CONTACT_INFO = {
  address: "123 Đường Học Vấn, Quận Tri Thức, TP. Hồ Chí Minh",
  phone: "0909 123 456",
  email: "tuyensinh@englishnote.edu.vn",
  facebook: "English Note Center",
  mapUrl: "https://www.google.com/maps/embed?pb=..."
};
