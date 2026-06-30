'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaHome, FaBook, FaGraduationCap, FaQuestionCircle, FaLightbulb, FaExclamationTriangle, FaSpellCheck, FaLanguage } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getCurrentPageName = () => {
    if (pathname === '/') return 'Home';
    if (pathname === '/tenses-in-urdu') return 'Tenses in Urdu';
    if (pathname === '/exercises-in-urdu') return 'Exercises in Urdu';
    if (pathname === '/mistakes') return 'Common Mistakes';
    if (pathname === '/quizzes') return 'Quizzes';
    if (pathname === '/tips') return 'Learning Tips';
    if (pathname === '/grammer-basics-in-urdu') return 'Grammar Basics';
    if (pathname === '/verb-forms') return 'Verb Forms';
    
    // For tense pages
    if (pathname.includes('/tenses-in-urdu/')) {
      const tenseName = pathname.split('/')[2];
      if (tenseName) {
        return tenseName.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
      }
    }
    
    // For quiz pages
    if (pathname.includes('/quizzes/')) {
      const quizName = pathname.split('/')[2];
      if (quizName) {
        return quizName.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
      }
    }
    
    return 'Current Page';
  };

  const navItems = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'Tenses', href: '/tenses-in-urdu', icon: <FaBook /> },
    { name: 'Grammar', href: '/grammer-basics-in-urdu', icon: <FaSpellCheck /> },
    { name: 'Verb Forms', href: '/verb-forms', icon: <FaLanguage /> },
    { name: 'Exercises', href: '/exercises-in-urdu', icon: <FaGraduationCap /> },
    { name: 'Mistakes', href: '/mistakes', icon: <FaExclamationTriangle /> },
    { name: 'Quizzes', href: '/quizzes', icon: <FaQuestionCircle /> },
    { name: 'Tips', href: '/tips', icon: <FaLightbulb /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Tenses<span className="text-green-400">Urdu</span>
            </Link>
            <p className="text-xs text-gray-300">Learn English Tenses in Urdu</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href 
                    ? 'text-white font-bold flex items-center space-x-2 transition duration-300 border-b-2 border-green-400 pb-1' 
                    : 'text-gray-300 hover:text-white font-medium flex items-center space-x-2 transition duration-300'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 ${
                  pathname === item.href 
                    ? 'text-white font-bold flex items-center space-x-3 transition duration-300 border-b-2 border-green-400 pb-1' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800 rounded-md font-medium flex items-center space-x-3'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}