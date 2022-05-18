import Cart from "../Cart/Cart";
import CartSummary from "../CartSummary/CartSummary";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = (props) => {
  const [cartState, setCartState] = useState(true);

  const toggleCart = () => {
    setCartState(!cartState);
    console.log(cartState);
  };

  return (
    <header className={styles.header}>
      <h1>MouseHeaven</h1>
      <CartSummary
        totalAmount={props.totalAmount}
        cartItems={props.listOfItemInCart}
        toggleCart={toggleCart}
      />
      <Cart
        cartItems={props.listOfItemInCart}
        removeToCart={props.removeToCart}
        incrementItemQty={props.incrementItemQty}
        decrementItemQty={props.decrementItemQty}
        totalAmount={props.totalAmount}
        toggleCart={cartState}
      />
    </header>
  );
};

export default Header;
