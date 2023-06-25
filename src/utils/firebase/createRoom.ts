import { fireStore } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getRandomNumbers } from "../getRandomNumbers";

export const createRoom = async ({
  roomName,
  maxPlayer,
  id,
  nickname,
}: {
  roomName: string;
  maxPlayer: number;
  id: string;
  nickname: string;
}) => {
  const words = (await getDoc(doc(fireStore, "korean_words", "nouns"))).data()
    ?.words;
  if (!words) {
    throw new Error("words is not exist");
  }
  const randomNumbers = getRandomNumbers(8, words.length);
  const wordList = randomNumbers.map((num) => words[num]);

  return {
    roomName,
    teamA: {
      player: [{ id, nickname }],
      word: [...wordList.slice(0, 4)],
      submit_code: [1, 2, 3],
      hint: [],
      green_token: 0 as const,
      red_token: 0 as const,
    },
    teamB: {
      player: [],
      word: [...wordList.slice(4, 8)],
      submit_code: [1, 2, 3],
      hint: [],
      green_token: 0 as const,
      red_token: 0 as const,
    },
    max_player: maxPlayer,
    captainID: id,
    isPlaying: false,
    answer_code: [],
    round: 0,
  };
};
