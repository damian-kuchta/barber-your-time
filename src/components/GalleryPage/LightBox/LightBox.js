import React, { useState } from "react";
import { useEffect } from "react";
import classes from "./LightBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const LightBox = ({ children, src, alt, Wrapper = "div", zIndex = 100 }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    if(isOpen) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow='auto'
    }
  }, [isOpen])

  const toggleIsOpen = (e) => {
    if (e.target.localName === "img") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
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
            overflow: "hidden",
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
            <div className={classes["close-btn-wrap"]}>
              <FontAwesomeIcon
                className={classes["close-btn"]}
                icon={faXmark}
              />
            </div>
          </div>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default LightBox;
