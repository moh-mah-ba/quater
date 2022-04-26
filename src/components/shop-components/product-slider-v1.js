import React from "react";
import { useSelector } from "react-redux";

const ProductSliderV1 = () => {
  const propertyDetail = useSelector((state) => state.propertyDetailsReducer);
  const { property, images, error } = propertyDetail;

//   let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="ltn__img-slider-area mb-90">
      <div className="container-fluid">
        <div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
          {/* {images?.map((image) => {
			  return(
				 
			  )
			})} */}

		  <div className="col-lg-12">
            <div className="ltn__img-slide-item-4">
              <a href={images[0]} data-rel="lightcase:myCollection">
                <img src={images[0]} alt="Image" />
              </a>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="ltn__img-slide-item-4">
              <a href={images[1]} data-rel="lightcase:myCollection">
                <img src={images[1]} alt="Image" />
              </a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="ltn__img-slide-item-4">
              <a href={images[2]} data-rel="lightcase:myCollection">
                <img src={images[2]} alt="Image" />
              </a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="ltn__img-slide-item-4">
              <a href={images[3]} data-rel="lightcase:myCollection">
                <img src={images[3]} alt="Image" />
              </a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="ltn__img-slide-item-4">
              <a href={images[4]} data-rel="lightcase:myCollection">
                <img src={images[4]} alt="Image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSliderV1;
