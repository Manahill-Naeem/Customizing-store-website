'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const majorServices = [
    {
      title: 'Radiographic Testing',
      description: 'Advanced radiographic testing services for detecting internal defects, voids, and structural integrity in materials and welds.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: 'Ultrasonic Testing',
      description: 'Comprehensive ultrasonic inspection and testing services for detecting flaws, measuring thickness, and ensuring material integrity.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 18c.253 0 .5-.022.742-.065m-7.278-7.278a5 5 0 016.536-6.536m3.465 3.465a5 5 0 01-6.536 6.536" />
        </svg>
      ),
    },
    {
      title: 'Magnetic Particle Testing',
      description: 'Specialized magnetic particle testing to detect surface and near-surface discontinuities in ferromagnetic materials.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Dye Penetrant Testing',
      description: 'Professional dye penetrant testing services for detecting surface-breaking defects and discontinuities in materials.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/hero-bg.jpg"
          alt="Optivance Inspect"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Optivance Inspect 
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl font-medium drop-shadow-lg">
            Your trusted partner in Non-Destructive Testing, Mechanical Testing, and Storage Tank Services
          </p>
          <Link 
            href="/services" 
            className="bg-[#003366] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#004488] transition-colors duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Safety, Quality, and Efficiency Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Safety Card */}
            <div className="bg-[#F3F4F6] p-8 rounded-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#003366]">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-[#003366] mb-4">Safety</h3>
              <p className="text-gray-600 text-center">
                Our commitment to workplace safety is unwavering. We maintain rigorous safety protocols and standards across all our operations.
              </p>
            </div>

            {/* Quality Card */}
            <div className="bg-[#F3F4F6] p-8 rounded-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#003366]">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-[#003366] mb-4">Quality</h3>
              <p className="text-gray-600 text-center">
                We maintain the highest standards of quality in all our services. Our accreditations reflect our commitment to excellence.
              </p>
            </div>

            {/* Efficiency Card */}
            <div className="bg-[#F3F4F6] p-8 rounded-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#003366]">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-[#003366] mb-4">Efficiency</h3>
              <p className="text-gray-600 text-center">
                Our streamlined processes and experienced team ensure quick turnaround times without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Major Services */}
      <section className="py-16 bg-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">NDT Services</h2>
          <p className="text-center text-gray-200 mb-12 max-w-4xl mx-auto font-medium">
            ARL specializes in comprehensive Non-Destructive Testing (NDT) services. Our expert team utilizes advanced 
            techniques and state-of-the-art equipment to ensure the highest quality inspections.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {majorServices.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex justify-center mb-4">
                  <div className="text-[#003366] group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-[#003366] group-hover:text-[#004488] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">{service.description}</p>
                <div className="mt-6 text-center">
                  <Link
                    href="/services"
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

      {/* Accreditation Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Accreditations</h2>
            <div className="w-20 h-1 bg-[#003366] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Recognized for excellence in NDT and Mechanical Testing services through our prestigious accreditations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="relative h-40 w-full">
                  <Image
                    src="/accreditations-pnac.png"
                    alt="PNAC Accreditation"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#003366] mb-4 text-center">PNAC Accredited Laboratory</h3>
              <div className="h-1 w-16 bg-[#003366] mx-auto mb-4"></div>
              <p className="text-gray-600 text-center mb-6">
                Our PNAC accreditation validates our commitment to maintaining the highest standards 
                in testing and inspection services.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#003366] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  International Standards Compliance
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#003366] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Quality Management System
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-[#003366] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Technical Competence
                </li>
              </ul>
            </div>

            <div className="bg-[#003366] rounded-lg p-8 text-white shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Why Our Accreditation Matters</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Assured Quality</h4>
                    <p className="text-gray-200">Our accreditation ensures consistent, high-quality testing services that meet international standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Technical Excellence</h4>
                    <p className="text-gray-200">Demonstrates our technical competence and commitment to continuous improvement.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Client Trust</h4>
                    <p className="text-gray-200">Builds confidence with clients through recognized certification and standardized processes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#003366]">Get in Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about our services? We're here to help. Contact our team for expert assistance.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#003366] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#004488] transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
} 