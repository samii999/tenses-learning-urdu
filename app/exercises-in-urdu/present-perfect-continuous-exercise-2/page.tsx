"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PresentPerfectContinuousExercise2() {
  const exercises = [
    {
      id: 1,
      urdu: "وہ تھکا ہوا ہے کیونکہ وہ دو گھنٹے سے دوڑ رہا ہے۔",
      answer: "He is tired because he has been running for two hours",
      options: [
        "He is tired because he ran for two hours",
        "He is tired because he has run for two hours",
        "He is tired because he has been running for two hours",
        "He is tired because he is running for two hours"
      ],
      correct: 2
    },
    {
      id: 2,
      urdu: "کیا تم دو گھنٹے سے پڑھ رہے ہو؟",
      answer: "Have you been studying for two hours?",
      options: [
        "Have you studied for two hours?",
        "Are you studying for two hours?",
        "Have you been studying for two hours?",
        "Has you been studying for two hours?"
      ],
      correct: 2
    },
    {
      id: 3,
      urdu: "وہ صبح سے کام نہیں کر رہی۔",
      answer: "She has not been working since morning",
      options: [
        "She has not worked since morning",
        "She is not working since morning",
        "She has not been working since morning",
        "She have not been working since morning"
      ],
      correct: 2
    },
    {
      id: 4,
      urdu: "تم کب سے انگریزی سیکھ رہے ہو؟",
      answer: "How long have you been learning English?",
      options: [
        "When have you been learning English?",
        "How long have you been learning English?",
        "How long are you learning English?",
        "Since when have you learned English?"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "اس کی آنکھیں سرخ ہیں کیونکہ وہ رو رہی ہے۔",
      answer: "Her eyes are red because she has been crying",
      options: [
        "Her eyes are red because she cried",
        "Her eyes are red because she has cried",
        "Her eyes are red because she has been crying",
        "Her eyes are red because she is crying"
      ],
      correct: 2
    },
    {
      id: 6,
      urdu: "میں تین گھنٹے سے انتظار کر رہا ہوں۔",
      answer: "I have been waiting for three hours",
      options: [
        "I have waited for three hours",
        "I am waiting for three hours",
        "I have been waiting for three hours",
        "I has been waiting for three hours"
      ],
      correct: 2
    },
    {
      id: 7,
      urdu: "وہ 2018 سے اس کمپنی میں کام کر رہے ہیں۔",
      answer: "They have been working in this company since 2018",
      options: [
        "They have worked in this company since 2018",
        "They are working in this company since 2018",
        "They have been working in this company since 2018",
        "They has been working in this company since 2018"
      ],
      correct: 2
    },
    {
      id: 8,
      urdu: "کیا وہ صبح سے سو رہی ہے؟",
      answer: "Has she been sleeping since morning?",
      options: [
        "Has she slept since morning?",
        "Is she sleeping since morning?",
        "Has she been sleeping since morning?",
        "Have she been sleeping since morning?"
      ],
      correct: 2
    },
    {
      id: 9,
      urdu: "ہم دس سال سے یہاں رہ رہے ہیں۔",
      answer: "We have been living here for ten years",
      options: [
        "We have lived here for ten years",
        "We are living here for ten years",
        "We have been living here for ten years",
        "We has been living here for ten years"
      ],
      correct: 2
    },
    {
      id: 10,
      urdu: "وہ بیمار ہے کیونکہ وہ دھوپ میں کھیل رہا تھا۔",
      answer: "He is sick because he has been playing in the sun",
      options: [
        "He is sick because he played in the sun",
        "He is sick because he has played in the sun",
        "He is sick because he has been playing in the sun",
        "He is sick because he was playing in the sun"
      ],
      correct: 2
    },
    {
      id: 11,
      urdu: "وہ کب سے انتظار کر رہے ہیں؟",
      answer: "How long have they been waiting?",
      options: [
        "When have they been waiting?",
        "How long have they been waiting?",
        "How long are they waiting?",
        "Since when have they waited?"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "میں نے دو گھنٹے سے فون نہیں دیکھا۔",
      answer: "I have not been looking at the phone for two hours",
      options: [
        "I have not looked at the phone for two hours",
        "I am not looking at the phone for two hours",
        "I have not been looking at the phone for two hours",
        "I has not been looking at the phone for two hours"
      ],
      correct: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
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
            Present Perfect Continuous Tense - Exercise 2
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Mixed Scenarios - مختلف صورتحال
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
                  <li>وجہ بتانے کے لیے because کا استعمال کریں</li>
                  <li>How long سے مدت پوچھیں</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-orange-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition duration-300"
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
              href="/exercises-in-urdu/present-perfect-continuous-exercise-1"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Previous Exercise
            </Link>
            <Link 
              href="/exercises-in-urdu/past-simple-exercise-1"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next: Past Tenses
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