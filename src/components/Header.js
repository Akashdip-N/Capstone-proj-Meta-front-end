// Header.js
import '../CSS_properties/Header.css';
import image from '../icons_assets/restauranfood.jpg';

function Header() {
  return (
    <div className="Header" id="Header">
      <div className="Header-left-block">
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p className="description">
          We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          <br />Come and enjoy our delicious food, warm atmosphere, and friendly service.
          <br />We are open for lunch and dinner, and we also offer takeout and delivery options.
        </p>
        <a href="#BookingPage">
          <button className="reserve-button">
            Reserve a Table
          </button>
        </a>
      </div>
      <img
        className="image"
        src={image}
        alt="Restaurant food"
      />
    </div>
  );
}

export default Header;