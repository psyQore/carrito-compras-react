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
  };

  render() {
    return (
      <>
        <Navbar />
        <Layout>
          <Title />
          <Products
            addToCart={() => console.log("Click")}
            products={this.state.products}
          />
        </Layout>
      </>
    );
  }
}

export default App;
