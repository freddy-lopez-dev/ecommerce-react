import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import { useState, useEffect } from "react";

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

  return (
    <div id="root">
      <Header cartItems={cartItems} />
      <Items listOfItems={items} />
    </div>
  );
}

export default App;
