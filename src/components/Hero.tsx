import { Github, Twitter, Figma, MapPin } from "lucide-react";
import HeroImage from "../assets/hero-img.png";

export function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12"
    >
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Hi, I'm Maria Kingcilin
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate Software Developer. I like to build products from
            scratch. I am specialized in building things for the web/mobile. I'm
            a software developer focused on building (and occasionally
            designing) exceptional digital experiences.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <MapPin size={20} />
            <span>Tenkasi, Tamilnadu, India</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="#"
            className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Figma size={24} />
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96">
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-lg translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6"></div>
          <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden border-4 border-white dark:border-gray-950">
            <img
              src={HeroImage}
              alt="Maria Kingcilin S"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
