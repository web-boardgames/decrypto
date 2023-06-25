import { selector } from "recoil";
import { userIdState, userNameState } from "../atoms";

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => {
    const id = get(userIdState);
    const name = get(userNameState);
    return {
      id,
      name,
    };
  },
});
