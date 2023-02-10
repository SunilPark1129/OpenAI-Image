import React from "react";
import { FaArrowRight, FaUser } from "react-icons/fa";

const Guide = ({ isImageContent }) => {
  return (
    <div className="guide">
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
            Converts a rectangular photo into a square photo without cropping
            the original. The parts lacking in the original are added by
            drawing.
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
  );
};

export default Guide;
