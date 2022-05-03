import React, {useState} from "react";
import PropertyDetails from "./propery-details";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import PropertyDetailList from "./property-detail-list";
import { searchAction } from "../../redux/actions/propertyAction";

const SearchList = () => {
  const propertySearchList = useSelector(
    (state) => state.searchPropertyReducer
  );
  const { searchList, error } = propertySearchList;
  console.log("search", searchList);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [search , setSearch] = useState("");

  const searchHandleSubmet =(e) => {
    e.preventDefault();
    if(search){
      dispatch(searchAction(search));
    }else{
      navigate(`/404`)
    }
  }

  return (
    <div>
      <div className="ltn__product-area ltn__product-gutter mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__shop-options">
                <ul>
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
                    <div className="showing-product-number text-right">
                      <span>{searchList && searchList?.length} results</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content ">
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
                              onChange={(e) => setSearch(e.target.value)}
                            />
                            <button type="submit">
                              <i className="fas fa-search" />
                            </button>
                          </form>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      {searchList?.map((property) => {
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
                              onChange={(e) => setSearch(e.target.value)}
                            />
                            <button type="submit">
                              <i className="fas fa-search" />
                            </button>
                          </form>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      {searchList?.map((property) => {
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
