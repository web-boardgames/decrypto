import db from "@/config/firebase";
import { createRoom } from "@/utils/firebase/createRoom";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { Modal } from "@mui/joy";
import { push, ref } from "firebase/database";
import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useRef, useState } from "react";

export default function CreateRoom() {
  const router = useRouter();
  const dbRef = ref(db, "/");

  const [openForm, setOpenForm] = useState<boolean>(false);
  const [maxPlayer, setMaxPlayer] = useState<number>(8);
  const [isValidRoomName, setIsValidRoomName] = useState<boolean>(true);
  const roomNameRef = useRef<HTMLInputElement>(null);

  const onCloseForm = useCallback(() => {
    setIsValidRoomName(true);
    setMaxPlayer(8);
    setOpenForm(false);
  }, []);

  const onCreateRoom = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!roomNameRef.current || !roomNameRef.current.value) {
      setIsValidRoomName(false);
      return;
    }

    const roomData = createRoom({
      roomName: roomNameRef.current.value,
      maxPlayer: maxPlayer,
      uid: "test",
    });

    const result = await push(dbRef, roomData);

    router.push("/room/" + result.key);

    console.log("create room!!", roomNameRef.current?.value, maxPlayer);
    onCloseForm();
  };

  return (
    <>
      <Container onClick={() => setOpenForm(true)}>CreateRoom</Container>
      <Modal
        open={openForm}
        onClose={() => setOpenForm(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CreateRoomForm
          onClick={(e) => e.stopPropagation()}
          onSubmit={onCreateRoom}
        >
          <CloseButton type="button" onClick={onCloseForm}>
            <CloseIcon />
          </CloseButton>
          <SingleLabel>
            <FormLabel htmlFor="roomName">Room Name</FormLabel>
            <FormInput type="text" id="roomName" ref={roomNameRef} />
            {!isValidRoomName && (
              <NameNotValid>Room name is not valid</NameNotValid>
            )}
          </SingleLabel>
          <SingleLabel>
            <FormLabel htmlFor="maxPlayer">Max People</FormLabel>
            <ButtonContainer>
              <FormButton
                onClick={() => setMaxPlayer(Math.max(maxPlayer - 1, 4))}
                type="button"
              >
                -
              </FormButton>
              <FormInput type="number" id="maxPlayer" value={maxPlayer} />
              <FormButton
                onClick={() => setMaxPlayer(Math.min(maxPlayer + 1, 16))}
                type="button"
              >
                +
              </FormButton>
            </ButtonContainer>
          </SingleLabel>
          <FormButton type="submit">Create Room</FormButton>
        </CreateRoomForm>
      </Modal>
    </>
  );
}

const Container = styled.div`
  width: 12rem;
  height: 5rem;
  color: white;
  background-color: #ffffff30;
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #ffffff50;
  }
`;

const CreateRoomForm = styled.form`
  position: relative;
  min-width: 20rem;
  background-color: #435246;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CloseButton = styled.button`
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: white;
  font-size: 2rem;
  z-index: 1;
`;

const FormLabel = styled.label`
  font-size: 1.6rem;
  color: white;
`;

const FormInput = styled.input`
  height: 3rem;
  background-color: #ffffff30;
  border: none;
  padding: 0.4rem 1rem;
  font-size: 1.6rem;
  color: white;
  outline: none;
`;

const FormButton = styled.button`
  height: 3rem;
  background-color: #ffffff30;
  border: none;
  padding: 0.4rem 1rem;
  font-size: 2rem;
  color: white;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #ffffff50;
  }
`;

const SingleLabel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

const NameNotValid = styled.p`
  position: absolute;
  bottom: -2.5rem;
  right: 0rem;
  color: red;
`;
