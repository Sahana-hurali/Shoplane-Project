import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//CSS
import "./App.css";
import Cart from "./components/Cart";
//Components
import Home from "./components/Home";
import ProductsDetails from "./components/ProductDetails";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductsDetails} />
        <Route path="/cart" component={Cart} />
        {/* <Route component={() => <h1>404 Page Not Found</h1>} /> */}
        <Route component={PageNotFound} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;