import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const redirectAffiliate = (url) => {
    if (typeof window !== 'undefined') {
      window.location.href = `/r?to=${encodeURIComponent(url)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Head>
        {/* Core Meta */}
        <title>Montreal Real Estate - Apartments, Condos, Homes for Sale & Rent</title>
        <meta name="description" content="Discover Montreal's best real estate listings. Rentals, condos, homes for sale, neighborhood guides, tips, and affiliate deals." />
        <meta name="keywords" content="Montreal real estate, apartments Montreal, condos Montreal, homes for sale, rental properties, Montreal neighborhoods" />
        <link rel="canonical" href="https://montreallistings.com" />

        {/* Open Graph */}
        <meta property="og:title" content="Montreal Real Estate Listings" />
        <meta property="og:description" content="Curated rentals, condos, and homes for sale in Montreal. Neighborhood guides and affiliate offers." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://montreallistings.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Montreal Real Estate Listings" />
        <meta name="twitter:description" content="Find rental apartments, condos, and homes for sale in Montreal." />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Montreal Listings",
            "url": "https://montreallistings.com",
            "logo": "https://montreallistings.com/logo.png",
            "sameAs": ["https://www.facebook.com/montreallistings","https://twitter.com/montreallistings"]
          })}}
        />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Montreal Listings Logo" width={50} height={50} />
            <h1 className="text-2xl font-bold text-gray-800">Montreal Listings</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link href="#featured"><a className="hover:text-blue-600 transition-colors">Featured</a></Link>
            <Link href="#neighborhoods"><a className="hover:text-blue-600 transition-colors">Neighborhoods</a></Link>
            <Link href="#tips"><a className="hover:text-blue-600 transition-colors">Tips</a></Link>
            <Link href="#contact"><a className="hover:text-blue-600 transition-colors">Contact</a></Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-10 px-4">
        {/* Intro */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Welcome to Montreal Real Estate Listings</h2>
          <p className="text-gray-600 mb-4">
            Explore the best apartments, condos, and homes for rent or sale in Montreal. Our curated listings include affiliate deals, tips, and neighborhood guides to help you make smart choices.
          </p>
          <p className="text-gray-600">
            Learn more about Montreal neighborhoods in our <Link href="/neighborhoods"><a className="text-blue-600 hover:underline">comprehensive neighborhood guide</a></Link> or check out all available <Link href="/properties"><a className="text-blue-600 hover:underline">properties for sale and rent</a></Link>.
          </p>
        </section>

        {/* Featured Properties */}
        <section id="featured" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Featured Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <Image src="/properties/plateau-apartment.jpg" alt="2-Bed Apartment in Plateau Mont-Royal" width={500} height={300} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">
                  <Link href="/properties/plateau-apartment">
                    <a className="hover:underline text-gray-800">2-Bed Apartment — Plateau Mont-Royal</a>
                  </Link>
                </h3>
                <p className="text-gray-600 mb-3">$1,950/month · Near Laurier Metro</p>
                <button onClick={() => redirectAffiliate('https://affiliate.example.com/offer1')} className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" rel="nofollow">View Offer</button>
              </div>
            </div>

            <div className="border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <Image src="/properties/griffintown-condo.jpg" alt="Condo in Griffintown" width={500} height={300} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">
                  <Link href="/properties/griffintown-condo">
                    <a className="hover:underline text-gray-800">Condo — Griffintown</a>
                  </Link>
                </h3>
                <p className="text-gray-600 mb-3">$425,000 · Waterfront · Modern</p>
                <button onClick={() => redirectAffiliate('https://affiliate.example.com/offer2')} className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" rel="nofollow">Partner Link</button>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Guides */}
        <section id="neighborhoods" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Neighborhood Guides</h2>
          <p className="text-gray-600 mb-4">
            Learn about Montreal neighborhoods, amenities, transport, schools, and lifestyle.
            Visit <Link href="/neighborhoods"><a className="text-blue-600 hover:underline">our full neighborhood guide</a></Link> to explore more.
          </p>
        </section>

        {/* Tips & Guides */}
        <section id="tips" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Buying & Renting Tips</h2>
          <p className="text-gray-600 mb-4">
            Looking for tips on renting or buying in Montreal? Check out <Link href="/tips"><a className="text-blue-600 hover:underline">our complete guide</a></Link>.
          </p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Compare multiple listings before deciding.</li>
            <li>Check transport and nearby amenities.</li>
            <li>Use affiliate offers to save money.</li>
            <li>Read local reviews for neighborhoods.</li>
          </ul>
        </section>
      </main>

      <footer id="contact" className="bg-gray-100 py-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} MontrealListings.com — Affiliate links included. Contact: info@montreallistings.com</p>
      </footer>
    </div>
  );
}
