'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
  });

  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      // Create FormData object
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('position', formData.position);
      if (resume) {
        submitData.append('resume', resume);
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Your application has been submitted successfully! We will contact you soon.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
        });
        setResume(null);
        // Reset file input
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to submit application. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setStatus({
          type: 'error',
          message: 'File size must be less than 5MB',
        });
        e.target.value = '';
        return;
      }
      // Check file type
      if (!file.type.match('application/pdf|application/msword|application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
        setStatus({
          type: 'error',
          message: 'Please upload a PDF or Word document',
        });
        e.target.value = '';
        return;
      }
      setResume(file);
      setStatus({ type: null, message: '' });
    }
  };

  const jobOpenings = [
    {
      title: 'NDT Inspector',
      location: 'Sydney, NSW',
      type: 'Full-time',
      description: 'We are looking for an experienced NDT Inspector to join our team.',
      requirements: [
        'Certified NDT Level II or III',
        'Minimum 5 years of experience',
        'Strong knowledge of NDT methods',
        'Excellent communication skills',
      ],
    },
    {
      title: 'Mechanical Testing Engineer',
      location: 'Melbourne, VIC',
      type: 'Full-time',
      description: 'Join our mechanical testing team as a Testing Engineer.',
      requirements: [
        'Bachelor\'s degree in Mechanical Engineering',
        'Experience in mechanical testing',
        'Knowledge of testing standards',
        'Attention to detail',
      ],
    },
    {
      title: 'Project Manager',
      location: 'Brisbane, QLD',
      type: 'Full-time',
      description: 'Seeking an experienced Project Manager for our inspection projects.',
      requirements: [
        'Project Management certification',
        '5+ years of project management experience',
        'Strong leadership skills',
        'Excellent organizational abilities',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/hero-bg.jpg"
          alt="Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Careers</h1>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <div key={job.title} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.location} • {job.type}</p>
                  </div>
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, position: job.title }));
                      // Scroll to application form
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Apply Now
                  </button>
                </div>
                <p className="mt-4 text-gray-600">{job.description}</p>
                <h4 className="mt-4 font-semibold">Requirements:</h4>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Apply Now</h2>
          {status.type && (
            <div
              className={`p-4 mb-6 rounded-md ${
                status.type === 'success'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {status.message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                Position *
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select a position</option>
                {jobOpenings.map((job) => (
                  <option key={job.title} value={job.title}>
                    {job.title} - {job.location}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                Resume/CV * (PDF or Word, max 5MB)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
} 