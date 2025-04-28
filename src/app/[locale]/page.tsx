import { useTranslations } from "next-intl";
import CartoonImage from "@/components/CartoonImage";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("home");

  return (
    <main>
      <div className="mt-15 w-1/2 flex text-center items-center lg:text-start lg:block">
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
