import React, { Fragment, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { FaImage } from "react-icons/fa";
import Guide from "../Display/Guide";
import Screen from "../Display/Screen";
import Loading from "../loading/Loading";
import exifr from "exifr";
import { rotateCalculator } from "../../utilities/rotateCalculator";

function ImgToImg({ setIsImgToImgContent }) {
  const [unmounted, setUnmounted] = useState(true);
  const [originalImage, setOriginalImage] = useState(null);
  const refReset = useRef(null);
  const [orientationRotate, setOrientationRotate] = useState(0);
  const [isWidthLonger, setIsWidthLonger] = useState(true);
  const [requestFetch, isLoading, resImage, error, prompt] = useFetch();

  function uploadChangeHandler(e) {
    const { files } = e.target;

    // remove last image cache
    if (originalImage) {
      URL.revokeObjectURL(originalImage);
    }

    // cancel the function if it does not match the attached file
    if (files.length === 0) return;
    if (files[0].type !== "image/jpeg" && files[0].type !== "image/png") return;

    setUnmounted(false);

    const read = new FileReader();
    read.onloadend = async function () {
      // check if the image's width or height is longer
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

      // find image's orientation value
      let oriVal = await exifr.orientation(read.result);
      const rotatedVal = rotateCalculator(oriVal);
      setOrientationRotate(rotatedVal);
      requestFetch(read.result, false);
    };
    read.readAsDataURL(files[0]);
    setOriginalImage(URL.createObjectURL(files[0]));
    refReset.current.value = "";
  }

  // change content (img to img || text to img)
  function contentClickHandler() {
    // remove saved img cache
    if (originalImage) {
      URL.revokeObjectURL(originalImage);
    }
    setIsImgToImgContent((prev) => !prev);
    setOriginalImage(null);
  }

  return (
    <Fragment>
      <div className="display-container">
        {unmounted ? (
          <Guide isImgtoImgContent={true} />
        ) : isLoading ? (
          <Loading />
        ) : (
          <Screen
            error={error}
            imageURL={resImage?.imageURL}
            isImgtoImgContent={true}
            originalImage={originalImage}
            orientationRotate={orientationRotate}
            isWidthLonger={isWidthLonger}
          />
        )}
      </div>
      <div className="iti-container">
        <label
          className={`iti-container__label ${
            isLoading && !unmounted && "iti-container__label--disabled"
          }
            `}
        >
          <div className="iti-container__label__icon">
            <FaImage />
          </div>
          <p>Upload Image</p>
          <input
            type="file"
            ref={refReset}
            onChange={uploadChangeHandler}
            disabled={isLoading && !unmounted}
            accept="image/*"
          />
        </label>
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

export default ImgToImg;
