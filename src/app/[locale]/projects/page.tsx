import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <main className="flex">
      <div className="flex justify-between mt-20">
        <div className="flex">
          <span className="brackets">&#123;</span>
          <h2>{t("h2")}</h2>
          <span className="brackets">&#125;</span>
        </div>

        <h2>3</h2>
      </div>
      <ul>
        <li>{}</li>
      </ul>
    </main>
  );
}
