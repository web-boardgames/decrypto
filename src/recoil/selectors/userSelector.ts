import { selector } from "recoil";
import { roomState } from "../atoms/roomState";
import { userIdState, userNicknameState } from "../atoms";

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => {
    const id = get(userIdState);
    const nickname = get(userNicknameState);
    const room = get(roomState);

    const isCaptain = room?.captainID === id;
    const team = room?.teamA.player.find((player) => player.id === id)
      ? "A"
      : "B";

    return {
      id,
      nickname,
      isCaptain,
      team,
    };
  },
});
