// No 'use client' needed as there's no interactive state or hooks unique to client-side.
// This page primarily renders static content based on data arrays.

// No import for 'next/image' since we are using standard <img> tags for broader compatibility
// and to resolve the build error.

export default function ClientsPage() {
  // Testimonials data array, containing details for each client testimonial.
  // This data drives the rendering of the testimonials section.
  const testimonials = [
    {
      name: 'John Smith',
      position: 'Project Manager',
      company: 'ABC Engineering',
      image: '/clients/abc-engineering.jpg', // Path to the client's image/logo
      quote: 'ARL has been an invaluable partner in our projects. Their expertise in NDT and mechanical testing has helped us maintain the highest quality standards.',
    },
    {
      name: 'Sarah Johnson',
      position: 'Quality Assurance Director',
      company: 'XYZ Manufacturing',
      image: '/clients/xyz-manufacturing.jpg', // Path to the client's image/logo
      quote: 'The team at ARL consistently delivers accurate and reliable testing results. Their professionalism and attention to detail are unmatched.',
    },
    {
      name: 'Michael Chen',
      position: 'Operations Manager',
      company: 'Global Petrochemicals',
      image: '/clients/global-petrochemicals.jpg', // Path to the client's image/logo
      quote: 'Working with ARL has significantly improved our inspection processes. Their specialized services have helped us identify potential issues before they become problems.',
    },
  ];

  // Success Stories data array, detailing various project achievements.
  // This data is used to populate the success stories section.
  const successStories = [
    {
      title: 'Large-Scale Storage Tank Inspection',
      client: 'Major Oil & Gas Company',
      challenge: 'Comprehensive inspection of multiple storage tanks with tight deadlines',
      solution: 'Implemented advanced NDT techniques and efficient project management',
      result: 'Completed inspection ahead of schedule with detailed reports and recommendations',
    },
    {
      title: 'Infrastructure Project Quality Assurance',
      client: 'National Infrastructure Developer',
      challenge: 'Ensuring quality standards across multiple construction sites',
      solution: 'Deployed mobile testing units and real-time reporting system',
      result: 'Maintained consistent quality standards and reduced project delays',
    },
    {
      title: 'Manufacturing Plant Safety Audit',
      client: 'Industrial Manufacturing Group',
      challenge: 'Comprehensive safety assessment of aging equipment',
      solution: 'Combined multiple testing methods and expert analysis',
      result: 'Identified critical issues and provided actionable maintenance recommendations',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section: Displays a large background image and a title for the page. */}
      <section className="relative h-[400px] w-full overflow-hidden">
        {/* Overlay to darken the background image for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Background image for the hero section using a standard <img> tag */}
        <img
          src="/hero-bg.jpg" // Placeholder for the actual hero background image path.
          alt="Our Clients"
          className="object-cover w-full h-full" // Tailwind classes for full width, height, and object-fit.
          onError={(e) => { // Error handling for the image loading.
            (e.target as HTMLImageElement).srcset = ''; // Prevents infinite retries on error.
            (e.target as HTMLImageElement).src = 'https://placehold.co/1200x400/cccccc/000000?text=Our+Clients'; // Fallback placeholder image.
          }}
        />
        {/* Content of the hero section, positioned centrally. */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Clients</h1>
        </div>
      </section>

      {/* Testimonials Section: Displays client testimonials. */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mapping through the testimonials array to render each testimonial card. */}
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    {/* Testimonial image using a standard <img> tag */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-full h-full rounded-full" // Styling for a circular image.
                      onError={(e) => { // Error handling for testimonial images.
                        (e.target as HTMLImageElement).srcset = '';
                        (e.target as HTMLImageElement).src = `https://placehold.co/64x64/cccccc/000000?text=${testimonial.name.charAt(0)}`; // Fallback placeholder with initial.
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section: Highlights key project achievements. */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="space-y-8">
            {/* Mapping through the successStories array to render each story card. */}
            {successStories.map((story) => (
              <div key={story.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{story.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700">Client</h4>
                    <p className="text-gray-600">{story.client}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Challenge</h4>
                    <p className="text-gray-600">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Solution</h4>
                    <p className="text-gray-600">{story.solution}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-700">Result</h4>
                  <p className="text-gray-600">{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Industries Section: Lists industries served. */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Mapping through an array of industries to display them. */}
            {['Oil & Gas', 'Manufacturing', 'Construction', 'Infrastructure', 'Petrochemical', 'Power Generation', 'Mining', 'Transportation'].map((industry) => (
              <div key={industry} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
