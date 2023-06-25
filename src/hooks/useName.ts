import { useEffect, useState } from "react";

export const useNickname = () => {
  const [name, setNickname] = useState<boolean | string>(false);

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name && name.length > 0) {
      setNickname(name);
    } else {
      setNickname(false);
    }
  }, []);

  return name;
};
