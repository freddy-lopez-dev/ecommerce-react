import Item from "./Item";
import styles from "./Items.module.css";

const ItemList = (props) => {
  const { listOfItems, addToCart } = props;
  return (
    <ul className={styles.items}>
      {listOfItems.map((item) => {
        return (
          <Item
            alt={item.title}
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
            stock={item.stock}
            addToCart={addToCart}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
