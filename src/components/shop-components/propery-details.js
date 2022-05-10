import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import { deletePropertAction } from "../../redux/actions/propertyAction";

const PropertyDetails = (props) => {
  const dispatch = useDispatch();
  const { property } = props;
  const userSignin = useSelector((state) => state.userSigninReducer);
  const { userInformation } = userSignin;

  const popupboxConfig = {
    titleBar: {
      enable: true,
      text: "Delete Property",
    },
    fadeIn: true,
    fadeInSpeed: 500,
    overlayOpacity: 0.2,
  };
  const openPopupbox = (event) => {
    const propertyId = event; 
    const content = (
      <div>
        <div className="alert alert-danger" role="alert">
          Are you sure you want to delete this property?
        </div>
        <br />
        <button onClick={(e) =>  handleDelete(propertyId)} type="button" className="p-2 btn-danger">
          Delete!
        </button>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const handleDelete =(event) => {
    dispatch(deletePropertAction(event))
    PopupboxManager.close()
  }

  return (
    <div key={property._id} className="col-xl-6 col-sm-6 col-12">
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
        <div className="product-img go-top">
          <Link to={`/property/propertie-details/${property._id}`}>
            <img src={property.images[0].secure_url} alt={property.title} />
          </Link>
        </div>
        <div className="product-info">
          <div className="product-badge">
            <ul>
              <li className="sale-badg">For {property.saleType}</li>
            </ul>
          </div>
          <h2 className="product-title go-top">
            <Link to={`/property/propertie-details/${property._id}`}>
              {property.title}
            </Link>
          </h2>
          <div className="product-img-location go-top">
            <ul>
              <li>
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
        <div className="ltn__blog-meta">
          <ul>
            {userInformation ? (
              <>
                <li className="ltn__blog-category">
                  <Link to={`/property/edit-listing/${property._id}`}>
                    Edit Property
                  </Link>
                </li>
                <li className="ltn__blog-category ">
                  <Link
                    className="bg-danger"
                    to={"#"}
                    onClick={(event) => openPopupbox(property._id)}
                  >
                    Delete
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
          {/* popup box */}
          <div>
            <PopupboxContainer {...popupboxConfig} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
