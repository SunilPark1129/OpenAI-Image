// get input value and send back to the Main to request the fetch
import React from "react";
const InputBox = ({
  unmounted,
  inputValue,
  setInputValue,
  onClickHandler,
  onKeyHandler,
  isLoading,
}) => {
  return (
    <section className="input-box">
      <input
        type="text"
        maxLength={50}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={onKeyHandler}
        placeholder="Type something..."
      />
      <button disabled={isLoading && !unmounted} onClick={onClickHandler}>
        Generate an Image
      </button>
    </section>
  );
};

export default InputBox;
