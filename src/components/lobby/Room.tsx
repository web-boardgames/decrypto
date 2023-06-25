import { RoomCardData } from "@/types/room.interface";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

export default function Room({ roomData }: { roomData: RoomCardData }) {
  const router = useRouter();

  const onRoom = () => {
    router.push("/room/" + roomData.key);
  };

  return (
    <Container onClick={onRoom}>
      <Title>{roomData.name}</Title>
      <PlayingContainer>
        <IsPlaying isPlaying={roomData.isPlaying} />
        {roomData.isPlaying ? "playing" : "waiting"}
      </PlayingContainer>
      <People>
        {roomData.people} / {roomData.maxPlayer}
      </People>
    </Container>
  );
}

const Container = styled.button`
  width: 10rem;
  height: 10rem;
  position: relative;
  background-color: #ffffff30;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #ffffff50;
  }
`;

const Title = styled.h4`
  font-size: 1.6rem;
  color: #ffffff;
  font-weight: 400;
  text-align: center;
`;

const People = styled.p`
  position: absolute;
  bottom: 0.4rem;
  right: 1.4rem;
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 400;
`;

const PlayingContainer = styled.div`
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  display: flex;
  gap: 1rem;
  color: #919191;
`;

const IsPlaying = styled.div<{ isPlaying: boolean }>`
  top: 1.4rem;
  left: 0.8rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: ${({ isPlaying }) => (isPlaying ? "#8a1414" : "#2c9904")};
`;
