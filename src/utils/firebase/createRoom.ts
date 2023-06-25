import { Room } from "@/types/room.interface";

export const createRoom = ({
  roomName,
  maxPlayer,
  uid,
}: {
  roomName: string;
  maxPlayer: number;
  uid: string;
}): Room => {
  return {
    roomName,
    teamA: {
      words: ["test", "test", "test", "test"],
      submit_code: [1, 2, 3],
      hint: [],
      green_token: 0,
      red_token: 0,
    },
    teamB: {
      words: ["test", "test", "test", "test"],
      submit_code: [1, 2, 3],
      hint: [],
      green_token: 0,
      red_token: 0,
    },
    max_player: maxPlayer,
    captainUID: uid,
    isPlaying: false,
    answer_code: [],
    round: 0,
  };
};
