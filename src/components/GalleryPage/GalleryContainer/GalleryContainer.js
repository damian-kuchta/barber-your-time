import classes from "./GalleryContainer.module.css";
import LightBox from "../LightBox/LightBox";
import { useState } from "react";
import img from "../../../assets/maps-bg.jpg";
import { images } from "../../../assets/gallery-photos/galleryPhotos";
const GalleryContainer = () => {
  const [imageToShow, setImage] = useState(null);

  const showImageHandler = (e) => {
    console.log(e.target.src);
    setImage(e.target.src);
  };

  return (
    <div>
      <LightBox src={imageToShow}>
        <div className={classes["gallery-wrap"]}>
          <div>
            <img onClick={(e) => showImageHandler(e)} src={images[0]}></img>
          </div>
          <div>
            <img onClick={(e) => showImageHandler(e)} src={images[1]}></img>
          </div>
          <div>
            <img onClick={(e) => showImageHandler(e)} src={images[2]}></img>
          </div>
          <div>
            <img onClick={(e) => showImageHandler(e)} src={images[3]}></img>
          </div>
          <div>
            <img onClick={(e) => showImageHandler(e)} src={images[4]}></img>
          </div>
          <div>
            <img onClick={(e) => showImageHandler(e)} src={images[5]}></img>
          </div>
          <div>
            <img onClick={(e) => showImageHandler(e)} src={images[6]}></img>
          </div>
          <div>
            <img onClick={(e) => showImageHandler(e)} src={images[7]}></img>
          </div>
        </div>
      </LightBox>
    </div>
  );
};

export default GalleryContainer;
