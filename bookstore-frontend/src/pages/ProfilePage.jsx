import { useState } from 'react';

import { useAuth } from '../context/AuthContext.jsx';
import { formatDate } from '../utils/format.js';
import './ProfilePage.css';

const mockActivities = [
  {
    id: 'act-1',
    title: 'Đặt hàng thành công',
    service: 'Order Service',
    createdAt: '2024-02-10T09:15:00Z'
  },
  {
    id: 'act-2',
    title: 'Nhận voucher sinh nhật',
    service: 'Promotion Service',
    createdAt: '2024-01-28T07:45:00Z'
  },
  {
    id: 'act-3',
    title: 'Đăng nhập từ thiết bị mới',
    service: 'Identity Service',
    createdAt: '2024-01-10T20:12:00Z'
  }
];

export default function ProfilePage() {
  const { user, isAuthenticated, login, logout, isLoading, error } = useAuth();
  const [email, setEmail] = useState('lan.nguyen@example.com');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login({ email });
    } catch (err) {
      console.error(err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="profile-login">
        <form onSubmit={handleSubmit}>
          <h1>Đăng nhập</h1>
          <p>Identity Service xác thực người dùng và đồng bộ thông tin loyalty.</p>
          <label>
            Email
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </label>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Đang xác thực...' : 'Tiếp tục'}
          </button>
          {error && <p className="profile-login__error">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="profile">
      <header className="profile__header">
        <div>
          <h1>
            Chào {user.firstName}! <span>Điểm thưởng của bạn: {user.loyaltyPoints}</span>
          </h1>
          <p>Identity Service lưu trữ và bảo vệ thông tin cá nhân của bạn.</p>
        </div>
        <button type="button" onClick={logout} disabled={isLoading}>
          Đăng xuất
        </button>
      </header>

      <section className="profile__section">
        <h2>Thông tin tài khoản</h2>
        <div className="profile__card">
          <dl>
            <div>
              <dt>Họ tên</dt>
              <dd>
                {user.lastName} {user.firstName}
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{user.email}</dd>
            </div>
            <div>
              <dt>Địa chỉ</dt>
              <dd>{user.addresses[0].detail}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="profile__section">
        <h2>Hoạt động gần đây</h2>
        <div className="profile__timeline">
          {mockActivities.map((activity) => (
            <article key={activity.id}>
              <h3>{activity.title}</h3>
              <p>
                {activity.service} • {formatDate(activity.createdAt)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
