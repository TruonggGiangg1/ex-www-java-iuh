export const books = [
  {
    id: '1',
    title: 'Dune: Hành Tinh Cát',
    author: 'Frank Herbert',
    price: 265000,
    rating: 4.8,
    reviewCount: 512,
    inventory: 24,
    categories: ['Khoa học viễn tưởng', 'Văn học nước ngoài'],
    tags: ['moi', 'banchay'],
    description:
      'Tác phẩm kinh điển của dòng khoa học viễn tưởng với thế giới chính trị và tôn giáo phức tạp trên hành tinh Arrakis.',
    coverImage:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80',
    highlights: [
      'Thế giới xây dựng sâu sắc',
      'Đạt giải thưởng Nebula và Hugo',
      'Cảm hứng cho nhiều tác phẩm điện ảnh'
    ]
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 189000,
    rating: 4.9,
    reviewCount: 1281,
    inventory: 58,
    categories: ['Kỹ năng sống', 'Tâm lý học'],
    tags: ['banchay'],
    description: 'Cuốn sách hướng dẫn xây dựng thói quen tích cực với các phương pháp khoa học và dễ áp dụng.',
    coverImage:
      'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=400&q=80',
    highlights: [
      'Khung 4 bước xây dựng thói quen',
      'Ứng dụng thực tiễn cao',
      'Được dịch ra 50+ ngôn ngữ'
    ]
  },
  {
    id: '3',
    title: 'Sapiens: Lược Sử Loài Người',
    author: 'Yuval Noah Harari',
    price: 219000,
    rating: 4.7,
    reviewCount: 842,
    inventory: 12,
    categories: ['Lịch sử', 'Khoa học'],
    tags: ['giamgia'],
    description: 'Hành trình khám phá lịch sử và tương lai của loài người qua góc nhìn liên ngành.',
    coverImage:
      'https://images.unsplash.com/photo-1529148482759-b35b25c5f217?auto=format&fit=crop&w=400&q=80',
    highlights: [
      'Quan điểm độc đáo về tiến hóa',
      'Nhiều ví dụ liên hệ thực tế',
      'Được Bill Gates và Barack Obama đề xuất'
    ]
  },
  {
    id: '4',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 345000,
    rating: 4.8,
    reviewCount: 435,
    inventory: 35,
    categories: ['Công nghệ thông tin'],
    tags: ['moi'],
    description: 'Hướng dẫn chi tiết về việc viết mã sạch, dễ bảo trì và mở rộng trong các dự án phần mềm.',
    coverImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80',
    highlights: [
      'Nguyên tắc SOLID',
      'Hàng chục ví dụ thực tế',
      'Bài tập luyện tập cuối mỗi chương'
    ]
  },
  {
    id: '5',
    title: 'Nhà Giả Kim',
    author: 'Paulo Coelho',
    price: 98000,
    rating: 4.6,
    reviewCount: 652,
    inventory: 75,
    categories: ['Văn học nước ngoài'],
    tags: [],
    description: 'Hành trình đầy tính biểu tượng của chàng trai Santiago đi tìm kho báu và ý nghĩa cuộc sống.',
    coverImage:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80',
    highlights: [
      'Được dịch ra 80 ngôn ngữ',
      'Triết lý sống sâu sắc',
      'Bán chạy hàng đầu mọi thời đại'
    ]
  },
  {
    id: '6',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    price: 315000,
    rating: 4.9,
    reviewCount: 298,
    inventory: 27,
    categories: ['Công nghệ thông tin'],
    tags: ['banchay'],
    description: 'Những lời khuyên thực tiễn giúp lập trình viên phát triển tư duy và kỹ năng nghề nghiệp.',
    coverImage:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80',
    highlights: [
      'Các mẹo nhỏ giàu kinh nghiệm',
      'Phù hợp mọi cấp độ',
      'Áp dụng rộng rãi trong ngành'
    ]
  }
];

export const serviceStatus = [
  {
    id: 'catalog-service',
    name: 'Catalog Service',
    description: 'Quản lý danh mục sách và tìm kiếm',
    healthy: true
  },
  {
    id: 'inventory-service',
    name: 'Inventory Service',
    description: 'Đồng bộ tồn kho theo thời gian thực',
    healthy: true
  },
  {
    id: 'order-service',
    name: 'Order Service',
    description: 'Xử lý đơn hàng và thanh toán',
    healthy: true
  },
  {
    id: 'user-service',
    name: 'Identity Service',
    description: 'Xác thực và quản lý tài khoản',
    healthy: true
  }
];
