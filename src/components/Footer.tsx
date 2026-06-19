export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 md:px-12 lg:px-16">
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
  );
}