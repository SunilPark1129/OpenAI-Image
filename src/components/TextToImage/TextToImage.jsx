import React, { Fragment, useState } from "react";
import Loading from "../loading/Loading";
import Guide from "../Display/Guide";
import Screen from "../Display/Screen";
import { useFetch } from "../../hooks/useFetch";

function TextToImage({ setIsImgToImgContent }) {
  const [unmounted, setUnmounted] = useState(true);
  const [requestFetch, isLoading, resImage, error] = useFetch();
  const [inputValue, setInputValue] = useState("");

  const submitPromptHandler = () => {
    if (inputValue.trim() !== "") {
      requestFetch({ prompt: inputValue.trim(), isText: true, rotatedVal: 0 });
      setUnmounted(false);
      setInputValue("");
    }
  };

  const onKeyHandler = (e) => {
    if (isLoading && !unmounted) return;
    if (e.key === "Enter") submitPromptHandler();
  };

  /*
  change content (img to img <-> text to img)
  */
  function contentClickHandler() {
    setIsImgToImgContent((prev) => !prev);
  }

  return (
    <Fragment>
      <div className="display-container">
        {unmounted ? (
          <Guide isImgtoImgContent={false} />
        ) : isLoading ? (
          <Loading />
        ) : (
          <Screen
            error={error}
            imageURL={resImage?.imageURL}
            revisedPrompt={resImage?.revisedPrompt}
            isImgtoImgContent={false}
            orientationRotate={0}
          />
        )}
      </div>

      <div className="tti-container">
        <div className="tti-container__top">
          <input
            className="tti-container__top__input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={onKeyHandler}
            placeholder="Type prompt..."
          />
          <button
            disabled={(isLoading && !unmounted) || inputValue.trim() === ""}
            onClick={submitPromptHandler}
          >
            Enter
          </button>
        </div>
        <button
          disabled={isLoading && !unmounted}
          onClick={contentClickHandler}
        >
          Image to an image
        </button>
      </div>
    </Fragment>
  );
}

export default TextToImage;
