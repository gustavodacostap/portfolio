import Image from "next/image"

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
          <h2 className="text-3xl md:text-4xl mt-10 text-darkOrange h-12">Task Manager Web</h2>
          <hr className="project-lines"/>
          <p>description...</p>

          <h3 className="text-center">Imagens</h3>

          <div className="relative aspect-[1913/953] w-full rounded-4xl mt-10">
            <Image
              fill
              alt="Cartoon image"
              src="/assets/images/projects/TaskManagerWeb/lista-principal.png"
              className="object-cover object-top"
            />
          </div>
        </main>
    )
}