import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./shop-sidebar";
import { useDispatch, useSelector } from "react-redux";
import { listProperty, searchAction } from "../../redux/actions/propertyAction";
import PropertyDetails from "./propery-details";
import PropertyDetailList from "./property-detail-list";

const ShopGridV1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const propertyList = useSelector(state => state.propertyReducer);
  const { allProperties, error, properties, currentItemsPerPage, totalPages } =
    propertyList;

  useEffect(() => {
    dispatch(listProperty(itemsPerPage, pageNumber));
  }, [dispatch, itemsPerPage, pageNumber /* [properties]*/]);

  const pages = Array.from(Array(totalPages).keys());

  if (propertyList) {
    console.log(propertyList);
  }

  const handleBackButton = () => {
    setPageNumber(0);
    navigate(`?page=1&itemsPerPage=${currentItemsPerPage}`);
  };
  const handleNextButton = () => {
    setPageNumber(`${totalPages}`);
    navigate(`?page=${totalPages}&itemsPerPage=${currentItemsPerPage}`);
  };

  const handleItemsPerPage = e => {
    setItemsPerPage(e);
    setPageNumber(1);
  };

  const [search, setSearch] = useState("");

  const searchHandleSubmet = e => {
    e.preventDefault();
    if (search) {
      navigate(`/property/search/${search}`);
      dispatch(searchAction(search));
    } else {
      navigate(`/404`);
    }
  };
  /* Sidebar */
  const [propertyType, setPropertyType] = useState([]);
  const [catagory, setCatagory] = useState([]);

  // console.log("propertyType" , propertyType);

  // useEffect(() => {
  //   console.log("catagory" , catagory);
  //   const filfil = properties.filter((property) => property.saleType == catagory)
  //   console.log("filfil" , filfil)
  //   console.log("properties" , properties.filter((property) => property.saleType == [catagory[0] || catagory[1]]))

  // }, [catagory])

  return (
    <div>
      <div className="ltn__product-area ltn__product-gutter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-100">
              <div className="ltn__shop-options">
                <ul className="justify-content-start">
                  <li>
                    <div className="ltn__grid-list-tab-menu ">
                      <div className="nav">
                        <a
                          className="active show"
                          data-bs-toggle="tab"
                          href="#liton_product_grid"
                        >
                          <i className="fas fa-th-large" />
                        </a>
                        <a data-bs-toggle="tab" href="#liton_product_list">
                          <i className="fas fa-list" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown">
                      <button
                        className="btn border dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Per Page: {itemsPerPage} <span className="pt-3"></span>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            to={`/properties/?page=1&itemsPerPage=6`}
                            onClick={e => handleItemsPerPage(6)}
                          >
                            Per Page: 6
                          </Link>
                        </li>
                        {(properties || "").length >= 6 ? (
                          <li>
                            <Link
                              className="dropdown-item"
                              to={`/properties/?page=1&itemsPerPage=12`}
                              onClick={e => handleItemsPerPage(12)}
                            >
                              Per Page: 12
                            </Link>
                          </li>
                        ) : (
                          ""
                        )}
                        {(properties || "").length >= 12 ? (
                          <li>
                            <Link
                              className="dropdown-item"
                              to={`/properties/?page=1&itemsPerPage=50`}
                              onClick={e => handleItemsPerPage(50)}
                            >
                              Per Page: 50
                            </Link>
                          </li>
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                  </li>
                  <li className="d-inline-block">
                    <div className="showing-product-number text-right">
                      <span>
                        Showing 1???{itemsPerPage} of{" "}
                        {allProperties && allProperties?.length} results
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade active show"
                  id="liton_product_grid"
                >
                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">
                      <div className="col-lg-12">
                        {/* Search Widget */}
                        <div className="ltn__search-widget mb-30">
                          <form onSubmit={searchHandleSubmet}>
                            <input
                              type="text"
                              name="search"
                              placeholder="Search your keyword..."
                              onChange={e => setSearch(e.target.value)}
                            />
                            <button type="submit">
                              <i className="fas fa-search" />
                            </button>
                          </form>
                        </div>
                      </div>

                      {/* ltn__product-item */}
                      {properties?.map(property => {
                        return (
                          <PropertyDetails
                            key={property._id}
                            property={property}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_product_list">
                  <div className="ltn__product-tab-content-inner ltn__product-list-view">
                    <div className="row">
                      <div className="col-lg-12">
                        {/* Search Widget */}
                        <div className="ltn__search-widget mb-30">
                          <form onSubmit={searchHandleSubmet}>
                            <input
                              type="text"
                              name="search"
                              placeholder="Search your keyword..."
                              onChange={e => setSearch(e.target.value)}
                            />
                            <button type="submit">
                              <i className="fas fa-search" />
                            </button>
                          </form>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      {properties?.map(property => {
                        return (
                          <PropertyDetailList
                            key={property._id}
                            property={property}
                          />
                        );
                      })}
                      {/*  */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ltn__pagination-area text-center">
                <div className="ltn__pagination">
                  <ul>
                    <li onClick={handleBackButton}>
                      <Link to="#">
                        <i className="fas fa-angle-double-left" />
                      </Link>
                    </li>

                    {pages.map(pageIndex => (
                      <li
                        key={pageIndex}
                        onClick={() => setPageNumber(pageIndex + 1)}
                      >
                        <Link
                          to={`?page=${
                            pageIndex + 1
                          }&itemsPerPage=${currentItemsPerPage}`}
                        >
                          {pageIndex + 1}
                        </Link>
                      </li>
                    ))}
                    <li onClick={handleNextButton}>
                      <Link to="#">
                        <i className="fas fa-angle-double-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Sidebar
              propertyType={propertyType}
              setPropertyType={setPropertyType}
              setCatagory={setCatagory}
              catagory={catagory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGridV1;
