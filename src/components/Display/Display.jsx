// This page displays the error message and response returned values
import React from "react";
import Loading from "./Loading";
import Screen from "./Screen";
import { FaArrowRight, FaUser } from "react-icons/fa";

const Display = ({
  unmounted,
  isLoading,
  error,
  getImage,
  prompt,
  isImageContent,
  originalImage,
}) => {
  return (
    <section className="display-image">
      <article className="display-image__screen">
        {unmounted ? (
          <div className="error">
            {isImageContent ? (
              <>
                <h2>Upload Image</h2>
                <div className="rectangle">
                  <div className="rectangle__box rectangle__box--small">
                    <span>
                      <FaUser />
                    </span>
                  </div>
                  <FaArrowRight />
                  <div className="rectangle__box rectangle__box--large">
                    <span>
                      <FaUser />
                    </span>
                  </div>
                </div>
                <p>
                  Converts a rectangular photo into a square photo without
                  cropping the original. The parts lacking in the original are
                  added by drawing.
                </p>
              </>
            ) : (
              <>
                <h2>Text Image</h2>
                <div className="rectangle">
                  <div className="rectangle__box rectangle__box--large">
                    <p>Text</p>
                  </div>
                  <FaArrowRight />
                  <div className="rectangle__box rectangle__box--large">
                    <span>
                      <FaUser />
                    </span>
                  </div>
                </div>
                <p>
                  When text is entered, the text is converted into an image. The
                  picture the user will receive is a square picture.
                </p>
              </>
            )}
          </div>
        ) : !isLoading ? (
          <Screen
            error={error}
            getImage={getImage}
            prompt={prompt}
            isImageContent={isImageContent}
            originalImage={originalImage}
          />
        ) : (
          <Loading isImageContent={isImageContent} />
        )}
      </article>
    </section>
  );
};

export default Display;
