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
          content="Explore Montreal's curated real estate listings. Find rental apartments, condos, and homes for sale in Montreal neighborhoods with affiliate deals."
        />
        <meta property="og:title" content="Montreal Real Estate Listings" />
        <meta
          property="og:description"
          content="Curated rentals and homes in Montreal with affiliate offers. Find your perfect property now."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
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
            <a href="#neighborhoods" className="hover:text-blue-600 transition-colors">Neighborhoods</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-10 px-4">
        {/* Intro Text */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Discover Montreal Real Estate</h2>
          <p className="text-gray-600 mb-4">
            Montreal is a vibrant city with diverse neighborhoods offering apartments, condos, and houses for rent and sale. Explore curated listings with affiliate deals to find your ideal home.
          </p>
          <p className="text-gray-600 mb-6">
            Whether you are looking for a trendy apartment in Plateau Mont-Royal, a condo in Griffintown, or a family home in NDG, we provide up-to-date listings to help you make the best choice.
          </p>
        </section>

        {/* Featured Properties */}
        <section id="featured" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Featured Properties</h2>
          <p className="text-gray-600 mb-6">Explore selected properties updated weekly.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <Image
                src="/properties/plateau-apartment.jpg"
                alt="2-Bed Apartment in Plateau Mont-Royal, Montreal"
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

            <div className="border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <Image
                src="/properties/griffintown-condo.jpg"
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

            <div className="border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <Image
                src="/properties/ndg-house.jpg"
                alt="Family Home in NDG, Montreal"
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Family Home — NDG</h3>
                <p className="text-gray-600 mb-3">$750,000 · Spacious backyard · Modern kitchen</p>
                <button
                  onClick={() => redirectAffiliate('https://affiliate.example.com/offer3')}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  View Offer
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods section */}
        <section id="neighborhoods" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Explore Montreal Neighborhoods</h2>
          <p className="text-gray-600 mb-6">
            Montreal neighborhoods each have unique charm: Plateau Mont-Royal for trendy apartments, Griffintown for modern condos near the waterfront, NDG for family-friendly houses, and more. Choose the right area for your lifestyle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Plateau Mont-Royal</h3>
              <p className="text-gray-600 text-sm">Trendy apartments, vibrant streets, cafes, and boutiques.</p>
            </div>
            <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Griffintown</h3>
              <p className="text-gray-600 text-sm">Modern condos, waterfront, close to downtown Montreal.</p>
            </div>
            <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">NDG</h3>
              <p className="text-gray-600 text-sm">Family homes, green spaces, peaceful neighborhoods.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-100 py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} MontrealListings.com — Affiliate links included.</p>
      </footer>
    </div>
  );
}
