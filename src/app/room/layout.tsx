"use client";
import { ExitGuard, RoomGuard } from "@/components/room";

import { ReactNode } from "react";

export default function RoomLayout({ children }: { children: ReactNode }) {
  return (
    <RoomGuard>
      <ExitGuard>{children}</ExitGuard>
    </RoomGuard>
  );
}
