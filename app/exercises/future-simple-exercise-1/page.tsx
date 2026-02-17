"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function FutureSimpleExercise1() {
  const exercises = [
    {
      id: 1,
      urdu: "میں کل تم سے ملوں گا۔",
      answer: "I will meet you tomorrow",
      options: [
        "I meet you tomorrow",
        "I will meet you tomorrow",
        "I am meet you tomorrow",
        "I will meets you tomorrow"
      ],
      correct: 1
    },
    {
      id: 2,
      urdu: "بارش ہو گی۔",
      answer: "It will rain",
      options: [
        "It rains",
        "It will rain",
        "It is rain",
        "It will rains"
      ],
      correct: 1
    },
    {
      id: 3,
      urdu: "وہ کامیاب ہو گا۔",
      answer: "He will succeed",
      options: [
        "He succeeds",
        "He will succeed",
        "He is succeed",
        "He will succeeds"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "ہم کل فلم دیکھیں گے۔",
      answer: "We will watch a movie tomorrow",
      options: [
        "We watch a movie tomorrow",
        "We will watch a movie tomorrow",
        "We are watch a movie tomorrow",
        "We will watches a movie tomorrow"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "وہ شاید دیر سے آئے گی۔",
      answer: "She will probably come late",
      options: [
        "She probably comes late",
        "She will probably come late",
        "She is probably come late",
        "She will probably comes late"
      ],
      correct: 1
    },
    {
      id: 6,
      urdu: "فون کی گھنٹی بج رہی ہے۔ میں اٹھا کر دیکھوں گا۔",
      answer: "The phone is ringing. I will pick it up",
      options: [
        "The phone is ringing. I pick it up",
        "The phone is ringing. I will pick it up",
        "The phone is ringing. I am pick it up",
        "The phone is ringing. I will picks it up"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "مجھے بھوک لگی ہے۔ میں کچھ کھاؤں گا۔",
      answer: "I am hungry. I will eat something",
      options: [
        "I am hungry. I eat something",
        "I am hungry. I will eat something",
        "I am hungry. I am eat something",
        "I am hungry. I will eats something"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "وہ شاید ہم سے ملنے آئے گا۔",
      answer: "He will probably come to meet us",
      options: [
        "He probably comes to meet us",
        "He will probably come to meet us",
        "He is probably come to meet us",
        "He will probably comes to meet us"
      ],
      correct: 1
    },
    {
      id: 9,
      urdu: "کل کا موسم کیسا ہو گا؟",
      answer: "What will the weather be like tomorrow?",
      options: [
        "What is the weather like tomorrow?",
        "What will the weather be like tomorrow?",
        "What does the weather like tomorrow?",
        "What will the weather is like tomorrow?"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "مجھے یقین ہے وہ وقت پر پہنچ جائے گا۔",
      answer: "I am sure he will arrive on time",
      options: [
        "I am sure he arrives on time",
        "I am sure he will arrive on time",
        "I am sure he is arrive on time",
        "I am sure he will arrives on time"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "وہ شاید آج نہ آئے۔",
      answer: "He will probably not come today",
      options: [
        "He probably not comes today",
        "He will probably not come today",
        "He is probably not come today",
        "He will probably not comes today"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "کیا تم کل پارٹی میں آؤ گے؟",
      answer: "Will you come to the party tomorrow?",
      options: [
        "Do you come to the party tomorrow?",
        "Will you come to the party tomorrow?",
        "Are you come to the party tomorrow?",
        "Will you comes to the party tomorrow?"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/future-simple" className="text-white/80 hover:text-white transition duration-300">
              Future Simple Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Future Simple Tense - Exercise 1
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Predictions & Spontaneous Decisions - پیش گوئی اور اچانک فیصلے
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
                  <li>Future Simple کا فارمولا: will + verb (پہلی فارم)</li>
                  <li>پیش گوئی (predictions) کے لیے will استعمال کریں</li>
                  <li>اس وقت کیے گئے فیصلوں (spontaneous decisions) کے لیے will استعمال کریں</li>
                  <li>will کے بعد verb ہمیشہ پہلی فارم میں آتی ہے</li>
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
              href="/exercises/future-simple-exercise-2"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Exercise: Promises & Offers
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses/future-simple"
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