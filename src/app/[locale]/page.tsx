// import { useTranslations } from "next-intl";
import CartoonImage from "@/components/CartoonImage";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  // Carregar as mensagens para o locale atual
  const messages = await getMessages({ locale });

  // Acessar o título diretamente da tradução
  const title = messages.home.title; // Substitua `home.title` pelo caminho correto na sua estrutura de mensagens

  return {
    title, // Retorna o título para ser usado como metadado
  };
}

export default function Home() {
  // const t = useTranslations("home");

  return (
    <main>
      <h1>Página carregada!</h1>
      <CartoonImage />
    </main>
  );
}
