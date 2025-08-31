'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Upload, X } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { submitCustomOrder } from '@/lib/api';

export default function CustomOrdersForm() { // Yahan component ka naam change kiya hai
  const searchParams = useSearchParams();
  const initialItemName = searchParams.get('itemName') || '';
  const initialImageUrl = searchParams.get('imageUrl') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    itemType: initialItemName,
    description: '',
    budget: '',
    timeline: '',
    preferredContact: 'email'
  });

  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Yeh useEffect hook URL se image ko fetch karke form mein daalta hai
  useEffect(() => {
    if (initialImageUrl) {
      // Fetch the image from the URL and convert it to a File object
      fetch(initialImageUrl)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], initialItemName + '.jpeg', { type: 'image/jpeg' });
          setUploadedImages([file]);
          setImagePreviewUrls([initialImageUrl]);
        })
        .catch(error => {
          console.error("Failed to fetch image from URL:", error);
        });
    }
  }, [initialImageUrl, initialItemName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    // Sirf image files filter karein
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length + uploadedImages.length > 5) {
      alert('Maximum 5 images allowed');
      return;
    }

    // Preview URLs banayein
    const newPreviewUrls = imageFiles.map(file => URL.createObjectURL(file));
    
    setUploadedImages(prev => [...prev, ...imageFiles]);
    setImagePreviewUrls(prev => [...prev, ...newPreviewUrls]);
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviewUrls(prev => {
      const newUrls = [...prev];
      URL.revokeObjectURL(newUrls[index]); // Memory clean karein
      return newUrls.filter((_, i) => i !== index);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    setMessageType(null);

    try {
      // FormData banayein files ko handle karne ke liye
      const submitData = new FormData();
      
      // Form fields add karein
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });

      // Images add karein
      uploadedImages.forEach((image, index) => {
        submitData.append(`image_${index}`, image);
      });

      // Image count add karein
      submitData.append('imageCount', uploadedImages.length.toString());

      // API endpoint par submit karein
      const result = await submitCustomOrder(submitData);
      
      setSubmitMessage(result.message || 'Your custom order request has been submitted successfully! We will review your requirements and get back to you within 24-48 hours.');
      setMessageType('success');
      
      // Form reset karein
      setFormData({
        name: '',
        email: '',
        phone: '',
        itemType: '',
        description: '',
        budget: '',
        timeline: '',
        preferredContact: 'email'
      });
      setUploadedImages([]);
      setImagePreviewUrls([]);
      
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitMessage(error.message || 'Failed to submit your request. Please try again or contact us directly.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-16rem)] bg-gradient-to-br from-primary-50 to-primary-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-10 lg:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-700 text-center mb-6">
          Create Your Custom Piece
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Share your vision with us and we'll bring it to life! Upload pictures, describe your dream piece, and let us create something truly unique for you.
        </p>

        {/* Selected Product Details Section */}
        {initialImageUrl && (
          <div className="mb-6 p-4 bg-primary-100 rounded-lg text-primary-800 border border-primary-200 flex items-center space-x-4">
            <img src={initialImageUrl} alt={initialItemName} className="w-20 h-20 rounded-md object-cover" />
            <div>
              <p className="font-semibold">Requesting a Custom Piece Based On:</p>
              <p className="font-medium text-lg mt-1">{initialItemName}</p>
            </div>
          </div>
        )}

        <section className="mb-10 bg-primary-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#7A4E7A] mb-4 text-center">
            What Can We Customize?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Wedding Essentials:</strong> Bridal accessories, mehndi trays, decorations</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Personalized Gifts:</strong> Custom names, messages, special occasions</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Bespoke Bouquets:</strong> Your choice of flowers, colors, and style</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Crystal & Pearl Items:</strong> Unique jewelry and decor designs</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-primary-700 mb-6 text-center">
            Tell Us About Your Vision
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  placeholder="+92 300 1234567"
                />
              </div>
              
              <div>
                <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <select
                  name="preferredContact"
                  id="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="itemType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Item <span className="text-red-500">*</span>
                </label>
                <select
                  name="itemType"
                  id="itemType"
                  value={formData.itemType}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                >
                  <option value="">Select item type</option>
                  <option value="wedding-accessory">Wedding Accessory</option>
                  <option value="jewelry">Jewelry</option>
                  <option value="decoration">Decoration Item</option>
                  <option value="bouquet">Bouquet</option>
                  <option value="gift">Personalized Gift</option>
                  <option value="other">Other (Please describe)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range (PKR)
                </label>
                <select
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                >
                  <option value="">Select budget range</option>
                  <option value="5000-15000">PKR 5,000 - 15,000</option>
                  <option value="15000-30000">PKR 15,000 - 30,000</option>
                  <option value="30000-50000">PKR 30,000 - 50,000</option>
                  <option value="50000+">PKR 50,000+</option>
                  <option value="flexible">Flexible - Let's discuss</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                When Do You Need It?
              </label>
              <select
                name="timeline"
                id="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              >
                <option value="">Select timeline</option>
                <option value="1-2-weeks">1-2 weeks</option>
                <option value="2-4-weeks">2-4 weeks</option>
                <option value="1-2-months">1-2 months</option>
                <option value="2+months">2+ months</option>
                <option value="flexible">Flexible - Let's discuss</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                id="description"
                rows={5}
                value={formData.description}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                placeholder="Describe your vision in detail: colors, style, size, any specific requirements, occasion, etc. The more details you provide, the better we can understand your needs!"
              ></textarea>
            </div>

            {/* Image Upload Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Reference Images (Optional)
              </label>
              <p className="text-sm text-gray-500 mb-4">
                Upload pictures of similar items, your inspiration, or sketches. Maximum 5 images, each up to 5MB.
              </p>
              
              {/* Image Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Upload className="w-5 h-5" />
                  <span>Choose Images</span>
                </button>
                
                <p className="text-sm text-gray-500 mt-2">
                  PNG, JPG, JPEG up to 5MB each
                </p>
              </div>

              {/* Image Previews */}
              {imagePreviewUrls.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Uploaded Images:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {imagePreviewUrls.map((url, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg border border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Success/Error Message */}
            {submitMessage && (
              <div className={`p-4 rounded-lg ${
                messageType === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting Your Request...' : 'Submit Custom Order Request'}
            </button>
          </form>
        </section>

        {/* Process Information */}
        <section className="mt-16 bg-gray-50 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-[#7A4E7A] mb-4 text-center">
            What Happens Next?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
              <h4 className="font-semibold text-gray-800 mb-2">Review</h4>
              <p className="text-sm text-gray-600">We'll review your requirements and images</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
              <h4 className="font-semibold text-gray-800 mb-2">Design</h4>
              <p className="text-sm text-gray-600">Create design concepts and price quote</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
              <h4 className="font-semibold text-gray-800 mb-2">Approval</h4>
              <p className="text-sm text-gray-600">Get your approval before starting work</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
              <h4 className="font-semibold text-gray-800 mb-2">Creation</h4>
              <p className="text-sm text-gray-600">Craft your perfect custom piece</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have questions? Need immediate assistance?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
              className="inline-block bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors"
          >
            Contact Us
          </Link>
            <a
              href="tel:+923180305269"
              className="inline-block bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Call Now: +92 318 0305269
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}