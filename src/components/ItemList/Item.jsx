import styles from "./Item.module.css";

const Item = (props) => {
  const { id, image, price, description, title, alt } = props;

  const handleClickToCart = (event) => {
    const targetId = event.target.closest("li").dataset.id;
    props.addToCart(targetId);
  };

  return (
    <li className={styles.item} data-id={id}>
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <div className={styles.price}>${price}</div>
      <div className={styles.description}>{description}</div>
      <button onClick={handleClickToCart}>Add to Cart</button>
    </li>
  );
};

export default Item;
