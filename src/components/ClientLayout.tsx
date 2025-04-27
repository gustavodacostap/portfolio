// ClientLayout.tsx
"use client";

import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";

interface Props {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={() => setMenuOpen(true)} />
      {/* Se menuOpen for true, mostra o FullScreenMenu */}
      {menuOpen && (
        <Menu menuOpen={menuOpen} setMenuOpen={() => setMenuOpen(false)} />
      )}
      {children}
    </>
  );
}
