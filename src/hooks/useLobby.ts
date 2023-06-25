import db from "@/config/firebase";
import { Room } from "@/types/room.interface";
import { push, ref } from "firebase/database";

export const useLobby = () => {
  const lobbyRef = ref(db, "/");

  const pushRoom = async (roomData: Room) => {
    const result = push(lobbyRef, roomData);
    return result;
  };

  return { lobbyRef, pushRoom };
};
