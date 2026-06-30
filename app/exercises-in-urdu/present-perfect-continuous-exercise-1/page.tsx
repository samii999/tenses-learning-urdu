"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PresentPerfectContinuousExercise1() {
  const exercises = [
    {
      id: 1,
      urdu: "میں دو گھنٹے سے پڑھ رہا ہوں۔",
      answer: "I have been studying for two hours",
      options: [
        "I have been studying for two hours",
        "I have studied for two hours",
        "I am studying for two hours",
        "I has been studying for two hours"
      ],
      correct: 0
    },
    {
      id: 2,
      urdu: "وہ صبح سے کام کر رہی ہے۔",
      answer: "She has been working since morning",
      options: [
        "She has been working since morning",
        "She has worked since morning",
        "She is working since morning",
        "She have been working since morning"
      ],
      correct: 0
    },
    {
      id: 3,
      urdu: "ہم 2015 سے یہاں رہ رہے ہیں۔",
      answer: "We have been living here since 2015",
      options: [
        "We have lived here since 2015",
        "We have been living here since 2015",
        "We are living here since 2015",
        "We has been living here since 2015"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "وہ تین گھنٹے سے انتظار کر رہا ہے۔",
      answer: "He has been waiting for three hours",
      options: [
        "He has waited for three hours",
        "He is waiting for three hours",
        "He has been waiting for three hours",
        "He have been waiting for three hours"
      ],
      correct: 2
    },
    {
      id: 5,
      urdu: "بچے شام سے کھیل رہے ہیں۔",
      answer: "The children have been playing since evening",
      options: [
        "The children have played since evening",
        "The children are playing since evening",
        "The children have been playing since evening",
        "The children has been playing since evening"
      ],
      correct: 2
    },
    {
      id: 6,
      urdu: "میں دس منٹ سے آپ کا انتظار کر رہا ہوں۔",
      answer: "I have been waiting for you for ten minutes",
      options: [
        "I have waited for you for ten minutes",
        "I am waiting for you for ten minutes",
        "I have been waiting for you for ten minutes",
        "I has been waiting for you for ten minutes"
      ],
      correct: 2
    },
    {
      id: 7,
      urdu: "وہ 2020 سے انگریزی سیکھ رہی ہے۔",
      answer: "She has been learning English since 2020",
      options: [
        "She has learned English since 2020",
        "She is learning English since 2020",
        "She has been learning English since 2020",
        "She have been learning English since 2020"
      ],
      correct: 2
    },
    {
      id: 8,
      urdu: "بارش دو گھنٹے سے ہو رہی ہے۔",
      answer: "It has been raining for two hours",
      options: [
        "It has rained for two hours",
        "It is raining for two hours",
        "It has been raining for two hours",
        "It have been raining for two hours"
      ],
      correct: 2
    },
    {
      id: 9,
      urdu: "ہم 2018 سے اس شہر میں رہ رہے ہیں۔",
      answer: "We have been living in this city since 2018",
      options: [
        "We have lived in this city since 2018",
        "We are living in this city since 2018",
        "We have been living in this city since 2018",
        "We has been living in this city since 2018"
      ],
      correct: 2
    },
    {
      id: 10,
      urdu: "وہ کافی دیر سے سو رہا ہے۔",
      answer: "He has been sleeping for a long time",
      options: [
        "He has slept for a long time",
        "He is sleeping for a long time",
        "He has been sleeping for a long time",
        "He have been sleeping for a long time"
      ],
      correct: 2
    },
    {
      id: 11,
      urdu: "میں صبح سے یہ کام کر رہا ہوں۔",
      answer: "I have been doing this work since morning",
      options: [
        "I have done this work since morning",
        "I am doing this work since morning",
        "I have been doing this work since morning",
        "I has been doing this work since morning"
      ],
      correct: 2
    },
    {
      id: 12,
      urdu: "وہ ایک گھنٹے سے ورزش کر رہے ہیں۔",
      answer: "They have been exercising for an hour",
      options: [
        "They have exercised for an hour",
        "They are exercising for an hour",
        "They have been exercising for an hour",
        "They has been exercising for an hour"
      ],
      correct: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises-in-urdu" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/present-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
              Present Perfect Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Perfect Continuous Tense - Exercise 1
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Duration Practice - مدت کی مشق
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
                  <li>Present Perfect Continuous کا فارمولا: have/has + been + verb(ing)</li>
                  <li>I/You/We/They کے ساتھ have been، He/She/It کے ساتھ has been</li>
                  <li>مدت کے لیے for استعمال کریں (for two hours, for three days)</li>
                  <li>نقطہ آغاز کے لیے since استعمال کریں (since morning, since 2020)</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-amber-500 hover:bg-amber-50 transition duration-300"
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
              href="/exercises-in-urdu/present-perfect-continuous-exercise-2"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Exercise: Mixed Scenarios
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses-in-urdu/present-perfect-continuous"
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