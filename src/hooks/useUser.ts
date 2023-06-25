import { userIdState, userNameState } from "@/recoil/atoms";
import { userSelector } from "@/recoil/selectors";
import { useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { v4 as uuidV4 } from "uuid";

export const useUser = () => {
  const user = useRecoilValue(userSelector);
  const [userId, setUserId] = useRecoilState(userIdState);
  const setUserName = useSetRecoilState(userNameState);

  const setName = useCallback(
    (name: string) => {
      if (userId === "") {
        setUserId(uuidV4());
      }
      setUserName(name);
    },
    [setUserId, setUserName, userId]
  );

  const resetUser = useCallback(() => {
    setUserName("");
  }, [setUserName]);

  return { user, setName, resetUser };
};
