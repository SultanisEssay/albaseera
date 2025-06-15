import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/albaseera-logo.png';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="Albaseera Logo" width={40} height={40} className="object-contain" />
            <span className="text-xl font-bold text-sky-900 hidden sm:inline">ALBASEERA</span>
          </Link>

          <nav className="hidden sm:flex space-x-6 text-sm sm:text-base text-gray-800 font-medium">
            <Link href="/why-it-matters" className="hover:text-sky-800">WHY IT MATTERS</Link>
            <Link href="/creator" className="hover:text-sky-800">THE CREATOR</Link>
            <Link href="/what-islam" className="hover:text-sky-800">WHAT ISLAM</Link>
            <Link href="/journey" className="hover:text-sky-800">YOUR JOURNEY</Link>
          </nav>

          <button className="sm:hidden text-gray-700 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="sm:hidden px-4 pb-4 space-y-2 bg-white shadow">
            <Link href="/why-it-matters" className="block text-gray-800 hover:text-sky-800">WHY IT MATTERS</Link>
            <Link href="/creator" className="block text-gray-800 hover:text-sky-800">THE CREATOR</Link>
            <Link href="/what-islam" className="block text-gray-800 hover:text-sky-800">WHAT ISLAM</Link>
            <Link href="/journey" className="block text-gray-800 hover:text-sky-800">YOUR JOURNEY</Link>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 py-12 text-gray-900">
        {/* HERO */}
        <section className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-sky-900">What if you've lived your whole life... without knowing why?</h1>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">Whether you believe in one God, many gods, or none — the answers begin with clarity and purpose.</p>
          <Link href="/why-it-matters" className="inline-block bg-sky-900 text-white px-6 py-3 rounded hover:bg-sky-800">I want to know why I exist</Link>
        </section>

        {/* BIG QUESTIONS + INTRO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Big Questions</h2>
            <ul className="space-y-4">
              <li className="border rounded px-4 py-3 flex items-center gap-3"><span className="text-xl">❓</span> Why do we exist?</li>
              <li className="border rounded px-4 py-3 flex items-center gap-3"><span className="text-xl">💿</span> What happens after death?</li>
              <li className="border rounded px-4 py-3 flex items-center gap-3"><span className="text-xl">☀️</span> Why is there suffering in the world?</li>
              <li className="border rounded px-4 py-3 flex items-center gap-3"><span className="text-xl">✴️</span> Is there really a Creator?</li>
            </ul>
            <Link href="/why-it-matters" className="mt-6 inline-block bg-sky-900 text-white px-6 py-2 rounded hover:bg-sky-800">Explore These Questions</Link>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-2">What is Islam?</h2>
              <p className="mb-4 text-gray-700">Not a culture, not a brand. Islam is the timeless message of truth — the final revelation reconnecting humanity with its Creator.</p>
              <Link href="/creator" className="inline-block bg-sky-900 text-white px-5 py-2 rounded hover:bg-sky-800">Discover the Creator</Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Start Your Journey</h2>
              <ul className="mb-4 list-disc pl-5 text-gray-700">
                <li>I want to reconnect with prayer</li>
                <li>I want to understand the Qur’an</li>
              </ul>
              <Link href="/journey" className="inline-block bg-sky-900 text-white px-5 py-2 rounded hover:bg-sky-800">Start My Journey</Link>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Ask. Anything. Anonymously</h2>
              <p className="text-gray-700">Confused? Unsure? Skeptical? Ask anything — no judgment, no labels.</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t pt-6 text-center text-sm text-gray-600">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/volunteer" className="hover:underline">Volunteer</Link>
            <Link href="/request-quran" className="hover:underline">Request a Quran</Link>
          </div>
          <p>&copy; 2025 <span className="font-semibold text-sky-800">Albaseera</span></p>
        </footer>
      </main>
    </>
  );
}
