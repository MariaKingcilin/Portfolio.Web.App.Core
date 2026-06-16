import { SectionHeading } from './SectionHeading';

const testimonials = [
  {
    name: 'John Doe',
    title: 'Founder - xyz.com',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=random&color=fff&rounded=true',
    quote: '"Job well done! I am really impressed. He is very very good at what he does :) I would recommend Sagar and will definitely work with him again."'
  },
  {
    name: 'Jane Doe',
    title: 'Founder - abc.com',
    avatar: 'https://ui-avatars.com/api/?name=Jane+Doe&background=random&color=fff&rounded=true',
    quote: '"Great guy, highly recommended for any complex front-end development job! His skills are top-notch and he will be an amazing addition to any team."'
  },
  {
    name: 'Alice Smith',
    title: 'Freelancer',
    avatar: 'https://ui-avatars.com/api/?name=Alice+Smith&background=random&color=fff&rounded=true',
    quote: '"Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to immediately dive into our project and make an impact."'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Testimonials" />
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Nice things people have said about me:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-colors"
            >
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-6"
              />
              <p className="text-gray-600 dark:text-gray-300 flex-grow mb-6 italic leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-50 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
