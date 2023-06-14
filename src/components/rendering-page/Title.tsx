import styled from "@emotion/styled";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default function Title() {
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

  return <Container ref={titleRef}>Decrypto</Container>;
}

const Container = styled.div`
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  color: #49a732;
  opacity: 0;
`;
