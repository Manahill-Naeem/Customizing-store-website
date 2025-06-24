'use client';

import Image from 'next/image';

export default function MagneticParticleTestingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/hero-bg.jpg"
          alt="Magnetic Particle Testing"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Magnetic Particle Testing</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#003366]">Overview</h2>
              <p className="text-gray-600 mb-6">
                Magnetic Particle Testing (MPT) is a non-destructive testing method used to detect surface and near-surface 
                discontinuities in ferromagnetic materials. This method is particularly effective for finding cracks, seams, 
                and other defects in welds, forgings, and castings.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]">Applications</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Weld inspection and testing</li>
                <li>Surface crack detection</li>
                <li>Forging and casting examination</li>
                <li>In-service inspection of equipment</li>
                <li>Quality control in manufacturing</li>
              </ul>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]">Benefits</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Fast and reliable results</li>
                <li>Cost-effective inspection method</li>
                <li>Minimal surface preparation required</li>
                <li>Effective for complex geometries</li>
                <li>Portable equipment available</li>
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
                    <span className="text-gray-600">Advanced magnetic particle testing equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Certified MPT Level II and III technicians</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Both wet and dry particle techniques</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Mobile inspection capabilities</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#003366]">Standards & Compliance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-600">ASME Section V</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-600">ISO 9934</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-600">ASTM E1444</span>
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