"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PastPerfectContinuousExercise2() {
  const exercises = [
    {
      id: 1,
      urdu: "وہ تھکا ہوا تھا کیونکہ وہ دو گھنٹے سے دوڑ رہا تھا۔",
      answer: "He was tired because he had been running for two hours",
      options: [
        "He was tired because he ran for two hours",
        "He was tired because he had run for two hours",
        "He was tired because he had been running for two hours",
        "He was tired because he was running for two hours"
      ],
      correct: 2
    },
    {
      id: 2,
      urdu: "اس کی آنکھیں سرخ تھیں کیونکہ وہ رو رہی تھی۔",
      answer: "Her eyes were red because she had been crying",
      options: [
        "Her eyes were red because she cried",
        "Her eyes were red because she had cried",
        "Her eyes were red because she had been crying",
        "Her eyes were red because she was crying"
      ],
      correct: 2
    },
    {
      id: 3,
      urdu: "وہ بیمار ہو گیا کیونکہ وہ دھوپ میں کھیل رہا تھا۔",
      answer: "He got sick because he had been playing in the sun",
      options: [
        "He got sick because he played in the sun",
        "He got sick because he had played in the sun",
        "He got sick because he had been playing in the sun",
        "He got sick because he was playing in the sun"
      ],
      correct: 2
    },
    {
      id: 4,
      urdu: "زمین گیلی تھی کیونکہ بارش ہو رہی تھی۔",
      answer: "The ground was wet because it had been raining",
      options: [
        "The ground was wet because it rained",
        "The ground was wet because it had rained",
        "The ground was wet because it had been raining",
        "The ground was wet because it was raining"
      ],
      correct: 2
    },
    {
      id: 5,
      urdu: "وہ بھوکے تھے کیونکہ وہ کافی دیر سے کھانا نہیں کھا رہے تھے۔",
      answer: "They were hungry because they had not been eating for a long time",
      options: [
        "They were hungry because they did not eat for a long time",
        "They were hungry because they had not eaten for a long time",
        "They were hungry because they had not been eating for a long time",
        "They were hungry because they were not eating for a long time"
      ],
      correct: 2
    },
    {
      id: 6,
      urdu: "وہ خوش تھا کیونکہ وہ کامیابی کے لیے محنت کر رہا تھا۔",
      answer: "He was happy because he had been working hard for success",
      options: [
        "He was happy because he worked hard for success",
        "He was happy because he had worked hard for success",
        "He was happy because he had been working hard for success",
        "He was happy because he was working hard for success"
      ],
      correct: 2
    },
    {
      id: 7,
      urdu: "اس کی آواز بیٹھ گئی تھی کیونکہ وہ گھنٹوں بول رہی تھی۔",
      answer: "Her voice was hoarse because she had been talking for hours",
      options: [
        "Her voice was hoarse because she talked for hours",
        "Her voice was hoarse because she had talked for hours",
        "Her voice was hoarse because she had been talking for hours",
        "Her voice was hoarse because she was talking for hours"
      ],
      correct: 2
    },
    {
      id: 8,
      urdu: "وہ پسینے میں شرابور تھا کیونکہ وہ ورزش کر رہا تھا۔",
      answer: "He was sweating because he had been exercising",
      options: [
        "He was sweating because he exercised",
        "He was sweating because he had exercised",
        "He was sweating because he had been exercising",
        "He was sweating because he was exercising"
      ],
      correct: 2
    },
    {
      id: 9,
      urdu: "بچے تھکے ہوئے تھے کیونکہ وہ سارا دن کھیل رہے تھے۔",
      answer: "The children were tired because they had been playing all day",
      options: [
        "The children were tired because they played all day",
        "The children were tired because they had played all day",
        "The children were tired because they had been playing all day",
        "The children were tired because they were playing all day"
      ],
      correct: 2
    },
    {
      id: 10,
      urdu: "کیا وہ تھکا ہوا تھا کیونکہ وہ دوڑ رہا تھا؟",
      answer: "Was he tired because he had been running?",
      options: [
        "Was he tired because he ran?",
        "Was he tired because he had run?",
        "Was he tired because he had been running?",
        "Was he tired because he was running?"
      ],
      correct: 2
    },
    {
      id: 11,
      urdu: "وہ نیند سے تھکے ہوئے تھے کیونکہ وہ رات بھر جاگ رہے تھے۔",
      answer: "They were sleepy because they had been awake all night",
      options: [
        "They were sleepy because they were awake all night",
        "They were sleepy because they had been awake all night",
        "They were sleepy because they had been awake all night",
        "They were sleepy because they had been waking all night"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "اس کا وزن بڑھ گیا تھا کیونکہ وہ زیادہ کھا رہا تھا۔",
      answer: "He had gained weight because he had been eating too much",
      options: [
        "He had gained weight because he ate too much",
        "He had gained weight because he had eaten too much",
        "He had gained weight because he had been eating too much",
        "He had gained weight because he was eating too much"
      ],
      correct: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-rose-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises-in-urdu" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/past-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
              Past Perfect Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Perfect Continuous Tense - Exercise 2
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Cause & Effect - وجہ اور نتیجہ
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
                  <li>Past Perfect Continuous کا فارمولا: had + been + verb(ing)</li>
                  <li>وجہ بتانے کے لیے because کا استعمال کریں</li>
                  <li>یہ tense بتاتا ہے کہ کوئی کام کتنے عرصے سے جاری تھا جس کی وجہ سے کوئی نتیجہ نکلا</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-rose-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-rose-100 text-rose-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-rose-500 hover:bg-rose-50 transition duration-300"
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
              href="/exercises-in-urdu/past-perfect-continuous-exercise-1"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Previous Exercise
            </Link>
            <Link 
              href="/exercises-in-urdu/future-simple-exercise-1"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next: Future Tenses
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses-in-urdu/past-perfect-continuous"
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