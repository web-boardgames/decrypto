import { Room } from "@/types/room.interface";

// TODO: replace test to real data
export const createRoom = ({
  roomName,
  maxPlayer,
  uid,
  nickname,
}: {
  roomName: string;
  maxPlayer: number;
  uid: string;
  nickname: string;
}): Room => {
  return {
    roomName,
    teamA: {
      player: [{ uid, nickname }],
      word: ["test", "test", "test", "test"],
      submit_code: [1, 2, 3],
      hint: [],
      green_token: 0,
      red_token: 0,
    },
    teamB: {
      player: [],
      word: ["test", "test", "test", "test"],
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
