import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ProductSlider from "./shop-components/product-slider-v1";
// import MySlider from "./shop-components/MySlider";
import PropertyDetails from "./shop-components/shop-details";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";

const Product_Details = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Propertie Details" customclass="mb-0" />
      <ProductSlider />
      {/* <MySlider /> */}
      <PropertyDetails />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Product_Details;
