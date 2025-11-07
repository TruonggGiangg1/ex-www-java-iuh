import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { formatCurrency } from '../utils/format.js';
import './CartPage.css';

export default function CartPage() {
  const { items, totals, isLoading, updateQuantity, removeItem } = useCart();

  if (isLoading) {
    return <p>Đang tải giỏ hàng...</p>;
  }

  return (
    <div className="cart">
      <header className="cart__header">
        <h1>Giỏ hàng</h1>
        <p>Cart Service đồng bộ trạng thái giỏ trên mọi thiết bị của bạn.</p>
      </header>

      {items.length === 0 ? (
        <div className="cart__empty">
          <p>Giỏ hàng đang trống.</p>
          <Link to="/catalog">Tiếp tục mua sắm</Link>
        </div>
      ) : (
        <div className="cart__content">
          <section className="cart__items">
            {items.map((item) => (
              <article key={item.book.id} className="cart-item">
                <img src={item.book.coverImage} alt={item.book.title} />
                <div className="cart-item__info">
                  <h3>{item.book.title}</h3>
                  <p>{item.book.author}</p>
                  <span>{formatCurrency(item.book.price)}</span>
                  <div className="cart-item__controls">
                    <label>
                      Số lượng
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(event) => updateQuantity(item.book.id, Number(event.target.value))}
                      />
                    </label>
                    <button type="button" onClick={() => removeItem(item.book.id)}>
                      <span className="material-symbols-rounded" aria-hidden>
                        delete
                      </span>
                      Xóa
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="cart__summary">
            <h2>Tổng kết</h2>
            <dl>
              <div>
                <dt>Tạm tính</dt>
                <dd>{formatCurrency(totals.subtotal)}</dd>
              </div>
              <div>
                <dt>VAT (10%)</dt>
                <dd>{formatCurrency(totals.vat)}</dd>
              </div>
              <div>
                <dt>Phí vận chuyển</dt>
                <dd>{totals.shipping === 0 ? 'Miễn phí' : formatCurrency(totals.shipping)}</dd>
              </div>
              <div className="cart__total">
                <dt>Thành tiền</dt>
                <dd>{formatCurrency(totals.total)}</dd>
              </div>
            </dl>
            <Link className="cart__checkout" to="/checkout">
              Tiến hành thanh toán
            </Link>
            <p className="cart__note">Order Service sẽ xử lý và gửi thông báo ngay khi bạn hoàn tất thanh toán.</p>
          </aside>
        </div>
      )}
    </div>
  );
}
