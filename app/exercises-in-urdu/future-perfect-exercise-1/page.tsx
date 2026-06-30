"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function FuturePerfectExercise1() {
  const exercises = [
    {
      id: 1,
      urdu: "میں شام تک کام ختم کر چکا ہوں گا۔",
      answer: "I will have finished work by evening",
      options: [
        "I will finish work by evening",
        "I will have finished work by evening",
        "I have finished work by evening",
        "I will have finish work by evening"
      ],
      correct: 1
    },
    {
      id: 2,
      urdu: "وہ کل تک کتاب پڑھ چکی ہو گی۔",
      answer: "She will have read the book by tomorrow",
      options: [
        "She will read the book by tomorrow",
        "She will have read the book by tomorrow",
        "She has read the book by tomorrow",
        "She will have read the book by tomorrow"
      ],
      correct: 1
    },
    {
      id: 3,
      urdu: "ہم اگلے ہفتے تک یہ کام کر چکے ہوں گے۔",
      answer: "We will have done this work by next week",
      options: [
        "We will do this work by next week",
        "We will have done this work by next week",
        "We have done this work by next week",
        "We will have do this work by next week"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "وہ 2025 تک گریجویشن کر چکے ہوں گے۔",
      answer: "They will have graduated by 2025",
      options: [
        "They will graduate by 2025",
        "They will have graduated by 2025",
        "They have graduated by 2025",
        "They will have graduate by 2025"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "میں کل صبح تک خط لکھ چکا ہوں گا۔",
      answer: "I will have written the letter by tomorrow morning",
      options: [
        "I will write the letter by tomorrow morning",
        "I will have written the letter by tomorrow morning",
        "I have written the letter by tomorrow morning",
        "I will have wrote the letter by tomorrow morning"
      ],
      correct: 1
    },
    {
      id: 6,
      urdu: "ٹرین شام 7 بجے تک پہنچ چکی ہو گی۔",
      answer: "The train will have arrived by 7 pm",
      options: [
        "The train will arrive by 7 pm",
        "The train will have arrived by 7 pm",
        "The train has arrived by 7 pm",
        "The train will have arrive by 7 pm"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "وہ کل رات تک واپس آ چکے ہوں گے۔",
      answer: "They will have returned by tomorrow night",
      options: [
        "They will return by tomorrow night",
        "They will have returned by tomorrow night",
        "They have returned by tomorrow night",
        "They will have return by tomorrow night"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "کیا تم شام تک کھانا کھا چکے ہو گے؟",
      answer: "Will you have eaten food by evening?",
      options: [
        "Will you eat food by evening?",
        "Will you have eaten food by evening?",
        "Have you eaten food by evening?",
        "Will you have eat food by evening?"
      ],
      correct: 1
    },
    {
      id: 9,
      urdu: "کیا وہ کل تک کام ختم کر چکی ہو گی؟",
      answer: "Will she have finished work by tomorrow?",
      options: [
        "Will she finish work by tomorrow?",
        "Will she have finished work by tomorrow?",
        "Has she finished work by tomorrow?",
        "Will she have finish work by tomorrow?"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "میں شام تک یہ کام نہیں کر چکا ہوں گا۔",
      answer: "I will not have done this work by evening",
      options: [
        "I will not do this work by evening",
        "I will not have done this work by evening",
        "I have not done this work by evening",
        "I will not have do this work by evening"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "وہ کل تک خط نہیں لکھ چکی ہو گی۔",
      answer: "She will not have written the letter by tomorrow",
      options: [
        "She will not write the letter by tomorrow",
        "She will not have written the letter by tomorrow",
        "She has not written the letter by tomorrow",
        "She will not have write the letter by tomorrow"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "تم کل شام تک کیا کر چکے ہو گے؟",
      answer: "What will you have done by tomorrow evening?",
      options: [
        "What will you do by tomorrow evening?",
        "What will you have done by tomorrow evening?",
        "What have you done by tomorrow evening?",
        "What will you have do by tomorrow evening?"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises-in-urdu" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/future-perfect" className="text-white/80 hover:text-white transition duration-300">
              Future Perfect Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Future Perfect Tense - Exercise 1
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            By/Before Practice - تک / سے پہلے کی مشق
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
                  <li>Future Perfect کا فارمولا: will + have + verb(3rd form)</li>
                  <li>یہ tense بتاتا ہے کہ مستقبل میں کسی خاص وقت تک کام مکمل ہو چکا ہو گا</li>
                  <li>by (تک) کا استعمال وقت کے ساتھ کریں</li>
                  <li>will have کے بعد verb ہمیشہ تیسری فارم میں آتی ہے</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition duration-300"
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
              href="/exercises-in-urdu/future-perfect-exercise-2"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Exercise: Life Milestones
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses-in-urdu/future-perfect"
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