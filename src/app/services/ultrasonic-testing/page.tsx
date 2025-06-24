'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function UltrasonicTestingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/hero-bg.jpg"
          alt="Ultrasonic Testing"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Ultrasonic Testing</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#003366]">Overview</h2>
              <p className="text-gray-600 mb-6">
                Ultrasonic Testing (UT) is an advanced non-destructive testing method that uses high-frequency sound waves 
                to detect flaws and measure material thickness. This versatile technique provides detailed information about 
                material properties and internal conditions without causing any damage.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]">Applications</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><Link href="/services/ultrasonic-testing/thickness-gauging" className="text-[#003366] hover:underline">Ultrasonic Thickness Gauging</Link></li>
                <li><Link href="/services/ultrasonic-testing/discontinuity-detection" className="text-[#003366] hover:underline">Detection of Discontinuity in Parent Metal</Link></li>
                <li>Thickness measurement and corrosion mapping</li>
                <li>Weld inspection and quality assessment</li>
                <li>Flaw detection in materials</li>
                <li>Bond testing and lamination checks</li>
                <li>Material characterization</li>
              </ul>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]">Benefits</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Immediate results and interpretation</li>
                <li>High accuracy and reliability</li>
                <li>No radiation hazards</li>
                <li>Portable and versatile equipment</li>
                <li>Cost-effective inspection method</li>
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
                    <span className="text-gray-600">Advanced ultrasonic testing equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Certified UT Level II and III technicians</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Phased array ultrasonic testing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Time of flight diffraction (TOFD)</span>
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
                    <span className="text-gray-600">ISO 16810</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#003366] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-600">ASTM Standards</span>
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