import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeV3 from "./components/home-v3";
import Login from "./components/login";
import Contact from "./components/contact";
import AddListing from "./components/add-listing";
import Properties from "./components/Properties";
import PropertieDetails from "./components/Propertie-details";
import Error from "./components/404";

// import About from "./components/about";
// import Service from "./components/service";
// import ServiceDetails from "./components/service-details";
// import Portfolio from "./components/portfolio";
// import PortfolioV2 from "./components/portfolio-v2";
// import PortfolioDetails from "./components/portfolio-details";
// import Team from "./components/team";
// import TeamDetails from "./components/team-details";
// import Faq from "./components/faq";
// import ComingSoon from "./components/coming-soon";
// import Location from "./components/location";

// import ShopGrid from "./components/shop-grid";
// import ShopLeftSidebar from "./components/shop-left-sidebar";
// import ShopRightSidebar from "./components/shop-right-sidebar";

// import BlogGrid from "./components/blog-grid";
// import BlogLeftSidebar from "./components/blog-left-sidebar";
// import BlogRightSidebar from "./components/blog-right-sidebar";
// import Blog from "./components/blog";

// import BlogDetails from "./components/blog-details";
// import Cart from "./components/cart";
// import Checkout from "./components/checkout";
// import MyAccount from "./components/my-account";
// import Register from "./components/register";
// import Wishlist from "./components/wishlist";
// import OrderTracking from "./components/order-tracking";
// import History from "./components/history";

class Root extends Component {
  render() {
    return (
      <>
        <Routes>
            <Route path="/" element={<HomeV3 />}  />
            <Route path="properties" element={<Properties />} />
            <Route path="add-listing" element={<AddListing />} />
            <Route path="propertie-details" element={<PropertieDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="contact" element={< Contact/>} />
            <Route path="*" element={< Error />} />
            {/* <Route path="/about" component={About} />
                        <Route path="/service" component={Service} />
                        <Route path="/service-details" component={ ServiceDetails } />
                        <Route path="/portfolio" component={ Portfolio } />
                        <Route path="/portfolio-v2" component={ PortfolioV2 } />
                        <Route path="/portfolio-details" component={ PortfolioDetails } />
                        <Route path="/team" component={ Team } />
                        <Route path="/team-details" component={ TeamDetails } />
                        <Route path="/faq" component={ Faq } />
                        <Route path="/coming-soon" component={ ComingSoon } />
                        <Route path="/location" component={ Location } />
                        <Route path="/shop-grid" component={ ShopGrid } />
                        <Route path="/shop-left-sidebar" component={ ShopLeftSidebar } />
                        <Route path="/shop-right-sidebar" component={ ShopRightSidebar } />

                        <Route path="/blog-grid" component={ BlogGrid } />
                        <Route path="/blog-left-sidebar" component={ BlogLeftSidebar } />
                        <Route path="/blog-right-sidebar" component={ BlogRightSidebar } />
                        <Route path="/blog" component={ Blog } />


                        <Route path="/blog-details" component={ BlogDetails } />
                        <Route path="/contact" component={ Contact } />
                        <Route path="/cart" component={ Cart } />
                        <Route path="/checkout" component={ Checkout } />
                        <Route path="/my-account" component={ MyAccount } />
                        <Route path="/register" component={ Register } />
                        <Route path="/wishlist" component={ Wishlist } />
                        <Route path="/order-tracking" component={ OrderTracking } />
                        <Route path="/history" component={ History } /> */}
        </Routes>
      </>
    );
  }
}

export default Root;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>,
  document.getElementById("quarter")
);
