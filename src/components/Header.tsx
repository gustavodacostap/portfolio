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
    <header className="w-full p-5 pb-0 sm:p-6 sm:pb-0 md:p-12 md:pb-0 lg:p-18 lg:pb-0 xl:p-20 xl:pb-0 bg-whitesmoke dark:bg-bluishBlack">
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
