"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function FutureSimpleExercise2() {
  const exercises = [
    {
      id: 1,
      urdu: "میں تمہاری مدد کروں گا۔ (وعدہ)",
      answer: "I will help you",
      options: [
        "I help you",
        "I will help you",
        "I am help you",
        "I will helps you"
      ],
      correct: 1
    },
    {
      id: 2,
      urdu: "کیا میں دروازہ کھول دوں؟ (پیشکش)",
      answer: "Shall I open the door?",
      options: [
        "Do I open the door?",
        "Will I open the door?",
        "Shall I open the door?",
        "Am I open the door?"
      ],
      correct: 2
    },
    {
      id: 3,
      urdu: "میں تمہیں کبھی نہیں بھولوں گا۔ (وعدہ)",
      answer: "I will never forget you",
      options: [
        "I never forget you",
        "I will never forget you",
        "I am never forget you",
        "I will never forgets you"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "کیا میں آپ کے لیے پانی لاؤں؟ (پیشکش)",
      answer: "Shall I bring you water?",
      options: [
        "Do I bring you water?",
        "Will I bring you water?",
        "Shall I bring you water?",
        "Am I bring you water?"
      ],
      correct: 2
    },
    {
      id: 5,
      urdu: "میں کل تمہیں فون کروں گا۔ (وعدہ)",
      answer: "I will call you tomorrow",
      options: [
        "I call you tomorrow",
        "I will call you tomorrow",
        "I am call you tomorrow",
        "I will calls you tomorrow"
      ],
      correct: 1
    },
    {
      id: 6,
      urdu: "کیا میں تمہیں سٹیشن چھوڑ دوں؟ (پیشکش)",
      answer: "Shall I drop you at the station?",
      options: [
        "Do I drop you at the station?",
        "Will I drop you at the station?",
        "Shall I drop you at the station?",
        "Am I drop you at the station?"
      ],
      correct: 2
    },
    {
      id: 7,
      urdu: "وعدہ کرتا ہوں میں سچ بولوں گا۔",
      answer: "I promise I will tell the truth",
      options: [
        "I promise I tell the truth",
        "I promise I will tell the truth",
        "I promise I am tell the truth",
        "I promise I will tells the truth"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "کیا میں آپ کی مدد کر سکتا ہوں؟ (پیشکش)",
      answer: "Shall I help you?",
      options: [
        "Do I help you?",
        "Will I help you?",
        "Shall I help you?",
        "Am I help you?"
      ],
      correct: 2
    },
    {
      id: 9,
      urdu: "میں تمہارا انتظار کروں گا۔ (وعدہ)",
      answer: "I will wait for you",
      options: [
        "I wait for you",
        "I will wait for you",
        "I am wait for you",
        "I will waits for you"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "کیا ہم کل مل سکتے ہیں؟ (تجویز)",
      answer: "Shall we meet tomorrow?",
      options: [
        "Do we meet tomorrow?",
        "Will we meet tomorrow?",
        "Shall we meet tomorrow?",
        "Are we meet tomorrow?"
      ],
      correct: 2
    },
    {
      id: 11,
      urdu: "میں تمہیں یقین دلاتا ہوں کہ سب ٹھیک ہو گا۔",
      answer: "I assure you that everything will be fine",
      options: [
        "I assure you that everything is fine",
        "I assure you that everything will be fine",
        "I assure you that everything will is fine",
        "I assure you that everything will are fine"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "کیا میں آپ کے لیے کچھ لا سکتا ہوں؟ (پیشکش)",
      answer: "Shall I get you something?",
      options: [
        "Do I get you something?",
        "Will I get you something?",
        "Shall I get you something?",
        "Am I get you something?"
      ],
      correct: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises-in-urdu" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/future-simple" className="text-white/80 hover:text-white transition duration-300">
              Future Simple Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Future Simple Tense - Exercise 2
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Promises & Offers - وعدے اور پیشکشیں
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
                  <li>وعدوں (promises) کے لیے will استعمال کریں</li>
                  <li>پیشکش (offers) اور تجاویز (suggestions) کے لیے shall استعمال کریں (صرف I اور We کے ساتھ)</li>
                  <li>shall کا استعمال رسمی موقعوں پر ہوتا ہے</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition duration-300"
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
              href="/exercises-in-urdu/future-simple-exercise-1"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Previous Exercise
            </Link>
            <Link 
              href="/exercises-in-urdu/future-continuous-exercise-1"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next: Future Continuous
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses-in-urdu/future-simple"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Review Lesson
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}