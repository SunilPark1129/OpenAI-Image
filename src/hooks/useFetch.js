import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch() {
  const [prompt, setPrompt] = useState(["", true]);
  const [resImage, setResImage] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const generateImage = async () => {
    // dev port - http://localhost:5000
    axios
      .post(
        `${import.meta.env.VITE_BASE_WEBSITE_KEY}/openai/${
          prompt[1] ? "generateimage" : "edit"
        }`,
        { prompt: prompt[0] }
      )
      .then((data) => {
        setResImage(data.data.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setResImage(null);
        if (!err.response) return setError(String(err));
        if (err.response.status === 400) {
          setError("Bad Request, try to use other input value");
        } else if (err.response.status === 404) {
          setError("Issue on our server, something wrong with the API");
        } else if (err.response.status === 429) {
          setError(
            "The engine is currently overloaded. Please try again later"
          );
        } else if (err.response.status <= 399) {
          setError("Can't response, something wrong with the client side");
        } else {
          setError(String(err));
        }
      });
  };

  // Whenever prompt (input value), a function is called to make a request to the server
  useEffect(() => {
    if (prompt[0] !== "") {
      generateImage();
    }
    return () => {
      setLoading(true);
      setResImage(null);
      setError(null);
    };
  }, [prompt]);

  // get props from other component
  function requestFetch(inputValue, bool) {
    setLoading(true);
    setPrompt([inputValue, bool]);
  }

  return [requestFetch, isLoading, resImage, error, prompt];
}
