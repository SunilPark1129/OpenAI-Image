import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch() {
  const [prompt, setPrompt] = useState(["", true]);
  const [resImage, setResImage] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const generateImage = async () => {
    axios
      .post(
        `${import.meta.process.env.BASE_WEBSITE_KEY}/openai/${
          prompt[1] ? "generateimage" : "edit"
        }`,
        { prompt: prompt[0] }
      )
      .then((data) => {
        if (!data.statusText === "OK") {
          if (data.request.status === 400) {
            throw Error("Bad Request, try to use other input value");
          }
          if (data.request.status === 404) {
            throw Error("Issue on our server, something wrong with the API.");
          }
          if (data.request.status === 429) {
            throw Error(
              "The engine is currently overloaded. Please try again later."
            );
          }
          if (data.request.status <= 399) {
            throw Error("Can't response, something wrong with the client side");
          }
          throw Error(
            "Can't response, we found an error while processing your request"
          );
        }
        setResImage(data.data.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setResImage(null);
        setError(String(err));
      });
  };

  // Whenever prompt (input value), a function is called to make a request to the server
  useEffect(() => {
    if (prompt[0] !== "") {
      generateImage();
    }
    return () => {
      setLoading(true);
    };
  }, [prompt]);

  // get props from other component
  function requestFetch(inputValue, bool) {
    setPrompt([inputValue, bool]);
  }

  return [requestFetch, isLoading, resImage, error, prompt];
}
