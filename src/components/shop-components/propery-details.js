import React from "react";
import {Link} from "react-router-dom";

const PropertyDetails = (props) => {
  const { property } = props;
  return (
    <div
      key={property._id}
      className="col-xl-6 col-sm-6 col-12"
      >
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
        <div className="product-img go-top">
          <Link
            to={`/property/propertie-details/${property._id}`}
          >
            <img
              src={property.images[0]}
              alt={property.title}
            />
          </Link>
        </div>
        <div className="product-info">
          <div className="product-badge">
            <ul>
              <li className="sale-badg">
                {property.saleType}
              </li>
            </ul>
          </div>
          <h2 className="product-title go-top">
            <Link
              to={`/property/propertie-details/${property._id}`}
            >
              {property.title}
            </Link>
          </h2>
          <div className="product-img-location go-top">
            <ul>
              <li>
                <Link to="/contact">
                  <i className="flaticon-pin" />{" "}
                  {property.city}
                  {property.address},{" "}
                  {property.neighborhood}
                </Link>
              </li>
            </ul>
          </div>
          <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
            <li>
              <span>{property.bedrooms} </span>
              Bed
            </li>
            <li>
              <span>{property.bathrooms} </span>
              Bath
            </li>
            <li>
              <span>{property.size} </span>
              Meter
            </li>
          </ul>
        </div>
        <div className="product-info-bottom">
          <div className="product-price">
            <span>$ {property.price}</span>
          </div>
        </div>
      </div>
      </div>
  );
};

export default PropertyDetails;
