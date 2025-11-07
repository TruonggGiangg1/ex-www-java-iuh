import './Footer.css';

const footerLinks = [
  {
    title: 'Infinity Books',
    items: [
      'Về chúng tôi',
      'Tin tức & blog',
      'Tuyển dụng'
    ]
  },
  {
    title: 'Hỗ trợ',
    items: [
      'Trung tâm trợ giúp',
      'Phương thức thanh toán',
      'Chính sách đổi trả'
    ]
  },
  {
    title: 'Kết nối',
    items: [
      'Facebook',
      'Youtube',
      'Zalo'
    ]
  }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <h2 className="footer__brand">Infinity Books</h2>
          <p className="footer__text">
            Nền tảng thương mại điện tử dành cho những người yêu sách. Chúng tôi mang đến trải nghiệm mua sắm hiện đại,
            cá nhân hóa và tận tâm.
          </p>
        </div>
        <div className="footer__grid">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="footer__title">{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>
                    <a className="footer__link" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer__legal">© {new Date().getFullYear()} Infinity Books. All rights reserved.</div>
    </footer>
  );
}
