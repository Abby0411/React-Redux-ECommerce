import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { getDiscountedPrice } from '../utils/price';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        {product.variant && <small style={{ color: '#6a5acd' }}>{product.variant}</small>}
      </Link>
      <div style={{ marginTop: '0.3rem' }}>
        {product.discount > 0 ? (
          <>
            <span style={{ textDecoration: 'line-through', color: '#888', marginRight: '1rem' }}>
              ₹{product.price}
            </span>
            <span style={{ fontWeight: '700', color: '#e94560' }}>₹{discountedPrice}</span>
          </>
        ) : (
          <span style={{ fontWeight: '700' }}>₹{product.price}</span>
        )}
      </div>
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}
