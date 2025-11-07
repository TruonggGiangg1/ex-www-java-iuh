import { Link } from 'react-router-dom';
import { useBooks } from '../context/BookContext.jsx';
import BookCard from '../components/BookCard.jsx';
import './HomePage.css';

const services = [
  {
    id: 'catalog',
    title: 'Catalog Service',
    description: 'Quản lý danh mục và gợi ý sách dựa trên hành vi.',
    icon: 'auto_stories',
    accent: 'service-card--primary'
  },
  {
    id: 'inventory',
    title: 'Inventory Service',
    description: 'Đồng bộ tồn kho thời gian thực giữa cửa hàng và kho.',
    icon: 'inventory',
    accent: 'service-card--secondary'
  },
  {
    id: 'order',
    title: 'Order Service',
    description: 'Xử lý thanh toán, xuất hóa đơn và theo dõi vận chuyển.',
    icon: 'receipt_long',
    accent: 'service-card--tertiary'
  },
  {
    id: 'user',
    title: 'Identity Service',
    description: 'Quản lý xác thực, quyền truy cập và loyalty.',
    icon: 'verified_user',
    accent: 'service-card--quaternary'
  }
];

export default function HomePage() {
  const { featured, isLoading } = useBooks();

  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-content">
          <span className="home__hero-chip">Nền tảng thương mại điện tử theo kiến trúc SOA</span>
          <h1>
            Khám phá thế giới sách
            <span> qua trải nghiệm số hiện đại</span>
          </h1>
          <p>
            Infinity Books kết nối độc giả với hàng ngàn đầu sách chất lượng. Hệ thống dịch vụ tách biệt giúp vận hành linh
            hoạt, mở rộng nhanh chóng và luôn sẵn sàng phục vụ.
          </p>
          <div className="home__cta">
            <Link className="home__cta-primary" to="/catalog">
              Khám phá ngay
            </Link>
            <Link className="home__cta-secondary" to="/profile">
              Trải nghiệm cá nhân hóa
            </Link>
          </div>
        </div>
        <div className="home__hero-visual">
          <div className="home__hero-card">
            <span className="material-symbols-rounded" aria-hidden>
              dynamic_form
            </span>
            <p>
              "SOA cho phép từng dịch vụ được triển khai độc lập, giảm thiểu downtime và tối ưu hiệu năng cho toàn bộ hành
              trình mua sắm."
            </p>
            <span className="home__hero-author">— CTO Infinity Books</span>
          </div>
        </div>
      </section>

      <section className="home__services">
        <header>
          <h2>Kiến trúc dịch vụ tách biệt</h2>
          <p>Hệ sinh thái dịch vụ giúp đội ngũ phát triển linh hoạt và dễ dàng tích hợp bên thứ ba.</p>
        </header>
        <div className="home__services-grid">
          {services.map((service) => (
            <article key={service.id} className={`service-card ${service.accent}`}>
              <span className="material-symbols-rounded" aria-hidden>
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home__featured">
        <header>
          <h2>Sách nổi bật</h2>
          <p>Được chọn lọc dựa trên dữ liệu từ Catalog Service và lịch sử mua hàng.</p>
        </header>
        <div className="home__featured-grid">
          {isLoading ? <p>Đang tải...</p> : featured.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      </section>

      <section className="home__integration">
        <div>
          <h2>Trải nghiệm đa kênh, tích hợp liền mạch</h2>
          <ul>
            <li>API GraphQL Gateway kết hợp dữ liệu từ các dịch vụ catalog, giá và tồn kho.</li>
            <li>Event Bus sử dụng Kafka đảm bảo đơn hàng được xử lý và thông báo theo thời gian thực.</li>
            <li>Pipeline phân tích dữ liệu giúp cá nhân hóa đề xuất và chiến dịch marketing.</li>
          </ul>
        </div>
        <div className="home__integration-card">
          <h3>Dòng chảy nghiệp vụ</h3>
          <ol>
            <li>Catalog Service trả về danh sách sách và gợi ý.</li>
            <li>Cart Service quản lý trạng thái giỏ hàng theo người dùng.</li>
            <li>Order Service xác nhận thanh toán và phát hành hóa đơn.</li>
            <li>Notification Service gửi email và cập nhật tình trạng vận chuyển.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
