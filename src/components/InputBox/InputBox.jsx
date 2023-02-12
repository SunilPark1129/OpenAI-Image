// get input value and send back to the Main to request the fetch
import React from "react";
import { FaImage } from "react-icons/fa";

const InputBox = ({
  unmounted,
  inputValue,
  setInputValue,
  onClickHandler,
  onKeyHandler,
  isLoading,
  refReset,
  onChangeHandler,
  isImageContent,
  contentClickHandler,
}) => {
  return (
    <section className="input-box">
      {isImageContent ? (
        <label
          className={
            isLoading && !unmounted
              ? "input-file input-file--disabled"
              : "input-file"
          }
        >
          <div className="input-file__icon">
            <FaImage />
          </div>
          <p>Upload Image</p>
          <input
            type="file"
            ref={refReset}
            onChange={onChangeHandler}
            disabled={isLoading && !unmounted}
            accept="image/*"
          />
        </label>
      ) : (
        <>
          <div className="text-box">
            <input
              className="input-text"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={onKeyHandler}
              placeholder="Type something..."
            />
            <button
              disabled={(isLoading && !unmounted) || inputValue.trim() === ""}
              onClick={onClickHandler}
            >
              Enter
            </button>
          </div>
        </>
      )}
      <button disabled={isLoading && !unmounted} onClick={contentClickHandler}>
        {isImageContent ? "Words to an image" : "Square up an image"}
      </button>
    </section>
  );
};

export default InputBox;
