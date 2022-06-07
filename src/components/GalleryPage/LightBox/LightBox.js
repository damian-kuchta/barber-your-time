import React, { useState } from "react";
import classes from "./LightBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
const LightBox = ({ children, src, alt, Wrapper = "div", zIndex = 100 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = (e) => {
    setIsOpen(!isOpen);
  };
  const closeModal = (e) => {
    console.log(e.target);
    setIsOpen(false);
  };
  return (
    <Wrapper onClick={toggleIsOpen}>
      {children}
      {isOpen ? (
        <div
          style={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "0",
            left: "0",
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.7)",
            cursor: "pointer",
            zIndex: "99",
          }}
        >
          <div className={classes["photo-wrap"]}>
            <img
              className={classes["photo-box"]}
              src={src}
              alt={alt}
              style={{
                display: "block",
              }}
            />
            <FontAwesomeIcon
              onClick={closeModal}
              className={classes["close-icon"]}
              icon={faRectangleXmark}
            />
          </div>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default LightBox;
