import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <a href="/">
        <h1>MouseHeaven</h1>
      </a>
      <a className={styles["cart-icon"]} href="/cart">
        <div className={styles["cart-icon-values"]}>
          <div className={styles["cart-total"]}>$489.95</div>
          <div className="in-cart-items">5 items</div>
        </div>
        <i className="fas fa-shopping-cart"></i>
      </a>
    </header>
  );
};

export default Header;
