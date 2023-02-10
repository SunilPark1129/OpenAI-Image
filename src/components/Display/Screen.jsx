import React, { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";

const Screen = ({
  error,
  resImage,
  prompt,
  isImageContent,
  originalImage,
  orientationRotate,
  isWidthLonger,
}) => {
  const [isOriginalVisible, setIsOriginalVisible] = useState(false);

  function visibleClickHandler() {
    setIsOriginalVisible((prev) => !prev);
  }

  useEffect(() => {
    if (resImage) setIsOriginalVisible(false);
  }, [resImage]);

  return error !== null ? (
    <div className="guide">{error}</div>
  ) : (
    <>
      {resImage ? (
        <>
          {!isImageContent ? (
            <div className="prompt">{prompt}</div>
          ) : (
            <button
              className={`visible ${
                isOriginalVisible ? "visible--actived" : ""
              }`}
              onClick={visibleClickHandler}
            >
              <FaRegEye />
            </button>
          )}
          <div
            className={`original-image ${
              isOriginalVisible ? "original-image--opacity" : ""
            }`}
          >
            <div
              className={`original-image__border ${
                isWidthLonger
                  ? "original-image__border--width"
                  : "original-image__border--height"
              }`}
            >
              <img
                className={`img-long`}
                src={originalImage}
                alt="User uploaded image"
              />
            </div>
          </div>
          <img
            style={{ transform: `rotate(${orientationRotate}deg)` }}
            src={resImage}
            alt={"User uploaded image"}
          />
        </>
      ) : null}
    </>
  );
};

export default Screen;
