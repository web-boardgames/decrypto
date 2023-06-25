"use client";
import db from "@/config/firebase";
import { useBeforeUnLoad } from "@/hooks/useBeforeunload";
import { ref, remove } from "firebase/database";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

export const ExitGuard = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const roomKey = params.slug;
  const dbRef = ref(db, "/" + roomKey);

  useBeforeUnLoad(() => {
    remove(dbRef);
  });

  return <>{children}</>;
};
