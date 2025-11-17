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
          content="Discover curated rental apartments and homes for sale in Montreal. Affiliate deals included for best offers."
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

      <header className="bg-white shadow px-6 py-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Montreal Real Estate</h1>
        <p className="text-gray-700 text-lg">
          Curated rental & buying offers across Montreal neighborhoods
        </p>
      </header>

      <main className="max-w-6xl mx-auto py-10 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Featured Properties</h2>
          <p className="text-gray-600 mb-6">
            Explore selected properties updated weekly. Click to see the best deals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-5 bg-white shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/sample-montreal.jpg"
                alt="2-Bed Apartment in Plateau Mont-Royal, Montreal"
                width={500}
                height={300}
                className="rounded mb-3 object-cover"
              />
              <h3 className="font-semibold text-lg mb-1">
                2-Bed Apartment — Plateau Mont-Royal
              </h3>
              <p className="text-gray-600 mb-3">
                $1,950/month · Near Laurier Metro
              </p>
              <button
                onClick={() => redirectAffiliate('https://affiliate.example.com/offer1')}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                View Offer
              </button>
            </div>

            <div className="border rounded-lg p-5 bg-white shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/sample-home.jpg"
                alt="Condo in Griffintown, Montreal"
                width={500}
                height={300}
                className="rounded mb-3 object-cover"
              />
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
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} MontrealListings.com — Affiliate links included.
      </footer>
    </div>
  );
}
