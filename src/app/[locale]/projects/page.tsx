import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <main className="flex flex-col">
      <div className="flex justify-between mt-20 w-1/2">
        <div className="flex">
          <span className="brackets">&#123;</span>
          <h2>{t("h2")}</h2>
          <span className="brackets">&#125;</span>
        </div>
        <h2>3</h2>
        <hr />
      </div>
      <ul>
        <li>Task Manager Web</li>
        <hr />
        <li>Currency Converter</li>
        <hr />
        <li>Importador Feriados</li>
        <hr />
        <li>Password Generator</li>
      </ul>
    </main>
  );
}
