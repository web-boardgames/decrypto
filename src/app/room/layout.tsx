"use client";
import { ExitGuard } from "@/components/room";
import { ReactNode } from "react";

export default function RoomLayout({ children }: { children: ReactNode }) {
  return <ExitGuard>{children}</ExitGuard>;
}
