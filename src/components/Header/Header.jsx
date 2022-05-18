import Cart from "../Cart/Cart";
import CartSummary from "../CartSummary/CartSummary";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1>MouseHeaven</h1>
      <CartSummary />
      <Cart
        cartItems={props.listOfItemInCart}
        removeToCart={props.removeToCart}
      />
    </header>
  );
};

export default Header;
