// import { useTranslations } from "next-intl";
import CartoonImage from "@/components/CartoonImage";
import { getMessages } from "next-intl/server";

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
  // const t = useTranslations("home");

  return (
    <main>
      <div className="mt-15 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-semibold dark:text-whitesmoke">
          Transformando <br />
          ideias em <br />
          <span className="text-darkOrange">&lt;código&gt;</span>
          <p className="pt-10 text-lg md:text-xl font-normal dark:text-whitesmoke">
            Oi, eu sou o Gustavo — desenvolvedor web full stack em formação,
            criador de soluções com código, sonhos e propósito.
          </p>
        </h1>

        <button className="bg-dodgerblue px-4 py-1.5 mt-9 rounded-lg text-whitesmoke text-lg font-medium">
          Ver Projetos
        </button>
      </div>

      <CartoonImage />
    </main>
  );
}
