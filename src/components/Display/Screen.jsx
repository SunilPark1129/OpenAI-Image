import React from "react";

const Screen = ({ error, resImage, prompt, isText }) => {
  return error !== null ? (
    <div className="error">{error}</div>
  ) : (
    <>
      {isText ? <div className="prompt">{prompt}</div> : null}
      <img src={resImage} alt={prompt} />
    </>
  );
};

export default Screen;
