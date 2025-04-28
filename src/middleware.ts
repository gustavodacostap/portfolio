import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

// Configuração da funcionalidade de tradução
export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
