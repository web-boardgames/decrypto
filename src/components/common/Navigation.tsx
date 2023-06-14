import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import { useName } from "@/hooks/useName";

export default function Navigation() {
  const router = useRouter();
  const name = useName();

  const onLogo = () => {
    if (name) {
      router.push(`/lobby`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <Container>
      <Logo onClick={onLogo}>Decrypto</Logo>
      <Name>{name}</Name>
    </Container>
  );
}

const Container = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #434343;
  padding: 0 2rem;
`;

const Logo = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 900;

  cursor: pointer;
`;

const Name = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 900;
`;
