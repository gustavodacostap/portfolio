import Link from "next/link";
import Header from "./Header";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Props {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Menu({ menuOpen, setMenuOpen }: Props) {
  const t = useTranslations("menu");

  return (
    // Div abrindo sobre a página inteira
    <div className="h-screen fixed inset-0 z-50 bg-whitesmoke dark:bg-bluishBlack flex flex-col overflow-hidden items-center p-5 sm:items-start sm:p-6 md:p-12 lg:p-18 xl:p-20">
      <Header menuOpen={menuOpen} setMenuOpen={() => setMenuOpen(false)} />

      <div className="flex flex-grow items-center overflow-hidden lg:gap-15">
        <div className="w-70 aspect-[86/85] absolute left-1/2 -translate-x-1/2 bottom-[-22%] sm:bottom-auto sm:translate-x-0 sm:left-20 sm:w-80 md:left-12 md:w-110 lg:left-40">
          <Image
            src="/assets/images/leaf.svg"
            alt="Leaf image"
            fill
            className="opacity-70 sm:opacity-30"
            priority
          />
        </div>

        <div className="flex flex-col gap-5 z-1 ml-0 sm:ml-58 md:ml-62 lg:ml-85">
          <nav className="text-5xl/13 font-semibold text-bluishBlack dark:text-whitesmoke sm:text-6xl/16 md:text-7xl/20">
            {/* Link para cada seção */}
            <ol className="flex flex-col list-decimal marker:text-lg sm:marker:text-xl">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <li>{t("home")}</li>
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                <li>{t("about")}</li>
              </Link>
              <Link href="/projects" onClick={() => setMenuOpen(false)}>
                <li>{t("projects")}</li>
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                <li>{t("contact")}</li>
              </Link>
            </ol>
          </nav>

          {/* Link das redes sociais, com o ícone de setinha */}
          <ul className="flex gap-5 font-inter text-xl [&>a>li]:flex [&>a>li]:items-center [&>a>li]:gap-2 sm:text-2xl">
            <a
              href="https://github.com/gustavodacostap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
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
                github
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/perfil-gustavo-da-costa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
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
                linkedIn
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
