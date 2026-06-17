import { ExternalLink } from 'lucide-react';
import Hawkeye from "../assets/hawkeye-img.png";
import MamaEarth from "../assets/mamaearth-img.png";
import MandlacX from "../assets/mandlacx-img.png";
import { SectionHeading } from './SectionHeading';

const projects = [
  {
    title: 'Mamaearth Clone',
    description: 'Mamaearth Clone | React.js, Redux Toolkit, Firebase Developed a fully functional e-commerce web application featuring product categorization (Baby, Face, Hair, Body), dynamic product details, a robust cart system, and secure checkout flow. Built with a focus on responsive UI and efficient state management.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase', 'Sass', 'Git', 'Material UI', 'Redux', 'React Router', 'Axios'],
    image: MamaEarth,
    link: 'https://mamaearth-clone-web.vercel.app/'
  },
  {
    title: 'Mandlac X',
    description: 'Enhanced responsive web and mobile features utilizing React.js and React Native, Integrated REST APIs for dynamic data rendering and implemented Firebase Cloud Messaging(FCM) for push notifications, Executed WebSocket communication to enable real-time device interaction.',
    tags: ['HTML', 'CSS', 'TypeScript', 'React', 'TailwindCSS', 'Figma', 'Git', 'Shadcn UI', 'Axios', 'React Router', 'Socket.io', 'React Native', 'Firebase', 'React Query'],
    image: MandlacX,
    link: 'https://mx-ids-ui-dev.azurewebsites.net/'
  },
  {
    title: 'Hawkeye',
    description: 'Built a real-time monitoring web app for capturing vehicle weight and live images, Deployed WebSocket protocols to ensure seamless hardware-to-software communication, Designed a responsive UI and optimized frontend performance for high-traffic monitoring.',
    tags: ['HTML', 'CSS', 'TypeScript', 'React', 'TailwindCSS', 'Figma', 'Git', 'Shadcn UI', 'Axios', 'React Router', 'Socket.io', 'Zod', 'React Query', 'Zustand'],
    image: Hawkeye,
    link: 'https://hawkeyeqas.nipponpaint.co.in/'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Projects" />
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Some of the noteworthy projects I have built:
        </p>

        <div className="space-y-12 md:space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row shadow-sm rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-colors ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Image Section */}
              <div className="flex-1 bg-gray-50 dark:bg-gray-900/40 p-8 md:p-12 flex items-center justify-center transition-colors border-b md:border-b-0 border-gray-100 dark:border-gray-800">
                <div className="relative rounded-xl overflow-hidden shadow-lg w-full transition-transform hover:scale-105 duration-300">
                  <img src={project.image} alt={project.title} className="w-full h-full object-fit" />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-gray-900 transition-colors">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
