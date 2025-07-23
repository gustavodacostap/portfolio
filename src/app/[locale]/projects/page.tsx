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
    ImportadorFeriados: "/assets/images/projects/previews/holiday-importer.svg",
    PasswordGenerator: "/assets/images/projects/previews/password-generator.svg",
  };
  return (
    <main className="flex flex-col pt-20 px-5 sm:px-6 md:pl-12 md:pr-0 md:flex-row md:gap-10 lg:pl-18">
      <div className="md:w-1/2">
        <div className="flex mb-4">
          <span className="brackets">&#123;</span>
          <h2 className="text-4xl md:text-5xl">{t("h2")}</h2>
          <span className="brackets">&#125;</span>
        </div>

        <hr className="project-lines" />

        <ul className="text-xl md:text-2xl font-medium [&>a>li]:flex [&>a>li]:items-center [&>a>li]:py-4">
          {[
            { slug: "TaskManagerWeb", label: t("taskManagerWeb") },
            { slug: "CurrencyConverter", label: t("currencyConverter") },
            { slug: "ImportadorFeriados", label: t("holidayImporter") },
            { slug: "PasswordGenerator", label: t("passwordGenerator") },
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
              {index < array.length - 1 && <hr className="project-lines" />}
            </Fragment>
          ))}
        </ul>
      </div>

      {/* Imagem exibida ao lado no hover (apenas em md+) */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        {hovered && (
          <div className="relative w-full h-full aspect-video overflow-hidden rounded-l-4xl shadow-xl transition-all duration-300">
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
    </main>
  );
}
