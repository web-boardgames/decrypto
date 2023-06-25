import { selector } from "recoil";
import { userIdState, userNicknameState } from "../atoms";

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => {
    const id = get(userIdState);
    const nickname = get(userNicknameState);
    return {
      id,
      nickname,
    };
  },
});
