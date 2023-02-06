// This page displays the error message and response returned values
import React from "react";
import Loading from "./Loading";
import Screen from "./Screen";
const Display = ({ unmounted, isLoading, error, resImage, prompt }) => {
  return (
    <section className="display-image">
      <article className="display-image__screen">
        {unmounted ? (
          <div className="error">I'll draw your text</div>
        ) : !isLoading ? (
          <Screen error={error} resImage={resImage} prompt={prompt} />
        ) : (
          <Loading />
        )}
      </article>
    </section>
  );
};

export default Display;
