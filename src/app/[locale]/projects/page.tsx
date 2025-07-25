"use client";

import { useState, Fragment } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const t = useTranslations("projects");
  const [hovered, setHovered] = useState<string | null>(null);

  const projectImages: Record<string, string> = {
    TaskManagerWeb: "/assets/images/projects/previews/task-manager.svg",
    CurrencyConverter: "/assets/images/projects/previews/currency-converter.svg",
    HolidayImporter: "/assets/images/projects/previews/holiday-importer.svg",
    PasswordGenerator: "/assets/images/projects/previews/password-generator.svg",
  };
  return (
    <main className="min-h-screen flex flex-col pt-20 px-5 sm:px-6 md:items-center md:pt-0 md:pl-12 md:pr-0 md:flex-row md:gap-10 lg:pl-18 xl:pl-50">
      <div className="flex w-full h-full">
        <div className="flex flex-col w-full md:w-1/2 justify-center">
          <div className="flex mb-4">
            <span className="brackets">&#123;</span>
            <h2 className="text-4xl md:text-5xl">{t("h2")}</h2>
            <span className="brackets">&#125;</span>
          </div>

          <hr className="lines mb-1" />
          <hr className="lines" />

          <ul className="text-xl md:text-2xl font-medium [&>a>li]:flex [&>a>li]:items-center [&>a>li]:py-4">
            {[
              { slug: "TaskManagerWeb", label: t("taskManagerWebT") },
              { slug: "CurrencyConverter", label: t("currencyConverterT") },
              { slug: "HolidayImporter", label: t("holidayImporterT") },
              { slug: "PasswordGenerator", label: t("passwordGeneratorT") },
            ].map((project, index, array) => (
              <Fragment key={project.slug}>
                <Link href={`/projects/${project.slug}`}>
                  <li
                    onMouseEnter={() => setHovered(project.slug)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {project.label}
                  </li>
                </Link>
                {/* Só adiciona a linha se não for o último item */}
                {index < array.length - 1 && <hr className="lines" />}
              </Fragment>
            ))}
          </ul>
        </div>

        {/* Imagem exibida ao lado no hover (apenas em md+) */}
        <div className="hidden md:flex md:w-1/2 items-center items-center">
          {hovered && (
            <div className="relative h-full w-auto xl:w-full aspect-video overflow-hidden rounded-l-4xl transition-all duration-300">
              <Image
                src={projectImages[hovered]}
                alt={`${hovered} preview`}
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 50vw"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
