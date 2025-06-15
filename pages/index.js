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
            <Link href="/new" className="hover:text-sky-800">I'M NEW</Link>
            <Link href="/why-islam" className="hover:text-sky-800">WHY ISLAM?</Link>
            <Link href="/believers" className="hover:text-sky-800">FOR BELIEVERS</Link>
            <Link href="/journey" className="hover:text-sky-800">START JOURNEY</Link>
            <Link href="/ask" className="hover:text-sky-800">ASK ANYTHING</Link>
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
            <Link href="/new" className="block text-gray-800 hover:text-sky-800">I'M NEW</Link>
            <Link href="/why-islam" className="block text-gray-800 hover:text-sky-800">WHY ISLAM?</Link>
            <Link href="/believers" className="block text-gray-800 hover:text-sky-800">FOR BELIEVERS</Link>
            <Link href="/journey" className="block text-gray-800 hover:text-sky-800">START JOURNEY</Link>
            <Link href="/ask" className="block text-gray-800 hover:text-sky-800">ASK ANYTHING</Link>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 py-12 text-gray-900">
        {/* HERO */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-sky-900">What if you’ve been living your whole life… without knowing why?</h1>
          <p className="text-lg text-gray-700 mb-2 max-w-2xl mx-auto">Whether you believe in God, many gods, no god — or just feel lost — the answers begin here.</p>
          <p className="text-sm text-gray-500 mb-6">Clarity, logic, and purpose — all rooted in divine truth.</p>
          <Link href="/why-it-matters" className="inline-block bg-sky-900 text-white px-6 py-3 rounded hover:bg-sky-800">I want to know why I exist</Link>
        </section>

        {/* BIG QUESTIONS + WHAT IS ISLAM */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Big Questions</h2>
            <ul className="space-y-4">
              <li className="border rounded px-4 py-3 flex items-center gap-3">❓ Why do we exist?</li>
              <li className="border rounded px-4 py-3 flex items-center gap-3">📍 What happens after death?</li>
              <li className="border rounded px-4 py-3 flex items-center gap-3">☀️ Is there really suffering in the world?</li>
            </ul>
            <Link href="/questions" className="mt-6 inline-block bg-white text-sky-900 border border-sky-900 px-6 py-2 rounded hover:bg-sky-50">Explore These Questions</Link>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">What is Islam?</h2>
            <p className="text-gray-700 mb-4">Not a culture. Not a trend. Islam is the timeless revelation from the Creator — a call back to clarity, worship, and purpose.</p>
            <Link href="/creator" className="inline-block bg-sky-900 text-white px-5 py-2 rounded hover:bg-sky-800">Discover the Creator</Link>
          </div>
        </section>

        {/* LEARN BASICS + ASK + JOURNEY */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-4">Learn the Basics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/pillars" className="border px-4 py-2 rounded hover:bg-gray-100">Pillars of Islam</Link>
              <Link href="/beliefs" className="border px-4 py-2 rounded hover:bg-gray-100">Islam in 1 Page</Link>
              <Link href="/misconceptions" className="border px-4 py-2 rounded hover:bg-gray-100">Common Misconceptions</Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Ask Anything (Anonymous)</h2>
            <p className="text-gray-700 mb-4">Unsure? Confused? Curious? Ask anonymously — no judgment, no labels.</p>
            <form className="space-y-3">
              <input type="text" placeholder="Name (optional)" className="w-full border px-3 py-2 rounded" />
              <input type="email" placeholder="Email (optional)" className="w-full border px-3 py-2 rounded" />
              <textarea placeholder="Your question" rows={3} className="w-full border px-3 py-2 rounded"></textarea>
              <button type="submit" className="w-full bg-sky-900 text-white py-2 rounded hover:bg-sky-800">Submit</button>
              <p className="text-xs text-center text-gray-500">We respond within 24 hours.</p>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Start Your Journey</h2>
            <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
              <li>I want to reconnect with prayer</li>
              <li>I want to understand the Qur’an</li>
              <li>I want to live with purpose</li>
            </ul>
            <Link href="/journey" className="inline-block bg-sky-900 text-white px-5 py-2 rounded hover:bg-sky-800">Start My Journey</Link>
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
