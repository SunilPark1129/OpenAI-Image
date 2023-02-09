import { useState, useEffect } from "react";

export function useFetch() {
  const [prompt, setPrompt] = useState(["", true]);
  const [resImage, setResImage] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [isText, setIsText] = useState(true);

  const generateImage = async () => {
    // set method, headers, body to requset the fetch image
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt[0],
      }),
    };
    // request
    try {
      const response = await fetch(
        `http://localhost:5000/openai/${prompt[1] ? "generateimage" : "edit"}`,
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
      setResImage(data.data);
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
    if (prompt[0] !== "") {
      generateImage();
    }
    return () => {
      setLoading(true);
    };
  }, [prompt]);

  // get props from other component
  function requestFetch(inputValue, bool) {
    // console.log(bool);
    setPrompt([inputValue, bool]);
  }

  return [requestFetch, isLoading, resImage, error, prompt];
}
