import Link from 'next/link';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { name: 'Present Tenses', href: '/tenses/present-simple' },
    { name: 'Past Tenses', href: '/tenses/past-simple' },
    { name: 'Future Tenses', href: '/tenses/future-simple' },
    { name: 'Grammar Basics', href: '/grammer-basics-in-urdu' },
    { name: 'Verb Forms', href: '/verb-forms' },
    { name: 'Exercises', href: '/exercises-in-urdu' },
    { name: 'Quizzes', href: '/quizzes' },
  ];

  const resources = [
    { name: 'Learning Tips', href: '/tips' },
    { name: 'Common Mistakes', href: '/mistakes' },
    { name: 'All Tenses', href: '/tenses' },
    { name: 'Tenses in Urdu', href: '/tenses-in-urdu' },
    { name: 'Exercises', href: '/exercises' },
    { name: 'FAQ', href: '/faq' },
  ];

  const legal = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Tenses<span className="text-green-400">Urdu</span>
            </h2>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Learn English Tenses in Urdu with our comprehensive course. 
              Master grammar step by step through Urdu explanations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/muhammad-usman-004b363a4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="mailto:um558899@gmail.com" 
                className="text-gray-400 hover:text-white transition"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    href={resource.href} 
                    className="text-gray-400 hover:text-white transition duration-300 text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal - NEW COLUMN */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                <span className="block">📧 {''}
                  <a href="mailto:um558899@gmail.com" className="hover:text-white transition">
                    um558899@gmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TensesUrdu. All rights reserved.
          </p>
          <p className="mt-2 text-gray-500 text-xs">
            Learn English tenses step by step | English grammar tenses in Urdu | Tenses in Urdu with examples
          </p>
        </div>
      </div>
    </footer>
  );
}