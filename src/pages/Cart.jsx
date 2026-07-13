import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { getDiscountedPrice } from '../utils/price';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (!cart.length) {
    return <div style={{ padding: '3rem', textAlign: 'center', fontSize: '1.5rem', color: '#666' }}>Your cart is empty.</div>;
  }

  const totalPrice = cart.reduce((sum, item) => {
    const price = getDiscountedPrice(item.price, item.discount);
    return sum + price;
  }, 0);

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#8f38ec' }}>Your Shopping Cart</h1>
      {cart.map(item => {
        const discountedPrice = getDiscountedPrice(item.price, item.discount);
        return (
          <div key={item.id} style={{
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #f5f0ff, #e1d6ff)',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '1rem',
            boxShadow: '0 4px 18px rgba(143,56,236,0.3)',
          }}>
            <img src={item.image} alt={item.name} style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: '10px', marginRight: '1rem' }} />
            <div style={{ flex: '1' }}>
              <h3 style={{ margin: '0 0 0.3rem', color: '#5c2a9d' }}>{item.name}</h3>
              {item.variant && <small style={{ color: '#7c68cc', fontWeight: '600' }}>{item.variant}</small>}
              <p style={{ marginTop: '0.5rem', fontWeight: '700', fontSize: '1.1rem' }}>
                {item.discount > 0 ? (
                  <>
                    <span style={{ textDecoration: 'line-through', color: '#888', marginRight: '1rem' }}>₹{item.price}</span>
                    <span style={{ color: '#e94560' }}>{discountedPrice}</span>
                  </>
                ) : (
                  <>₹{item.price}</>
                )}
              </p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{
                background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
                border: 'none',
                color: 'white',
                padding: '0.5rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '700',
                boxShadow: '0 3px 20px #c0392baa',
                transition: 'transform 0.15s, background 0.3s',
              }}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Remove
            </button>
          </div>
        );
      })}

      <hr style={{ margin: '2rem 0', border: '1px solid #ddd' }} />

      <div style={{ textAlign: 'right', fontWeight: '900', fontSize: '1.5rem', color: '#8f38ec' }}>
        Total: ₹{totalPrice}
      </div>
    </div>
  );
}
