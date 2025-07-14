"use client";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

export default function CartoonImage() {
  const { theme } = useTheme();

  return (
    <div className="relative h-[50vh] aspect-[2379/2872] mt-auto sm:h-[70vh] md:h-[80vh] lg:h-[60%] lg:absolute lg:bottom-0 lg:right-[8%] xl:h-[75%] xl:right-[12%]">
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
