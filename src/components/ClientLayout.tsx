// ClientLayout.tsx
"use client";

import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";

interface Props {
  children: React.ReactNode;
}

// Componente Layout que pode utilizar useState, useEffect, etc. (use client)
export default function ClientLayout({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={() => setMenuOpen(true)} />
      {/* Se menuOpen mudar para true, mostra o Menu e passa o setState. 
      Assim, o Header do menu manipula o setState e ao clicar no X, o menu fecha*/}
      {menuOpen && (
        <Menu menuOpen={menuOpen} setMenuOpen={() => setMenuOpen(false)} />
      )}
      {children}
    </>
  );
}
