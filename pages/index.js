
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-900">Albaseera</h1>
        <p className="mt-2 text-lg text-gray-700">Discover Islam through intellect, soul, and revelation.</p>
      </header>

      <nav className="flex flex-wrap gap-4 justify-center text-white">
        <Link href="/muslim-but-lost" className="bg-sky-700 px-4 py-2 rounded hover:bg-sky-800">Muslim But Lost</Link>
        <Link href="/thinkers-seekers" className="bg-sky-700 px-4 py-2 rounded hover:bg-sky-800">Thinkers & Seekers</Link>
        <Link href="/quran-start" className="bg-sky-700 px-4 py-2 rounded hover:bg-sky-800">Start with Qur’an</Link>
        <Link href="/salah-guide" className="bg-sky-700 px-4 py-2 rounded hover:bg-sky-800">Salah Guide</Link>
        <Link href="/duas" className="bg-sky-700 px-4 py-2 rounded hover:bg-sky-800">Duas</Link>
      </nav>

      <section className="text-lg text-gray-800 space-y-4">
        <h2 className="text-2xl font-semibold text-sky-900">Why This Site Exists</h2>
        <p>Whether you're a born Muslim who's lost touch, a seeker from another faith, or a skeptic who questions everything — Albaseera is your invitation to explore Islam with clarity and depth.</p>

        <h2 className="text-2xl font-semibold text-sky-900">How to Begin?</h2>
        <ul className="list-disc list-inside">
          <li>Start with the Qur’an, not hearsay.</li>
          <li>Compare belief systems rationally and spiritually.</li>
          <li>Reconnect with prayer, Duas, and your purpose.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-sky-900">Who is it for?</h2>
        <p>For thinkers, wanderers, believers, doubters, the heartbroken, the curious — anyone who seeks meaning with sincerity.</p>
      </section>
    </main>
  )
}
