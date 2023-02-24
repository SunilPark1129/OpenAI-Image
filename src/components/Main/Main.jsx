import React, { useState, useRef } from "react";
import "./main.css";
import { useFetch } from "../../hooks/useFetch";
import Display from "../Display/Display";
import InputBox from "../InputBox/InputBox";

// since exif-js is not supporting React, so I have used exifr
// import exif from "exif-js";
import exifr from "exifr";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [unmounted, setUnmounted] = useState(true);
  const [isImageContent, setIsImageContent] = useState(true);
  const [originalImage, setOriginalImage] = useState(null);
  const refReset = useRef(null);
  const [orientationRotate, setOrientationRotate] = useState(0);
  const [isWidthLonger, setIsWidthLonger] = useState(true);

  // request image
  const [requestFetch, isLoading, resImage, error, prompt] = useFetch();

  // input submit handler
  const onClickHandler = () => {
    if (inputValue.trim() !== "") {
      requestFetch(inputValue.trim(), true);
      setUnmounted(false);
      setInputValue("");
    }
  };

  // input enter submit handler
  const onKeyHandler = (e) => {
    if (isLoading && !unmounted) return;
    if (e.key === "Enter") onClickHandler();
  };

  // file submit handler
  function onChangeHandler(e) {
    const { files } = e.target;

    // return none when this website doesn't support user's file
    if (files.length === 0) return;
    if (files[0].type !== "image/jpeg" && files[0].type !== "image/png") return;
    setUnmounted(false);

    // read the image as base64
    const read = new FileReader();
    read.onloadend = async function () {
      // check if image's width or height is longer
      const image = new Image();
      image.src = read.result;
      image.onload = () => {
        const { height, width } = image;
        if (width > height) {
          setIsWidthLonger(true);
        } else {
          setIsWidthLonger(false);
        }
      };

      // check orientation and return the value to rotate the image later
      let num = await exifr.orientation(read.result);
      switch (num) {
        case 1:
          setOrientationRotate(0);
          break;
        case 2:
          setOrientationRotate(0);
          break;
        case 3:
          setOrientationRotate(180);
          break;
        case 4:
          setOrientationRotate(180);
          break;
        case 5:
          setOrientationRotate(90);
          break;
        case 6:
          setOrientationRotate(90);
          break;
        case 7:
          setOrientationRotate(270);
          break;
        case 8:
          setOrientationRotate(270);
          break;
        default:
          setOrientationRotate(0);
      }
      requestFetch(read.result, false);
    };
    read.readAsDataURL(files[0]);
    setOriginalImage(URL.createObjectURL(files[0]));
    refReset.current.value = "";
  }

  // to check if current page is for the text to image page or editing the image page
  function contentClickHandler() {
    setIsImageContent((prev) => !prev);
    if (refReset.current) refReset.current.value = "";
    setUnmounted(true);
    setInputValue("");
    setOriginalImage(null);
  }

  return (
    <main>
      <Display
        unmounted={unmounted}
        isLoading={isLoading}
        error={error}
        resImage={resImage}
        prompt={prompt}
        isImageContent={isImageContent}
        originalImage={originalImage}
        orientationRotate={orientationRotate}
        isWidthLonger={isWidthLonger}
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
