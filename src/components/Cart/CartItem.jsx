import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, Qty, price, id, removeToCart } = props;

  const onClickRemoveToCartHandler = (event) => {
    const targetId = event.target.closest("li").dataset.id;
    removeToCart(targetId);
  };

  return (
    <li className={styles["cart-item"]} data-id={id}>
      <div className="name">{title}</div>
      <div className={styles.quantity}>
        <button className="fa fa-minus">
          <i></i>
        </button>
        {Qty}
        <button className="fa fa-plus">
          <i></i>
        </button>
      </div>
      <div className="price">@ ${price}</div>
      <button
        className={styles["remove-from-cart"]}
        onClick={onClickRemoveToCartHandler}
      >
        <i className="far fa-times-circle"></i>
      </button>
    </li>
  );
};

export default CartItem;
