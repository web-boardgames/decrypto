import { selector } from "recoil";
import { userIdState, userNameState } from "../atoms";
import { roomState } from "../atoms/roomState";

export const userSelector = selector({
  key: "userSelector",
  get: ({ get }) => {
    const id = get(userIdState);
    const name = get(userNameState);
    const room = get(roomState);

    const isCaptain = room?.captainID === id;
    const team = room?.teamA.player.find((player) => player.id === id)
      ? "A"
      : "B";

    return {
      id,
      name,
      isCaptain,
      team,
    };
  },
});
