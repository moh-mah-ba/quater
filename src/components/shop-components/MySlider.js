import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CarouselModal from "./CarouselModal";
import classes from "./MySlider.module.css";

const MySlider = () => {
  const propertyDetail = useSelector(state => state.propertyDetailsReducer);
  const { property, images, error } = propertyDetail;
  const [firstImg, setFirstImg] = useState();
  const [showModal, setShowModal] = useState(false);
  const [clickedImg, setClickedImg] = useState();

  useEffect(() => {
    setFirstImg(images[0]);
  }, [images]);

  const prevImgHandler = () => {
    setFirstImg(prevState =>
      images.indexOf(prevState) <= 3
        ? images[images.indexOf(prevState) - 1]
        : images[images.indexOf(prevState) + 1]
    );
  };

  const nextImgHandler = () => {
    setFirstImg(prevState =>
      images.indexOf(prevState) >= 3
        ? images[0]
        : images[images.indexOf(prevState) + 1]
    );
  };

  const showModalHandler = e => {
    setShowModal(true);
    setClickedImg(e.target.src);
  };

  if (images) {
    // prettier-ignore
    console.log(images[0]&&images[0]["secure_url"]);
  }

  return (
    <>
      <div className={classes.container}>
        {images.indexOf(firstImg) > 0 && (
          <span className={classes["left-arrow"]} onClick={prevImgHandler}>
            <i class="fa-solid fa-arrow-left"></i>
          </span>
        )}
        <div onClick={showModalHandler} className={classes.wrapper}>
          <div className={classes.first}>
            <img src={firstImg && firstImg["secure_url"]} alt="image" />
          </div>
          <div className={classes.middle}>
            <img
              src={
                firstImg && images[images.indexOf(firstImg) + 1]["secure_url"]
              }
              alt="image"
            />
          </div>
          <div className={classes.last}>
            <img
              src={
                (images[images.indexOf(firstImg) + 2] &&
                  images[images.indexOf(firstImg) + 2]["secure_url"]) ||
                (images[0] && images[0]["secure_url"])
              }
              alt="image"
            />
          </div>
        </div>

        {images.indexOf(firstImg) <= 5 && (
          <span className={classes["right-arrow"]} onClick={nextImgHandler}>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        )}
      </div>
      {showModal && (
        <CarouselModal
          clickedImg={clickedImg}
          images={images}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default MySlider;
