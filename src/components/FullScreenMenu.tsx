import Link from "next/link";
import Header from "./Header";
import Image from "next/image";

interface Props {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function FullScreenMenu({ menuOpen, setMenuOpen }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-whitesmoke dark:bg-bluishBlack flex flex-col sm:p-6 md:p-12 lg:p-18 xl:p-20">
      {/* Header adaptado */}
      <Header
        showLanguageSwitcher
        showThemeToggle
        menuOpen={menuOpen}
        setMenuOpen={() => setMenuOpen(false)}
      />

      {/* Container relativo para controlar os filhos absolutos */}
      <div className="flex flex-1 items-center gap-10">
        {/* Imagem como fundo */}
        <Image
          src="/assets/images/leaf.svg"
          alt="Leaf image"
          width={400}
          height={400}
          className="opacity-70 h-auto left-30" // cover para preencher sem distorcer, opacity para deixar transparente
          priority
        />

        {/* Links acima da imagem */}
        <div className="flex flex-col gap-5">
          <nav className="text-7xl/21 font-semibold text-bluishBlack dark:text-whitesmoke">
            <ol className="flex flex-col list-decimal marker:text-xl">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <li>Home</li>
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                <li>Sobre</li>
              </Link>
              <Link href="/projects" onClick={() => setMenuOpen(false)}>
                <li>Projetos</li>
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                <li>Contato</li>
              </Link>
            </ol>
          </nav>
          <ul className="flex gap-5 font-inter text-lg [&>a>li]:flex [&>a>li]:items-center [&>a>li]:gap-2">
            <a
              href="https://github.com/gustavodacostap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                Github
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
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                LinkedIn
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
