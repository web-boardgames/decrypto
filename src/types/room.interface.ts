interface Team {
  words: string[4];
  submit_code: string[4];
  hint: string[4][];
  green_token: 0 | 1 | 2;
  red_token: 0 | 1 | 1;
}

export interface Room {
  teamA: Team;
  teamB: Team;
  captainUID: string;
  isPlaying: boolean;
  answer_code: number[];
  round: number;
  max_player: number;
}
