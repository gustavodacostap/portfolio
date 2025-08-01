"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const newLocale = locale === "pt" ? "en" : "pt";

  // Remove o prefixo do locale atual do path
  const pathWithoutLocale =
    pathname.replace(new RegExp(`^/${locale}`), "") || "/";

  const handleLanguageChange = () => {
    // Atualiza o cookie que o middleware da next-intl usa
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;

    // Redireciona para a nova URL com o locale alterado
    router.push(`/${newLocale}${pathWithoutLocale}`);
    router.refresh(); // força revalidação do lado do client
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="text-base sm:text-lg font-semibold text-bluishBlack dark:text-whitesmoke"
    >
      {locale.toUpperCase()}
    </button>
  );
}
