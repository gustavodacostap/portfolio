"use client";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";

export default function CartoonImage() {
  const { theme } = useTheme();
  return (
    <Image
      src={
        theme === "dark"
          ? "/assets/images/cartoon-tema-escuro.svg"
          : "/assets/images/cartoon-tema-claro (4).svg"
      }
      alt="Logo"
      width={400}
      height={40}
      priority
    />
  );
}
