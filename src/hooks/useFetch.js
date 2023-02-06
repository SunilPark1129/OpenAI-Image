import { useState, useEffect } from "react";

export function useFetch() {
  const [prompt, setPrompt] = useState("");
  const [resImage, setResImage] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const generateImage = async () => {
    // set method, headers, body to requset the fetch image
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(import.meta.env.VITE_OPEN_API_KEY),
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: "512x512",
      }),
    };
    // request
    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        requestOptions
      );
      // handling status errors
      if (!response.ok) {
        if (response.status === 400) {
          throw Error("Bad Request, try to use other input value");
        }
        if (response.status === 404) {
          throw Error("Issue on our server, something wrong with the API.");
        }
        if (response.status === 429) {
          throw Error(
            "The engine is currently overloaded. Please try again later."
          );
        }
        if (response.status <= 399) {
          throw Error("Can't response, something wrong with the client side");
        }
        throw Error(
          "Can't response, we found an error while processing your request"
        );
      }
      const data = await response.json();
      setResImage(data.data[0].url);
      setLoading(false);
      setError(null);
    } catch (err) {
      setLoading(false);
      setResImage(null);
      setError(String(err));
    }
  };

  // Whenever prompt (input value), a function is called to make a request to the server
  useEffect(() => {
    if (prompt !== "") {
      generateImage();
    }
    return () => {
      setLoading(true);
    };
  }, [prompt]);

  // get props from other component
  function requestFetch(inputValue) {
    setPrompt(inputValue);
  }

  return [requestFetch, isLoading, resImage, error, prompt];
}
