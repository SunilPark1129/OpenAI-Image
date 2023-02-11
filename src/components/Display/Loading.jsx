import React from "react";

const Loading = () => {
  return (
    <>
      <div className="loading-ani">
        <span></span>
        <span></span>
        <span></span>
        <div className="loading-ani__font">
          <p>I'm resizing the image .</p>
          <p>I'm drawing the image .</p>
          <p>Give me about 25 seconds .</p>
          <p>Hmm . . . Looks good . . .</p>
          <p>Almost done . . . Wait .</p>
        </div>
      </div>
    </>
  );
};

export default Loading;
