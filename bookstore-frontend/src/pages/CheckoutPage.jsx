import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../context/CartContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { formatCurrency } from '../utils/format.js';
import { createOrder } from '../services/orderService.js';
import './CheckoutPage.css';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  paymentMethod: 'cod',
  note: ''
};

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totals, clear } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [form, setForm] = useState(() => ({
    ...initialForm,
    fullName: isAuthenticated ? `${user.lastName} ${user.firstName}` : '',
    email: isAuthenticated ? user.email : '',
    address: isAuthenticated && user.addresses.length > 0 ? user.addresses[0].detail : ''
  }));
  const [isProcessing, setIsProcessing] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (items.length === 0) {
      setError('Giỏ hàng trống. Vui lòng thêm sản phẩm trước khi thanh toán.');
      return;
    }

    setIsProcessing(true);
    setError(null);
    try {
      const order = await createOrder({
        items,
        customer: form,
        payment: { method: form.paymentMethod }
      });
      setReceipt(order);
      await clear();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="checkout">
      <header className="checkout__header">
        <h1>Thanh toán</h1>
        <p>Order Service xử lý thanh toán và đồng bộ với Inventory Service để cập nhật tồn kho ngay lập tức.</p>
      </header>

      <div className="checkout__layout">
        <section className="checkout__form">
          <form onSubmit={handleSubmit}>
            <fieldset disabled={isProcessing}>
              <legend>Thông tin giao hàng</legend>
              <label>
                Họ và tên
                <input name="fullName" value={form.fullName} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </label>
              <label>
                Số điện thoại
                <input name="phone" value={form.phone} onChange={handleChange} required />
              </label>
              <label>
                Địa chỉ
                <textarea name="address" rows={3} value={form.address} onChange={handleChange} required />
              </label>
              <label>
                Phương thức thanh toán
                <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
                  <option value="cod">Thanh toán khi nhận hàng</option>
                  <option value="banking">Chuyển khoản ngân hàng</option>
                  <option value="momo">Ví MoMo</option>
                </select>
              </label>
              <label>
                Ghi chú
                <textarea name="note" rows={2} value={form.note} onChange={handleChange} />
              </label>
            </fieldset>
            <button type="submit" disabled={isProcessing} className="checkout__submit">
              {isProcessing ? 'Đang xử lý...' : 'Xác nhận đơn hàng'}
            </button>
            {error && <p className="checkout__error">{error}</p>}
          </form>
        </section>

        <aside className="checkout__summary">
          <h2>Tóm tắt đơn hàng</h2>
          <ul>
            {items.map((item) => (
              <li key={item.book.id}>
                <span>{item.book.title}</span>
                <span>
                  {item.quantity} × {formatCurrency(item.book.price)}
                </span>
              </li>
            ))}
          </ul>
          <div className="checkout__totals">
            <div>
              <span>Tạm tính</span>
              <span>{formatCurrency(totals.subtotal)}</span>
            </div>
            <div>
              <span>VAT (10%)</span>
              <span>{formatCurrency(totals.vat)}</span>
            </div>
            <div>
              <span>Phí vận chuyển</span>
              <span>{totals.shipping === 0 ? 'Miễn phí' : formatCurrency(totals.shipping)}</span>
            </div>
            <div className="checkout__totals-total">
              <span>Thành tiền</span>
              <span>{formatCurrency(totals.total)}</span>
            </div>
          </div>
        </aside>
      </div>

      {receipt && (
        <section className="checkout__receipt">
          <h2>Đơn hàng đã được tạo thành công</h2>
          <p>Mã đơn: {receipt.orderId}</p>
          <p>Thời gian tạo: {receipt.deliveryEstimate}</p>
          <p>Tổng tiền: {receipt.humanReadableTotal}</p>
          <button type="button" onClick={() => navigate('/catalog')}>
            Tiếp tục mua sắm
          </button>
        </section>
      )}
    </div>
  );
}
