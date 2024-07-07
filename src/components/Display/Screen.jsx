/*
This page displays the results to the user based on data received from openAI
*/

import React, { useState, useEffect } from "react";
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

  return error !== null ? (
    <div className="guide">{error}</div>
  ) : (
    <>
      {imageURL ? (
        <>
          {!isImgtoImgContent ? (
            <>
              <button
                className={`revised ${
                  isOriginalVisible ? "revised--actived" : ""
                }`}
                onClick={() => setIsOriginalVisible((prev) => !prev)}
              >
                Hey AI, what do you see in the picture?
              </button>
              <div
                className={`prompt ${isOriginalVisible && "prompt--actived"}`}
              >
                <p>AI :</p>
                <p>{revisedPrompt}</p>
              </div>
            </>
          ) : (
            /* display the button for comparing the length of the original photo with the edited photo */
            <button
              className={`visible ${
                isOriginalVisible ? "visible--actived" : ""
              }`}
              onClick={() => setIsOriginalVisible((prev) => !prev)}
            >
              <FaRegEye />
            </button>
          )}
          {isImgtoImgContent && (
            /* original image to compare the edited image */
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
          {/* fetched image */}
          <img
            className={`show-prompt ${
              !isImgtoImgContent && isOriginalVisible && "show-prompt--actived"
            }`}
            src={imageURL}
            alt={"User uploaded image"}
          />
        </>
      ) : null}
    </>
  );
};

export default Screen;
