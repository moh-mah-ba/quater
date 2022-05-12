import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProperty } from "../../redux/actions/propertyAction";

const FeaturedItemV1 = () => {
  const dispatch = useDispatch();

  const propertyList = useSelector(state => state.propertyReducer);
  const { properties } = propertyList;

  useEffect(() => {
    dispatch(listProperty());
  }, [dispatch]);

  const reversedItems = properties && properties.reverse();

  return (
    <>
      {!reversedItems && <div>loading</div>}
      {reversedItems && (
        <div>
          <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title-area ltn__section-title-2--- text-center">
                    <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                      Properties
                    </h6>
                    <h1 className="section-title">Latest Property</h1>
                  </div>
                </div>
              </div>
              <div className="row ltn__product-slider-item-three-active slick-arrow-1">
                {/* ltn__product-item */}
                <div className="col-lg-12">
                  <div className="ltn__product-item ltn__product-item-4 text-center---">
                    <div className="product-img go-top">
                      <Link
                        to={`/property/propertie-details/${reversedItems[0]?._id}`}
                      >
                        <img
                          src={reversedItems[0]?.images[0].secure_url}
                          alt="#"
                        />
                      </Link>
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badge bg-green">
                            For {reversedItems[0]?.saleType}
                          </li>
                        </ul>
                      </div>
                      <div className="product-img-location-gallery">
                        <div className="product-img-location go-top">
                          <ul>
                            <li>
                              <Link to="/contact">
                                <i className="flaticon-pin" />{" "}
                                {reversedItems[0]?.city}{" "}
                                {reversedItems[0]?.address},{" "}
                                {reversedItems[0]?.neighborhood}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-price">
                        <span>$ {reversedItems[0]?.price} </span>
                      </div>
                      <h2 className="product-title go-top">
                        <Link
                          to={`/property/propertie-details/${reversedItems[0]?._id}`}
                        >
                          {reversedItems[0]?.title}
                        </Link>
                      </h2>
                      <div className="product-description">
                        <p>
                          Beautiful Huge 1 Family House In Heart Of <br />
                          Westbury. Newly Renovated With New Wood
                        </p>
                      </div>
                      <ul className="ltn__list-item-2 ltn__list-item-2-before">
                        <li>
                          <span>
                            {reversedItems[0]?.bedrooms}{" "}
                            <i className="flaticon-bed" />
                          </span>
                          Bedrooms
                        </li>
                        <li>
                          <span>
                            {reversedItems[0]?.bathrooms}{" "}
                            <i className="flaticon-clean" />
                          </span>
                          Bathrooms
                        </li>
                        <li>
                          <span>
                            {reversedItems[0]?.size}{" "}
                            <i className="flaticon-square-shape-design-interface-tool-symbol" />
                          </span>
                          Meter
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-lg-12">
                  <div className="ltn__product-item ltn__product-item-4 text-center---">
                    <div className="product-img go-top">
                      <Link
                        to={`/property/propertie-details/${reversedItems[1]?._id}`}
                      >
                        <img
                          src={reversedItems[1]?.images[1].secure_url}
                          alt="#"
                        />
                      </Link>
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badge bg-green">
                            For {reversedItems[1]?.saleType}
                          </li>
                        </ul>
                      </div>
                      <div className="product-img-location-gallery">
                        <div className="product-img-location go-top">
                          <ul>
                            <li>
                              <Link to="/contact">
                                <i className="flaticon-pin" />{" "}
                                {reversedItems[1]?.city}{" "}
                                {reversedItems[1]?.address},{" "}
                                {reversedItems[1]?.neighborhood}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-price">
                        <span>$ {reversedItems[1]?.price} </span>
                      </div>
                      <h2 className="product-title go-top">
                        <Link
                          to={`/property/propertie-details/${reversedItems[1]?._id}`}
                        >
                          {reversedItems[1]?.title}
                        </Link>
                      </h2>
                      <div className="product-description">
                        <p>
                          Beautiful Huge 1 Family House In Heart Of <br />
                          Westbury. Newly Renovated With New Wood
                        </p>
                      </div>
                      <ul className="ltn__list-item-2 ltn__list-item-2-before">
                        <li>
                          <span>
                            {reversedItems[1]?.bedrooms}{" "}
                            <i className="flaticon-bed" />
                          </span>
                          Bedrooms
                        </li>
                        <li>
                          <span>
                            {reversedItems[1]?.bathrooms}{" "}
                            <i className="flaticon-clean" />
                          </span>
                          Bathrooms
                        </li>
                        <li>
                          <span>
                            {reversedItems[1]?.size}{" "}
                            <i className="flaticon-square-shape-design-interface-tool-symbol" />
                          </span>
                          Meter
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-lg-12">
                  <div className="ltn__product-item ltn__product-item-4 text-center---">
                    <div className="product-img go-top">
                      <Link
                        to={`/property/propertie-details/${reversedItems[2]?._id}`}
                      >
                        <img
                          src={reversedItems[2]?.images[2].secure_url}
                          alt="#"
                        />
                      </Link>
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badge bg-green">
                            For {reversedItems[2]?.saleType}
                          </li>
                        </ul>
                      </div>
                      <div className="product-img-location-gallery">
                        <div className="product-img-location go-top">
                          <ul>
                            <li>
                              <Link to="/contact">
                                <i className="flaticon-pin" />{" "}
                                {reversedItems[2]?.city}{" "}
                                {reversedItems[2]?.address},{" "}
                                {reversedItems[2]?.neighborhood}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-price">
                        <span>$ {reversedItems[2]?.price} </span>
                      </div>
                      <h2 className="product-title go-top">
                        <Link
                          to={`/property/propertie-details/${reversedItems[2]?._id}`}
                        >
                          {reversedItems[2]?.title}
                        </Link>
                      </h2>
                      <div className="product-description">
                        <p>
                          Beautiful Huge 1 Family House In Heart Of <br />
                          Westbury. Newly Renovated With New Wood
                        </p>
                      </div>
                      <ul className="ltn__list-item-2 ltn__list-item-2-before">
                        <li>
                          <span>
                            {reversedItems[2]?.bedrooms}{" "}
                            <i className="flaticon-bed" />
                          </span>
                          Bedrooms
                        </li>
                        <li>
                          <span>
                            {reversedItems[2]?.bathrooms}{" "}
                            <i className="flaticon-clean" />
                          </span>
                          Bathrooms
                        </li>
                        <li>
                          <span>
                            {reversedItems[2]?.size}{" "}
                            <i className="flaticon-square-shape-design-interface-tool-symbol" />
                          </span>
                          Meter
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-lg-12">
                  <div className="ltn__product-item ltn__product-item-4 text-center---">
                    <div className="product-img go-top">
                      <Link
                        to={`/property/propertie-details/${reversedItems[3]?._id}`}
                      >
                        <img
                          src={reversedItems[3]?.images[3].secure_url}
                          alt="#"
                        />
                      </Link>
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badge bg-green">
                            For {reversedItems[3]?.saleType}
                          </li>
                        </ul>
                      </div>
                      <div className="product-img-location-gallery">
                        <div className="product-img-location go-top">
                          <ul>
                            <li>
                              <Link to="/contact">
                                <i className="flaticon-pin" />{" "}
                                {reversedItems[3]?.city}{" "}
                                {reversedItems[3]?.address},{" "}
                                {reversedItems[3]?.neighborhood}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-price">
                        <span>$ {reversedItems[3]?.price} </span>
                      </div>
                      <h2 className="product-title go-top">
                        <Link
                          to={`/property/propertie-details/${reversedItems[3]?._id}`}
                        >
                          {reversedItems[3]?.title}
                        </Link>
                      </h2>
                      <div className="product-description">
                        <p>
                          Beautiful Huge 1 Family House In Heart Of <br />
                          Westbury. Newly Renovated With New Wood
                        </p>
                      </div>
                      <ul className="ltn__list-item-2 ltn__list-item-2-before">
                        <li>
                          <span>
                            {reversedItems[3]?.bedrooms}{" "}
                            <i className="flaticon-bed" />
                          </span>
                          Bedrooms
                        </li>
                        <li>
                          <span>
                            {reversedItems[3]?.bathrooms}{" "}
                            <i className="flaticon-clean" />
                          </span>
                          Bathrooms
                        </li>
                        <li>
                          <span>
                            {reversedItems[3]?.size}{" "}
                            <i className="flaticon-square-shape-design-interface-tool-symbol" />
                          </span>
                          Meter
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-lg-12">
                  <div className="ltn__product-item ltn__product-item-4 text-center---">
                    <div className="product-img go-top">
                      <Link
                        to={`/property/propertie-details/${reversedItems[4]?._id}`}
                      >
                        <img
                          src={reversedItems[4]?.images[4].secure_url}
                          alt="#"
                        />
                      </Link>
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badge bg-green">
                            For {reversedItems[4]?.saleType}
                          </li>
                        </ul>
                      </div>
                      <div className="product-img-location-gallery">
                        <div className="product-img-location go-top">
                          <ul>
                            <li>
                              <Link to="/contact">
                                <i className="flaticon-pin" />{" "}
                                {reversedItems[4]?.city}{" "}
                                {reversedItems[4]?.address},{" "}
                                {reversedItems[4]?.neighborhood}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-price">
                        <span>$ {reversedItems[4]?.price} </span>
                      </div>
                      <h2 className="product-title go-top">
                        <Link
                          to={`/property/propertie-details/${reversedItems[4]?._id}`}
                        >
                          {reversedItems[4]?.title}
                        </Link>
                      </h2>
                      <div className="product-description">
                        <p>
                          Beautiful Huge 1 Family House In Heart Of <br />
                          Westbury. Newly Renovated With New Wood
                        </p>
                      </div>
                      <ul className="ltn__list-item-2 ltn__list-item-2-before">
                        <li>
                          <span>
                            {reversedItems[4]?.bedrooms}{" "}
                            <i className="flaticon-bed" />
                          </span>
                          Bedrooms
                        </li>
                        <li>
                          <span>
                            {reversedItems[4]?.bathrooms}{" "}
                            <i className="flaticon-clean" />
                          </span>
                          Bathrooms
                        </li>
                        <li>
                          <span>
                            {reversedItems[4]?.size}{" "}
                            <i className="flaticon-square-shape-design-interface-tool-symbol" />
                          </span>
                          Meter
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedItemV1;
