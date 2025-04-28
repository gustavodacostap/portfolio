import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Configuração da funcionalidade de tradução
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
