import React, { useState } from "react";
import "../styles/main.css";
import "../styles/display.css";
import "../styles/button.css";
import "../styles/loading.css";

import ImgToImg from "../ImgToImg/ImgToImg";
import TextToImg from "../TextToImg/TextToImg";

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
