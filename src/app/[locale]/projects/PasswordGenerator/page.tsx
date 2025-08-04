import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function TaskManagerWeb() {
  const t = useTranslations("projects.passwordGenerator");
  const p = useTranslations("projects");

  const currencyConverterImages = [
    "desktop.png",
    "personalizacao.png",
    "mobile.png",
  ];

  return (
    <main className="pt-12 px-5 sm:px-6 md:px-12 lg:px-[10%] xl:px-[13%] 2xl:px-[15%]">
      <div className="relative w-full h-full aspect-video overflow-hidden rounded-2xl sm:rounded-4xl my-10">
        <Image
          fill
          alt="Password Generator preview"
          src="/assets/images/projects/previews/password-generator.svg"
          className="object-cover object-center"
          sizes="(min-width: 768px) 50vw"
        />
      </div>
      <h2 className="text-2xl md:text-4xl text-darkOrange">{t("title")}</h2>
      <hr className="lines mt-2" />

      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="flex flex-col gap-5 mt-5 md:w-2/3">
          <p>{t("description")}</p>
          <Link
            href="https://password-generator-react-ts.vercel.app/"
            target="_blank"
            className="text-right text-lg md:text-xl"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="darkOrange"
                className="size-4 lg:size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                  clipRule="evenodd"
                />
              </svg>
              {t("link-text")}
            </div>
          </Link>
        </div>

        <div className="md:w-1/4">
          <h2 className="text-xl font-medium md:text-2xl mt-5">{p("tech")}</h2>

          <ul className="list-disc pl-4 marker:text-dodgerblue">
            <li>React</li>
            <li>TypeScript</li>
            <li>React Hooks</li>
            <li>CSS Modules</li>
          </ul>
        </div>
      </div>

      <h2 className="text-center text-xl mt-7 font-medium md:text-2xl">
        {p("images")}
      </h2>

      <>
        {currencyConverterImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden rounded-lg sm:rounded-xl mt-5"
          >
            <Image
              alt={`Holiday Importer - ${img
                .replace(".png", "")
                .replace(/-/g, " ")}`}
              src={`/assets/images/projects/PasswordGenerator/${img}`}
              width={1911}
              height={953}
              quality={100}
              className="object-cover rounded-lg sm:rounded-xl"
            />
          </div>
        ))}
      </>

      <hr className="mt-5 lines" />
      <footer className="my-5">
        <nav className="flex items-center justify-between">
          <Link
            href="/projects/TaskManagerWeb"
            className="font-medium text-lg md:text-xl"
          >
            {p("nextProject")}
          </Link>
          <Link
            href="/projects/TaskManagerWeb"
            className="text-right font-medium text-lg md:text-xl"
          >
            {t("titleNextProject")}
          </Link>
        </nav>
      </footer>
    </main>
  );
}
