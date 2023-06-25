import { Room } from "@/types/room.interface";
import { atom } from "recoil";

export const roomState = atom<Room | null>({
  key: "roomState",
  default: null,
});
