import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
// import ShogGrid from './shop-components/shop-right-sidebar';
import ShogGrid from "./shop-components/shop-right-sidebar-edit";
import Footer from "./global-components/footer";

const Shop_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Properties" />
      <ShogGrid />
      <Footer />
    </div>
  );
};

export default Shop_V1;
