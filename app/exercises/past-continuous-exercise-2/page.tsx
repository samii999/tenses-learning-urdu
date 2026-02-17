"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PastContinuousExercise2() {
  const exercises = [
    {
      id: 1,
      urdu: "میں پڑھ رہا تھا جبکہ وہ سو رہی تھی۔",
      answer: "I was studying while she was sleeping",
      options: [
        "I studied while she slept",
        "I was studying while she was sleeping",
        "I was study while she was sleep",
        "I was studying when she was sleeping"
      ],
      correct: 1
    },
    {
      id: 2,
      urdu: "وہ کھانا پکا رہی تھی جبکہ میں کام کر رہا تھا۔",
      answer: "She was cooking while I was working",
      options: [
        "She cooked while I worked",
        "She was cooking while I was working",
        "She was cook while I was work",
        "She was cooking when I was working"
      ],
      correct: 1
    },
    {
      id: 3,
      urdu: "بچے کھیل رہے تھے جبکہ ہم بات کر رہے تھے۔",
      answer: "The children were playing while we were talking",
      options: [
        "The children played while we talked",
        "The children were playing while we were talking",
        "The children were play while we were talk",
        "The children were playing when we were talking"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "وہ گاڑی چلا رہا تھا جبکہ وہ گانا گا رہی تھی۔",
      answer: "He was driving while she was singing",
      options: [
        "He drove while she sang",
        "He was driving while she was singing",
        "He was drive while she was sing",
        "He was driving when she was singing"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "میں خط لکھ رہا تھا جبکہ وہ کتاب پڑھ رہا تھا۔",
      answer: "I was writing a letter while he was reading a book",
      options: [
        "I wrote a letter while he read a book",
        "I was writing a letter while he was reading a book",
        "I was write a letter while he was read a book",
        "I was writing a letter when he was reading a book"
      ],
      correct: 1
    },
    {
      id: 6,
      urdu: "وہ ٹی وی دیکھ رہے تھے جبکہ ہم کھانا کھا رہے تھے۔",
      answer: "They were watching TV while we were eating",
      options: [
        "They watched TV while we ate",
        "They were watching TV while we were eating",
        "They were watch TV while we were eat",
        "They were watching TV when we were eating"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "پرندے گا رہے تھے جبکہ سورج نکل رہا تھا۔",
      answer: "The birds were singing while the sun was rising",
      options: [
        "The birds sang while the sun rose",
        "The birds were singing while the sun was rising",
        "The birds were sing while the sun was rise",
        "The birds were singing when the sun was rising"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "وہ دوڑ رہا تھا جبکہ میں چل رہا تھا۔",
      answer: "He was running while I was walking",
      options: [
        "He ran while I walked",
        "He was running while I was walking",
        "He was run while I was walk",
        "He was running when I was walking"
      ],
      correct: 1
    },
    {
      id: 9,
      urdu: "وہ نہیں سو رہے تھے جبکہ ہم کام کر رہے تھے۔",
      answer: "They were not sleeping while we were working",
      options: [
        "They did not sleep while we worked",
        "They were not sleeping while we were working",
        "They were not sleep while we were work",
        "They weren't sleeping while we were working"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "کیا تم پڑھ رہے تھے جبکہ وہ کھیل رہے تھے؟",
      answer: "Were you studying while they were playing?",
      options: [
        "Did you study while they played?",
        "Were you studying while they were playing?",
        "Was you studying while they were playing?",
        "Were you study while they were play?"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "وہ ہنس رہے تھے جبکہ وہ رو رہی تھی۔",
      answer: "They were laughing while she was crying",
      options: [
        "They laughed while she cried",
        "They were laughing while she was crying",
        "They were laugh while she was cry",
        "They were laughing when she was crying"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "میں سو نہیں رہا تھا جبکہ وہ کام کر رہا تھا۔",
      answer: "I was not sleeping while he was working",
      options: [
        "I did not sleep while he worked",
        "I was not sleeping while he was working",
        "I was not sleep while he was work",
        "I wasn't sleeping while he was working"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/past-continuous" className="text-white/80 hover:text-white transition duration-300">
              Past Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Continuous Tense - Exercise 2
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Parallel Actions - ایک ساتھ جاری کام
          </p>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 rounded-xl shadow-md p-6 border-l-8 border-yellow-400">
            <div className="flex items-start gap-4">
              <FaLightbulb className="text-yellow-600 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-black mb-2" dir="rtl">
                  ہدایات
                </h2>
                <p className="text-black text-lg" dir="rtl">
                  نیچے دیے گئے اردو جملوں کو انگریزی میں ترجمہ کریں۔ صحیح آپشن پر کلک کریں۔
                  یاد رکھیں:
                </p>
                <ul className="list-disc list-inside text-black mt-2" dir="rtl">
                  <li>جب دو کام ایک ساتھ جاری ہوں تو دونوں Past Continuous میں ہوتے ہیں</li>
                  <li>ربط کے لیے while (جبکہ) استعمال کریں</li>
                  <li>دونوں کاموں کے لیے was/were + verb(ing) کا فارمولا استعمال کریں</li>
                  <li>منفی جملوں میں not کا صحیح استعمال کریں</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercises */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {exercises.map((ex) => (
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {ex.id}
                  </div>
                  <div>
                    <p className="font-urdu text-2xl text-black mb-2" dir="rtl">{ex.urdu}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {ex.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (idx === ex.correct) {
                          alert("✅ صحیح! بہت اچھے!");
                        } else {
                          alert(`❌ غلط! صحیح جواب ہے: ${ex.answer}`);
                        }
                      }}
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition duration-300"
                    >
                      <span className="text-black">{option}</span>
                    </button>
                  ))}
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <span className="font-bold">صحیح جواب:</span> {ex.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/exercises/past-continuous-exercise-1"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Previous Exercise
            </Link>
            <Link 
              href="/exercises/past-perfect-exercise-1"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next: Past Perfect
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses/past-continuous"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Review Lesson
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}