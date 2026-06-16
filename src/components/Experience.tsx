import { SectionHeading } from "./SectionHeading";
import TritonLogo from "../assets/triton-logo.ico";

const experiences = [
  {
    company: "Triton Tech Labs",
    logo: TritonLogo,
    role: "Frontend Developer",
    date: "Dec 2023 - Present",
    bullets: [
      "Built responsive web and mobile applications using React.js, React Native and TypeScript.",
      "Integrated REST APIs and WebSocket-based real-time features.",
      "Optimized application performance and reusable components.",
      "Collaborated with teams to deliver scalable frontend solutions."
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/40 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <SectionHeading title="Experience" />
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
          Here is a quick summary of my most recent experiences:
        </p>

        <div className="w-full space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-8 flex flex-col md:flex-row gap-8 shadow-sm transition-colors"
            >
              <div className="flex-shrink-0 flex justify-center md:justify-start">
                <div className="w-16 h-16 rounded-full border border-gray-100 dark:border-gray-800 flex justify-center items-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="object-contain size-12"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                    {exp.role}
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    {exp.date}
                  </span>
                </div>

                <ul className="list-disc leading-relaxed text-gray-600 dark:text-gray-300 ml-4 space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
