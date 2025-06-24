'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Radiographic Testing',
      description: 'Advanced radiographic testing services for detecting internal defects, voids, and structural integrity in materials and welds.',
      image: '/radiographic.jpg',
      href: '/services/radiographic-testing',
      subServices: [
        { name: 'Conventional RT', href: '/services/radiographic-testing/conventional-rt' },
        { name: 'Digital RT', href: '/services/radiographic-testing/digital-rt' },
      ]
    },
    {
      title: 'Ultrasonic Testing',
      description: 'Comprehensive ultrasonic inspection and testing services for detecting flaws, measuring thickness, and ensuring material integrity.',
      image: '/ultrasonic.jpg',
      href: '/services/ultrasonic-testing',
      subServices: [
        { name: 'Ultrasonic Thickness Gauging', href: '/services/ultrasonic-testing/thickness-gauging' },
        { name: 'Detection of Discontinuity', href: '/services/ultrasonic-testing/discontinuity-detection' },
      ]
    },
    {
      title: 'Magnetic Particle Testing',
      description: 'Specialized magnetic particle testing to detect surface and near-surface discontinuities in ferromagnetic materials.',
      image: '/magnetic.jpg',
      href: '/services/magnetic-particle-testing',
    },
    {
      title: 'Dye Penetrant Testing',
      description: 'Professional dye penetrant testing services for detecting surface-breaking defects and discontinuities in materials.',
      image: '/dyepenetrant.jpg',
      href: '/services/dye-penetrant-testing',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/hero-bg.jpg"
          alt="NDT Services"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Our NDT Services
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl font-medium drop-shadow-lg">
            Comprehensive Non-Destructive Testing Solutions for Industry Leaders
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Explore Our Services</h2>
            <div className="w-20 h-1 bg-[#003366] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We offer a comprehensive range of NDT services to meet your inspection and testing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#003366] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  {service.subServices ? (
                    <div className="space-y-3 mb-6">
                      <h4 className="font-medium text-[#003366]">Available Services:</h4>
                      <ul className="space-y-2">
                        {service.subServices.map((sub) => (
                          <li key={sub.name} className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 text-[#003366] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                            <Link href={sub.href} className="hover:text-[#003366] transition-colors">
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  
                  <Link
                    href={service.href}
                    className="inline-block bg-[#003366] text-white px-6 py-2 rounded hover:bg-[#004488] transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-6">Need Expert NDT Services?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your testing and inspection requirements. Our team of experts is ready to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#003366] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </Link> 
        </div>
      </section>
    </main>
  );
} 