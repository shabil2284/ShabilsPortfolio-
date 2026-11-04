import {
  FaBoxesStacked,
  FaBrain,
  FaChartLine,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa6";

import { Button } from "@/components/ui/moving-borders";
import { education, workExperience } from "@/data";

const icons = {
  ai: FaBrain,
  data: FaChartLine,
  web: FaLaptopCode,
  ops: FaBoxesStacked,
} as const;

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
        {workExperience.map((experience, index) => {
          const Icon = icons[experience.icon];

          return (
            <Button
              key={experience.id}
              borderRadius="1.75rem"
              containerClassName="md:col-span-1"
              className="flex-1 border-neutral-200 text-white dark:border-slate-800"
              duration={12000 + index * 2500}
            >
              <div className="flex flex-col gap-4 p-5 py-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#10132e] text-purple md:size-14">
                    <Icon className="size-6" />
                  </div>

                  <div>
                    <h2 className="text-start text-xl font-bold md:text-2xl">
                      {experience.title}
                    </h2>
                    <p className="text-start text-sm text-purple md:text-base">
                      {experience.company}
                    </p>
                    <p className="text-start text-xs text-white-200 md:text-sm">
                      {experience.period} · {experience.location}
                    </p>
                  </div>
                </div>

                <ul className="list-disc space-y-2 ps-5 text-start text-sm font-normal text-white-100 md:text-base">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Button>
          );
        })}
      </div>

      <div
        id="education"
        className="mx-auto mt-16 flex max-w-3xl items-center gap-5 rounded-3xl border border-white/[0.1] p-6 md:p-8"
        style={{ background: "rgb(4,7,29)" }}
      >
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#10132e] text-purple md:size-14">
          <FaGraduationCap className="size-6" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-blue-100">
            Education
          </p>
          <h2 className="mt-1 text-lg font-bold md:text-2xl">
            {education.degree}
          </h2>
          <p className="text-sm text-white-100 md:text-base">
            {education.school}
          </p>
          <p className="text-xs text-white-200 md:text-sm">
            {education.period} · {education.location}
          </p>
        </div>
      </div>
    </section>
  );
};
