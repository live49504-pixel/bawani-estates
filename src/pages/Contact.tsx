import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="bg-black px-6 py-24 text-white md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Contact Us
          </p>

          <h1 className="mb-8 text-5xl md:text-7xl">
            Let's discuss your next investment.
          </h1>

          <p className="max-w-3xl text-lg text-gray-300">
            Connect with our advisors for exclusive opportunities,
            luxury properties, and tailored investment strategies.
          </p>
        </div>
      </section>

      <section className="bg-black px-6 pb-24 text-white md:px-12 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Contact Form */}
          <div className="liquid-glass rounded-2xl p-8">
            <h2 className="mb-6 text-3xl">Send an Inquiry</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your requirements..."
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
              />

              <button
                type="submit"
                className="rounded-xl bg-white px-8 py-3 font-medium text-black"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="liquid-glass rounded-2xl p-8">
              <h3 className="mb-3 text-2xl">Email</h3>
              <p className="text-gray-300">
                info@bawaniestates.com
              </p>
            </div>

            <div className="liquid-glass rounded-2xl p-8">
              <h3 className="mb-3 text-2xl">WhatsApp</h3>

              <a
                href="https://wa.me/923202481500"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-lg bg-green-500 px-6 py-3 font-medium text-white"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="liquid-glass rounded-2xl p-8">
              <h3 className="mb-3 text-2xl">Global Presence</h3>

              <p className="text-gray-300">
                Dubai • London • New York • Singapore
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
 <WhatsAppButton />
    </>
  );
}