import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <main className="flex flex-col px-5 sm:px-6">
      <div className="mt-20 md:w-1/2">
        <div className="flex mb-4">
          <span className="brackets">&#123;</span>
          <h2 className="text-4xl md:text-5xl">{t("h2")}</h2>
          <span className="brackets">&#125;</span>
        </div>
        
        <hr className="project-lines" />

        <ul className="text-xl md:text-2xl font-medium [&>a>li]:flex [&>a>li]:items-center [&>a>li]:py-4">
          <Link href="/projects/TaskManagerWeb">
            <li>{t("taskManagerWeb")}</li>
          </Link>
          <hr className="project-lines" />

          <Link href="/projects/CurrencyConverter">
            <li>{t("currencyConverter")}</li>
          </Link>
          <hr className="project-lines" />

          <Link href="/projects/ImportadorFeriados">
            <li>{t("holidayImporter")}</li>
          </Link>
          <hr className="project-lines" />

          <Link href="/projects/PasswordGenerator">
            <li>{t("passwordGenerator")}</li>
          </Link>
        </ul>
      </div>
    </main>
  );
}
