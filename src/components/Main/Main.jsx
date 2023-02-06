import React, { useState } from "react";
import "./main.css";
import { useFetch } from "../../hooks/useFetch";
import Display from "../Display/Display";
import InputBox from "../InputBox/InputBox";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [unmounted, setUnmounted] = useState(true);

  // request openAI image
  // call function and get return values
  const [requestFetch, isLoading, resImage, error, prompt] = useFetch();

  const onClickHandler = () => {
    if (inputValue.trim() !== "") {
      // send input value as a props and request fetch
      requestFetch(inputValue.trim());
      setUnmounted(false);
      setInputValue("");
    }
  };

  const onKeyHandler = (e) => {
    if (isLoading && !unmounted) return;
    if (e.key === "Enter") onClickHandler();
  };

  return (
    <main>
      <Display
        unmounted={unmounted}
        isLoading={isLoading}
        error={error}
        resImage={resImage}
        prompt={prompt}
      />
      <InputBox
        unmounted={unmounted}
        inputValue={inputValue}
        setInputValue={(str) => setInputValue(str)}
        onClickHandler={onClickHandler}
        onKeyHandler={onKeyHandler}
        isLoading={isLoading}
      />
      <h1>OpenAI - Designed by Sunil Park</h1>
    </main>
  );
};

export default Main;
