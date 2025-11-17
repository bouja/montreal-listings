import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const redirectAffiliate = (url) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/r?to=${encodeURIComponent(url)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Head>
        <title>Montreal Real Estate — Rentals & Homes for Sale</title>
        <meta
          name="description"
          content="Discover curated rental apartments and homes for sale in Montreal. Find your perfect property with affiliate deals included."
        />
        <meta property="og:title" content="Montreal Real Estate Listings" />
        <meta
          property="og:description"
          content="Curated rentals and homes in Montreal with affiliate offers. Find your perfect property now."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://montreallistings.com" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Montreal Listings Logo" width={50} height={50} />
            <h1 className="text-2xl font-bold text-gray-800">Montreal Listings</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="#featured" className="hover:text-blue-600 transition-colors">Featured</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-10 px-4">
        <section id="featured" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Featured Properties</h2>
          <p className="text-gray-600 mb-6">
            Explore curated properties updated weekly. Click to view offers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Property Card 1 */}
            <div className="border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <Image
                src="/sample-montreal.jpg"
                alt="2-Bed Apartment in Plateau Mont-Royal"
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">2-Bed Apartment — Plateau Mont-Royal</h3>
                <p className="text-gray-600 mb-3">$1,950/month · Near Laurier Metro</p>
                <button
                  onClick={() => redirectAffiliate('https://affiliate.example.com/offer1')}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  View Offer
                </button>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <Image
                src="/sample-home.jpg"
                alt="Condo in Griffintown, Montreal"
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Condo — Griffintown</h3>
                <p className="text-gray-600 mb-3">$425,000 · Waterfront · Modern</p>
                <button
                  onClick={() => redirectAffiliate('https://affiliate.example.com/offer2')}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Partner Link
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-100 py-6 mt-12 text-center text-gray-600">
        <p>© {new Date().getFullYear()} MontrealListings.com — Affiliate links included.</p>
      </footer>
    </div>
  );
}
