import React, { useState, useRef, useEffect } from "react";
import "./main.css";
import { useFetch } from "../../hooks/useFetch";
import Display from "../Display/Display";
import InputBox from "../InputBox/InputBox";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [unmounted, setUnmounted] = useState(true);
  const [getImage, setImage] = useState(null);
  const [isImageContent, setIsImageContent] = useState(true);
  const [originalImage, setOriginalImage] = useState(null);
  const refReset = useRef(null);

  // request openAI image
  // call function and get return values
  const [requestFetch, isLoading, resImage, error, prompt] = useFetch();

  const onClickHandler = () => {
    if (inputValue.trim() !== "") {
      requestFetch(inputValue.trim(), true);
      setUnmounted(false);
      setInputValue("");
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
    setOriginalImage(URL.createObjectURL(files[0]));
    refReset.current.value = "";
  }

  function contentClickHandler() {
    setIsImageContent((prev) => !prev);
    if (refReset.current) refReset.current.value = "";
    setUnmounted(true);
    setInputValue("");
    setImage(null);
    setOriginalImage(null);
  }

  useEffect(() => {
    if (resImage) {
      setImage(resImage);
    }
  }, [resImage]);

  return (
    <main>
      <Display
        unmounted={unmounted}
        isLoading={isLoading}
        error={error}
        getImage={getImage}
        prompt={prompt}
        isImageContent={isImageContent}
        originalImage={originalImage}
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
        isImageContent={isImageContent}
        contentClickHandler={contentClickHandler}
      />
      <h1>Developed by Sunil Park</h1>
    </main>
  );
};

export default Main;
