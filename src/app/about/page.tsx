import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/hero-bg.jpg"
          alt="About ARL"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About ARL</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                ARL Laboratory Services Pty Ltd (ARL) was established in 1996 consisting of 4 employees in Sydney providing Inspection and Testing services to testing plants. Over the course of time ARL has evolved that today ARL is providing services not only in Non-Destructive and Mechanical testing but also ARL provide world-class specialized services as well.
              </p>
              <p className="text-gray-600 mb-4">
                ARL is a major player Oil, Gas, Chemical, Petrochemical, Cement, Power and Infrastructure sectors throughout Australia and the Asia Pacific region.
              </p>
              <p className="text-gray-600">
                The company's headquarters is based in Sydney NSW with additional offices in UAE, China and Pakistan. ARL has successfully completed projects in USA, Singapore, Spain, Papua New Guinea and New Zealand.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/about.jpg"
                alt="ARL Laboratory"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Vision</h3>
              <p className="text-gray-600">
                ARL is driven by clearly defined vision and strives to add value to its client's businesses by providing world-class solutions while remaining cost-effective.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                ARL believes in assisting its clients to meet their responsibilities for quality by providing them with reliable, accurate and representative data and professional consulting services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Safety</h3>
              <p className="text-gray-600">
                ARL Laboratory Services Pty. Ltd is committed to a clean, safe and healthy work environment for its employees working in its premises or on-site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">CEO Message</h2>
            <p className="text-gray-600 mb-4">
              I feel confident while sharing that ARL remains on course to become a world-class 3rd party inspection & certification organization. Over the last two decades, we have maintained a leading position in a competitive regional market. This has been made possible by our entrepreneurial spirit, living up to commitments and unstinted support of the stakeholders.
            </p>
            <p className="text-gray-600 mb-4">
              Our emergence as a CMC Contractor is aligned with a vision of progressing up the value chain to a sustainable extent. This process of development shall remain under focus during the coming years. For us what matters most is customer satisfaction which we balance against our growth pattern. At the heart of all operations remain our team members who have the spirit to push boundaries and of fostering a culture of accepting challenge.
            </p>
            <p className="text-gray-600">
              In the coming years, we will continue to reinforce our successful track record. New contracts shall translate into improved efficiency by re-mapping our internal processes using latest tools. The challenges in the market continue but we look at them as opportunities to make ourselves better.
            </p>
            <div className="mt-8">
              <p className="font-semibold">Rizwan Ali</p>
              <p className="text-gray-600">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 