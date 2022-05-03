import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PropertyDetailList = (props) => {
  const { property } = props;
  const userSignin = useSelector((state) => state.userSigninReducer);
  const { userInformation } = userSignin;

  return (
    <div className="col-lg-12">
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
        <Link to={`/property/propertie-details/${property._id}`}>
            <img src={property.images[0]} alt={property.title} />
          </Link>
        </div>
        <div className="product-info">
          <div className="product-badge-price">
            <div className="product-badge">
              <ul>
                <li className="sale-badg">For {property.saleType}</li>
              </ul>
            </div>
            <div className="product-price">
              <span>$ {property.price}</span>
            </div>
          </div>
          <h2 className="product-title go-top">
          <Link to={`/property/propertie-details/${property._id}`}>
              {property.title}
            </Link>
          </h2>
          <div className="product-img-location">
            <ul>
              <li className="go-top">
              <Link to="/contact">
                  <i className="flaticon-pin" /> {property.city}-
                  {property.address}, {property.neighborhood}
                </Link>
              </li>
            </ul>
          </div>
          <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
            <li>
            <span>{property.bedrooms} </span>
              Bedrooms
            </li>
            <li>
            <span>{property.bathrooms} </span>
              Bathrooms
            </li>
            <li>
            <span>{property.size} </span>
              Meter
            </li>
          </ul>
        </div>
        <div className="ltn__blog-meta">
          <ul>
            {userInformation ? (
              <li className="ltn__blog-category">
                <Link to={`/property/edit-listing/${property._id}`}>
                  Edit Property
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailList;
