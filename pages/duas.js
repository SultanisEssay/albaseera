
import { useState } from 'react';

const themes = [
  "Seeking Forgiveness & Mercy",
  "Healing from Pain, Sorrow & Hardship",
  "Guidance, Light & Clarity",
  "Family & Relationships",
  "Provision, Work & Barakah",
  "Physical Health & Protection",
  "Daily Life Duas",
  "Longing, Jannah & a Good Ending"
];

const duas = {
  0: [
    {
      arabic: "اللّهُمَّ اغْفِرْ لِي وَارْحَمْنِي",
      transliteration: "Allāhumma ighfir lī wa’rḥamnī",
      meaning: "O Allah, forgive me and have mercy on me."
    }
  ],
  1: [
    {
      arabic: "اللّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
      transliteration: "Allāhumma innī a‘ūdhu bika minal-hammi wal-ḥazan",
      meaning: "O Allah, I seek refuge in You from anxiety and sorrow."
    }
  ],
  2: [
    {
      arabic: "رَبِّ اشْرَحْ لِي صَدْرِي",
      transliteration: "Rabbi ishrah lī ṣadrī",
      meaning: "My Lord, expand for me my chest (grant me clarity and calm)."
    }
  ],
  3: [
    {
      arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
      transliteration: "Rabbanā hab lanā min azwājinā wa dhurriyyātinā qurrata a‘yunin",
      meaning: "Our Lord, grant us from our spouses and offspring comfort to our eyes."
    }
  ],
  4: [
    {
      arabic: "اللَّهُمَّ اكْفِنِي بِحَلاَلِكَ عَنْ حَرَامِكَ",
      transliteration: "Allāhumma akfinī biḥalālika ‘an ḥarāmik",
      meaning: "O Allah, suffice me with what You’ve made lawful against what You’ve forbidden."
    }
  ],
  5: [
    {
      arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي",
      transliteration: "Allāhumma ‘āfinī fī badanī",
      meaning: "O Allah, grant health to my body."
    }
  ],
  6: [
    {
      arabic: "الْـحَمْـدُ للهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا",
      transliteration: "Alḥamdu lillāhi alladhī aḥyānā ba‘da mā amātanā",
      meaning: "All praise is due to Allah who gave us life after He caused us to die (sleep)."
    }
  ],
  7: [
    {
      arabic: "اللَّهُمَّ اجْعَلْ خَيْرَ عُمْرِي آخِرَهُ",
      transliteration: "Allāhumma aj‘al khayra ‘umrī ākhirah",
      meaning: "O Allah, let the best of my life be its end."
    }
  ]
};

export default function Duas() {
  const [active, setActive] = useState(0);

  return (
    <main className="p-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-sky-900 mb-4">Duas Library</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {themes.map((theme, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-4 py-2 rounded ${
              active === index ? 'bg-sky-700 text-white' : 'bg-sky-100 text-sky-900'
            }`}
          >
            {theme}
          </button>
        ))}
      </div>
      <div className="space-y-6">
        {duas[active].map((dua, i) => (
          <div key={i} className="border p-4 rounded bg-white shadow">
            <p className="text-xl font-bold text-right">{dua.arabic}</p>
            <p className="italic text-sm text-right">{dua.transliteration}</p>
            <p className="mt-2">{dua.meaning}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
