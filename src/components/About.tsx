import { SectionHeading } from "./SectionHeading";
import AboutImage from "../assets/about-img.png";

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <div className="flex-1 flex justify-center w-full">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-lg -translate-x-4 translate-y-4 md:-translate-x-6 md:translate-y-6"></div>
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden border-4 border-gray-50 dark:border-gray-900">
                <img
                  src={AboutImage}
                  alt="Maria Kingcilin S"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6 text-gray-600 dark:text-gray-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
              Curious about me? Here you have it:
            </h3>

            <p className="text-base leading-relaxed">
              I'm a passionate Software Developer who likes to build products
              from scratch. I specialize in building things for the web/mobile.
              I focus on developing exceptional digital experiences that are
              fast, accessible, visually appealing, and responsive. Even though
              I have been creating web applications for over 2+ years, I still
              love it as if it was my first day.
            </p>

            <p className="text-base leading-relaxed">
              I began my journey as a web developer in 2023, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
            </p>

            <p className="text-base leading-relaxed">
              When I'm not in full-on developer mode, you can find me hovering
              around on GitHub, exploring new frameworks or digging into the
              latest tech news.
            </p>

            <div className="pt-4 space-y-2">
              <p className="font-medium text-gray-900 dark:text-gray-50">
                Finally, some quick bits about me:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-gray-50"></span>
                  <span>B.Sc in Computer Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-gray-50"></span>
                  <span>Avid learner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
