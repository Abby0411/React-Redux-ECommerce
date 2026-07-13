import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const count = useSelector(state => state.cart.length);

  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 2rem', background: 'linear-gradient(90deg, #ff6a00, #ee0979)', boxShadow: '0 3px 20px rgba(0,0,0,0.15)' }}>
      <Link to="/" className="logo" style={{
          fontWeight: '900',
          fontSize: '2rem',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: 'white',
          textDecoration: 'none',
          userSelect: 'none',
          letterSpacing: '3px',
          textShadow: '2px 2px 8px rgba(255, 255, 255, 0.3)',
          filter: 'drop-shadow(0 0 4px #fff8b0)'
        }}>
        Abby
      </Link>

      <nav style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/products" style={navLinkStyle}>Products</Link>
        <Link to="/cart" style={navLinkStyle}>Cart ({count})</Link>
      </nav>
    </header>
  );
}

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1.2rem',
  transition: 'color 0.3s, transform 0.2s',
  cursor: 'pointer',
};

