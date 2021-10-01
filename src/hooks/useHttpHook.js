import { useCallback, useState } from "react";

const useHttpHook = (
  url,
  method = "GET",
  headers = {},
  responseType = "json",
  onComplete = null
) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const execute = useCallback(
    async (body) => {
      setLoading(true);
      setError(false);

      let response = null;

      try {
        response = await fetch(url, {
          method: method,
          headers: headers,
          body: body,
          credentials: "include",
          mode: "cors",
          cache: "no-cache",
        });
      } catch (error) {
        setError(true);
        setLoading(false);
        return;
      }

      if (!response.ok) {
        setError(true);
        setLoading(false);
        // throw new TypeError("request was not successfull");
      }

      let responseBody = null;

      if (responseType === "json") {
        responseBody = await response.json();
      } else if (responseType === "blob") {
        responseBody = await response.blob();
      }

      if (onComplete) onComplete(responseBody);
      setError(false);
      setLoading(false);
    },
    [url, method, headers, responseType, onComplete]
  );

  return [isLoading, hasError, execute];
};

export default useHttpHook;
