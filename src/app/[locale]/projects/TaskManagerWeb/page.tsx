import Image from "next/image";

export default function TaskManagerWeb() {
  return (
    <main className="px-5 sm:px-6">
      <div className="relative aspect-[1913/953] w-full rounded-4xl mt-10">
        <Image
          fill
          alt="Cartoon image"
          src="/assets/images/projects/TaskManagerWeb/lista-principal.png"
          className="object-cover object-top"
        />
      </div>
      <h2 className="text-2xl md:text-4xl mt-10 text-darkOrange">
        Task Manager Web
      </h2>
      <hr className="project-lines mt-2" />
      <p className="mt-5">
        Sistema web para gerenciamento de tarefas desenvolvido com ASP.NET Core,
        inicialmente criado com Razor Pages para praticar o padrão MVC e CRUD
        básico. Na sequência, evoluí o projeto para uma SPA (Single Page
        Application) moderna, utilizando API REST, AJAX e JavaScript
        modularizado (ES Modules), com atualizações dinâmicas e sem recarregar a
        página. O projeto foi criado para aprimorar minhas habilidades em
        ASP.NET Core full stack. Usa SQLite como banco de dados local, por isso
        não possui versão online — mas é possível conferir o funcionamento da
        aplicação nas imagens e vídeo abaixo. Tecnologias utilizadas: ASP.NET
        Core 9 · Razor Pages · API REST · C# · Entity Framework Core · SQLite ·
        AJAX (jQuery) · JavaScript ES Modules · jQuery Validation · Bootstrap 5
      </p>

      <h3 className="text-center text-xl">Imagens</h3>

      <div className="relative aspect-[1913/953] w-full rounded-4xl mt-10">
        <Image
          fill
          alt="Cartoon image"
          src="/assets/images/projects/TaskManagerWeb/lista-principal.png"
          className="object-cover object-top"
        />
      </div>
    </main>
  );
}
