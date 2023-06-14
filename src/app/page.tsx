"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import Title from "@/components/rendering-page/Title";

export default function Home() {
  const nameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onEnterRoom = () => {
    if (nameRef.current) {
      const name = nameRef.current.value;
      if (name) {
        localStorage.setItem("name", name);
        router.push(`/lobby`);
      }
    }
  };

  return (
    <Container>
      <Title />
      <NameInput placeholder="Enter name" ref={nameRef} />
      <Button onClick={onEnterRoom}>Enter</Button>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #071404;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const NameInput = styled.input`
  border: none;
  font-size: 2rem;
  width: 15rem;
  height: 3rem;
  background-color: #0a3802;
  padding-left: 0.5rem;
  color: white;
`;

const Button = styled.button`
  border: none;
  font-size: 2rem;
  width: 15rem;
  height: 3rem;
  background-color: #428038;
  color: white;

  cursor: pointer;
  &:hover {
    background-color: #49a732;
  }
`;
