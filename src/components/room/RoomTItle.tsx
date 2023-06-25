import styled from "@emotion/styled";

export default function RoomTitle({ title }: { title: string | undefined }) {
  return <Container>Room: {title}</Container>;
}

const Container = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
  color: white;
`;
