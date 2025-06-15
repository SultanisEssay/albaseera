
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 text-gray-900">
      {/* HERO */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Explore Islam with Heart and Mind</h1>
        <p className="text-lg mb-6">For the seeker, the thinker, the believer—welcome to a journey of purpose.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/what-is-islam" className="border border-gray-800 px-5 py-2 rounded">What is Islam?</Link>
          <Link href="/who-is-allah" className="border border-gray-800 px-5 py-2 rounded">Who is Allah?</Link>
          <Link href="/does-god-exist" className="border border-gray-800 px-5 py-2 rounded">Does God Exist?</Link>
        </div>
      </section>

      {/* FOR CATEGORIES */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-semibold mb-2">🧠 For Thinkers</h3>
          <ul className="space-y-1">
            <li>Logic of God</li>
            <li>Qur’an & Science</li>
            <li>Why Islam?</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🕊️ For Seekers</h3>
          <ul className="space-y-1">
            <li>Peace in Islam</li>
            <li>Afterlife</li>
            <li>Who is Muhammad ﷺ</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🧎 For Muslims</h3>
          <ul className="space-y-1">
            <li>How to Pray</li>
            <li>Daily Sunnah</li>
            <li>Duas for Difficult Times</li>
          </ul>
        </div>
      </section>

      {/* LEARN THE BASICS */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Learn the Basics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/pillars" className="border px-4 py-2 rounded">Pillars of Islam</Link>
          <Link href="/beliefs" className="border px-4 py-2 rounded">Core Beliefs</Link>
          <Link href="/islam-one-page" className="border px-4 py-2 rounded">Islam in 1 Page</Link>
          <Link href="/misconceptions" className="border px-4 py-2 rounded">Common Misconceptions</Link>
        </div>
      </section>

      {/* QUESTIONS FORM */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Got Questions?</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Name (optional)" className="w-full border px-3 py-2 rounded" />
          <input type="email" placeholder="Email (optional)" className="w-full border px-3 py-2 rounded" />
          <textarea placeholder="Your question" rows="4" className="w-full border px-3 py-2 rounded"></textarea>
          <button type="submit" className="w-full bg-sky-800 text-white py-2 rounded hover:bg-sky-900">Submit</button>
          <p className="text-sm text-gray-500">We respond within 24 hours.</p>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t pt-6 text-center text-sm text-gray-600">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/volunteer">Volunteer</Link>
          <Link href="/request-quran">Request a Quran</Link>
        </div>
        <p>&copy; 2025 Albaseera</p>
      </footer>
    </main>
  );
}
