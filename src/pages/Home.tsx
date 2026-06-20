import "../index.css";
import FadeIn from "../components/FadeIn";
import AnimatedHeading from "../components/AnimatedHeading";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import AIChat from "../components/AIChat";

export default function Home() {
  return (
    <div className="relative bg-black text-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-50% w-full object-cover"
style={{ objectPosition: "center 0%" }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navbar */}
        <div className="px-6 pt-6 md:px-12 lg:px-16">
          <nav className="liquid-glass flex items-center justify-between rounded-xl px-4 py-2">
            <div className="flex items-center">
  <img
  src="/logo.png"
  alt="Bawani Estates"
  className="h-16 w-auto object-contain scale-150 origin-left"
/>
</div>

            <div className="hidden gap-8 text-sm md:flex ml-auto mr-10">
             <Link to="/" className="transition hover:text-gray-300">
  Home
</Link>

<Link to="/about" className="transition hover:text-gray-300">
  About
</Link>

<Link to="/services" className="transition hover:text-gray-300">
  Services
</Link>

<Link to="/contact" className="transition hover:text-gray-300">
  Contact
</Link>
            </div>

            <a
  href="https://wa.me/923202481500"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:block rounded-lg bg-white px-6 py-2 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:scale-105"
>
  Start a Chat
</a>
          </nav>
        </div>

        {/* Hero */}
        <div className="flex flex-1 flex-col justify-end px-6 pb-12 md:px-12 lg:px-16 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            <div className="max-w-xl">
              <h1
  className="mb-4 text-3xl font-normal md:text-5xl lg:text-6xl xl:text-7xl"
  style={{ letterSpacing: "-0.04em" }}
>
  <AnimatedHeading
    text={"Extraordinary Properties.\nGlobal Investment Opportunities."}
  />
</h1>
              <FadeIn delay={800}>
                <p className="mb-5 max-w-xl text-base text-gray-300 md:text-lg">
                  Connecting discerning investors with the world's most exclusive residences, developments, and investment opportunities.
                </p>
              </FadeIn>

              <FadeIn delay={1200}>
                <div className="flex flex-wrap gap-4">
                    <Link
  to="/properties"
  className="rounded-lg bg-white px-8 py-3 font-medium text-black transition hover:bg-gray-100"
>
  Explore Properties
</Link>

                     <Link
  to="/contact#inquiry"
  className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium transition hover:bg-white hover:text-black"
>
  Schedule Consultation
</Link>
                 </div>
             </FadeIn>
            </div>

            <div className="mt-10 flex items-end justify-start lg:mt-0 lg:justify-end">
             <FadeIn delay={1400}>
  <div className="liquid-glass rounded-xl border border-white/20 px-6 py-3">
    <span className="text-lg font-light md:text-xl lg:text-2xl">
      Global. Luxury. Investment.
    </span>
  </div>
</FadeIn>
            </div>
          </div>
        </div>
      </div>
      <section className="relative z-10 bg-black px-6 py-24 md:px-12 lg:px-16">
  <div className="mb-12">
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">
      Signature Properties
    </p>

    <h2 className="text-4xl md:text-5xl">
      Curated for the world's most discerning buyers.
    </h2>
  </div>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div className="liquid-glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
      <img
  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
  alt="Dubai Villa"
  className="mb-6 h-64 w-full rounded-xl object-cover"
/>

      <h3 className="mb-2 text-2xl">Dubai Waterfront Villa</h3>

      <p className="mb-4 text-gray-300">
        Palm Jumeirah, Dubai
      </p>

      <p className="text-sm text-gray-400">
        Starting from $12.5M
      </p>
    </div>

    <div className="liquid-glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
      <img
  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
  alt="London Penthouse"
  className="mb-6 h-64 w-full rounded-xl object-cover"
/>

      <h3 className="mb-2 text-2xl">London Penthouse</h3>

      <p className="mb-4 text-gray-300">
        Knightsbridge, London
      </p>

      <p className="text-sm text-gray-400">
        Starting from £8.9M
      </p>
    </div>

    <div className="liquid-glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
      <img
  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  alt="New York Residence"
  className="mb-6 h-64 w-full rounded-xl object-cover"
/>

      <h3 className="mb-2 text-2xl">New York Residence</h3>

      <p className="mb-4 text-gray-300">
        Manhattan, New York
      </p>

      <p className="text-sm text-gray-400">
        Starting from $15M
      </p>
    </div>
  </div>
</section>
<section className="relative z-10 bg-black px-6 py-24 md:px-12 lg:px-16">
  <div className="mb-12">
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-400">
      Global Markets
    </p>

    <h2 className="text-4xl md:text-5xl">
      Access opportunities across the world's leading cities.
    </h2>
  </div>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {["Dubai", "London", "New York", "Singapore"].map((city) => (
      <div
        key={city}
        className="liquid-glass rounded-2xl p-8 transition hover:-translate-y-3 hover:scale-[1.02]"
      >
        <h3 className="text-2xl">{city}</h3>

        <p className="mt-3 text-gray-300">
          Prime residential and investment opportunities.
        </p>
      </div>
    ))}
  </div>
</section>

<section className="relative z-10 bg-black px-6 py-24 md:px-12 lg:px-16">
  <div className="grid gap-8 md:grid-cols-4 text-center">
    <div>
      <h3 className="text-5xl font-light">25+</h3>
      <p className="mt-3 text-gray-400">Global Markets</p>
    </div>

    <div>
      <h3 className="text-5xl font-light">$4.2B</h3>
      <p className="mt-3 text-gray-400">Transactions Closed</p>
    </div>

    <div>
      <h3 className="text-5xl font-light">1,200+</h3>
      <p className="mt-3 text-gray-400">Luxury Properties</p>
    </div>

    <div>
      <h3 className="text-5xl font-light">98%</h3>
      <p className="mt-3 text-gray-400">Client Satisfaction</p>
    </div>
  </div>
</section>
<section className="relative z-10 bg-black px-6 py-24 md:px-12 lg:px-16">
  <div className="mx-auto max-w-4xl text-center">
    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
      Private Consultation
    </p>

    <h2 className="mb-6 text-4xl md:text-6xl">
      Let's discuss your next investment.
    </h2>

    <p className="mb-10 text-gray-300">
      Connect with our advisors for exclusive opportunities
      and tailored investment strategies.
    </p>

    <button className="rounded-lg bg-white px-8 py-4 text-black font-medium">
      Schedule Consultation
    </button>
  </div>
</section>
<footer className="relative z-10 border-t border-white/10 bg-black px-6 py-12 md:px-12 lg:px-16">
  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
    <div>
      <h3 className="text-2xl font-semibold">
        BAWANI ESTATES
      </h3>

      <p className="mt-2 text-gray-400">
        Extraordinary Properties. Timeless Investments.
      </p>
    </div>

    <div className="text-gray-400">
      © 2026 Bawani Estates. All rights reserved.
    </div>
  </div>
</footer>

<div className="mt-10 space-y-2 text-gray-300">
  <p>info@bawaniestates.com</p>
  <p>+92 320 2481500</p>
  <p>Dubai • London • New York • Singapore</p>
</div>
<WhatsAppButton />
<AIChat />
    </div>
  );
}