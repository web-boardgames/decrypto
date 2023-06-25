"use client";

import { useUser } from "@/hooks/useUser";
import { isServer } from "@/utils/isServer";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export const UserGuard = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const router = useRouter();

  if (!isServer() && !user.id) {
    router.push("/");
  }

  return <>{children}</>;
};
