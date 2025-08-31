// frontend/src/app/shop/layout.tsx
// This is a Server Component by default, perfect for metadata export.
import React from 'react'; // Explicitly import React for ReactNode

export const metadata = {
  title: "Products Showcase - Crafted Whispers: Our Completed Handcrafted Creations",
  description: "Explore our completed handcrafted pieces at Crafted Whispers. See examples of our wedding essentials, pearl jewelry, crystal decorations, and custom bouquets. Get inspired for your own personalized piece.",
  keywords: "products showcase Crafted Whispers, completed work, handcrafted examples, wedding essentials showcase, pearl jewelry examples, crystal decorations showcase, custom bouquets examples, artisan crafts Pakistan, inspiration gallery",
  // Optional: add Open Graph, Twitter cards, etc.
  openGraph: {
    title: 'Products Showcase - Crafted Whispers',
    description: 'Explore our completed handcrafted creations and get inspired.',
    url: 'https://www.yourwebsite.com/shop', // Replace with your actual domain
    siteName: 'Crafted Whispers',
    images: [
      {
        url: 'https://www.yourwebsite.com/og-image.jpg', // Replace with a relevant image
        width: 800,
        height: 600,
        alt: 'Crafted Whispers Products Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.yourwebsite.com/shop', // Replace with your actual domain
  },
};

export default function ShopLayout({
  children, // This prop will be the `page.tsx` component
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children} {/* This will render your `page.tsx` */}
    </>
  );
}
