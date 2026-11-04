import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A selection of <span className="text-purple">AI projects</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(({ id, des, gradient, tech, link, title }) => (
          <div
            key={id}
            className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
          >
            <PinContainer title="GitHub" href={link}>
              <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                <div
                  className={`relative flex h-full w-full items-end overflow-hidden bg-[#13162d] bg-gradient-to-br p-6 lg:rounded-3xl ${gradient}`}
                >
                  <span className="absolute right-6 top-4 text-6xl font-bold text-white/10 md:text-8xl">
                    {String(id).padStart(2, "0")}
                  </span>

                  <ul className="relative z-10 flex flex-wrap gap-2">
                    {tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-white/[0.2] bg-black/60 px-3 py-1 text-xs text-white md:text-sm"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h1 className="line-clamp-2 text-base font-bold md:text-xl lg:text-2xl">
                {title}
              </h1>

              <p className="line-clamp-3 text-sm font-light lg:text-lg lg:font-normal">
                {des}
              </p>

              <div className="mb-3 mt-7 flex items-center justify-end">
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center text-sm text-purple md:text-xs lg:text-xl"
                >
                  View on GitHub
                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};
