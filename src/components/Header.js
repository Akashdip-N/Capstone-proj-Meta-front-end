import '../CSS_properties/Header.css';
import image from '../icons_assets/restauranfood.jpg';


function Header() {
  return (
    <>
      <div class="Header">
        <div class="Header-left-block">
          <h1>Little Lemon</h1>
          <p>
            Chicago
          </p>
          <p class="description">
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            <br></br>Come and enjoy our delicious food, warm atmosphere, and friendly service.
            <br></br>We are open for lunch and dinner, and we also offer takeout and delivery options.
          </p>
          <a href='#BookingPage'>
            <button
              class="reserve-button"
            >
              Reserve a Table
            </button>
          </a>
        </div>
        <img
          class="image"
          src={image}
        />
      </div>
    </>
  );
}

export default Header;