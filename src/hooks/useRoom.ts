import db from "@/config/firebase";
import { roomState } from "@/recoil/atoms/roomState";
import { ref, remove } from "firebase/database";
import { useParams } from "next/navigation";
import { useRecoilValue } from "recoil";

export const useRoom = () => {
  const params = useParams();
  const roomKey = params.slug;
  const roomRef = ref(db, "/" + roomKey);
  const room = useRecoilValue(roomState);

  const changeTeam = async () => {
    // await
  };

  const deleteRoom = async () => {
    await remove(roomRef);
  };

  return {
    roomRef,
    room,
    changeTeam,
    deleteRoom,
  };
};
