import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const { cartItems, removeToCart } = props;
  return (
    <aside className={styles.cart}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => {
          return (
            <CartItem
              key={index}
              title={item.title}
              price={item.price}
              Qty={item.Qty}
              id={item.id}
              removeToCart={removeToCart}
            />
          );
        })}
      </ul>
      <div className={styles.total}>Total: $604.93</div>
    </aside>
  );
};

export default Cart;
