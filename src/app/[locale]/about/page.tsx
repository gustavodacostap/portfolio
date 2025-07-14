import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");

  return (
    <main className="px-5 sm:px-6 md:px-0 md:pr-12 md:py-12 md:flex md:items-start lg:pr-18 xl:pr-20">
        <div className="aspect-[643/1069] w-75 max-w-full mx-auto relative my-5 rounded-4xl sm:my-6 md:my-0 md:mx-0 md:w-[35%] md:max-w-100 md:rounded-none md:rounded-r-4xl overflow-hidden">
          <Image
            src="/assets/images/foto-gu.jpg"  
            fill
            alt="Gustavo's photo"
            className="object-cover"
          />
        </div>
        <div className="mt-5 flex-grow sm:mt-6 md:my-0 md:pl-12 md:w-1/2">
          <div className="flex md:justify-start">
            <span className="brackets">&#123;</span>
            <h2>{t("h2")}</h2>
            <span className="brackets">&#125;</span>
          </div>
          <hr className="my-5" />
          <p className="w-full max-w-190">{t("p")}</p>
          <button className="btn-primary mt-5 mb-20">
            <a
              href="/assets/docs/Currículo Gustavo da Costa.pdf"
              target="_blank"
            >
              {t("button")}
            </a>
          </button>
        </div>
    </main>
  );
}
