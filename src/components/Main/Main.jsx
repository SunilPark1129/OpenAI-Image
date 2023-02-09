import React, { useState, useRef } from "react";
import "./main.css";
import { useFetch } from "../../hooks/useFetch";
import Display from "../Display/Display";
import InputBox from "../InputBox/InputBox";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [unmounted, setUnmounted] = useState(true);
  const [isText, setIsText] = useState(false);
  const refReset = useRef(null);

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
    if (files.length === 0) return;
    if (files[0].type !== "image/jpeg" && files[0].type !== "image/png") return;
    setUnmounted(false);

    const read = new FileReader();
    read.onloadend = function () {
      requestFetch(read.result, false);
    };

    read.readAsDataURL(files[0]);
    setIsText(false);
    refReset.current.value = "";
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
        onChangeHandler={onChangeHandler}
        refReset={refReset}
      />
      <h1>OpenAI - Designed by Sunil Park</h1>
    </main>
  );
};

export default Main;
