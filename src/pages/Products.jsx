import { useEffect, useState, useCallback } from 'react';
import { getInfiniteProducts } from '../utils/infiniteProducts';
import ProductCard from '../components/ProductCard';

const LOAD_COUNT = 20;

export default function Products() {
  const [displayCount, setDisplayCount] = useState(LOAD_COUNT);
  const [products, setProducts] = useState(getInfiniteProducts(LOAD_COUNT));

  // Load more products
  const loadMore = useCallback(() => {
    const newCount = displayCount + LOAD_COUNT;
    setProducts(getInfiniteProducts(newCount));
    setDisplayCount(newCount);
  }, [displayCount]);

  // Infinite scroll handler
  useEffect(() => {
    function onScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        loadMore();
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [loadMore]);

  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
      <div style={{ textAlign: 'center', margin: '2rem', color: '#888' }}>
        Loading...
      </div>
    </div>
  );
}
