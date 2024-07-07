import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch() {
  const [args, setArgs] = useState({
    prompt: "",
    isText: true,
    rotatedVal: 0,
  });
  const [resImage, setResImage] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const generateImage = async () => {
    axios
      .post(
        `${
          import.meta.env.VITE_BASE_WEBSITE_KEY ?? "http://localhost:5000"
        }/openai/${args.isText ? "generateimage" : "edit"}`,
        { prompt: args.prompt, rotatedVal: args.rotatedVal }
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
          setError(String(err));
        }
      });
  };

  /*
  A new request is sent to the server every time the user's input changes
  */
  useEffect(() => {
    if (args.prompt !== "") {
      generateImage();
    }
    return () => {
      setLoading(true);
      setResImage(null);
      setError(null);
    };
  }, [args]);

  // receive prompt value from users
  function requestFetch({ prompt, isText, rotatedVal }) {
    setLoading(true);
    setArgs({ prompt, isText, rotatedVal });
  }

  return [requestFetch, isLoading, resImage, error, prompt];
}
