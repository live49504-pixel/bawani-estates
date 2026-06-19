import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black px-6 py-24 text-white md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            About Us
          </p>

          <h1 className="mb-8 text-5xl md:text-7xl">
            Redefining luxury real estate worldwide.
          </h1>

          <p className="max-w-4xl text-lg leading-relaxed text-gray-300">
            Bawani Estates connects discerning investors with exceptional
            properties and investment opportunities across the world's most
            prestigious markets. From waterfront villas and penthouses to
            large-scale developments, we help clients build long-term wealth
            through strategic real estate investments.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white md:px-12 lg:px-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="liquid-glass rounded-2xl p-8">
            <h2 className="mb-4 text-3xl">Our Mission</h2>

            <p className="text-gray-300">
              To deliver world-class real estate opportunities while maintaining
              trust, transparency, and long-term value creation.
            </p>
          </div>

          <div className="liquid-glass rounded-2xl p-8">
            <h2 className="mb-4 text-3xl">Our Vision</h2>

            <p className="text-gray-300">
              To become a globally recognized luxury real estate and investment
              brand serving clients across international markets.
            </p>
          </div>
        </div>
      </section>

     <Footer />
 <WhatsAppButton />
    </>
  );
}