'use client';

import Image from 'next/image';

export default function ClientsAndPartnersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/hero-bg.jpg"
          alt="Clients and Partners"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Clients and Partners
          </h1>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#003366]">Projects</h2>
          <div className="prose max-w-4xl">
            <p className="text-gray-700 mb-8">
              We are fully aware of the stringent safety requirements in the Oil & Gas, Infrastructure, Chemical and Power Industries. 
              We have the capability to detect error and defects at the initial stages using advanced Non Destructive Testing (NDT) services.
            </p>
            <p className="text-gray-700">
              ARL's role is to provide support quality controls systems that are currently in place. We also are able to set up risk based 
              maintenance (RBM), modernisation and investment plans. ARL will manage your maintenance programs and shutdowns.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Presence Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-[#003366]">Strategic Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Europe */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#003366]">Europe</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Spain</li>
                <li>Veneto</li>
              </ul>
            </div>

            {/* Middle East & South Asia */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#003366]">Middle East & South Asia</h3>
              <ul className="space-y-2 text-gray-700">
                <li>UAE</li>
                <li>Pakistan</li>
                <li>India</li>
              </ul>
            </div>

            {/* Southeast Asia */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#003366]">Southeast Asia</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Thailand</li>
                <li>China</li>
                <li>Vietnam</li>
                <li>Malaysia</li>
              </ul>
            </div>

            {/* Pacific */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#003366]">Pacific</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Fiji</li>
                <li>PNG</li>
                <li>New Caledonia</li>
              </ul>
            </div>

            {/* Australia */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#003366]">Australia</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Brisbane</li>
                <li>Newcastle</li>
                <li>Sydney</li>
                <li>Wollongong</li>
                <li>South Australia</li>
                <li>Perth</li>
                <li>Darwin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 