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

  return (
    <>
      <div className={classes.container}>
        {images.indexOf(firstImg) > 0 && (
          <span className={classes["left-arrow"]} onClick={prevImgHandler}>
            &#60;
          </span>
        )}
        <div onClick={showModalHandler} className={classes.wrapper}>
          <div className={classes.first}>
            <img src={firstImg} alt="image" />
          </div>
          <div className={classes.middle}>
            <img src={images[images.indexOf(firstImg) + 1]} alt="image" />
          </div>
          <div className={classes.last}>
            <img
              src={images[images.indexOf(firstImg) + 2] || images[0]}
              alt="image"
            />
          </div>
        </div>

        {images.indexOf(firstImg) <= 5 && (
          <span className={classes["right-arrow"]} onClick={nextImgHandler}>
            &#62;
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