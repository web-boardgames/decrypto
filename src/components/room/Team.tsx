import { Player } from "@/types/player.interface";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

export default function Team({
  players,
  style,
}: {
  players: Player[] | undefined;
  style?: CSSProperties;
}) {
  return (
    <Container style={style}>
      {players &&
        players.map((player) => (
          <Player key={player.id}>{player.nickname}</Player>
        ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
`;

const Player = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #ffffff30;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: white;
  margin-bottom: 0.5rem;
`;
