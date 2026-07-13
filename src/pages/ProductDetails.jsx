import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../api/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { getDiscountedPrice } from '../utils/price';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found.</div>;
  }

  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <div className="product-details">
      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details-info">
        <h2>{product.name}</h2>
        {product.discount > 0 ? (
          <p>
            <span style={{ textDecoration: 'line-through', color: '#888', marginRight: '1rem', fontSize: '1.2rem' }}>
              ₹{product.price}
            </span>
            <span style={{ fontWeight: '700', color: '#e94560', fontSize: '1.5rem' }}>
              ₹{discountedPrice}
            </span>
          </p>
        ) : (
          <p style={{ fontWeight: '700', fontSize: '1.5rem' }}>₹{product.price}</p>
        )}
        <p>{product.description}</p>
        <ul className="features-list">
          {product.features.map((feature, idx) => (
            <li key={idx}>• {feature}</li>
          ))}
        </ul>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
