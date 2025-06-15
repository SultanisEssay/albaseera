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
            <Link href="/new-to-islam" className="hover:text-sky-800">I'M NEW TO ISLAM</Link>
            <Link href="/believers" className="hover:text-sky-800">BELIEVERS</Link>
            <Link href="/faqs" className="hover:text-sky-800">FAQS</Link>
            <Link href="/history" className="hover:text-sky-800">HISTORY</Link>
            <Link href="/begin" className="hover:text-sky-800">BEGIN YOUR JOURNEY</Link>
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
            <Link href="/new-to-islam" className="block text-gray-800 hover:text-sky-800">I'M NEW TO ISLAM</Link>
            <Link href="/believers" className="block text-gray-800 hover:text-sky-800">BELIEVERS</Link>
            <Link href="/faqs" className="block text-gray-800 hover:text-sky-800">FAQS</Link>
            <Link href="/history" className="block text-gray-800 hover:text-sky-800">HISTORY</Link>
            <Link href="/begin" className="block text-gray-800 hover:text-sky-800">BEGIN YOUR JOURNEY</Link>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 py-12 text-gray-900">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-sky-900">Explore Islam with Heart and Mind</h1>
          <p className="text-lg text-gray-700 mb-6">For the seeker, the thinker, the believer—welcome to a journey of purpose.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/what-is-islam" className="border border-gray-800 px-5 py-2 rounded hover:bg-gray-100">What is Islam?</Link>
            <Link href="/who-is-allah" className="border border-gray-800 px-5 py-2 rounded hover:bg-gray-100">Who is Allah?</Link>
            <Link href="/does-god-exist" className="border border-gray-800 px-5 py-2 rounded hover:bg-gray-100">Does God Exist?</Link>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-3">🧠 For Thinkers</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Logic of God</li>
              <li>Qur’an & Science</li>
              <li>Why Islam?</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">🕊️ For Seekers</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Peace in Islam</li>
              <li>Afterlife</li>
              <li>Who is Muhammad ﷺ</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">🧎 For Muslims</h3>
            <ul className="space-y-2 text-gray-700">
              <li>How to Pray</li>
              <li>Daily Sunnah</li>
              <li>Duas for Difficult Times</li>
            </ul>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-sky-900">Learn the Basics</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pillars" className="border px-4 py-2 rounded hover:bg-gray-100">Pillars of Islam</Link>
            <Link href="/beliefs" className="border px-4 py-2 rounded hover:bg-gray-100">Core Beliefs</Link>
            <Link href="/islam-one-page" className="border px-4 py-2 rounded hover:bg-gray-100">Islam in 1 Page</Link>
            <Link href="/misconceptions" className="border px-4 py-2 rounded hover:bg-gray-100">Common Misconceptions</Link>
          </div>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-2xl font-semibold mb-4 text-sky-900">Got Questions?</h2>
          <form className="max-w-xl mx-auto space-y-4 text-left">
            <input type="text" placeholder="Name (optional)" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-600" />
            <input type="email" placeholder="Email (optional)" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-600" />
            <textarea placeholder="Your question" rows={4} className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-600"></textarea>
            <button type="submit" className="w-full bg-sky-800 text-white py-2 rounded hover:bg-sky-900 transition">Submit</button>
            <p className="text-sm text-gray-500 text-center">We respond within 24 hours.</p>
          </form>
        </section>

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
