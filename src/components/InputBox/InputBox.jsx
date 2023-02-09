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
}) => {
  return (
    <section className="input-box">
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
        Enter Text
      </button>

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
          accept="image/*;capture=camera"
        />
      </label>
    </section>
  );
};

export default InputBox;
