import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";
import Header from "@/components/Header";

// Tipagem das props
type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

// Layout que define a estrutura base da aplicação para cada idioma
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params; // Obtém o idioma da URL dinâmica

  // Se o locale não for suportado, exibe a página 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/assets/favicon/favicon.svg" sizes="32x32" />
      </head>
      <body className="bg-whitesmoke sm:p-6 md:p-12 lg:p-18 xl:p-20 font-poppins text-bluishBlack h-screen dark:bg-bluishBlack dark:text-whitesmoke">
        {/* Provedor de tema que controla o modo claro e escuro */}
        <ThemeProvider>
          {/* Provedor de internacionalização que disponibiliza traduções para toda a aplicação */}
          <NextIntlClientProvider>
            <Header />
            {children} {/* Conteúdo da página atual */}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
