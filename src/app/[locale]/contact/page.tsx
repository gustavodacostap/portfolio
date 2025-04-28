import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  return (
    <main className="mt-20 mx-40">
      <h2>{t("h2")}</h2>
      <hr className="my-5" />
      <div className="flex">
        <div className="flex flex-1 gap-8">
          <h3>{t("email")}</h3>
          <a
            href="mailto:gustavopaulyno2012@gmail.com"
            target="_blank"
            className="text-lg flex"
          >
            <div className="flex items-baseline gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="darkOrange"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xl">gustavopaulyno2012@gmail.com</p>
            </div>
          </a>
        </div>
        <div className="flex flex-1 gap-8">
          <h3>{t("social")}</h3>
          <ul className="[&>a>li]:flex [&>a>li]:items-center [&>a>li]:gap-2">
            <a href="https://www.linkedin.com/in/perfil-gustavo-da-costa/">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="darkOrange"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-xl">github</p>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/perfil-gustavo-da-costa/">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="darkOrange"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-xl">linkedIn</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </main>
  );
}
