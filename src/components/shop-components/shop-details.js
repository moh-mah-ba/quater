import React from "react";
import { Link } from "react-router-dom";
import FeaturedItem from "../section-components/featured-item-v1";
// import FeaturedItem from './section-components/featured-item-v1';

const ShopDetails = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
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
                      For Rent
                    </Link>
                  </li>
                </ul>
              </div>
              <h1>Diamond Manor Apartment</h1>
              <label>
                <span className="ltn__secondary-color">
                  <i className="flaticon-pin" />
                </span>{" "}
                Belmont Gardens, Chicago
              </label>
              <h4 className="title-2">Description</h4>
              <p>
                Massa tempor nec feugiat nisl pretium. Egestas fringilla
                phasellus faucibus scelerisque eleifend donec Porta nibh
                venenatis cras sed felis eget velit aliquet. Neque volutpat ac
                tincidunt vitae semper quis lectus. Turpis in eu mi bibendum
                neque egestas congue quisque. Sed elementum tempus egestas sed
                sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris
                cursus mattis molestee iaculis at erat pellentesque. Id interdum
                velit laoreet id donec ultrices tincidunt.
              </p>
              <p>
                To the left is the modern kitchen with central island, leading
                through to the unique breakfast family room which feature glass
                walls and doors out onto the garden and access to the separate
                utility room.
              </p>
              <h4 className="title-2">Property Detail</h4>
              <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                <ul>
                  <li>
                    <label>Rooms:</label> <span>7</span>
                  </li>
                  <li>
                    <label>Baths:</label> <span>2</span>
                  </li>
                  <li>
                    <label>Year built:</label> <span>1992</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <label>Beds:</label> <span>7</span>
                  </li>
                  <li>
                    <label>Price:</label> <span>2</span>
                  </li>
                  <li>
                    <label>Property Status:</label> <span>For Sale</span>
                  </li>
                </ul>
              </div>
              <h4 className="title-2">From Our Gallery</h4>
              <div className="ltn__property-details-gallery mb-30">
                <div className="row">
                  <div className="col-md-6">
                    <a
                      href={publicUrl + "assets/img/others/14.jpg"}
                      data-rel="lightcase:myCollection"
                    >
                      <img
                        className="mb-30"
                        src={publicUrl + "assets/img/others/14.jpg"}
                        alt="Image"
                      />
                    </a>
                    <a
                      href={publicUrl + "assets/img/others/15.jpg"}
                      data-rel="lightcase:myCollection"
                    >
                      <img
                        className="mb-30"
                        src={publicUrl + "assets/img/others/15.jpg"}
                        alt="Image"
                      />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href={publicUrl + "assets/img/others/16.jpg"}
                      data-rel="lightcase:myCollection"
                    >
                      <img
                        className="mb-30"
                        src={publicUrl + "assets/img/others/16.jpg"}
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* APARTMENTS PLAN AREA END */}
              <h4 className="title-2">Property Video</h4>
              <div
                className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
                data-bs-bg={publicUrl + "assets/img/others/5.jpg"}
              >
                <a
                  className="ltn__video-icon-2 ltn__video-icon-2-border---"
                  href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0"
                  data-rel="lightcase:myCollection"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
              <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60"></div>
              <div className="row">
                <FeaturedItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
