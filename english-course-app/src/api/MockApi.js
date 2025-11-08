const categories = ['Beginner', 'Intermediate', 'Advanced', 'Business'];

const lessons = [
  {
    id: 'lesson-01',
    title: 'Introductions and Greetings',
    duration: 18,
    mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    transcript:
      'Learn how to introduce yourself and start conversations confidently in English.'
  },
  {
    id: 'lesson-02',
    title: 'Pronunciation Clinic: Th sounds',
    duration: 15,
    mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
    transcript: 'Practice both voiced and voiceless TH sounds with real-life examples.'
  },
  {
    id: 'lesson-03',
    title: 'Business Email Etiquette',
    duration: 22,
    mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
    transcript: 'Write professional emails and communicate clearly with clients.'
  }
];

const courses = [
  {
    id: 'speak-with-confidence',
    title: 'Speak with Confidence',
    description:
      'Master everyday conversations with guided speaking practice and real feedback.',
    level: 'Beginner',
    rating: 4.9,
    price: 690000,
    thumbnail:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
    lessons,
    syllabus: [
      'Daily conversation drills',
      'Pronunciation workouts',
      'Interactive speaking labs'
    ]
  },
  {
    id: 'business-pro',
    title: 'Business English Pro',
    description:
      'Develop the communication skills you need to thrive in modern workplaces.',
    level: 'Intermediate',
    rating: 4.8,
    price: 990000,
    thumbnail:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    lessons,
    syllabus: ['Meetings and presentations', 'Negotiation skills', 'Cross-cultural etiquette']
  },
  {
    id: 'exam-lab',
    title: 'IELTS Exam Lab',
    description: 'Boost your band score with adaptive practice and expert teacher feedback.',
    level: 'Advanced',
    rating: 4.7,
    price: 1290000,
    thumbnail:
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80',
    lessons,
    syllabus: ['Mock exams', 'Writing clinics', 'Speaking simulations']
  }
];

export const MockApi = {
  getFeaturedCourses() {
    return Promise.resolve(courses.slice(0, 2));
  },
  getCourses() {
    return Promise.resolve(courses);
  },
  getCourseById(id) {
    return Promise.resolve(courses.find((course) => course.id === id));
  },
  getCategories() {
    return Promise.resolve(categories);
  },
  getLessons() {
    return Promise.resolve(lessons);
  }
};

export default MockApi;
