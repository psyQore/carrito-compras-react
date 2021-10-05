import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CartDetails from "./CartDetails";

const styles = {
  button: {
    backgroundColor: "#358A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};

class Cart extends Component {
  render() {
    const { cart, isCartVisible, showCart } = this.props
    const amount = cart.reduce((acc, el) => acc + el.amount, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {amount !== 0 ? <BubbleAlert value={amount} /> : null}
        </span>
        <button onClick={showCart} style={styles.button}>
          Cart
        </button>
        {isCartVisible ? <CartDetails cart={cart} /> : null}
      </div>
    );
  }
}

export default Cart;
