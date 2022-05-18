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
    const findItemInCart = cartItems.find((item) => item.id === +id);
    if (findItemInCart) {
      setCartItems(
        cartItems.map((item) => {
          if (item.id === +id) {
            item.Qty = item.Qty + 1;
            const getTotal = item.Qty * item.price;
            item.totalPrice = +getTotal.toFixed(2);
          }
          return item;
        })
      );
    } else {
      setCartItems((prevState) => {
        return [
          ...prevState,
          {
            id: selectedItem.id,
            price: selectedItem.price,
            title: selectedItem.title,
            Qty: 1,
            totalPrice: selectedItem.price,
          },
        ];
      });
    }
  };

  const removeToCart = (id) => {
    setCartItems((prevState) => {
      return prevState.filter((item) => item.id !== +id);
    });
  };

  const incrementItemQty = (id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === +id) {
          item.Qty = item.Qty + 1;
          const getTotal = item.Qty * item.price;
          item.totalPrice = +getTotal.toFixed(2);
        }
        return item;
      })
    );
  };

  const decrementItemQty = (id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === +id) {
          item.Qty = item.Qty - 1;
          const getTotal = item.Qty * item.price;
          item.totalPrice = +getTotal.toFixed(2);
        }
        return item;
      })
    );
    removeItemZeroQty();
  };

  const removeItemZeroQty = () => {
    setCartItems((prevState) => {
      return prevState.filter((item) => item.Qty !== 0);
    });
  };

  const getTotalAmount = cartItems.reduce((total, item) => {
    return (total += item.totalPrice);
  }, 0);

  return (
    <div id="root">
      <Header
        listOfItemInCart={cartItems}
        removeToCart={removeToCart}
        totalAmount={getTotalAmount.toFixed(2)}
        incrementItemQty={incrementItemQty}
        decrementItemQty={decrementItemQty}
      />
      <main>
        <ItemList listOfItems={items} addToCart={addToCartItem} />
      </main>
    </div>
  );
}

export default App;
