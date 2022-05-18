import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const {
    title,
    Qty,
    id,
    removeToCart,
    incrementItemQty,
    totalPrice,
    decrementItemQty,
  } = props;

  const onClickRemoveToCartHandler = (event) => {
    const targetId = event.target.closest("li").dataset.id;
    removeToCart(targetId);
  };

  const onClickIncrementQtyHandler = (event) => {
    const targetId = event.target.closest("li").dataset.id;
    incrementItemQty(targetId);
  };

  const onClickDecrementQtyHandler = (event) => {
    const targetId = event.target.closest("li").dataset.id;
    decrementItemQty(targetId);
  };

  return (
    <li className={styles["cart-item"]} data-id={id}>
      <div className="name">{title}</div>
      <div className={styles.quantity}>
        <button className="fa fa-minus" onClick={onClickDecrementQtyHandler}>
          <i></i>
        </button>
        {Qty}
        <button className="fa fa-plus" onClick={onClickIncrementQtyHandler}>
          <i></i>
        </button>
      </div>
      <div className="price">@ ${totalPrice}</div>
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
