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
        <title>Montreal Listings — Rentals & Buying Deals</title>
        <meta name="description" content="Find curated real estate listings in Montréal. Rental and buying offers with affiliate deals and neighborhood guides." />
        <meta property="og:title" content="Montreal Listings" />
        <meta property="og:description" content="Curated rentals & homes in Montréal. Affiliate offers included." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://montreallistings.com" />
      </Head>

      <header className="bg-white shadow px-6 py-4">
        <h1 className="text-3xl font-bold">Montreal Listings</h1>
        <p className="text-gray-700">Find curated rental & buying offers in Montréal.</p>
      </header>

      <main className="max-w-5xl mx-auto py-8 px-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Featured Properties</h2>
          <p className="text-gray-600 mb-4">Explore selected offers updated weekly.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 bg-white shadow-md">
              <Image src="/sample-montreal.jpg" alt="Plateau apartment" width={500} height={300} className="rounded mb-2" />
              <h3 className="font-semibold">2-Bed Apartment — Plateau Mont-Royal</h3>
              <p>$1,950/month · Near Laurier metro</p>
              <button onClick={() => redirectAffiliate('https://affiliate.example.com/offer1')} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">View Offer</button>
            </div>
            <div className="border rounded-lg p-4 bg-white shadow-md">
              <Image src="/sample-home.jpg" alt="Griffintown condo" width={500} height={300} className="rounded mb-2" />
              <h3 className="font-semibold">Condo — Griffintown</h3>
              <p>$425,000 · Waterfront · Modern</p>
              <button onClick={() => redirectAffiliate('https://affiliate.example.com/offer2')} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Partner Link</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} MontrealListings.com — Affiliate links included.
      </footer>
    </div>
  );
}