import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getItems = async () => {
    const response = await fetch(
      `https://5ed0108416017c00165e327c.mockapi.io/api/v1/items`
    );
    const items = await response.json();
    return items.map((item) => {
      return {
        alt: item.name,
        id: item.id,
        title: item.name,
        image: item.imageURL,
        description: item.description,
        price: item.price,
        stock: item.stock,
      };
    });
  };

  useEffect(() => {
    getItems().then((items) => setItems(items));
  }, []);

  const addToCartItem = (id) => {
    const selectedItem = items.find((item) => item.id === +id);
    setCartItems((prevState) => {
      return [
        ...prevState,
        {
          id: selectedItem.id,
          price: selectedItem.price,
          title: selectedItem.title,
          Qty: 1,
        },
      ];
    });
  };

  const removeToCart = (id) => {
    setCartItems((prevState) => {
      return prevState.filter((item) => item.id !== +id);
    });
  };

  const getTotalAmount = cartItems.reduce((total, item) => {
    return (total += item.price);
  }, 0);

  console.log(cartItems.length);

  return (
    <div id="root">
      <Header
        listOfItemInCart={cartItems}
        removeToCart={removeToCart}
        totalAmount={getTotalAmount.toFixed(2)}
      />
      <main>
        <ItemList listOfItems={items} addToCart={addToCartItem} />
      </main>
    </div>
  );
}

export default App;
