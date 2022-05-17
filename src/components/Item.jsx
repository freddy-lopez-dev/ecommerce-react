import styles from "./Item.module.css";

const Item = (props) => {
  const { img, title, price, description } = props;
  return (
    <li className={styles.item}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <div className={styles.price}>${price}</div>
      <div className={styles.description}>{description}</div>
      <button>Add to Cart</button>
    </li>
  );
};

export default Item;
