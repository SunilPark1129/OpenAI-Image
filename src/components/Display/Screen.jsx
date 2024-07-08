/*
This page displays the results to the user based on data received from openAI
*/

import React, { useState, useEffect, Fragment } from "react";
import { FaRegEye } from "react-icons/fa";

const Screen = ({
  error,
  imageURL,
  revisedPrompt,
  isImgtoImgContent,
  originalImage,
  isWidthLonger,
}) => {
  // true = display original image
  const [isOriginalVisible, setIsOriginalVisible] = useState(false);

  useEffect(() => {
    if (imageURL) setIsOriginalVisible(false);
  }, [imageURL]);

  if (error !== null) return <div className="guide">{error}</div>;
  return imageURL ? (
    <Fragment>
      {/* display either vision icon or ask AI button */}
      {!isImgtoImgContent ? (
        /* display the AI button */
        <>
          <button
            className={`revised ${isOriginalVisible ? "revised--actived" : ""}`}
            onClick={() => setIsOriginalVisible((prev) => !prev)}
          >
            Hey AI, what do you see in the picture?
          </button>
          <div className={`prompt ${isOriginalVisible && "prompt--actived"}`}>
            <p>AI :</p>
            <p>{revisedPrompt}</p>
          </div>
        </>
      ) : (
        /* display the vision icon */
        <button
          className={`visible ${isOriginalVisible ? "visible--actived" : ""}`}
          onClick={() => setIsOriginalVisible((prev) => !prev)}
        >
          <FaRegEye />
        </button>
      )}

      {/* compare the new image and original image */}
      {isImgtoImgContent && (
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
      )}

      {/* display received image */}
      <img
        className={`show-prompt ${
          !isImgtoImgContent && isOriginalVisible && "show-prompt--actived"
        }`}
        src={imageURL}
        alt={"User uploaded image"}
      />
    </Fragment>
  ) : null;
};

export default Screen;
