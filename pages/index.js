
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 space-y-16 text-gray-800">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-sky-900 mb-4">
          What if your purpose wasn’t to worship a hundred gods,<br />
          chase karma, or fade into nothingness — but to know the One?
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore Islam from a lens of logic, spirit, and purpose.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/thinkers-seekers" className="bg-sky-700 text-white px-6 py-3 rounded shadow hover:bg-sky-800 transition">Start Here – I'm Searching</Link>
          <Link href="/muslim-but-lost" className="bg-white border border-sky-700 text-sky-700 px-6 py-3 rounded shadow hover:bg-sky-50 transition">Born Muslim – But Lost My Way</Link>
        </div>
      </section>

      {/* SECTION: THINKERS */}
      <section className="bg-sky-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-sky-900 mb-2">Born into beliefs? Or ready to question them?</h2>
        <p className="text-gray-700 mb-4">
          For those raised in Hindu, Buddhist, or atheist systems — explore soul cycles, karma, rebirth,
          and Islam’s perspective with side-by-side clarity.
        </p>
        <Link href="/thinkers-seekers" className="text-sky-700 font-medium hover:underline">Explore →</Link>
      </section>

      {/* SECTION: LOST MUSLIMS */}
      <section className="bg-orange-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-orange-900 mb-2">You carry a Muslim name, but feel distant from faith?</h2>
        <p className="text-gray-700 mb-4">
          Here’s where you begin again — how to pray, reconnect, and build your relationship with Allah (SWT)
          in a safe, beautiful way.
        </p>
        <Link href="/muslim-but-lost" className="text-orange-700 font-medium hover:underline">Reignite My Faith →</Link>
      </section>

      {/* SECTION: WHY ISLAM */}
      <section className="bg-amber-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-amber-900 mb-2">Is Islam just another religion? Or is it the final message?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Clear claim of One God (Tawheed) with no partners</li>
          <li>Logical evidence in the Qur’an — unmatched for 1400+ years</li>
          <li>Prophets: Same message from Ādam (Adam PBUH) to Muḥammad (PBUH)</li>
        </ul>
        <Link href="/quran-start" className="text-amber-700 font-medium hover:underline mt-2 inline-block">What Makes Islam Different? →</Link>
      </section>

      {/* FOOTER */}
      <footer className="text-center pt-10 border-t mt-10 text-sm text-gray-500">
        <p>&copy; 2025 Albaseera. The Path of Clarity.</p>
      </footer>
    </main>
  );
}
