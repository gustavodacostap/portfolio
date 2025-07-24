"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import MenuToggleButton from "./MenuToggleButton";

interface Props {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ menuOpen, setMenuOpen }: Props) {
  return (
    <header className="z-1 fixed top-0 w-full px-5 py-2 sm:px-6 sm:py-2 md:px-12 md:py-2 lg:px-18 lg:py-2 xl:px-20 xl:py-2 bg-whitesmoke dark:bg-bluishBlack">
      <nav className="flex items-center justify-between">
        {/* Logo que tem o link para a Home */}
        <Link href="/">
          <div className="w-22 aspect-[173/82] relative md:w-25 ">
            <Image fill alt="Logo g.dev" src="/assets/images/logo-g.dev.svg" />
          </div>
        </Link>

        {/* Botões de mudar idioma, mudar tema e abrir menu */}
        <ul className="flex items-center gap-5">
          <LanguageSwitcher />
          <ThemeToggle />
          <MenuToggleButton
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </ul>
      </nav>
    </header>
  );
}
