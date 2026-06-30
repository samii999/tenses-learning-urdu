"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function FuturePerfectContinuousExercise2() {
  const exercises = [
    {
      id: 1,
      urdu: "اگلے سال تک، وہ دس سال سے ایک ہی کمپنی میں کام کر رہا ہو گا۔",
      answer: "By next year, he will have been working in the same company for ten years",
      options: [
        "By next year, he will work in the same company for ten years",
        "By next year, he will have worked in the same company for ten years",
        "By next year, he will have been working in the same company for ten years",
        "By next year, he will have been work in the same company for ten years"
      ],
      correct: 2
    },
    {
      id: 2,
      urdu: "2028 تک، وہ پندرہ سال سے تدریس دے رہی ہو گی۔",
      answer: "By 2028, she will have been teaching for fifteen years",
      options: [
        "By 2028, she will teach for fifteen years",
        "By 2028, she will have taught for fifteen years",
        "By 2028, she will have been teaching for fifteen years",
        "By 2028, she will have been teach for fifteen years"
      ],
      correct: 2
    },
    {
      id: 3,
      urdu: "اگلے مہینے تک، وہ دو سال سے اس پروجیکٹ پر کام کر رہے ہوں گے۔",
      answer: "By next month, they will have been working on this project for two years",
      options: [
        "By next month, they will work on this project for two years",
        "By next month, they will have worked on this project for two years",
        "By next month, they will have been working on this project for two years",
        "By next month, they will have been work on this project for two years"
      ],
      correct: 2
    },
    {
      id: 4,
      urdu: "2026 تک، میں پانچ سال سے اپنا کاروبار چلا رہا ہوں گا۔",
      answer: "By 2026, I will have been running my own business for five years",
      options: [
        "By 2026, I will run my own business for five years",
        "By 2026, I will have run my own business for five years",
        "By 2026, I will have been running my own business for five years",
        "By 2026, I will have been run my own business for five years"
      ],
      correct: 2
    },
    {
      id: 5,
      urdu: "اگلے سال تک، وہ بیس سال سے ڈاکٹر کے طور پر کام کر رہے ہوں گے۔",
      answer: "By next year, they will have been working as doctors for twenty years",
      options: [
        "By next year, they will work as doctors for twenty years",
        "By next year, they will have worked as doctors for twenty years",
        "By next year, they will have been working as doctors for twenty years",
        "By next year, they will have been work as doctors for twenty years"
      ],
      correct: 2
    },
    {
      id: 6,
      urdu: "2030 تک، وہ پچیس سال سے وکالت کر رہی ہو گی۔",
      answer: "By 2030, she will have been practicing law for twenty-five years",
      options: [
        "By 2030, she will practice law for twenty-five years",
        "By 2030, she will have practiced law for twenty-five years",
        "By 2030, she will have been practicing law for twenty-five years",
        "By 2030, she will have been practice law for twenty-five years"
      ],
      correct: 2
    },
    {
      id: 7,
      urdu: "اگلے ہفتے تک، میں دس سال سے صحافت میں ہوں گا۔",
      answer: "By next week, I will have been in journalism for ten years",
      options: [
        "By next week, I will be in journalism for ten years",
        "By next week, I will have been in journalism for ten years",
        "By next week, I will have been in journalism for ten years",
        "By next week, I will have be in journalism for ten years"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "2027 تک، وہ بارہ سال سے انجینئرنگ میں کام کر رہے ہوں گے۔",
      answer: "By 2027, they will have been working in engineering for twelve years",
      options: [
        "By 2027, they will work in engineering for twelve years",
        "By 2027, they will have worked in engineering for twelve years",
        "By 2027, they will have been working in engineering for twelve years",
        "By 2027, they will have been work in engineering for twelve years"
      ],
      correct: 2
    },
    {
      id: 9,
      urdu: "کیا تم اگلے سال تک پانچ سال سے یہ کام کر رہے ہو گے؟",
      answer: "Will you have been doing this job for five years by next year?",
      options: [
        "Will you do this job for five years by next year?",
        "Will you have done this job for five years by next year?",
        "Will you have been doing this job for five years by next year?",
        "Will you have been do this job for five years by next year?"
      ],
      correct: 2
    },
    {
      id: 10,
      urdu: "وہ 2029 تک بیس سال سے اس شعبے میں کام نہیں کر رہے ہوں گے۔",
      answer: "They will not have been working in this field for twenty years by 2029",
      options: [
        "They will not work in this field for twenty years by 2029",
        "They will not have worked in this field for twenty years by 2029",
        "They will not have been working in this field for twenty years by 2029",
        "They will not have been work in this field for twenty years by 2029"
      ],
      correct: 2
    },
    {
      id: 11,
      urdu: "اگلے مہینے تک تم کتنے سال سے اس دفتر میں کام کر رہے ہو گے؟",
      answer: "How many years will you have been working in this office by next month?",
      options: [
        "How many years will you work in this office by next month?",
        "How many years will you have worked in this office by next month?",
        "How many years will you have been working in this office by next month?",
        "How many years will you have been work in this office by next month?"
      ],
      correct: 2
    },
    {
      id: 12,
      urdu: "2031 تک، وہ تیس سال سے اس فرم کے ساتھ منسلک ہوں گے۔",
      answer: "By 2031, they will have been associated with this firm for thirty years",
      options: [
        "By 2031, they will be associated with this firm for thirty years",
        "By 2031, they will have been associated with this firm for thirty years",
        "By 2031, they will have been associated with this firm for thirty years",
        "By 2031, they will have be associated with this firm for thirty years"
      ],
      correct: 1
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
           <Link href="/tenses-in-urdu/future-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
              Future Perfect Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Future Perfect Continuous Tense - Exercise 2
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Career Scenarios - پیشہ ورانہ صورتحال
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
                  <li>Future Perfect Continuous کا فارمولا: will + have + been + verb(ing)</li>
                  <li>یہ tense پیشہ ورانہ زندگی میں تجربے کی مدت بتانے کے لیے استعمال ہوتا ہے</li>
                  <li>مدت کے لیے for استعمال کریں (for ten years, for twenty years)</li>
                  <li>سوالات میں How many years / How long استعمال کریں</li>
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
              href="/exercises-in-urdu/future-perfect-continuous-exercise-1"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Previous Exercise
            </Link>
            <Link 
              href="/exercises"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Back to All Exercises
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses-in-urdu/future-perfect-continuous"
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