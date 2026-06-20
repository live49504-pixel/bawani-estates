import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import AIChat from "../components/AIChat";

export default function Properties() {
  return (
    <>
      <Navbar />

      <section className="bg-black px-6 py-24 text-white md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Properties
          </p>

          <h1 className="mb-8 text-5xl md:text-7xl">
            Explore Luxury Properties
          </h1>

          <p className="max-w-3xl text-lg text-gray-300">
            Discover exceptional residences and investment opportunities
            across the world's most prestigious locations.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 pb-24 text-white md:px-12 lg:px-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="liquid-glass rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227"
              alt="Dubai Villa"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl mb-2">
                Dubai Waterfront Villa
              </h3>
              <p className="text-gray-300 mb-3">
                Palm Jumeirah, Dubai
              </p>
              <p className="text-gray-400">
                Starting from $12.5M
              </p>
            </div>
          </div>

          <div className="liquid-glass rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="London Penthouse"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl mb-2">
                London Penthouse
              </h3>
              <p className="text-gray-300 mb-3">
                Knightsbridge, London
              </p>
              <p className="text-gray-400">
                Starting from £8.9M
              </p>
            </div>
          </div>

          <div className="liquid-glass rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="New York Residence"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl mb-2">
                New York Residence
              </h3>
              <p className="text-gray-300 mb-3">
                Manhattan, New York
              </p>
              <p className="text-gray-400">
                Starting from $15M
              </p>
            </div>
          </div>
<div className="liquid-glass rounded-2xl overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    alt="Beverly Hills Mansion"
    className="h-64 w-full object-cover"
  />
  <div className="p-6">
    <h3 className="text-2xl mb-2">
      Beverly Hills Mansion
    </h3>
    <p className="text-gray-300 mb-3">
      California, USA
    </p>
    <p className="text-gray-400">
      Starting from $22M
    </p>
  </div>
</div>

<div className="liquid-glass rounded-2xl overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
    alt="Singapore Sky Residence"
    className="h-64 w-full object-cover"
  />
  <div className="p-6">
    <h3 className="text-2xl mb-2">
      Singapore Sky Residence
    </h3>
    <p className="text-gray-300 mb-3">
      Marina Bay, Singapore
    </p>
    <p className="text-gray-400">
      Starting from $9.8M
    </p>
  </div>
</div>

<div className="liquid-glass rounded-2xl overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
    alt="Monaco Penthouse"
    className="h-64 w-full object-cover"
  />
  <div className="p-6">
    <h3 className="text-2xl mb-2">
      Monaco Penthouse
    </h3>
    <p className="text-gray-300 mb-3">
      Monte Carlo, Monaco
    </p>
    <p className="text-gray-400">
      Starting from €18M
    </p>
  </div>
</div>

<div className="liquid-glass rounded-2xl overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
    alt="Paris Luxury Apartment"
    className="h-64 w-full object-cover"
  />
  <div className="p-6">
    <h3 className="text-2xl mb-2">
      Paris Luxury Apartment
    </h3>
    <p className="text-gray-300 mb-3">
      Champs-Élysées, Paris
    </p>
    <p className="text-gray-400">
      Starting from €7.5M
    </p>
  </div>
</div>

<div className="liquid-glass rounded-2xl overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e"
    alt="Sydney Harbour Villa"
    className="h-64 w-full object-cover"
  />
  <div className="p-6">
    <h3 className="text-2xl mb-2">
      Sydney Harbour Villa
    </h3>
    <p className="text-gray-300 mb-3">
      Sydney, Australia
    </p>
    <p className="text-gray-400">
      Starting from AU$14M
    </p>
  </div>
</div>

<div className="liquid-glass rounded-2xl overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1600607687644-c7171b42498f"
    alt="Swiss Alpine Chalet"
    className="h-64 w-full object-cover"
  />
  <div className="p-6">
    <h3 className="text-2xl mb-2">
      Swiss Alpine Chalet
    </h3>
    <p className="text-gray-300 mb-3">
      St. Moritz, Switzerland
    </p>
    <p className="text-gray-400">
      Starting from CHF 11M
    </p>
  </div>
</div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <AIChat />
    </>
  );
}