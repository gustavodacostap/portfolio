"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { MenuButton } from "./MenuButton";

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo-g.dev.svg"
            alt="Logo g.dev"
            width={90}
            height={50}
          />
        </Link>
        <ul>
          <LanguageSwitcher />
          <ThemeToggle />
          <MenuButton />
        </ul>
      </nav>
    </header>
  );
}
