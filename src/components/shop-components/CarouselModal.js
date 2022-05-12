import React, { useState } from "react";
import classes from "./CarouselModal.module.css";

const CarouselModal = ({ clickedImg, images: oldImages, setShowModal }) => {
  const [changeImg, setChangeImg] = useState(clickedImg);

  let images = oldImages.map(el => el["secure_url"]);

  const prevImgHandler = () => {
    if (images.indexOf(changeImg) === 0) {
      return;
    }

    setChangeImg(prevState => images[images.indexOf(prevState) - 1]);
  };

  const nextImgHandler = () => {
    if (images.indexOf(changeImg) === 4) {
      return;
    }
    console.log(images[images.indexOf(clickedImg)]);
    setChangeImg(prevState => images[images.indexOf(prevState) + 1]);
  };

  return (
    <>
      <div
        className={classes["carosual-wrapper"]}
        onClick={() => setShowModal(false)}
      ></div>
      {images.indexOf(changeImg) > 0 && (
        <span className={classes["left-arrow"]} onClick={prevImgHandler}>
          <i class="fa-solid fa-arrow-left"></i>
        </span>
      )}
      <img src={changeImg} alt="img" className={classes["carosual-img"]} />
      {images.indexOf(changeImg) < 4 && (
        <span className={classes["right-arrow"]} onClick={nextImgHandler}>
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      )}
    </>
  );
};

export default CarouselModal;
