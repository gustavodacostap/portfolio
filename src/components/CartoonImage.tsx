"use client";
import { useTheme } from "@/contexts/ThemeContext"; // novo caminho
import Image from "next/image";

export default function CartoonImage() {
  const { theme } = useTheme();

  return (
    <Image
      src={
        theme === "dark"
          ? "/assets/images/cartoon-tema-escuro.png"
          : "/assets/images/cartoon-tema-claro.png"
      }
      alt="Logo"
      width={470}
      height={0}
      className="h-auto absolute bottom-0 right-10 md:right-20 lg:right-40"
      priority
    />
  );
}
