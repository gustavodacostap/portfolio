"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <header className="w-full bg-whitesmoke dark:bg-bluishBlack">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo-g.dev.svg"
            alt="Logo g.dev"
            width={100}
            height={50}
          />
        </Link>
        <ul className="flex items-center gap-5">
          <LanguageSwitcher />
          <ThemeToggle />
          <MenuButton />
        </ul>
      </nav>
    </header>
  );
}
