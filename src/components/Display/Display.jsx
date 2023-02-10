// This page displays the error message and response returned values
import React from "react";
import Loading from "./Loading";
import Screen from "./Screen";
import Guide from "./Guide";

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
          <Guide isImageContent={isImageContent} />
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
