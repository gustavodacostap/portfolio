import { useTranslations } from "next-intl";
import CartoonImage from "@/components/CartoonImage";
import { getMessages } from "next-intl/server";
import Link from "next/link";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  // Carregar as mensagens para o locale atual
  const messages = await getMessages({ locale });

  // Acessar o título diretamente da tradução
  const title = messages.home.title;

  return {
    title, // Retorna o título para ser usado como metadado
  };
}

export default function Home() {
  const t = useTranslations("home");

  return (
    <main>
      <div className="mt-15 md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-semibold dark:text-whitesmoke w-80">
          {/* Insere a tradução e estiliza apenas o "code/código" */}
          {t.rich("h1", {
            code: (chunks) => (
              <span className="text-darkOrange">&lt;{chunks}&gt;</span>
            ),
          })}
        </h1>
        <p className="pt-10 text-lg md:text-xl font-normal dark:text-whitesmoke">
          {t("subHeadline")}
        </p>

        <button className="btn-primary">
          <Link href="/projects">{t("seeProjects")}</Link>
        </button>
      </div>

      <CartoonImage />
    </main>
  );
}
