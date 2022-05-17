import Item from "./Item";
import styles from "./Items.module.css";

const Items = (props) => {
  const { listOfItems } = props;
  console.log(listOfItems);
  return (
    <main location="[object Object]" computedmatch="[object Object]">
      <ul className={styles.items}>
        {listOfItems.map((item, index) => {
          return (
            <Item
              key={index}
              img={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default Items;
