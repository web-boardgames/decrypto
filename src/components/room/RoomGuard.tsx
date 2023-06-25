import { useRoom } from "@/hooks/useRoom";
import { ReactNode } from "react";

export const RoomGuard = ({ children }: { children: ReactNode }) => {
  const { isError, isLoading } = useRoom();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Room not found</div>;
  }

  return <>{children}</>;
};
