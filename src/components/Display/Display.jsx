// This page displays the error message and response returned values
import React from "react";
import Loading from "./Loading";
import Screen from "./Screen";
const Display = ({ unmounted, isLoading, error, resImage, prompt, isText }) => {
  return (
    <section className="display-image">
      <article className="display-image__screen">
        {unmounted ? (
          <div className="error">
            <p>I'll draw your text</p>
            <p>or</p>
            <p>If you upload a image, I will draw something similar to it</p>
          </div>
        ) : !isLoading ? (
          <Screen
            error={error}
            resImage={resImage}
            prompt={prompt}
            isText={isText}
          />
        ) : (
          <Loading />
        )}
      </article>
    </section>
  );
};

export default Display;
