// ClientLayout.tsx
"use client";

import { useState } from "react";
import Header from "./Header";
import FullScreenMenu from "./FullScreenMenu";

interface Props {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header
        showLanguageSwitcher
        showThemeToggle
        menuOpen={menuOpen}
        setMenuOpen={() => setMenuOpen(true)}
      />
      {/* Se menuOpen for true, mostra o FullScreenMenu */}
      {menuOpen && (
        <FullScreenMenu
          menuOpen={menuOpen}
          setMenuOpen={() => setMenuOpen(false)}
        />
      )}
      {children}
    </>
  );
}
