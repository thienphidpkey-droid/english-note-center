
export enum CourseLevel {
  KIDS = 'Tiểu Học (Cấp 1)',
  TEENS = 'Trung Học (Cấp 2-3)',
  IELTS = 'Luyện thi IELTS',
  COMMUNICATION = 'Giao tiếp & Người đi làm',
  BASIC = 'Tiếng Anh Căn Bản (Mất gốc)'
}

export interface Course {
  id: string;
  title: string;
  level: CourseLevel;
  description: string;
  image: string;
  duration: string;
  students: number;
  // New fields for popup
  price: string;
  schedule: string;
  curriculum: string[];
  target: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  experience: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  tag: string;
  image: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  image: string;
  mapLink: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
