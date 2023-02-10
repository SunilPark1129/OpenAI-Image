import React from "react";

const Loading = ({ isImageContent }) => {
  return (
    <>
      <div className="loading-ani">
        <span></span>
        <span></span>
        <span></span>
        {isImageContent ? (
          <p>
            I'm resizing and drawing the image you attached.
            <br />
            This may take about 25 seconds.
          </p>
        ) : (
          <p>
            I'm thinking about how to draw the text you wrote.
            <br />
            This may take about 15 seconds.
          </p>
        )}
      </div>
    </>
  );
};

export default Loading;
