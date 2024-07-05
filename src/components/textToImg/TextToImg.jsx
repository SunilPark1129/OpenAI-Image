import React, { Fragment, useState } from "react";
import Loading from "../loading/Loading";
import Guide from "../Display/Guide";
import Screen from "../Display/Screen";
import { useFetch } from "../../hooks/useFetch";

function TextToImg({ setIsImgToImgContent }) {
  const [unmounted, setUnmounted] = useState(true);
  const [requestFetch, isLoading, resImage, error, prompt] = useFetch();
  const [inputValue, setInputValue] = useState("");

  const submitPromptHandler = () => {
    if (inputValue.trim() !== "") {
      requestFetch(inputValue.trim(), true);
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
      <div className="display-image">
        <div className="display-image__screen">
          {unmounted ? (
            <Guide isImgtoImgContent={false} />
          ) : isLoading ? (
            <Loading />
          ) : (
            <Screen
              error={error}
              resImage={resImage}
              prompt={prompt}
              isImgtoImgContent={false}
              orientationRotate={0}
            />
          )}
        </div>
      </div>

      <div className="text-box">
        <div className="text-box__input">
          <input
            className="input-text"
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
          Words to an image
        </button>
      </div>
    </Fragment>
  );
}

export default TextToImg;
