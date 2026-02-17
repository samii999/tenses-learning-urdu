import Link from 'next/link';
import React from 'react';
import { FaSearch, FaArrowLeft, FaDownload } from 'react-icons/fa';

export default function VerbFormsPage() {
  const verbs = [
    // A
    { base: "arise", past: "arose", participle: "arisen", urdu: "اُٹھنا" },
    { base: "awake", past: "awoke", participle: "awoken", urdu: "جاگنا" },
    // B
    { base: "be", past: "was/were", participle: "been", urdu: "ہونا" },
    { base: "bear", past: "bore", participle: "borne", urdu: "اُٹھانا" },
    { base: "beat", past: "beat", participle: "beaten", urdu: "مارنا" },
    { base: "become", past: "became", participle: "become", urdu: "بننا" },
    { base: "begin", past: "began", participle: "begun", urdu: "شروع کرنا" },
    { base: "bend", past: "bent", participle: "bent", urdu: "جھکنا" },
    { base: "bet", past: "bet", participle: "bet", urdu: "شرط لگانا" },
    { base: "bid", past: "bid", participle: "bid", urdu: "بولی لگانا" },
    { base: "bite", past: "bit", participle: "bitten", urdu: "کاٹنا" },
    { base: "blow", past: "blew", participle: "blown", urdu: "پھونک مارنا" },
    { base: "break", past: "broke", participle: "broken", urdu: "توڑنا" },
    { base: "bring", past: "brought", participle: "brought", urdu: "لانا" },
    { base: "build", past: "built", participle: "built", urdu: "تعمیر کرنا" },
    { base: "burn", past: "burnt", participle: "burnt", urdu: "جلنا" },
    { base: "buy", past: "bought", participle: "bought", urdu: "خریدنا" },
    // C
    { base: "catch", past: "caught", participle: "caught", urdu: "پکڑنا" },
    { base: "choose", past: "chose", participle: "chosen", urdu: "چننا" },
    { base: "come", past: "came", participle: "come", urdu: "آنا" },
    { base: "cost", past: "cost", participle: "cost", urdu: "قیمت ہونا" },
    { base: "cut", past: "cut", participle: "cut", urdu: "کاٹنا" },
    // D
    { base: "deal", past: "dealt", participle: "dealt", urdu: "نمٹنا" },
    { base: "dig", past: "dug", participle: "dug", urdu: "کھودنا" },
    { base: "do", past: "did", participle: "done", urdu: "کرنا" },
    { base: "draw", past: "drew", participle: "drawn", urdu: "کھینچنا" },
    { base: "dream", past: "dreamt", participle: "dreamt", urdu: "خواب دیکھنا" },
    { base: "drink", past: "drank", participle: "drunk", urdu: "پینا" },
    { base: "drive", past: "drove", participle: "driven", urdu: "چلانا" },
    // E
    { base: "eat", past: "ate", participle: "eaten", urdu: "کھانا" },
    // F
    { base: "fall", past: "fell", participle: "fallen", urdu: "گرنا" },
    { base: "feed", past: "fed", participle: "fed", urdu: "کھلانا" },
    { base: "feel", past: "felt", participle: "felt", urdu: "محسوس کرنا" },
    { base: "fight", past: "fought", participle: "fought", urdu: "لڑنا" },
    { base: "find", past: "found", participle: "found", urdu: "تلاش کرنا" },
    { base: "fly", past: "flew", participle: "flown", urdu: "اُڑنا" },
    { base: "forget", past: "forgot", participle: "forgotten", urdu: "بھولنا" },
    { base: "forgive", past: "forgave", participle: "forgiven", urdu: "معاف کرنا" },
    // G
    { base: "get", past: "got", participle: "got/gotten", urdu: "پانا" },
    { base: "give", past: "gave", participle: "given", urdu: "دینا" },
    { base: "go", past: "went", participle: "gone", urdu: "جانا" },
    { base: "grow", past: "grew", participle: "grown", urdu: "بڑھنا" },
    // H
    { base: "hang", past: "hung", participle: "hung", urdu: "لٹکانا" },
    { base: "have", past: "had", participle: "had", urdu: "رکھنا" },
    { base: "hear", past: "heard", participle: "heard", urdu: "سُننا" },
    { base: "hide", past: "hid", participle: "hidden", urdu: "چھپنا" },
    { base: "hit", past: "hit", participle: "hit", urdu: "مارنا" },
    { base: "hold", past: "held", participle: "held", urdu: "پکڑنا" },
    { base: "hurt", past: "hurt", participle: "hurt", urdu: "تکلیف دینا" },
    // K
    { base: "keep", past: "kept", participle: "kept", urdu: "رکھنا" },
    { base: "know", past: "knew", participle: "known", urdu: "جاننا" },
    // L
    { base: "lay", past: "laid", participle: "laid", urdu: "رکھنا" },
    { base: "lead", past: "led", participle: "led", urdu: "رہنمائی کرنا" },
    { base: "learn", past: "learnt", participle: "learnt", urdu: "سیکھنا" },
    { base: "leave", past: "left", participle: "left", urdu: "چھوڑنا" },
    { base: "lend", past: "lent", participle: "lent", urdu: "قرض دینا" },
    { base: "let", past: "let", participle: "let", urdu: "اجازت دینا" },
    { base: "lie", past: "lay", participle: "lain", urdu: "لیٹنا" },
    { base: "light", past: "lit", participle: "lit", urdu: "جلانا" },
    { base: "lose", past: "lost", participle: "lost", urdu: "کھونا" },
    // M
    { base: "make", past: "made", participle: "made", urdu: "بنانا" },
    { base: "mean", past: "meant", participle: "meant", urdu: "مطلب رکھنا" },
    { base: "meet", past: "met", participle: "met", urdu: "ملنا" },
    // P
    { base: "pay", past: "paid", participle: "paid", urdu: "ادا کرنا" },
    { base: "put", past: "put", participle: "put", urdu: "رکھنا" },
    // R
    { base: "read", past: "read", participle: "read", urdu: "پڑھنا" },
    { base: "ride", past: "rode", participle: "ridden", urdu: "سوار ہونا" },
    { base: "ring", past: "rang", participle: "rung", urdu: "بجنا" },
    { base: "rise", past: "rose", participle: "risen", urdu: "اُٹھنا" },
    { base: "run", past: "ran", participle: "run", urdu: "دوڑنا" },
    // S
    { base: "say", past: "said", participle: "said", urdu: "کہنا" },
    { base: "see", past: "saw", participle: "seen", urdu: "دیکھنا" },
    { base: "sell", past: "sold", participle: "sold", urdu: "بیچنا" },
    { base: "send", past: "sent", participle: "sent", urdu: "بھیجنا" },
    { base: "set", past: "set", participle: "set", urdu: "رکھنا" },
    { base: "shake", past: "shook", participle: "shaken", urdu: "ہلانا" },
    { base: "shine", past: "shone", participle: "shone", urdu: "چمکنا" },
    { base: "shoot", past: "shot", participle: "shot", urdu: "گولی مارنا" },
    { base: "show", past: "showed", participle: "shown", urdu: "دکھانا" },
    { base: "shut", past: "shut", participle: "shut", urdu: "بند کرنا" },
    { base: "sing", past: "sang", participle: "sung", urdu: "گانا" },
    { base: "sink", past: "sank", participle: "sunk", urdu: "ڈوبنا" },
    { base: "sit", past: "sat", participle: "sat", urdu: "بیٹھنا" },
    { base: "sleep", past: "slept", participle: "slept", urdu: "سونا" },
    { base: "speak", past: "spoke", participle: "spoken", urdu: "بولنا" },
    { base: "spend", past: "spent", participle: "spent", urdu: "خرچ کرنا" },
    { base: "stand", past: "stood", participle: "stood", urdu: "کھڑا ہونا" },
    { base: "steal", past: "stole", participle: "stolen", urdu: "چرانا" },
    { base: "swim", past: "swam", participle: "swum", urdu: "تیرنا" },
    // T
    { base: "take", past: "took", participle: "taken", urdu: "لینا" },
    { base: "teach", past: "taught", participle: "taught", urdu: "پڑھانا" },
    { base: "tear", past: "tore", participle: "torn", urdu: "پھاڑنا" },
    { base: "tell", past: "told", participle: "told", urdu: "بتانا" },
    { base: "think", past: "thought", participle: "thought", urdu: "سوچنا" },
    { base: "throw", past: "threw", participle: "thrown", urdu: "پھینکنا" },
    // W
    { base: "wake", past: "woke", participle: "woken", urdu: "جاگنا" },
    { base: "wear", past: "wore", participle: "worn", urdu: "پہننا" },
    { base: "win", past: "won", participle: "won", urdu: "جیتنا" },
    { base: "write", past: "wrote", participle: "written", urdu: "لکھنا" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            A to Z Verb Forms in Urdu
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
            Complete List of Irregular Verbs with Urdu Meanings
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(letter => (
                <a 
                  key={letter} 
                  href={`#${letter}`}
                  className="w-8 h-8 flex items-center justify-center bg-black hover:bg-green-600 hover:text-white rounded-full font-bold transition"
                >
                  {letter}
                </a>
              ))}
            </div>
            
            <Link 
              href="/grammar-basics"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <FaArrowLeft />
              <span>Back to Grammar Basics</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Verbs Table */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-black">
                <thead className="bg-green-100">
                  <tr>
                    <th className="py-4 px-6 border-b text-left text-lg">Base Form</th>
                    <th className="py-4 px-6 border-b text-left text-lg">Past Simple</th>
                    <th className="py-4 px-6 border-b text-left text-lg">Past Participle</th>
                    <th className="py-4 px-6 border-b text-left text-lg" dir="rtl">اردو معنی</th>
                  </tr>
                </thead>
                <tbody>
                  {verbs.map((verb, index) => (
                    <React.Fragment key={index}>
                      {index === 0 || verb.base.charAt(0).toUpperCase() !== verbs[index-1]?.base.charAt(0).toUpperCase() && (
                        <tr id={verb.base.charAt(0).toUpperCase()}>
                          <td colSpan={4} className="bg-green-50 py-2 px-6 font-bold text-xl text-green-800">
                            {verb.base.charAt(0).toUpperCase()}
                          </td>
                        </tr>
                      )}
                      <tr className="hover:bg-gray-50 transition">
                        <td className="py-3 px-6 border-b font-bold text-blue-600">{verb.base}</td>
                        <td className="py-3 px-6 border-b text-black">{verb.past}</td>
                        <td className="py-3 px-6 border-b text-black">{verb.participle}</td>
                        <td className="py-3 px-6 border-b font-urdu text-black" dir="rtl">{verb.urdu}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}