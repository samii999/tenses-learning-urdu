"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PastSimpleExercise2() {
  const exercises = [
    {
      id: 1,
      urdu: "میں نے کل کھانا نہیں کھایا۔",
      answer: "I did not eat food yesterday",
      options: [
        "I did not eat food yesterday",
        "I did not ate food yesterday",
        "I not ate food yesterday",
        "I didn't ate food yesterday"
      ],
      correct: 0
    },
    {
      id: 2,
      urdu: "کیا تم کل سکول گئے؟",
      answer: "Did you go to school yesterday?",
      options: [
        "Did you go to school yesterday?",
        "Did you went to school yesterday?",
        "Did you go to school yesterday?",
        "Were you go to school yesterday?"
      ],
      correct: 0
    },
    {
      id: 3,
      urdu: "وہ کل نہیں آیا۔",
      answer: "He did not come yesterday",
      options: [
        "He did not came yesterday",
        "He did not come yesterday",
        "He not came yesterday",
        "He didn't came yesterday"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "کیا تم نے کل فلم دیکھی؟",
      answer: "Did you watch a movie yesterday?",
      options: [
        "Did you watched a movie yesterday?",
        "Did you watch a movie yesterday?",
        "Did you watch a movie yesterday?",
        "Were you watch a movie yesterday?"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "اس نے مجھے خط نہیں لکھا۔",
      answer: "She did not write me a letter",
      options: [
        "She did not wrote me a letter",
        "She did not write me a letter",
        "She not wrote me a letter",
        "She didn't wrote me a letter"
      ],
      correct: 1
    },
    {
      id: 6,
      urdu: "کیا وہ کل شام آئے؟",
      answer: "Did they come yesterday evening?",
      options: [
        "Did they came yesterday evening?",
        "Did they come yesterday evening?",
        "Did they come yesterday evening?",
        "Were they come yesterday evening?"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "میں نے کل پانی نہیں پیا۔",
      answer: "I did not drink water yesterday",
      options: [
        "I did not drank water yesterday",
        "I did not drink water yesterday",
        "I not drank water yesterday",
        "I didn't drank water yesterday"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "کیا اس نے کل کتاب خریدی؟",
      answer: "Did he buy a book yesterday?",
      options: [
        "Did he bought a book yesterday?",
        "Did he buy a book yesterday?",
        "Did he buy a book yesterday?",
        "Was he buy a book yesterday?"
      ],
      correct: 1
    },
    {
      id: 9,
      urdu: "وہ کل یہاں نہیں آیا۔",
      answer: "He did not come here yesterday",
      options: [
        "He did not came here yesterday",
        "He did not come here yesterday",
        "He not came here yesterday",
        "He didn't came here yesterday"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "تم کل کہاں گئے؟",
      answer: "Where did you go yesterday?",
      options: [
        "Where did you went yesterday?",
        "Where did you go yesterday?",
        "Where did you go yesterday?",
        "Where you went yesterday?"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "اس نے خط کیوں نہیں پڑھا؟",
      answer: "Why did she not read the letter?",
      options: [
        "Why did she not read the letter?",
        "Why did she not read the letter?",
        "Why she not read the letter?",
        "Why didn't she read the letter?"
      ],
      correct: 0
    },
    {
      id: 12,
      urdu: "تم نے کل رات کیا کیا؟",
      answer: "What did you do last night?",
      options: [
        "What did you did last night?",
        "What did you do last night?",
        "What did you do last night?",
        "What you did last night?"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises-in-urdu" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/past-simple" className="text-white/80 hover:text-white transition duration-300">
              Past Simple Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Simple Tense - Exercise 2
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Negatives & Questions - نفی اور سوال
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
                  <li>منفی جملوں میں did not + verb(1st form) استعمال کریں</li>
                  <li>سوالیہ جملوں میں Did + subject + verb(1st form) استعمال کریں</li>
                  <li>did کے بعد verb ہمیشہ پہلی فارم میں آتی ہے</li>
                  <li>WH Questions میں WH word + did + subject + verb(1st form)</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-indigo-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition duration-300"
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
              href="/exercises-in-urdu/past-simple-exercise-1"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Previous Exercise
            </Link>
            <Link 
              href="/exercises-in-urdu/past-continuous-exercise-1"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next: Past Continuous
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses-in-urdu/past-simple"
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