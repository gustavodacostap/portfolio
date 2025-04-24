"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const newLocale = locale === "pt" ? "en" : "pt";

  // Substitui o locale atual na URL pelo novo
  const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);

  return (
    <Link
      href={newPath}
      locale={newLocale}
      className="px-3 py-1 rounded border text-sm font-medium"
    >
      {newLocale.toUpperCase()}
    </Link>
  );
}
