import type { Player } from "./player.interface";

interface Team {
  player: Player[];
  word: string[];
  submit_code: number[];
  hint: string[][];
  green_token: 0 | 1 | 2;
  red_token: 0 | 1 | 1;
}

export interface Room {
  roomName: string;
  teamA: Team;
  teamB: Team;
  captainUID: string;
  isPlaying: boolean;
  answer_code: number[];
  round: number;
  max_player: number;
}

export interface RoomCardData {
  name: string;
  maxPlayer: number;
  isPlaying: boolean;
  people: number;
}
