"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const newLocale = locale === "pt" ? "en" : "pt";

  // Substitui o idioma atual da página na URL pelo outro idioma
  const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);

  return (
    <Link
      href={newPath}
      locale={newLocale}
      className="text-base md:text-lg font-semibold text-bluishBlack dark:text-whitesmoke"
    >
      {newLocale.toUpperCase()}
    </Link>
  );
}
