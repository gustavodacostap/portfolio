import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  return (
    <main className="mt-10 mx-5 sm:mx-6 md:mx-12 lg:mx-35 xl:mt-20 xl:mx-20 2xl:mx-40">
      <div className="flex">
        <span className="brackets">&#123;</span>
        <h2 className="text-4xl lg:text-5xl">{t("h2")}</h2>
        <span className="brackets">&#125;</span>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col gap-8 xl:gap-0 xl:flex-row">
        <div className="flex flex-col flex-1 gap-2 md:gap-0 md:flex-row xl:gap-8">
          <h3 className="flex-1 text-xl lg:text-2xl xl:flex-none">
            {t("email")}
          </h3>
          <div className="flex-1 xl:flex-none">
            <a
              href="mailto:gustavopaulyno2012@gmail.com"
              target="_blank"
              className="text-lg flex flex-1"
            >
              <div className="flex items-baseline gap-2">
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
                <p className="text-xl lg:text-2xl">
                  gustavopaulyno2012@
                  <wbr />
                  gmail
                  <wbr />
                  .com
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2 md:gap-0 md:flex-row xl:gap-8">
          <h3 className="flex-1 text-xl lg:text-2xl xl:flex-none">
            {t("social")}
          </h3>
          <ul className="[&>a>li]:flex [&>a>li]:items-center [&>a>li]:gap-2 flex-1 xl:flex-none">
            <a href="https://www.linkedin.com/in/perfil-gustavo-da-costa/">
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
                <p className="text-xl lg:text-2xl">github</p>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/perfil-gustavo-da-costa/">
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
                <p className="text-xl lg:text-2xl">linkedIn</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </main>
  );
}
