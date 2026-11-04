import { skillGroups, stats } from "@/data";

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        Skills &amp; <span className="text-purple">measurable results</span>
      </h1>

      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center rounded-3xl border border-white/[0.1] px-4 py-8 text-center"
            style={{ background: "rgb(4,7,29)" }}
          >
            <span className="text-4xl font-bold text-purple md:text-5xl">
              {stat.value}
            </span>
            <span className="mt-3 text-xs text-white-200 md:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/[0.1] p-6 md:p-8"
            style={{ background: "rgb(4,7,29)" }}
          >
            <h2 className="text-lg font-bold text-blue-100 md:text-xl">
              {group.title}
            </h2>

            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-[#10132e] px-3 py-2 text-xs text-white-100 md:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
