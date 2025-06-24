'use client';

import Image from 'next/image';

export default function ConventionalRTPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/hero-bg.jpg"
          alt="Conventional RT"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Conventional Radiographic Testing</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#003366]">Overview</h2>
              <p className="text-gray-600 mb-6">
                Conventional Radiographic Testing (RT) is a traditional and reliable method of non-destructive testing that uses X-rays or gamma rays to examine the internal structure of materials. This technique produces film-based radiographs that provide permanent records of the inspection.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-[#003366]">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>High-resolution film radiographs</li>
                <li>Permanent physical records</li>
                <li>Excellent detail sensitivity</li>
                <li>Proven reliability</li>
                <li>Industry-standard acceptance criteria</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-[#003366]">Applications</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Weld inspection in critical components</li>
                <li>Casting and forging examination</li>
                <li>Pipeline integrity assessment</li>
                <li>Aerospace components inspection</li>
                <li>Pressure vessel examination</li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#003366]">Our Capabilities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">High-quality X-ray and gamma-ray equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Advanced film processing facilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Certified RT Level II and III technicians</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Film interpretation and storage facilities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#003366]">Quality Assurance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-600">ASME Section V compliance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-600">ISO 17636-1 standards</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-600">Regular equipment calibration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 