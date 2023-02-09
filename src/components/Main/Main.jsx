import React, { useState } from "react";
import "./main.css";
import { useFetch } from "../../hooks/useFetch";
import Display from "../Display/Display";
import InputBox from "../InputBox/InputBox";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [unmounted, setUnmounted] = useState(true);
  const [isText, setIsText] = useState(false);

  // request openAI image
  // call function and get return values
  const [requestFetch, isLoading, resImage, error, prompt] = useFetch();

  const onClickHandler = () => {
    if (inputValue.trim() !== "") {
      // send input value as a props and request fetch
      requestFetch(inputValue.trim(), true);
      setUnmounted(false);
      setInputValue("");
      setIsText(true);
    }
  };

  const onKeyHandler = (e) => {
    if (isLoading && !unmounted) return;
    if (e.key === "Enter") onClickHandler();
  };

  function onChangeHandler(e) {
    const { files } = e.target;
    setUnmounted(false);
    const read = new FileReader();
    read.onloadend = function () {
      requestFetch(read.result, false);
    };

    read.readAsDataURL(files[0]);
    setIsText(false);
  }

  return (
    <main>
      <Display
        unmounted={unmounted}
        isLoading={isLoading}
        error={error}
        resImage={resImage}
        prompt={prompt}
        isText={isText}
      />
      <InputBox
        unmounted={unmounted}
        inputValue={inputValue}
        setInputValue={(str) => setInputValue(str)}
        onClickHandler={onClickHandler}
        onKeyHandler={onKeyHandler}
        isLoading={isLoading}
      />
      <input type="file" onChange={onChangeHandler} />
      <h1>OpenAI - Designed by Sunil Park</h1>
    </main>
  );
};

export default Main;
