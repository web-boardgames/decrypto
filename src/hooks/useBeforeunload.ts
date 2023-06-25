import { useCallback, useEffect } from "react";

export const useBeforeUnLoad = (
  callback: (event: BeforeUnloadEvent) => void
) => {
  const enableBeforeunload = useCallback(
    (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
      callback(event);
    },
    [callback]
  );

  useEffect(() => {
    return () => window.removeEventListener("beforeunload", enableBeforeunload);
  }, [enableBeforeunload]);
};
