import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export const UserGuard = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  const router = useRouter();

  if (!user.name) {
    router.push("/");
  }

  return <>{children}</>;
};
