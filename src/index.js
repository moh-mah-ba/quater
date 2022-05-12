import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeV3 from "./components/home-v3";
import Login from "./components/login";
import Contact from "./components/contact";
import AddListing from "./components/add-listing";
import EditListing from "./components/edit-listing";
import Properties from "./components/Properties";
import PropertieDetails from "./components/Propertie-details";
import Search from "./components/search";
import Error from "./components/404";


class Root extends Component {
  render() {
    return (
      <>
        <Routes>
            <Route path="/" element={<HomeV3 />}  />
            <Route path="/property/search/:search" element={<Search />}  />
            <Route path="properties" element={<Properties />} />
            <Route path="add-listing" element={<AddListing />} />
            <Route path="property/edit-listing/:id" element={<EditListing />} />
            <Route path="property/propertie-details/:id" element={<PropertieDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="contact" element={< Contact/>} />
            <Route path="*" element={< Error />} />
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
