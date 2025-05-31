import '../CSS_properties/Main.css';
import greek_salad from '../icons_assets/greek_salad.jpg';
import bruschetta from '../icons_assets/bruchetta.svg';
import lemon_dessert from '../icons_assets/lemon dessert.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <div class="main">
      <div class="main-top-block">
        <h1 class="Specials">
            Specials
        </h1>

        <button class="online-menu">
          Online Menu
        </button>
      </div>

      <div className="main-bottom-block">
        <ul class="recipes">
          <li>
            <img class="recipe-image" src={greek_salad} alt="Greek Salad" />
            <div class="name-price">
              <h2 class="recipe-name">Greek Salad</h2>
              <h3 class="recipe-price">$12.99</h3>
            </div>
            <div class="recipe-description">
              <p class="recipe-text">
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
              </p>
            </div>
            <div class="order-button">
              <h4>Order a delivery</h4>
              <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
            </div>
          </li>

          <li>
            <img class="recipe-image" src={bruschetta} alt="Bruschetta" />
            <div class="name-price">
              <h2 class="recipe-name">Bruschetta</h2>
              <h3 class="recipe-price">$5.99</h3>
            </div>
            <div class="recipe-description">
              <p class="recipe-text">
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes and basil.
              </p>
            </div>
            <div class="order-button">
              <h4>Order a delivery</h4>
              <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
            </div>
          </li>

          <li>
            <img class="recipe-image" src={lemon_dessert} alt="Lemon Dessert" />
            <div class="name-price">
              <h2 class="recipe-name">Lemon Dessert</h2>
              <h3 class="recipe-price">$5.00</h3>
            </div>
            <div class="recipe-description">
              <p class="recipe-text">
                This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
              </p>
            </div>
            <div class="order-button">
              <h4>Order a delivery</h4>
              <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;