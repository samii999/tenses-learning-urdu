'use client';

import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PresentSimpleExercise1() {
  const exercises = [
    {
      id: 1,
      urdu: "میں روزانہ سکول جاتا ہوں۔",
      answer: "I go to school daily",
      options: ["I go to school daily", "I goes to school daily", "I go to school every day", "I am go to school daily"],
      correct: 0
    },
    {
      id: 2,
      urdu: "وہ انگریزی بولتی ہے۔",
      answer: "She speaks English",
      options: ["She speak English", "She speaks English", "She is speak English", "She speaking English"],
      correct: 1
    },
    {
      id: 3,
      urdu: "ہم فٹبال کھیلتے ہیں۔",
      answer: "We play football",
      options: ["We plays football", "We play football", "We are play football", "We playing football"],
      correct: 1
    },
    {
      id: 4,
      urdu: "وہ صبح سویرے اٹھتا ہے۔",
      answer: "He wakes up early in the morning",
      options: ["He wake up early", "He wakes up early", "He is wake up early", "He waking up early"],
      correct: 1
    },
    {
      id: 5,
      urdu: "تم اچھا کام کرتے ہو۔",
      answer: "You do good work",
      options: ["You does good work", "You do good work", "You are do good work", "You doing good work"],
      correct: 1
    },
    {
      id: 6,
      urdu: "سورج مشرق سے نکلتا ہے۔",
      answer: "The sun rises in the east",
      options: ["The sun rise in the east", "The sun rises in the east", "The sun is rise in the east", "The sun rising in the east"],
      correct: 1
    },
    {
      id: 7,
      urdu: "وہ روزانہ ورزش کرتی ہے۔",
      answer: "She exercises daily",
      options: ["She exercise daily", "She exercises daily", "She is exercise daily", "She exercising daily"],
      correct: 1
    },
    {
      id: 8,
      urdu: "میرا بھائی ڈاکٹر ہے۔",
      answer: "My brother is a doctor",
      options: ["My brother am a doctor", "My brother are a doctor", "My brother is a doctor", "My brother be a doctor"],
      correct: 2
    },
    {
      id: 9,
      urdu: "وہ پانی پیتے ہیں۔",
      answer: "They drink water",
      options: ["They drinks water", "They drink water", "They are drink water", "They drinking water"],
      correct: 1
    },
    {
      id: 10,
      urdu: "میں انگریزی سیکھتا ہوں۔",
      answer: "I learn English",
      options: ["I learns English", "I learn English", "I am learn English", "I learning English"],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/present-simple" className="text-white/80 hover:text-white transition duration-300">
              Present Simple Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Simple Tense - Exercise 1
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Basic Sentences - بنیادی جملے
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
                  He/She/It کے ساتھ verb میں 's' لگانا یاد رکھیں۔
                </p>
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
              href="/exercises/present-simple-exercise-2"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Exercise: Questions & Negatives
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses/present-simple"
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