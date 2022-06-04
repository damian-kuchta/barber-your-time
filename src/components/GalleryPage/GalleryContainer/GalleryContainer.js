import { photos } from "../Photos/photos";
import classes from "./GalleryContainer.module.css";

const images = [
  "https://i.postimg.cc/DmVDcTfH/272977001-127401306453808-8779114916451251368-n.jpg",

];

const GalleryContainer = () => {

  return (
    <div className={classes["gallery-wrap"]}>
      <div><img src={photos[0].src}></img></div>
      <div><img src={photos[1].src}></img></div>
      <div><img src={photos[0].src}></img></div>
      <div><img src={photos[1].src}></img></div>
      <div><img src={photos[0].src}></img></div>
      <div><img src={photos[1].src}></img></div>
      <div><img src={photos[0].src}></img></div>
      <div><img src={photos[1].src}></img></div>
    </div>
  );
};

export default GalleryContainer;
