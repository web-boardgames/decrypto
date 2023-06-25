"use client";
import { DefaultButton } from "@/components/common/DefaultButton";
import Navigation from "@/components/common/Navigation";
import RoomTitle from "@/components/room/RoomTItle";
import SwitchTeamButton from "@/components/room/SwitchTeamButton";
import Team from "@/components/room/Team";
import { useRoom } from "@/hooks/useRoom";
import styled from "@emotion/styled";

export default function Home() {
  const { room } = useRoom();

  return (
    <Container>
      <Navigation />
      <Main>
        <RoomTitle title={room?.roomName} />
        <Teams>
          <Team
            players={room?.teamA.player}
            style={{ backgroundColor: "#8e3e3e" }}
          />
          <SwitchTeamButton />
          <Team
            players={room?.teamB.player}
            style={{ backgroundColor: "#3d3f80" }}
          />
        </Teams>
        <DefaultButton>Start</DefaultButton>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #071404;
`;

const Teams = styled.div`
  display: flex;
  width: 100%;
  height: 30rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
