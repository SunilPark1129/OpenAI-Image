import React, { useState } from "react";
import "./main.css";

import ImgToImg from "../imgToImg/ImgToImg";
import TextToImg from "../textToImg/TextToImg";

const Main = () => {
  /*
  true  = [img to img]  page
  false = [text to img] page
  */
  const [isImgToImgContent, setIsImgToImgContent] = useState(true);

  return (
    <main>
      {isImgToImgContent ? (
        <ImgToImg setIsImgToImgContent={(bool) => setIsImgToImgContent(bool)} />
      ) : (
        <TextToImg
          setIsImgToImgContent={(bool) => setIsImgToImgContent(bool)}
        />
      )}

      <h1>Developed by Sunil Park</h1>
    </main>
  );
};

export default Main;
