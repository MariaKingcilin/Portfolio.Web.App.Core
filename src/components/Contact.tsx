import { Copy, Figma, Github, Mail, Phone, Twitter } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  const email = 'mariakingcilin@gmail.com';
  const phone = '+91 9150331156';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading title="Get in touch" />
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed">
          What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </p>

        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <Mail className="w-8 h-8 md:w-10 md:h-10 text-gray-600 dark:text-gray-300" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              {email}
            </h2>
            <button
              onClick={() => handleCopy(email, 'email')}
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors relative"
              aria-label="Copy email"
            >
              <Copy size={32} />
              {copiedEmail && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-gray-50 dark:text-gray-900 text-xs py-1 px-2 rounded font-medium whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Phone className="w-8 h-8 md:w-10 md:h-10 text-gray-600 dark:text-gray-300" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              {phone}
            </h2>
            <button
              onClick={() => handleCopy(phone, 'phone')}
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors relative"
              aria-label="Copy phone number"
            >
              <Copy size={32} />
              {copiedPhone && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-gray-50 dark:text-gray-900 text-xs py-1 px-2 rounded font-medium whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-gray-600 dark:text-gray-300">
          <p>You may also find me on these platforms!</p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="p-2 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="p-2 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Figma size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
