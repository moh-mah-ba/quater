import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductSliderV3 = () => {

  const propertyList = useSelector((state) => state.propertyReducer);
  const { properties } = propertyList;

  const filterdProperty = properties?.filter((property) => {
	  return property.saleStatus === "hot offer"
  })

  // console.log("properties" , properties)
  return (
    <div
      className="ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                Hot Offers
              </h6>
              <h1 className="section-title">Special Offers</h1>
            </div>
          </div>
        </div>
        <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">

          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <Link to={`/property/propertie-details/${filterdProperty[0]?._id}`}>
                  <img src={filterdProperty[0]?.images[0].secure_url} alt="#" />
                </Link>
                <div className="search-by-place-badge">
                  <ul>
                    <li>Special Property</li>
                  </ul>
                </div>
              </div>
              <div className="search-by-place-info">
                <h6>
                  <Link to={`/property/propertie-details/${filterdProperty[0]?._id}`}>{filterdProperty[0]?.city} {filterdProperty[0]?.neighborhood}</Link>
                </h6>
                <h4>
                  <Link to={`/property/propertie-details/${filterdProperty[0]?._id}`}>{filterdProperty[0]?.title}</Link>
                </h4>
                <div className="search-by-place-btn">
                  <Link to={`/property/propertie-details/${filterdProperty[0]?._id}`}>
                    View Property <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
		  
          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <Link to={`/property/propertie-details/${filterdProperty[1]?._id}`}>
                  <img src={filterdProperty[1]?.images[0].secure_url} alt="#" />
                </Link>
                <div className="search-by-place-badge">
                  <ul>
                    <li>Special Property</li>
                  </ul>
                </div>
              </div>
              <div className="search-by-place-info">
                <h6>
                  <Link to={`/property/propertie-details/${filterdProperty[1]?._id}`}>{filterdProperty[1]?.city} {filterdProperty[1]?.neighborhood}</Link>
                </h6>
                <h4>
                  <Link to={`/property/propertie-details/${filterdProperty[1]?._id}`}>{filterdProperty[1]?.title}</Link>
                </h4>
                <div className="search-by-place-btn">
                  <Link to={`/property/propertie-details/${filterdProperty[1]?._id}`}>
                    View Property <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          

          <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <Link to={`/property/propertie-details/${filterdProperty[2]?._id}`}>
                  <img src={filterdProperty[2]?.images[0].secure_url} alt="#" />
                </Link>
                <div className="search-by-place-badge">
                  <ul>
                    <li>Special Property</li>
                  </ul>
                </div>
              </div>
              <div className="search-by-place-info">
                <h6>
                  <Link to={`/property/propertie-details/${filterdProperty[2]?._id}`}>{filterdProperty[2]?.city} {filterdProperty[2]?.neighborhood}</Link>
                </h6>
                <h4>
                  <Link to={`/property/propertie-details/${filterdProperty[2]?._id}`}>{filterdProperty[2]?.title}</Link>
                </h4>
                <div className="search-by-place-btn">
                  <Link to={`/property/propertie-details/${filterdProperty[2]?._id}`}>
                    View Property <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

		  <div className="col-lg-4">
            <div className="ltn__search-by-place-item">
              <div className="search-by-place-img">
                <Link to={`/property/propertie-details/${filterdProperty[3]?._id}`}>
                  <img src={filterdProperty[3]?.images[0].secure_url} alt="#" />
                </Link>
                <div className="search-by-place-badge">
                  <ul>
                    <li>Special Property</li>
                  </ul>
                </div>
              </div>
              <div className="search-by-place-info">
                <h6>
                  <Link to={`/property/propertie-details/${filterdProperty[3]?._id}`}>{filterdProperty[3]?.city} {filterdProperty[3]?.neighborhood}</Link>
                </h6>
                <h4>
                  <Link to={`/property/propertie-details/${filterdProperty[3]?._id}`}>{filterdProperty[3]?.title}</Link>
                </h4>
                <div className="search-by-place-btn">
                  <Link to={`/property/propertie-details/${filterdProperty[3]?._id}`}>
                    View Property <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default ProductSliderV3;
