import { useTranslations } from "next-intl";

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
        <ul className="text-xl md:text-2xl font-medium [&>a>li]:flex [&>a>li]:items-center [&>a>li]:h-15">
          <a href="/projects/TaskManagerWeb"><li>Task Manager Web</li></a>
          <hr className="project-lines" />
          <a href="/projects/CurrencyConverter"><li>Currency Converter</li></a>
          <hr className="project-lines" />
          <a href="/projects/ImportadorFeriados"><li>Importador Feriados</li></a>
          <hr className="project-lines" />
          <a href="/projects/PasswordGenerator"><li>Password Generator</li></a>
        </ul>
      </div>
    </main>
  );
}
