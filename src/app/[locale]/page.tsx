import { useTranslations } from "next-intl";
import CartoonImage from "@/components/CartoonImage";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("home");

  return (
    <main className="flex flex-col place-items-center mx-auto w-full h-full sm:w-120 md:w-150 lg:mx-0 lg:w-full lg:h-full lg:flex-row lg:justify-between">
      <div className="mt-15 flex flex-col place-items-center lg:place-items-baseline lg:w-120 lg:text-start lg:block">
        <h1 className="text-4xl text-center font-semibold w-full sm:text-5xl md:text-6xl lg:text-left xl:w-80 dark:text-whitesmoke">
          {/* Insere a tradução e estiliza apenas o "code/código" */}
          {t.rich("h1", {
            code: (chunks) => (
              <span className="text-darkOrange">&lt;{chunks}&gt;</span>
            ),
          })}
        </h1>
        <p className="pt-10 font-normal text-center text-base sm:text-lg sm:w-full md:text-xl lg:w-120 lg:text-left dark:text-whitesmoke">
          {t("subHeadline")}
        </p>

        <button className="flex btn-primary place-items-center rounded-lg mb-9 gap-2 lg:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>

          <Link href="/projects">{t("seeProjects")}</Link>
        </button>
      </div>

      <CartoonImage />
    </main>
  );
}
