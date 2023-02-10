import React, { useState, useEffect } from "react";
import { FaArrowRight, FaRegEye } from "react-icons/fa";

const Screen = ({ error, getImage, prompt, isImageContent, originalImage }) => {
  const [isOriginalVisible, setIsOriginalVisible] = useState(false);

  function visibleClickHandler() {
    setIsOriginalVisible((prev) => !prev);
  }

  useEffect(() => {
    if (getImage) setIsOriginalVisible(false);
  }, [getImage]);

  return error !== null ? (
    <div className="error">{error}</div>
  ) : (
    <>
      {getImage ? (
        <>
          {!isImageContent ? (
            <div className="prompt">{prompt}</div>
          ) : (
            <button
              className={`visible ${
                isOriginalVisible ? "visible--actived" : null
              }`}
              onClick={visibleClickHandler}
            >
              <FaRegEye />
            </button>
          )}
          {isOriginalVisible ? (
            <img
              className="original-image"
              src={originalImage}
              alt="User uploaded image"
            />
          ) : null}
          <img src={getImage} alt={"User uploaded image"} />
        </>
      ) : null}
    </>
  );
};

export default Screen;
