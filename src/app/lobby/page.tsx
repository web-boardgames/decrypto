"use client";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { onValue, ref } from "firebase/database";
import Navigation from "@/components/common/Navigation";
import db from "@/config/firebase";
import Room from "@/components/lobby/Room";
import CreateRoom from "@/components/lobby/CreateRoom";

export default function Home() {
  const dbRef = ref(db, "/");
  const [rooms, setRooms] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = onValue(dbRef, (snapshot) => {
      let tmpRooms: string[] = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        tmpRooms.push(childData);
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
          {rooms.map((room) => (
            <Room key={room} id={room} />
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
