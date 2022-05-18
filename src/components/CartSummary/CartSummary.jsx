import styles from "./CartSummary.module.css";

const CartSummary = (props) => {
  return (
    <div className={styles["cart-icon"]}>
      <div className="cart-icon-values">
        <div className="cart-total">$604.93</div>
        <div className="in-cart-items">7 items</div>
      </div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

export default CartSummary;

// onClick={toggleCartHandler}
