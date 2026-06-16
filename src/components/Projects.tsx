import { ExternalLink } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const projects = [
  {
    title: 'Fiskil',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    tags: ['React', 'Next.js', 'Typescript', 'Nest.js', 'PostgreSQL', 'TailwindCSS', 'Figma', 'Cypress', 'Storybook', 'Git'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Fiskil',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    tags: ['React', 'Next.js', 'Typescript', 'Nest.js', 'PostgreSQL', 'TailwindCSS', 'Figma', 'Cypress', 'Storybook', 'Git'],
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Fiskil',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    tags: ['React', 'Next.js', 'Typescript', 'Nest.js', 'PostgreSQL', 'TailwindCSS', 'Figma', 'Cypress', 'Storybook', 'Git'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    link: '#'
  }
];

export function Projects() {
  return (
    <section id="work" className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work" />
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Some of the noteworthy projects I have built:
        </p>

        <div className="space-y-12 md:space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row shadow-sm rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-colors ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="flex-1 bg-gray-50 dark:bg-gray-900/40 p-8 md:p-12 flex items-center justify-center transition-colors border-b md:border-b-0 border-gray-100 dark:border-gray-800">
                <div className="relative rounded-xl overflow-hidden shadow-lg w-full transition-transform hover:scale-105 duration-300">
                  <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
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
