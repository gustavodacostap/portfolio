"use client";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

export default function CartoonImage() {
  const { theme } = useTheme();

  return (
    <Image
      src={
        // Exibe a imagem de acordo com o tema
        theme === "dark"
          ? "/assets/images/cartoon-tema-escuro.png"
          : "/assets/images/cartoon-tema-claro.png"
      }
      alt="Logo"
      width={470}
      height={0}
      className="h-auto xl:absolute xl:bottom-0 lg:right-40"
      priority
    />
  );
}
