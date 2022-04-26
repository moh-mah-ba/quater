import React, {useEffect , useState} from "react";
import { Link , useNavigate , useParams } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import FeaturedItem from "../section-components/featured-item-v1";
import { detailsProperty } from "../../redux/actions/propertyAction"; 
// import FeaturedItem from './section-components/featured-item-v1';

const ShopDetails = (props) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const { id } = useParams();
  const dispatch = useDispatch();
  const propertyId = id;


  
const propertyDetail = useSelector((state) => state.propertyDetailsReducer);
const {property , images , error} = propertyDetail;


useEffect(() => {
dispatch(detailsProperty(propertyId))
}, [dispatch, propertyId])

  return (
    <div className="ltn__shop-details-area pb-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
              <div className="ltn__blog-meta">
                <ul>
                  <li className="ltn__blog-category">
                    <Link to="#">Featured</Link>
                  </li>
                  <li className="ltn__blog-category">
                    <Link className="bg-orange" to="#">
                      For {property.saleType}
                    </Link>
                  </li>
                </ul>
              </div>
              <h1>{property.title}</h1>
              <label>
                <span className="ltn__secondary-color">
                  <i className="flaticon-pin" />
                </span>{" "}
                {property.city} {property.address}, {property.neighborhood}
              </label>
              <h4 className="title-2">Description</h4>
              <p>{property.description}</p>
              <h4 className="title-2">Property Detail</h4>
              <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                <ul>
                  <li>
                    <label>Rooms:</label> <span>{property.rooms}</span>
                  </li>
                  <li>
                    <label>Baths:</label> <span>{property.bathrooms}</span>
                  </li>
                  <li>
                    <label>Year built:</label> <span>{property.yearBuilt}</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <label>Beds:</label> <span>{property.bedrooms}</span>
                  </li>
                  <li>
                    <label>Price:</label> <span>{property.price}</span>
                  </li>
                  <li>
                    <label>Property Status:</label> <span>For {property.saleType}</span>
                  </li>
                </ul>
              </div>
              <h4 className="title-2">From Our Gallery</h4>
              <div className="ltn__property-details-gallery mb-30">
                <div className="row">
                  <div className="col-md-6">
                    <a
                      href={images[0]}
                      data-rel="lightcase:myCollection"
                    >
                      <img
                        className="mb-30"
                        src={images[0]}
                        alt="Image"
                      />
                    </a>
                    <a
                      href={images[1]}
                      data-rel="lightcase:myCollection"
                    >
                       <img
                        className="mb-30"
                        src={images[1]}
                        alt="Image"
                      />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href={images[2]}
                      data-rel="lightcase:myCollection"
                    >
                       <img
                        className="mb-30"
                        src={images[2]}
                        alt="Image"
                      />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href={images[3]}
                      data-rel="lightcase:myCollection"
                    >
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href={images[4]}
                      data-rel="lightcase:myCollection"
                    >
                    </a>
                  </div>
                </div>
              </div>
              {/* APARTMENTS PLAN AREA END */}
              <h4 className="title-2">Property Video</h4>
              <div
                className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
                data-bs-bg={publicUrl+"assets/img/bg/19.jpg"}
              >
                <a
                  className="ltn__video-icon-2 ltn__video-icon-2-border---"
                  href={`${property.video}?autoplay=1&showinfo=0`}
                  data-rel="lightcase:myCollection"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              {/* <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60"></div>
              <div className="row">
                <FeaturedItem />
              </div>*/}
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
