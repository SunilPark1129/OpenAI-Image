import React, { useState } from "react";
import "../styles/main.css";
import "../styles/display.css";
import "../styles/button.css";
import "../styles/loading.css";
import ImageToImage from "../ImageToImage/ImageToImage";
import TextToImage from "../TextToImage/TextToImage";

const Main = () => {
  /*
  true  = [img to img]  page
  false = [text to img] page
  */
  const [isImgToImgContent, setIsImgToImgContent] = useState(true);

  return (
    <main>
      {isImgToImgContent ? (
        <ImageToImage
          setIsImgToImgContent={(bool) => setIsImgToImgContent(bool)}
        />
      ) : (
        <TextToImage
          setIsImgToImgContent={(bool) => setIsImgToImgContent(bool)}
        />
      )}

      <h1>Developed by Sunil Park</h1>
    </main>
  );
};

export default Main;
