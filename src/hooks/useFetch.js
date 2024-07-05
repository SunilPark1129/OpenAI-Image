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
        `${
          import.meta.env.VITE_BASE_WEBSITE_KEY ?? "http://localhost:5000"
        }/openai/${prompt[1] ? "generateimage" : "edit"}`,
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
        if (!err.response) {
          return setError(String(err));
        }
        if (err.response.status === 400) {
          setError(err.response.data.error);
        } else {
          console.log("here?");
          setError(String(err));
        }
      });
  };

  /*
  A new request is sent to the server every time the user's input changes
  */
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

  // receive prompt value from users
  function requestFetch(inputValue, bool) {
    setLoading(true);
    setPrompt([inputValue, bool]);
  }

  return [requestFetch, isLoading, resImage, error, prompt];
}
