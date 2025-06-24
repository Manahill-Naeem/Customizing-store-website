// import Image from 'next/image';

// export default function ClientsPage() {
//   const testimonials = [
//     {
//       name: 'John Smith',
//       position: 'Project Manager',
//       company: 'ABC Engineering',
//       image: '/clients/abc-engineering.jpg',
//       quote: 'ARL has been an invaluable partner in our projects. Their expertise in NDT and mechanical testing has helped us maintain the highest quality standards.',
//     },
//     {
//       name: 'Sarah Johnson',
//       position: 'Quality Assurance Director',
//       company: 'XYZ Manufacturing',
//       image: '/clients/xyz-manufacturing.jpg',
//       quote: 'The team at ARL consistently delivers accurate and reliable testing results. Their professionalism and attention to detail are unmatched.',
//     },
//     {
//       name: 'Michael Chen',
//       position: 'Operations Manager',
//       company: 'Global Petrochemicals',
//       image: '/clients/global-petrochemicals.jpg',
//       quote: 'Working with ARL has significantly improved our inspection processes. Their specialized services have helped us identify potential issues before they become problems.',
//     },
//   ];

//   const successStories = [
//     {
//       title: 'Large-Scale Storage Tank Inspection',
//       client: 'Major Oil & Gas Company',
//       challenge: 'Comprehensive inspection of multiple storage tanks with tight deadlines',
//       solution: 'Implemented advanced NDT techniques and efficient project management',
//       result: 'Completed inspection ahead of schedule with detailed reports and recommendations',
//     },
//     {
//       title: 'Infrastructure Project Quality Assurance',
//       client: 'National Infrastructure Developer',
//       challenge: 'Ensuring quality standards across multiple construction sites',
//       solution: 'Deployed mobile testing units and real-time reporting system',
//       result: 'Maintained consistent quality standards and reduced project delays',
//     },
//     {
//       title: 'Manufacturing Plant Safety Audit',
//       client: 'Industrial Manufacturing Group',
//       challenge: 'Comprehensive safety assessment of aging equipment',
//       solution: 'Combined multiple testing methods and expert analysis',
//       result: 'Identified critical issues and provided actionable maintenance recommendations',
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-[400px]">
//         <div className="absolute inset-0 bg-black/50 z-10" />
//         <Image
//           src="/hero-bg.jpg"
//           alt="Our Clients"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Clients</h1>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial) => (
//               <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="flex items-center mb-4">
//                   <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold">{testimonial.name}</h3>
//                     <p className="text-gray-600">{testimonial.position}</p>
//                     <p className="text-gray-600">{testimonial.company}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 italic">"{testimonial.quote}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Success Stories Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
//           <div className="space-y-8">
//             {successStories.map((story) => (
//               <div key={story.title} className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-4">{story.title}</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div>
//                     <h4 className="font-medium text-gray-700">Client</h4>
//                     <p className="text-gray-600">{story.client}</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-700">Challenge</h4>
//                     <p className="text-gray-600">{story.challenge}</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-700">Solution</h4>
//                     <p className="text-gray-600">{story.solution}</p>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <h4 className="font-medium text-gray-700">Result</h4>
//                   <p className="text-gray-600">{story.result}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Client Industries Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {['Oil & Gas', 'Manufacturing', 'Construction', 'Infrastructure', 'Petrochemical', 'Power Generation', 'Mining', 'Transportation'].map((industry) => (
//               <div key={industry} className="bg-white p-6 rounded-lg shadow-md text-center">
//                 <h3 className="text-lg font-semibold">{industry}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// } 