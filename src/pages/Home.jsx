export default function Home() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Welcome to MyShop 🛍️</h1>
        <p>Your one-stop shop for cutting-edge gadgets, smart accessories, and unbeatable deals.</p>
        <ul>
          <li>✔️ Handpicked tech for everyday use</li>
          <li>🚚 Fast and free delivery on all orders</li>
          <li>🔒 Secure checkout & easy returns</li>
        </ul>
        <a href="/products" className="cta-button">Start Shopping</a>
      </div>
      <img
        src="https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600"
        alt="Tech Hero"
        className="hero-image"
      />
    </div>
  );
}
