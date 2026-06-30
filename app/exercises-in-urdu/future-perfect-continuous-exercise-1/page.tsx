"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function FuturePerfectContinuousExercise1() {
  const exercises = [
    {
      id: 1,
      urdu: "اگلے سال تک، میں دس سال سے کام کر رہا ہوں گا۔",
      answer: "By next year, I will have been working for ten years",
      options: [
        "By next year, I will work for ten years",
        "By next year, I will have worked for ten years",
        "By next year, I will have been working for ten years",
        "By next year, I will have been work for ten years"
      ],
      correct: 2
    },
    {
      id: 2,
      urdu: "شام تک، وہ تین گھنٹے سے پڑھ رہی ہو گی۔",
      answer: "By evening, she will have been studying for three hours",
      options: [
        "By evening, she will study for three hours",
        "By evening, she will have studied for three hours",
        "By evening, she will have been studying for three hours",
        "By evening, she will have been study for three hours"
      ],
      correct: 2
    },
    {
      id: 3,
      urdu: "2026 تک، ہم پانچ سال سے اس شہر میں رہ رہے ہوں گے۔",
      answer: "By 2026, we will have been living in this city for five years",
      options: [
        "By 2026, we will live in this city for five years",
        "By 2026, we will have lived in this city for five years",
        "By 2026, we will have been living in this city for five years",
        "By 2026, we will have been live in this city for five years"
      ],
      correct: 2
    },
    {
      id: 4,
      urdu: "اگلے مہینے تک، وہ دو سال سے اس کمپنی میں کام کر رہے ہوں گے۔",
      answer: "By next month, they will have been working in this company for two years",
      options: [
        "By next month, they will work in this company for two years",
        "By next month, they will have worked in this company for two years",
        "By next month, they will have been working in this company for two years",
        "By next month, they will have been work in this company for two years"
      ],
      correct: 2
    },
    {
      id: 5,
      urdu: "کل صبح تک، بارش بارہ گھنٹے سے ہو رہی ہو گی۔",
      answer: "By tomorrow morning, it will have been raining for twelve hours",
      options: [
        "By tomorrow morning, it will rain for twelve hours",
        "By tomorrow morning, it will have rained for twelve hours",
        "By tomorrow morning, it will have been raining for twelve hours",
        "By tomorrow morning, it will have been rain for twelve hours"
      ],
      correct: 2
    },
    {
      id: 6,
      urdu: "شام 7 بجے تک، میں تین گھنٹے سے انتظار کر رہا ہوں گا۔",
      answer: "By 7 pm, I will have been waiting for three hours",
      options: [
        "By 7 pm, I will wait for three hours",
        "By 7 pm, I will have waited for three hours",
        "By 7 pm, I will have been waiting for three hours",
        "By 7 pm, I will have been wait for three hours"
      ],
      correct: 2
    },
    {
      id: 7,
      urdu: "2027 تک، وہ دس سال سے انگریزی سیکھ رہی ہو گی۔",
      answer: "By 2027, she will have been learning English for ten years",
      options: [
        "By 2027, she will learn English for ten years",
        "By 2027, she will have learned English for ten years",
        "By 2027, she will have been learning English for ten years",
        "By 2027, she will have been learn English for ten years"
      ],
      correct: 2
    },
    {
      id: 8,
      urdu: "اگلے ہفتے تک، وہ پانچ دن سے بیمار ہوں گے۔",
      answer: "By next week, they will have been sick for five days",
      options: [
        "By next week, they will be sick for five days",
        "By next week, they will have been sick for five days",
        "By next week, they will have been sick for five days",
        "By next week, they will have be sick for five days"
      ],
      correct: 1
    },
    {
      id: 9,
      urdu: "کل شام تک، ہم دو دن سے سفر کر رہے ہوں گے۔",
      answer: "By tomorrow evening, we will have been traveling for two days",
      options: [
        "By tomorrow evening, we will travel for two days",
        "By tomorrow evening, we will have traveled for two days",
        "By tomorrow evening, we will have been traveling for two days",
        "By tomorrow evening, we will have been travel for two days"
      ],
      correct: 2
    },
    {
      id: 10,
      urdu: "کیا تم اگلے سال تک دس سال سے کام کر رہے ہو گے؟",
      answer: "Will you have been working for ten years by next year?",
      options: [
        "Will you work for ten years by next year?",
        "Will you have worked for ten years by next year?",
        "Will you have been working for ten years by next year?",
        "Will you have been work for ten years by next year?"
      ],
      correct: 2
    },
    {
      id: 11,
      urdu: "وہ شام تک دو گھنٹے سے انتظار نہیں کر رہے ہوں گے۔",
      answer: "They will not have been waiting for two hours by evening",
      options: [
        "They will not wait for two hours by evening",
        "They will not have waited for two hours by evening",
        "They will not have been waiting for two hours by evening",
        "They will not have been wait for two hours by evening"
      ],
      correct: 2
    },
    {
      id: 12,
      urdu: "اگلے سال تک تم کتنے سال سے اس شہر میں رہ رہے ہو گے؟",
      answer: "How many years will you have been living in this city by next year?",
      options: [
        "How many years will you live in this city by next year?",
        "How many years will you have lived in this city by next year?",
        "How many years will you have been living in this city by next year?",
        "How many years will you have been live in this city by next year?"
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
           <Link href="/tenses-in-urdu/future-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
              Future Perfect Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Future Perfect Continuous Tense - Exercise 1
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Duration Focus - مدت پر توجہ
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
                  <li>یہ tense بتاتا ہے کہ مستقبل میں کسی خاص وقت تک کام کتنے عرصے سے جاری ہو گا</li>
                  <li>مدت کے لیے for استعمال کریں (for ten years, for three hours)</li>
                  <li>will have been کے بعد verb میں ing لگانا لازمی ہے</li>
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
              href="/exercises-in-urdu/future-perfect-continuous-exercise-2"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Exercise: Career Scenarios
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