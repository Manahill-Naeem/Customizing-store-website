import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { name: 'About ARL', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Clients and Partners', href: '/clients' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Client Portal', href: '/portal' },
  ];

  const majorServices = [
    {
      name: 'Radiographic Testing',
      href: '/services/radiographic-testing',
      subServices: [
        { name: 'Conventional RT', href: '/services/radiographic-testing/conventional-rt' },
        { name: 'Digital RT', href: '/services/radiographic-testing/digital-rt' },
      ]
    },
    {
      name: 'Ultrasonic Testing',
      href: '/services/ultrasonic-testing',
      subServices: [
        { name: 'Ultrasonic Thickness Gauging', href: '/services/ultrasonic-testing/thickness-gauging' },
        { name: 'Detection of Discontinuity', href: '/services/ultrasonic-testing/discontinuity-detection' },
      ]
    },
    { 
      name: 'Magnetic Particle Testing',
      href: '/services/magnetic-particle-testing',
    },
    { 
      name: 'Dye Penetrant Testing',
      href: '/services/dye-penetrant-testing',
    },
  ];

  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Major Services</h3>
            <ul className="space-y-4">
              {majorServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-blue-400 font-medium">
                    {service.name}
                  </Link>
                  {service.subServices && (
                    <ul className="mt-2 ml-4 space-y-1">
                      {service.subServices.map((subService) => (
                        <li key={subService.name}>
                          <Link href={subService.href} className="text-gray-400 hover:text-blue-400 text-sm">
                            {subService.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">ARL Laboratory Services Pty Ltd</p>
            <p className="mb-2">Sydney, NSW</p>
            <p className="mb-2">Phone: +61 XXXX XXX XXX</p>
            <p className="mb-2">Email: info@arllabservices.com.au</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} ARL Laboratory Services Pty Ltd. All rights reserved</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/policies" className="hover:text-blue-400">Our Policies</Link>
              <Link href="/copyright" className="hover:text-blue-400">Copyright</Link>
              <Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 