import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";
import ClientLayout from "@/components/ClientLayout";
import { getMessages } from "next-intl/server";

type metadataProps = {
  params: { locale: string };
};

// Obtém o título da página no idioma atual
export async function generateMetadata({ params }: metadataProps) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return {
    title: messages.metadata.title,
  };
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

// Layout que define a estrutura base da aplicação, com suporte para os idiomas
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
      <body className="bg-whitesmoke h-full min-h-screen p-5 pb-0 sm:p-6 sm:pb-0 md:p-12 md:pb-0 lg:p-18 lg:pb-0 xl:p-20 xl:pb-0 font-poppins text-bluishBlack dark:bg-bluishBlack dark:text-whitesmoke">
        {/* Provedor de tema que controla o modo claro e escuro */}
        <ThemeProvider>
          {/* Provedor de internacionalização que disponibiliza traduções para toda a aplicação */}
          <NextIntlClientProvider>
            <ClientLayout>
              {children} {/* Conteúdo da página atual */}
            </ClientLayout>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
