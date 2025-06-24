import Image from 'next/image';

export default function PartnersPage() {
  const strategicPartners = [
    {
      name: 'ASME',
      logo: '/partners/asme-logo.png',
      description: 'American Society of Mechanical Engineers - Global leader in developing codes and standards for mechanical engineering.',
    },
    {
      name: 'API',
      logo: '/partners/api-logo.png',
      description: 'American Petroleum Institute - Leading standards organization for the oil and natural gas industry.',
    },
    {
      name: 'ISO',
      logo: '/partners/iso-logo.png',
      description: 'International Organization for Standardization - World\'s largest developer of voluntary international standards.',
    },
  ];

  const certifications = [
    {
      name: 'ISO 9001:2015',
      image: '/partners/iso-9001.png',
      description: 'Quality Management Systems certification ensuring consistent quality in our services.',
    },
    {
      name: 'AS/NZS ISO 3834',
      image: '/partners/iso-3834.png',
      description: 'Quality requirements for fusion welding of metallic materials.',
    },
    {
      name: 'AS/NZS 5131',
      image: '/partners/as-nzs-5131.png',
      description: 'Structural steelwork fabrication and erection certification.',
    },
  ];

  const partnerBenefits = [
    {
      title: 'Technical Expertise',
      description: 'Access to cutting-edge technology and industry best practices through our partnerships.',
      icon: '🔧',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes backed by international standards and certifications.',
      icon: '✅',
    },
    {
      title: 'Global Network',
      description: 'Worldwide network of partners and experts for comprehensive project support.',
      icon: '🌐',
    },
    {
      title: 'Continuous Improvement',
      description: 'Regular training and updates to maintain the highest standards of service.',
      icon: '📈',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/partners-hero.jpg"
          alt="Our Partners"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Partners</h1>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Strategic Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategicPartners.map((partner) => (
              <div key={partner.name} className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-24 mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-24 mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Partner Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Partnership?</h2>
          <p className="text-gray-600 mb-8">
            We're always looking to expand our network of partners. If you're interested in exploring partnership opportunities with ARL, please get in touch with us.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
} 