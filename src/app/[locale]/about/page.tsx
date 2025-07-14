import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");

  return (
    <main className="px-5">
      <div>
        <div className="aspect-[643/1069] w-90 max-w-full mx-auto relative mt-5 rounded-4xl lg:rounded-tr-4xl overflow-hidden">
          <Image
            src="/assets/images/foto-gu.jpg"  
            fill
            alt="Gustavo's photo"
            className="object-cover"
          />
        </div>
        <div className="mt-7">
          <div className="flex">
            <span className="brackets">&#123;</span>
            <h2>{t("h2")}</h2>
            <span className="brackets">&#125;</span>
          </div>
          <hr className="my-5" />
          <p className="w-full">{t("p")}</p>
          <button className="btn-primary mt-5 mb-20">
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
