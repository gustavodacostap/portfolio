"use client";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

export default function CartoonImage() {
  const { theme } = useTheme();

  return (
    <div className="w-75 aspect-[2379/2872] relative sm:max-w-3/4 xl:w-1/3">
      <Image
        fill
        alt="Cartoon image"
        src={
          theme === "dark"
            ? "/assets/images/cartoon-tema-escuro.png"
            : "/assets/images/cartoon-tema-claro.png"
        }
        priority
      />
    </div>
  );
}
