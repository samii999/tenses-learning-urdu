"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function FuturePerfectExercise2() {
  const exercises = [
    {
      id: 1,
      urdu: "اگلے سال تک، میں دس سال سے کام کر چکا ہوں گا۔",
      answer: "By next year, I will have worked for ten years",
      options: [
        "By next year, I will work for ten years",
        "By next year, I will have worked for ten years",
        "By next year, I have worked for ten years",
        "By next year, I will have work for ten years"
      ],
      correct: 1
    },
    {
      id: 2,
      urdu: "2026 تک، وہ گریجویشن کر چکی ہو گی۔",
      answer: "By 2026, she will have graduated",
      options: [
        "By 2026, she will graduate",
        "By 2026, she will have graduated",
        "By 2026, she has graduated",
        "By 2026, she will have graduate"
      ],
      correct: 1
    },
    {
      id: 3,
      urdu: "اگلے مہینے تک، ہم نیا گھر خرید چکے ہوں گے۔",
      answer: "By next month, we will have bought a new house",
      options: [
        "By next month, we will buy a new house",
        "By next month, we will have bought a new house",
        "By next month, we have bought a new house",
        "By next month, we will have buy a new house"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "اگلے سال تک، وہ اپنی پہلی کتاب لکھ چکے ہوں گے۔",
      answer: "By next year, they will have written their first book",
      options: [
        "By next year, they will write their first book",
        "By next year, they will have written their first book",
        "By next year, they have written their first book",
        "By next year, they will have wrote their first book"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "2027 تک، میں دس ممالک جا چکا ہوں گا۔",
      answer: "By 2027, I will have visited ten countries",
      options: [
        "By 2027, I will visit ten countries",
        "By 2027, I will have visited ten countries",
        "By 2027, I have visited ten countries",
        "By 2027, I will have visit ten countries"
      ],
      correct: 1
    },
    {
      id: 6,
      urdu: "اگلے ہفتے تک، وہ اپنا ڈرائیونگ لائسنس حاصل کر چکے ہوں گے۔",
      answer: "By next week, they will have gotten their driving license",
      options: [
        "By next week, they will get their driving license",
        "By next week, they will have gotten their driving license",
        "By next week, they have gotten their driving license",
        "By next week, they will have get their driving license"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "اگلے سال تک، وہ پانچ سال سے شادی شدہ ہو چکی ہو گی۔",
      answer: "By next year, she will have been married for five years",
      options: [
        "By next year, she will be married for five years",
        "By next year, she will have been married for five years",
        "By next year, she has been married for five years",
        "By next year, she will have be married for five years"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "2028 تک، وہ ریٹائر ہو چکے ہوں گے۔",
      answer: "By 2028, they will have retired",
      options: [
        "By 2028, they will retire",
        "By 2028, they will have retired",
        "By 2028, they have retired",
        "By 2028, they will have retire"
      ],
      correct: 1
    },
    {
      id: 9,
      urdu: "اگلے مہینے تک، میں یہ کورس مکمل کر چکا ہوں گا۔",
      answer: "By next month, I will have completed this course",
      options: [
        "By next month, I will complete this course",
        "By next month, I will have completed this course",
        "By next month, I have completed this course",
        "By next month, I will have complete this course"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "کیا تم اگلے سال تک نئی زبان سیکھ چکے ہو گے؟",
      answer: "Will you have learned a new language by next year?",
      options: [
        "Will you learn a new language by next year?",
        "Will you have learned a new language by next year?",
        "Have you learned a new language by next year?",
        "Will you have learn a new language by next year?"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "وہ اگلے سال تک پروموشن نہیں پا چکے ہوں گے۔",
      answer: "They will not have gotten a promotion by next year",
      options: [
        "They will not get a promotion by next year",
        "They will not have gotten a promotion by next year",
        "They have not gotten a promotion by next year",
        "They will not have get a promotion by next year"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "اگلے دس سالوں میں تم کیا کچھ حاصل کر چکے ہو گے؟",
      answer: "What will you have achieved in the next ten years?",
      options: [
        "What will you achieve in the next ten years?",
        "What will you have achieved in the next ten years?",
        "What have you achieved in the next ten years?",
        "What will you have achieve in the next ten years?"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
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
            Future Perfect Tense - Exercise 2
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Life Milestones - زندگی کے سنگ میل
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
                  <li>یہ tense زندگی کے سنگ میلوں (life milestones) کے لیے استعمال ہوتا ہے</li>
                  <li>by (تک) کے ساتھ وقت کا ذکر کریں</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-pink-500 hover:bg-pink-50 transition duration-300"
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
              href="/exercises-in-urdu/future-perfect-exercise-1"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Previous Exercise
            </Link>
            <Link 
              href="/exercises-in-urdu/future-perfect-continuous-exercise-1"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next: Future Perfect Continuous
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