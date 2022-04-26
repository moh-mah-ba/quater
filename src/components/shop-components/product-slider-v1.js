import React from "react";
import { useSelector } from "react-redux";

const ProductSliderV1 = () => {
  const propertyDetail = useSelector((state) => state.propertyDetailsReducer);
  const { property, error } = propertyDetail;

  // console.log("property" , property)

  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="ltn__img-slider-area mb-90">
      <div className="container-fluid">
        <div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
          {/* {property.images?.map((image) => {
			  return (
				<div className="col-lg-12">
                <div key={image.index} className="ltn__img-slide-item-4">
                  <a href={image} data-rel="lightcase:myCollection">
                    <img src={image} alt="Image" />
                  </a>
                </div>
              </div>
            );
          })} */}
          {/* <div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/32.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/32.jpg"} alt="Image" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/33.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/33.jpg"} alt="Image" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/34.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/34.jpg"} alt="Image" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/35.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/35.jpg"} alt="Image" />
						</a>
					</div>
					</div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductSliderV1;
