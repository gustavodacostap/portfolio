import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");

  return (
    <main>
      <div>
        <Image
          src="/assets/images/foto-gu.jpg"
          width={330}
          height={300}
          alt="Gustavo's photo"
          className="h-auto rounded-tr-4xl absolute left-0 bottom-0"
        />
        <div className="ml-90 mt-20">
          <div className="flex">
            <span className="brackets">&#123;</span>
            <h2>{t("h2")}</h2>
            <span className="brackets">&#125;</span>
          </div>
          <hr className="my-5" />
          <p className="w-170">{t("p")}</p>
          <button className="btn-primary">
            <a
              href="/assets/docs/Currículo Gustavo da Costa.pdf"
              target="_blank"
            >
              {t("button")}
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}
