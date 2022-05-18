import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const {
    cartItems,
    removeToCart,
    totalAmount,
    incrementItemQty,
    decrementItemQty,
    toggleCart,
  } = props;
  return (
    <aside className={styles.cart} hidden={toggleCart}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => {
          return (
            <CartItem
              key={index}
              title={item.title}
              price={item.price}
              totalPrice={item.totalPrice}
              Qty={item.Qty}
              id={item.id}
              removeToCart={removeToCart}
              incrementItemQty={incrementItemQty}
              decrementItemQty={decrementItemQty}
            />
          );
        })}
      </ul>
      <div className={styles.total}>Total: ${totalAmount}</div>
    </aside>
  );
};

export default Cart;
