"use client";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { onValue, ref } from "firebase/database";
import Navigation from "@/components/common/Navigation";
import db from "@/config/firebase";
import Room from "@/components/lobby/Room";
import CreateRoom from "@/components/lobby/CreateRoom";
import { RoomCardData } from "@/types/room.interface";

export default function Home() {
  const dbRef = ref(db, "/");
  const [rooms, setRooms] = useState<RoomCardData[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(dbRef, (rooms) => {
      let tmpRooms: RoomCardData[] = [];
      rooms.forEach((roomSnapshot) => {
        const roomData = {
          key: roomSnapshot.key as string,
          name: roomSnapshot.val()?.roomName as string,
          maxPlayer: roomSnapshot.val()?.max_player as number,
          isPlaying: roomSnapshot.val()?.is_playing as boolean,
          people: (roomSnapshot.val()?.teamA?.player?.length ||
            0 + roomSnapshot.val()?.teamB?.player?.length ||
            0) as number,
        };
        tmpRooms.push(roomData);
      });
      setRooms(tmpRooms);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <Navigation />
      <Main>
        <CreateRoom />
        <RoomsContainer>
          {rooms.map((roomData, index) => (
            <Room key={index} roomData={roomData} />
          ))}
        </RoomsContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #071404;
`;

const RoomsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
`;
