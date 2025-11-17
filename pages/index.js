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
        <title>Montreal Real Estate — Apartments, Condos & Homes for Sale</title>
        <meta name="description" content="Explore Montreal's curated real estate listings. Find rental apartments, condos, and homes for sale in Montreal neighborhoods. Best deals & affiliate offers." />
        <meta name="keywords" content="Montreal real estate, Montreal apartments, Montreal condos, Montreal homes, rent in Montreal, buy in Montreal" />
        <meta property="og:title" content="Montreal Real Estate Listings" />
        <meta property="og:description" content="Discover the best rentals and homes for sale in Montreal. Curated listings with affiliate offers and neighborhood guides." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://montreallistings.com" />
      </Head>

      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Montreal Listings Logo" width={50} height={50} />
            <h1 className="text-2xl font-bold text-gray-800">Montreal Listings</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="#featured" className="hover:text-blue-600 transition-colors">Featured</a>
            <a href="#neighborhoods" className="hover:text-blue-600 transition-colors">Neighborhoods</a>
            <a href="#tips" className="hover:text-blue-600 transition-colors">Buying Tips</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-10 px-4">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Welcome to Montreal Real Estate Listings</h2>
          <p className="text-gray-600 mb-4">
            Montreal is a dynamic city with diverse neighborhoods offering apartments, condos, and homes for rent or sale. Explore our curated listings with affiliate deals and get the best prices.
          </p>
          <p className="text-gray-600">
            Whether you are moving, investing, or renting your first apartment, our platform makes it easy to find the right property in Montreal.
          </p>
        </section>

        {/* Featured properties */}
        <section id="featured" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Featured Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <Image src="/properties/plateau-apartment.jpg" alt="2-Bed Apartment in Plateau Mont-Royal, Montreal" width={500} height={300} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">2-Bed Apartment — Plateau Mont-Royal</h3>
                <p className="text-gray-600 mb-3">$1,950/month · Near Laurier Metro</p>
                <button onClick={() => redirectAffiliate('https://affiliate.example.com/offer1')} className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">View Offer</button>
              </div>
            </div>
            <div className="border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <Image src="/properties/griffintown-condo.jpg" alt="Condo in Griffintown, Montreal" width={500} height={300} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Condo — Griffintown</h3>
                <p className="text-gray-600 mb-3">$425,000 · Waterfront · Modern</p>
                <button onClick={() => redirectAffiliate('https://affiliate.example.com/offer2')} className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">Partner Link</button>
              </div>
            </div>
            <div className="border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <Image src="/properties/mile-end-loft.jpg" alt="Stylish Loft in Mile-End, Montreal" width={500} height={300} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">Stylish Loft — Mile-End</h3>
                <p className="text-gray-600 mb-3">$2,300/month · Cozy & Modern</p>
                <button onClick={() => redirectAffiliate('https://affiliate.example.com/offer3')} className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">View Offer</button>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood guides */}
        <section id="neighborhoods" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Neighborhood Guides</h2>
          <p className="text-gray-600 mb-4">
            Montreal neighborhoods each have unique vibes. Explore Plateau Mont-Royal, Griffintown, Mile-End, and more to find the perfect location for your lifestyle.
          </p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Plateau Mont-Royal: Artistic and vibrant</li>
            <li>Griffintown: Modern condos near downtown</li>
            <li>Mile-End: Cozy lofts with cafes and culture</li>
            <li>Old Montreal: Historic charm with luxury apartments</li>
          </ul>
        </section>

        {/* Buying & Renting Tips */}
        <section id="tips" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Buying & Renting Tips</h2>
          <p className="text-gray-600 mb-4">Here are some tips to help you find the best deals in Montreal:</p>
          <ol className="list-decimal ml-6 text-gray-600">
            <li>Check multiple listings and compare prices.</li>
            <li>Consider neighborhood amenities and transport.</li>
            <li>Read reviews or get local insights.</li>
            <li>Use affiliate links to find deals and special offers.</li>
            <li>Act fast — Montreal real estate moves quickly!</li>
          </ol>
        </section>
      </main>

      <footer id="contact" className="bg-gray-100 py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} MontrealListings.com — Affiliate links included. Contact us: info@montreallistings.com</p>
      </footer>
    </div>
  );
}
