import React from "react";

const Screen = ({ error, resImage, prompt }) => {
  return error !== null ? (
    <div className="error">{error}</div>
  ) : (
    <img src={resImage} alt={prompt} />
  );
};

export default Screen;
