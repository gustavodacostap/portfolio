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
    <header className="w-full bg-whitesmoke dark:bg-bluishBlack">
      <nav className="flex items-center justify-between">
        {/* Logo que tem o link para a Home */}
        <Link href="/">
          <Image
            src="/assets/images/logo-g.dev.svg"
            alt="Logo g.dev"
            width={100}
            height={50}
          />
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
