"use client";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Home() {
  const [name, setName] = useState("");
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = "1";
      const chars = new SplitType(titleRef.current).chars;

      chars?.map((char) => {
        gsap.fromTo(
          char,
          {
            opacity: 0,
          },
          {
            delay: Math.random(),
            opacity: 1,
            duration: 0.01,
            repeat: -1,
            repeatDelay: 0.5 + Math.random(),
            yoyo: true,
          }
        );
      });
    }
  }, []);

  return (
    <Container>
      <Title ref={titleRef}>Decrypto</Title>
      <NameInput
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button>Enter</Button>
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

const Title = styled.div`
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  color: #49a732;
  opacity: 0;
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
`;
