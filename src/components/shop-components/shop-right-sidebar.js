import React, {useState , useEffect} from "react";
import { Link , useNavigate } from "react-router-dom";
import Sidebar from "./shop-sidebar";
import { useDispatch , useSelector } from "react-redux";
import { listProperty } from "../../redux/actions/propertyAction";

const ShopGridV1 = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const propertyList = useSelector((state) => state.propertyReducer);
  const {  error, properties, currentItemsPerPage, totalPages } =
  propertyList;

  // console.log("properties" , properties)

  useEffect(() => {
    dispatch(listProperty(itemsPerPage, pageNumber));
  }, [dispatch, itemsPerPage, pageNumber]);

  const pages = Array.from(Array(totalPages).keys());

  const handleBackButton = () => {
    setPageNumber(0);
    navigate(`/?page=1&itemsPerPage=${currentItemsPerPage}`);
  };
  const handleNextButton = () => {
    setPageNumber(`${totalPages}`);
    navigate(`/?page=${totalPages}&itemsPerPage=${currentItemsPerPage}`);
  };

  
  const handleItemsPerPage = (e) => {
    setItemsPerPage(e);
    setPageNumber(1);
  };

  return (
    <div>
      <div className="ltn__product-area ltn__product-gutter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8  mb-100">
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
                  <li className="d-none">
                    <div className="showing-product-number text-right">
                      <span>Showing 1–12 of 18 results</span>
                    </div>
                  </li>
                  <li>
                  <div className="short-by text-center">
                    <select className="nice-select">
                      <Link to={`/properties/?page=1&itemsPerPage=6`}>
                     <option>to one</option></Link>
                      <Link to={`/properties/?page=1&itemsPerPage=12`}>
                     <option>to two</option></Link>
                      <Link to={`/properties/?page=1&itemsPerPage=24`}>
                     <option>to three</option></Link>
                    </select>
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
                      {/* <div className="col-lg-12"> */}
                      {/* Search Widget */}
                      {/* <div className="ltn__search-widget mb-30">
										<form action="#">
										<input type="text" name="search" placeholder="Search your keyword..." />
										<button type="submit"><i className="fas fa-search" /></button>
										</form>
									</div>
									</div> */}
                      {/* ltn__product-item */}
                      {properties.map((property) => {
                      return(
                      <div key={property._id} className="col-xl-6 col-sm-6 col-12">
                        <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                          <div className="product-img go-top">
                            <Link to={`/propertie-details/${property._id}`}>
                              <img
                                src={property.images[0]}
                                alt={property.title}
                              />
                            </Link>
                          </div>
                          <div className="product-info">
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badg">{property.saleType}</li>
                              </ul>
                            </div>
                            <h2 className="product-title go-top">
                            <Link to={`/propertie-details/${property._id}`}>
                                {property.title}
                              </Link>
                            </h2>
                            <div className="product-img-location go-top">
                              <ul>
                                <li>
                                  <Link to="/contact">
                                    <i className="flaticon-pin" /> {property.city}
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
                              <span>
                                $ {property.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                  })}
                  </div>
                  </div>
                </div>
              </div>
              <div className="ltn__pagination-area text-center">
                <div className="ltn__pagination">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-double-left" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">1</Link>
                    </li>
                    <li className="active">
                      <Link to="#">2</Link>
                    </li>
                    <li>
                      <Link to="#">3</Link>
                    </li>
                    <li>
                      <Link to="#">...</Link>
                    </li>
                    <li>
                      <Link to="#">10</Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fas fa-angle-double-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGridV1;
