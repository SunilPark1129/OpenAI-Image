// This page displays the error message and response returned values
import React from "react";
import Loading from "./Loading";
import Screen from "./Screen";
const Display = ({ unmounted, isLoading, error, resImage, prompt, isText }) => {
  return (
    <section className="display-image">
      <article className="display-image__screen">
        {unmounted ? (
          <div className="error">I'll draw your text</div>
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
