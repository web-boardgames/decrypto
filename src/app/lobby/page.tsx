"use client";
import Navigation from "@/components/common/Navigation";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Container>
      <Navigation />
      <h1>Lobby</h1>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #071404;
`;
