import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Services() {
  return (
    <>
      <Navbar />

      <section className="bg-black px-6 py-24 text-white md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Our Services
          </p>

          <h1 className="mb-8 text-5xl md:text-7xl">
            Tailored real estate solutions for global investors.
          </h1>

          <p className="max-w-4xl text-lg text-gray-300">
            We provide comprehensive real estate and investment services
            designed for individuals, families, and institutions seeking
            exceptional opportunities worldwide.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 py-12 text-white md:px-12 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="liquid-glass rounded-2xl p-8">
            <h2 className="mb-4 text-3xl">Luxury Property Sales</h2>
            <p className="text-gray-300">
              Exclusive villas, penthouses, waterfront residences,
              and premium developments.
            </p>
          </div>

          <div className="liquid-glass rounded-2xl p-8">
            <h2 className="mb-4 text-3xl">Investment Advisory</h2>
            <p className="text-gray-300">
              Strategic guidance to maximize returns and build
              long-term wealth through property investments.
            </p>
          </div>

          <div className="liquid-glass rounded-2xl p-8">
            <h2 className="mb-4 text-3xl">Property Management</h2>
            <p className="text-gray-300">
              End-to-end management solutions for residential
              and commercial real estate assets.
            </p>
          </div>

          <div className="liquid-glass rounded-2xl p-8">
            <h2 className="mb-4 text-3xl">International Consulting</h2>
            <p className="text-gray-300">
              Cross-border real estate expertise for investors
              seeking opportunities in global markets.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    <WhatsAppButton />
    </>
  );
}