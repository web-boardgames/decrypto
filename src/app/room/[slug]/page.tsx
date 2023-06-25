"use client";
import { useRoom } from "@/hooks/useRoom";

export default function Home() {
  const { room } = useRoom();

  return <div>{JSON.stringify(room)}</div>;
}
