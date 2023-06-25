import db from "@/config/firebase";
import { roomState } from "@/recoil/atoms/roomState";
import { onValue, ref } from "firebase/database";
import { useParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

export const RoomGuard = ({ children }: { children: ReactNode }) => {
  const setGame = useSetRecoilState(roomState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const params = useParams();
  const roomKey = params.slug;
  const roomRef = ref(db, "/" + roomKey);

  useEffect(() => {
    const describe = onValue(roomRef, (snapshot) => {
      if (snapshot.exists()) {
        setGame(snapshot.val());
      } else {
        setError(true);
      }
      setLoading(false);
    });
    return () => {
      describe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Room not found</div>;
  }

  return <>{children}</>;
};
