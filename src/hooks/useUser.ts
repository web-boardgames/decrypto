import { userIdState, userNicknameState } from "@/recoil/atoms";
import { userSelector } from "@/recoil/selectors";
import { useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { v4 as uuidV4 } from "uuid";

export const useUser = () => {
  const user = useRecoilValue(userSelector);
  const [userId, setUserId] = useRecoilState(userIdState);
  const setUserNickname = useSetRecoilState(userNicknameState);

  const setNickname = useCallback(
    (name: string) => {
      if (userId === "") {
        setUserId(uuidV4());
      }
      setUserNickname(name);
    },
    [setUserId, setUserNickname, userId]
  );

  const resetUser = useCallback(() => {
    setUserNickname("");
  }, [setUserNickname]);

  return { user, setNickname, resetUser };
};
