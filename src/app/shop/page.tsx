'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { getProducts } from '@/lib/api';
import MessageBox from '@/components/MessageBox';

const showcaseItems = [
  {
    id: 1,
    name: "Nikkah pens with Tray",
    description: "An elegant, handcrafted Nikkah pen tray adorned with a white feather and floral details.",
    price: 4000,
    imageUrl: "/products/nikkahpen-tray.jpeg", 
    category: "Wedding Collection",
    isCompleted: true
  },
  {
    id: 2,
    name: "Rasam glass",
    description: "The blend of tradition and sophistication. The glass wrapped in maroon fabric with delicate pearls.",
    price: 2000,
    imageUrl: "/products/rasam-glass.jpeg",
    category: "Wedding Collection",
    isCompleted: true
  },
  {
    id: 3,
    name: "Groom Pen",
    description: "A personalized Groom's nikkah pen with golden name plate, a sleek black bow, and a beautifula peacock feathers",
    price: 700,
    imageUrl: "/products/groom-pen.jpeg",
    category: "Pearl Collection",
    isCompleted: true
  },
  {
    id: 4,
    name: "Bride pen",
    description: "A personalized bride's nikkah pen with lush maroon flowers,a  cluster of vibrant peacock feathers, and a golden name plate.",
    price: 700,
    imageUrl: "/products/bride-pen.jpeg",
    category: "Wedding Collection",
    isCompleted: true
  },
  {
    id: 5,
    name: "Gift/Goodie basket",
    description: "A beautifully arranged gift basket filled with an assortment of goodies, perfect for any occasion.",
    price: 150,
    imageUrl: "/products/goodie-box.jpeg",
    category: "Crystal Collection",
    isCompleted: true
  },
  {
    id: 6,
    name: "Glamour Gift Bouquet",
    description: "A stunning gift bouquet featuring a mix of makeup items and accessories, perfect for any beauty enthusiast.",
    price: 2000,
    imageUrl: "/products/makeup-bouquet.jpeg",
    category: "Pearl Collection",
    isCompleted: true
  },
  {
    id: 7,
    name: "Beaded Pearl Bag",
    description: "A stylish handmade pearl bag crafted from woven white pearls.",
    price: 4000,
    imageUrl: "/products/pearl-bag.png",
    category: "Pearl Collection",
    isCompleted: true
  },
  {
    id: 8,
    name: "Wedding Doli Gift Box",
    description: "Carfted with maroon fabric  and features a small internal light to illuminate gift inside, and deligate latkans on the side.",
    price: 5000,
    imageUrl: "/products/palki-tray.jpeg",
    category: "Pearl Collection",
    isCompleted: true
  },
  {
    id: 9,
    name: "Nikkah Mirror Tray set",
    description: "This set inscribed with Qabool Hai, features a handcrafted tray and a matching pen with feathers",
    price: 2500,
    imageUrl: "/products/nikkahpen-tray2.jpeg",
    category: "Pearl Collection",
    isCompleted: true
  },
];

export default function ProductsShowcasePage() {
  const [messageBox, setMessageBox] = useState<{ message: string; type: 'success' | 'error' | 'info' | 'warning' } | null>(null);

  const handleInquiry = (itemName: string) => {
    setMessageBox({ 
      message: `Thank you for your interest in ${itemName}! We'll contact you soon to discuss your custom requirements.`, 
      type: "success" 
    });
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:py-32 min-h-[calc(100vh-16rem)]">
      {messageBox && (
        <MessageBox
          message={messageBox.message}
          type={messageBox.type}
          onClose={() => setMessageBox(null)}
        />
      )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-700 leading-tight mb-4">
            Our Completed Work Showcase
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our handcrafted creations and get inspired for your own custom piece. 
            Each item shown here was specially crafted for our valued customers.
            </p>
          </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16">
          {showcaseItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative w-full h-64">
                <div className="relative w-40 h-60 p-2 flex justify-center items-center ml-20">
                  <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={250} 
                  height={250} 
                  style={{ objectFit: 'contain' }} 
                  className="rounded-t-lg"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Completed
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-primary-600 font-medium mb-2">{item.category}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
                
                <div className="mt-auto">
                  <div className="text-2xl font-bold text-primary-700 mb-4">
                    PKR {item.price.toLocaleString()}
                  </div>
                  
                  <Link
                    href={`/custom-orders?itemName=${item.name}&imageUrl=${item.imageUrl}`}
                    className="block text-center w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                  >
                    Request Similar Custom Piece
                  </Link>
                </div>
              </div>
            </div>
          ))}
            </div>

        {/* Call to Action Section */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-primary-700 mb-6">
            Ready to Create Something Unique?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            These are just examples of our craftsmanship. Let us design and create a 
            completely personalized piece that matches your vision and requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/custom-orders"
              className="inline-block bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-primary-700 transition duration-300 transform hover:scale-105"
            >
              Start Custom Order
            </Link>
            
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose Custom Made?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Unique Design</h4>
              <p className="text-gray-600 text-sm">Every piece is designed specifically for you</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Quality Craftsmanship</h4>
              <p className="text-gray-600 text-sm">Handcrafted with attention to every detail</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Personal Touch</h4>
              <p className="text-gray-600 text-sm">Made with love and care for your special moments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}