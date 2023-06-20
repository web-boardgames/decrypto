import styled from "@emotion/styled";

export default function Room({ id }: { id: string }) {
  return (
    <Container>
      <Title>{id}</Title>
    </Container>
  );
}

const Container = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  background-color: #ffffff30;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #ffffff50;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #ffffff;
  font-weight: 400;
  text-align: center;
`;
