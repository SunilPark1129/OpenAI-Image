// This page displays the error message and response returned values
import React from "react";
import Loading from "./Loading";
import Screen from "./Screen";
import Guide from "./Guide";

const Display = ({
  unmounted,
  isLoading,
  error,
  resImage,
  prompt,
  isImageContent,
  originalImage,
  orientationRotate,
  isWidthLonger,
}) => {
  return (
    <section className="display-image">
      <article className="display-image__screen">
        {unmounted ? (
          <Guide isImageContent={isImageContent} />
        ) : !isLoading ? (
          <Screen
            error={error}
            resImage={resImage}
            prompt={prompt}
            isImageContent={isImageContent}
            originalImage={originalImage}
            orientationRotate={orientationRotate}
            isWidthLonger={isWidthLonger}
          />
        ) : (
          <Loading isImageContent={isImageContent} />
        )}
      </article>
    </section>
  );
};

export default Display;
