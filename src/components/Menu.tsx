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
    <div className="h-screen fixed inset-0 z-50 bg-whitesmoke dark:bg-bluishBlack flex flex-col overflow-hidden items-center sm:items-start">
      <Header menuOpen={menuOpen} setMenuOpen={() => setMenuOpen(false)} />

      <div className="flex flex-grow items-center overflow-hidden lg:gap-15">
        <div className="h-[35%] aspect-[86/85] absolute left-1/2 -translate-x-1/2 bottom-[-15%] sm:h-auto sm:bottom-auto sm:translate-x-0 sm:left-20 sm:w-80 md:left-12 md:w-110 lg:left-40">
          <Image
            src="/assets/images/leaf.svg"
            alt="Leaf image"
            fill
            className="opacity-70 sm:opacity-30"
            priority
          />
        </div>

        <div className="flex flex-col gap-5 z-2 ml-0 sm:ml-58 md:ml-62 lg:ml-85">
          <nav className="text-5xl/13 font-semibold text-bluishBlack dark:text-whitesmoke sm:text-6xl/16 md:text-7xl/20">
            {/* Link para cada seção */}
            <ol className="flex flex-col list-decimal marker:text-lg sm:marker:text-xl">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={() => setMenuOpen(false)}>
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  {t("contact")}
                </Link>
              </li>
            </ol>
          </nav>

          {/* Link das redes sociais, com o ícone de setinha */}
          <ul className="flex gap-5 font-inter text-xl [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2 sm:text-2xl">
            <li>
              <a
                href="https://github.com/gustavodacostap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
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
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/perfil-gustavo-da-costa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
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
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
