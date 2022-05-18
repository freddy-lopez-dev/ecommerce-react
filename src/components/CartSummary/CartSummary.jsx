import styles from "./CartSummary.module.css";

const CartSummary = (props) => {
  const { cartItems } = props;
  return (
    <div className={styles["cart-icon"]}>
      <div className="cart-icon-values">
        <div className="cart-total">${props.totalAmount}</div>
        <div className="in-cart-items">
          {cartItems.length <= 1 ? "item" : "items"}
        </div>
      </div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

export default CartSummary;

// onClick={toggleCartHandler}
