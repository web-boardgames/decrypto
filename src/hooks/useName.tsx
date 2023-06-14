import { useEffect, useState } from "react";

export const useName = () => {
  const [name, setName] = useState<boolean | string>(false);

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name && name.length > 0) {
      setName(name);
    } else {
      setName(false);
    }
  }, []);

  return name;
};
