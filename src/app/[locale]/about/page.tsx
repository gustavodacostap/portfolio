"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");

  return (
    <main className="pt-20 px-5 sm:px-6 md:pl-0 md:flex md:items-center md:pr-12 md:pt-0 md:min-h-screen lg:px-35 xl:px-50">
      <div className="md:flex h-[70vh]">
        <div className="aspect-[643/1069] w-75 max-w-full mx-auto relative rounded-2xl md:mx-0 md:rounded-l-none md:rounded-r-4xl lg:rounded-4xl overflow-hidden">
          <Image
            src="/assets/images/foto-gu.jpg"
            fill
            quality={100}
            alt="Gustavo's photo"
            className="object-cover"
          />
        </div>
        <div className="mt-10 flex-gro md:my-0 md:pl-12 md:w-2/3">
          <div className="flex md:justify-start">
            <span className="brackets">&#123;</span>
            <h2 className="text-4xl md:text-5xl">{t("h2")}</h2>
            <span className="brackets">&#125;</span>
          </div>
          <hr className="my-5 lines" />
          <p className="w-full max-w-190">{t("p")}</p>
          <button
            type="button"
            className="btn-primary mt-5 mb-20 cursor-pointer"
            onClick={() =>
              window.open(
                "/assets/docs/Currículo Gustavo da Costa.pdf",
                "_blank"
              )
            }
          >
            {t("button")}
          </button>
        </div>
      </div>
    </main>
  );
}
