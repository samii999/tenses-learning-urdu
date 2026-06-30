"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PastSimpleExercise1() {
  const exercises = [
    {
      id: 1,
      urdu: "میں نے کل کھانا کھایا۔",
      answer: "I ate food yesterday",
      options: [
        "I eat food yesterday",
        "I ate food yesterday",
        "I have eaten food yesterday",
        "I eated food yesterday"
      ],
      correct: 1
    },
    {
      id: 2,
      urdu: "وہ کل سکول گیا۔",
      answer: "He went to school yesterday",
      options: [
        "He go to school yesterday",
        "He goed to school yesterday",
        "He went to school yesterday",
        "He has gone to school yesterday"
      ],
      correct: 2
    },
    {
      id: 3,
      urdu: "ہم نے کل فلم دیکھی۔",
      answer: "We watched a movie yesterday",
      options: [
        "We watch a movie yesterday",
        "We watched a movie yesterday",
        "We have watched a movie yesterday",
        "We did watch a movie yesterday"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "اس نے مجھے خط لکھا۔",
      answer: "She wrote me a letter",
      options: [
        "She write me a letter",
        "She writed me a letter",
        "She wrote me a letter",
        "She has written me a letter"
      ],
      correct: 2
    },
    {
      id: 5,
      urdu: "وہ کل شام آئے۔",
      answer: "They came yesterday evening",
      options: [
        "They come yesterday evening",
        "They comed yesterday evening",
        "They came yesterday evening",
        "They have come yesterday evening"
      ],
      correct: 2
    },
    {
      id: 6,
      urdu: "میں نے کل پانی پیا۔",
      answer: "I drank water yesterday",
      options: [
        "I drink water yesterday",
        "I drinked water yesterday",
        "I drank water yesterday",
        "I have drunk water yesterday"
      ],
      correct: 2
    },
    {
      id: 7,
      urdu: "اس نے کل کتاب خریدی۔",
      answer: "He bought a book yesterday",
      options: [
        "He buy a book yesterday",
        "He buyed a book yesterday",
        "He bought a book yesterday",
        "He has bought a book yesterday"
      ],
      correct: 2
    },
    {
      id: 8,
      urdu: "ہم نے کل کام کیا۔",
      answer: "We worked yesterday",
      options: [
        "We work yesterday",
        "We worked yesterday",
        "We have worked yesterday",
        "We did worked yesterday"
      ],
      correct: 1
    },
    {
      id: 9,
      urdu: "وہ کل یہاں آیا۔",
      answer: "He came here yesterday",
      options: [
        "He come here yesterday",
        "He comed here yesterday",
        "He came here yesterday",
        "He has come here yesterday"
      ],
      correct: 2
    },
    {
      id: 10,
      urdu: "میں نے کل گاڑی چلائی۔",
      answer: "I drove a car yesterday",
      options: [
        "I drive a car yesterday",
        "I drived a car yesterday",
        "I drove a car yesterday",
        "I have driven a car yesterday"
      ],
      correct: 2
    },
    {
      id: 11,
      urdu: "اس نے کل خط پڑھا۔",
      answer: "She read the letter yesterday",
      options: [
        "She read the letter yesterday",
        "She readed the letter yesterday",
        "She has read the letter yesterday",
        "She did read the letter yesterday"
      ],
      correct: 0
    },
    {
      id: 12,
      urdu: "وہ کل رات دیر سے سوئے۔",
      answer: "They slept late last night",
      options: [
        "They sleep late last night",
        "They sleeped late last night",
        "They slept late last night",
        "They have slept late last night"
      ],
      correct: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
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
            Past Simple Tense - Exercise 1
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Regular & Irregular Verbs - باقاعدہ اور غیر باقاعدہ فعل
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
                  <li>Past Simple میں verb کی دوسری فارم (2nd form) استعمال ہوتی ہے</li>
                  <li>Regular verbs میں ed لگتا ہے (work → worked, play → played)</li>
                  <li>Irregular verbs کی دوسری فارم یاد کرنی ہوتی ہے (go → went, eat → ate)</li>
                  <li>ماضی کا وقت (yesterday, last night) ضرور استعمال کریں</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition duration-300"
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
              href="/exercises-in-urdu/past-simple-exercise-2"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Exercise: Negatives & Questions
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses-in-urdu/past-simple"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Review Lesson
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}