import { defineRouting } from "next-intl/routing";

// Configuração da funcionalidade de tradução
export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "pt",
});
