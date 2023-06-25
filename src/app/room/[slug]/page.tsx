"use client";
import db from "@/config/firebase";
import { onValue, ref, remove } from "firebase/database";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const params = useParams();
  const roomKey = params.slug;
  const dbRef = ref(db, "/" + roomKey);

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      console.log("snapshot", snapshot.val().roomName);
    });
  }, []);

  return <div>adsfds</div>;
}
