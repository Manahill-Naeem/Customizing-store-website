'use client';

import { useState, useEffect } from 'react';
// import Link from 'next/link'; // next/link ko hata diya gaya hai

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openCategory, setOpenCategory] = useState('');
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setOpenCategory('');
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    {
      href: '#',
      label: 'Services',
      dropdown: [
        {
          id: 'radiographic',
          href: '/services/radiographic-testing',
          title: 'Radiographic Testing',
          items: [
            { href: '/services/radiographic-testing/conventional-rt', label: 'Conventional RT' },
            { href: '/services/radiographic-testing/digital-rt', label: 'Digital RT' },
          ],
        },
        {
          id: 'ultrasonic',
          href: '/services/ultrasonic-testing',
          title: 'Ultrasonic Testing',
          items: [
            { href: '/services/ultrasonic-testing/thickness-gauging', label: 'Ultrasonic Thickness Gauging' },
            { href: '/services/ultrasonic-testing/discontinuity-detection', label: 'Detection of Discontinuity in Parent Metal' },
          ],
        },
        {
          id: 'magnetic',
          href: '/services/magnetic-particle-testing',
          title: 'Magnetic Particle Testing',
          items: []
        },
        {
          id: 'dye',
          href: '/services/dye-penetrant-testing',
          title: 'Dye Penetrant Testing',
          items: []
        }
      ],
    },
    { href: '/clients-and-partners', label: 'Clients & Partners' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
    { href: '/portal', label: 'Client Portal' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="ARL Logo"
              width={120}
              height={40}
              className={`transition-opacity duration-300 ${
                scrolled ? 'opacity-100' : 'opacity-0'
              }`}
              // onError prop removed
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                >
                  <button
                    onClick={link.dropdown ? toggleServices : undefined}
                    onDoubleClick={link.dropdown ? () => {
                        if (typeof window !== 'undefined') {
                            window.location.href = '/services';
                        }
                    } : undefined}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      scrolled
                        ? 'text-gray-900 hover:bg-gray-100'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {link.dropdown ? (
                      <span className="flex items-center">
                        {link.label}
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'transform rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </button>
                  {link.dropdown && servicesOpen && (
                    <div className="absolute left-0 mt-2 w-80 bg-[#003366] rounded-md py-2 z-50">
                      {link.dropdown.map((category) => (
                        <div key={category.id} className="px-4 py-2">
                          <div className="w-full text-left text-sm font-semibold text-white mb-2 flex justify-between items-center group">
                            <a
                              href={category.href}
                              className="flex-grow hover:text-gray-200 transition-colors duration-200"
                            >
                              {category.title}
                            </a>
                            {category.items.length > 0 && (
                              <button
                                onClick={() => setOpenCategory(openCategory === category.id ? '' : category.id)}
                                className="ml-2 p-1 hover:bg-[#004488] rounded-full transition-all duration-200"
                              >
                                <svg
                                  className={`w-4 h-4 transition-transform text-white ${openCategory === category.id ? 'transform rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                            )}
                          </div>
                          {openCategory === category.id && category.items.length > 0 && (
                            <div className="space-y-2 pl-4">
                              {category.items.map((item) => (
                                <a
                                  key={item.href}
                                  href={item.href}
                                  className="block text-sm text-gray-200 hover:text-white hover:bg-[#004488] px-2 py-1 rounded transition-colors duration-200"
                                >
                                  {item.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-gray-900' : 'text-white'
              } hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Duplicate strokeLinecap removed */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 bg-[#003366]' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.dropdown ? (
                  <button
                    onClick={toggleServices}
                    onDoubleClick={() => {
                        if (typeof window !== 'undefined') {
                            window.location.href = '/services';
                        }
                    }}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#004488] transition-colors duration-200 flex items-center justify-between"
                  >
                    {link.label}
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#004488] transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
                {link.dropdown && servicesOpen && (
                  <div className="pl-4 space-y-2">
                    {link.dropdown.map((category) => (
                      <div key={category.id} className="py-2">
                        <div className="flex items-center">
                          <a
                            href={category.href}
                            className="flex-grow px-3 text-sm font-semibold text-white hover:text-gray-200 transition-colors duration-200"
                          >
                            {category.title}
                          </a>
                          {category.items.length > 0 && (
                            <button
                              onClick={() => setOpenCategory(openCategory === category.id ? '' : category.id)}
                              className="p-1 hover:bg-[#004488] rounded-full transition-all duration-200"
                            >
                              <svg
                                className={`w-4 h-4 transition-transform text-white ${openCategory === category.id ? 'transform rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          )}
                        </div>
                        {openCategory === category.id && category.items.length > 0 && (
                          <div className="space-y-1 mt-1 pl-4">
                            {category.items.map((item) => (
                              <a
                                key={item.href}
                                href={item.href}
                                className="block text-sm text-gray-200 hover:text-white hover:bg-[#004488] px-3 py-1 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
