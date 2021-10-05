import { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

import Tomate from "./assets/products-img/tomate.jpg";
import Lechuga from "./assets/products-img/lechuga.jpg";
import Arvejas from "./assets/products-img/arvejas.jpg";

class App extends Component {
  state = {
    products: [
      { name: "Tomate", price: 500, img: Tomate },
      { name: "Arvejas", price: 2500, img: Arvejas },
      { name: "Lechuga", price: 600, img: Lechuga },
    ],
    cart: [],
    isCartVisible: false,
  };

  addToCart = (product) => {
    const { cart } = this.state;

    if (cart.find((x) => x.name === product.name)) {
      const newCart = cart.map((x) =>
        x.name === product.name ? { ...x, amount: x.amount + 1 } : x
      );
      return this.setState({ cart: newCart });
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        amount: 1,
      }),
    });
  };

  showCart = () => {
    if(!this.state.cart.length){
      return
    }
    this.setState({
      isCartVisible: !this.state.isCartVisible
    })
  }

  render() {
    const { isCartVisible } = this.state;
    return (
      <>
        <Navbar
          cart={this.state.cart}
          isCartVisible={isCartVisible}
          showCart={this.showCart}
        />
        <Layout>
          <Title />
          <Products addToCart={this.addToCart} products={this.state.products} />
        </Layout>
      </>
    );
  }
}

export default App;
