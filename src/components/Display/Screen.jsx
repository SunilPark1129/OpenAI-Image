// display the final fetched value
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
    // error handling
    <div className="guide">{error}</div>
  ) : (
    <>
      {resImage ? (
        <>
          {!isImageContent ? (
            // display what user have typed
            <div className="prompt">{prompt}</div>
          ) : (
            // display the button for comparing the length of the original photo with eddited photo
            <button
              className={`visible ${
                isOriginalVisible ? "visible--actived" : ""
              }`}
              onClick={visibleClickHandler}
            >
              <FaRegEye />
            </button>
          )}
          {/* original image to compare the edited image */}
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
          {/* fetched image */}
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
