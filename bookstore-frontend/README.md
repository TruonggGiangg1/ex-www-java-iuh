# Infinity Books Frontend

Giao diện React cho nền tảng thương mại điện tử bán sách áp dụng kiến trúc hướng dịch vụ (SOA). Ứng dụng mô phỏng các
microservice như Catalog, Cart, Order, Identity và tích hợp chúng thông qua lớp dịch vụ trong frontend.

## Tính năng nổi bật

- Trang chủ trình bày kiến trúc SOA và các dịch vụ lõi của hệ thống.
- Danh mục sách với bộ lọc theo từ khóa, thể loại, sắp xếp và đánh dấu sách nổi bật.
- Chi tiết sách với gợi ý liên quan từ Recommendation Service.
- Giỏ hàng, thanh toán, mô phỏng xử lý đơn hàng và cập nhật tồn kho.
- Hồ sơ người dùng với quy trình đăng nhập và dòng hoạt động gần đây.
- Thanh trạng thái dịch vụ hiển thị tình trạng hoạt động của từng microservice.

## Cấu trúc thư mục

```
bookstore-frontend/
├── public/              # Assets tĩnh (favicon, ...)
├── src/
│   ├── components/      # Thành phần UI dùng chung
│   ├── context/         # React Context quản lý trạng thái (books, cart, auth)
│   ├── hooks/           # Custom hooks (tình trạng dịch vụ)
│   ├── layouts/         # Layout tổng thể của ứng dụng
│   ├── pages/           # Các trang chính theo chức năng SOA
│   ├── services/        # Lớp dịch vụ tương ứng với từng microservice (mock data)
│   ├── styles/          # CSS dùng chung
│   └── utils/           # Tiện ích format, delay...
```

## Khởi chạy dự án

```bash
npm install
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`.

## Ghi chú

- Các dịch vụ backend được mô phỏng bằng dữ liệu tĩnh và Promise để minh họa cách phối hợp giữa các microservice.
- Có thể cấu hình biến môi trường `VITE_API_BASE_URL` để kết nối API thật khi có sẵn backend.
