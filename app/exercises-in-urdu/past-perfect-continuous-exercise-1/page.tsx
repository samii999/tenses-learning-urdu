"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PastPerfectContinuousExercise1() {
  const exercises = [
    {
      id: 1,
      urdu: "میں دو گھنٹے سے پڑھ رہا تھا جب وہ آیا۔",
      answer: "I had been studying for two hours when he came",
      options: [
        "I was studying for two hours when he came",
        "I had studied for two hours when he came",
        "I had been studying for two hours when he came",
        "I have been studying for two hours when he came"
      ],
      correct: 2
    },
    {
      id: 2,
      urdu: "وہ صبح سے کام کر رہی تھی جب میں پہنچا۔",
      answer: "She had been working since morning when I arrived",
      options: [
        "She was working since morning when I arrived",
        "She had worked since morning when I arrived",
        "She had been working since morning when I arrived",
        "She has been working since morning when I arrived"
      ],
      correct: 2
    },
    {
      id: 3,
      urdu: "وہ تین گھنٹے سے انتظار کر رہے تھے جب بس آئی۔",
      answer: "They had been waiting for three hours when the bus came",
      options: [
        "They were waiting for three hours when the bus came",
        "They had waited for three hours when the bus came",
        "They had been waiting for three hours when the bus came",
        "They have been waiting for three hours when the bus came"
      ],
      correct: 2
    },
    {
      id: 4,
      urdu: "ہم 2015 سے یہاں رہ رہے تھے جب انہوں نے نیا گھر خریدا۔",
      answer: "We had been living here since 2015 when they bought a new house",
      options: [
        "We were living here since 2015 when they bought a new house",
        "We had lived here since 2015 when they bought a new house",
        "We had been living here since 2015 when they bought a new house",
        "We have been living here since 2015 when they bought a new house"
      ],
      correct: 2
    },
    {
      id: 5,
      urdu: "بارش دو گھنٹے سے ہو رہی تھی جب ہم گھر پہنچے۔",
      answer: "It had been raining for two hours when we reached home",
      options: [
        "It was raining for two hours when we reached home",
        "It had rained for two hours when we reached home",
        "It had been raining for two hours when we reached home",
        "It has been raining for two hours when we reached home"
      ],
      correct: 2
    },
    {
      id: 6,
      urdu: "وہ دس منٹ سے دوڑ رہا تھا جب اسے تھکن ہوئی۔",
      answer: "He had been running for ten minutes when he got tired",
      options: [
        "He was running for ten minutes when he got tired",
        "He had run for ten minutes when he got tired",
        "He had been running for ten minutes when he got tired",
        "He has been running for ten minutes when he got tired"
      ],
      correct: 2
    },
    {
      id: 7,
      urdu: "وہ کافی دیر سے سو رہی تھی جب اس نے فون کیا۔",
      answer: "She had been sleeping for a long time when he called",
      options: [
        "She was sleeping for a long time when he called",
        "She had slept for a long time when he called",
        "She had been sleeping for a long time when he called",
        "She has been sleeping for a long time when he called"
      ],
      correct: 2
    },
    {
      id: 8,
      urdu: "بچے تین گھنٹے سے کھیل رہے تھے جب اندھیرا ہوا۔",
      answer: "The children had been playing for three hours when it got dark",
      options: [
        "The children were playing for three hours when it got dark",
        "The children had played for three hours when it got dark",
        "The children had been playing for three hours when it got dark",
        "The children have been playing for three hours when it got dark"
      ],
      correct: 2
    },
    {
      id: 9,
      urdu: "میں ایک گھنٹے سے کھانا پکا رہا تھا جب وہ آئے۔",
      answer: "I had been cooking food for an hour when they came",
      options: [
        "I was cooking food for an hour when they came",
        "I had cooked food for an hour when they came",
        "I had been cooking food for an hour when they came",
        "I have been cooking food for an hour when they came"
      ],
      correct: 2
    },
    {
      id: 10,
      urdu: "وہ 2018 سے انگریزی سیکھ رہی تھی جب اسے نوکری ملی۔",
      answer: "She had been learning English since 2018 when she got a job",
      options: [
        "She was learning English since 2018 when she got a job",
        "She had learned English since 2018 when she got a job",
        "She had been learning English since 2018 when she got a job",
        "She has been learning English since 2018 when she got a job"
      ],
      correct: 2
    },
    {
      id: 11,
      urdu: "وہ شام سے ٹی وی دیکھ رہے تھے جب لائٹ چلی گئی۔",
      answer: "They had been watching TV since evening when the light went out",
      options: [
        "They were watching TV since evening when the light went out",
        "They had watched TV since evening when the light went out",
        "They had been watching TV since evening when the light went out",
        "They have been watching TV since evening when the light went out"
      ],
      correct: 2
    },
    {
      id: 12,
      urdu: "کیا تم دو گھنٹے سے انتظار کر رہے تھے جب وہ آیا؟",
      answer: "Had you been waiting for two hours when he came?",
      options: [
        "Were you waiting for two hours when he came?",
        "Had you waited for two hours when he came?",
        "Had you been waiting for two hours when he came?",
        "Have you been waiting for two hours when he came?"
      ],
      correct: 2
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
           <Link href="/tenses-in-urdu/past-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
              Past Perfect Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Perfect Continuous Tense - Exercise 1
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
                  <li>Past Perfect Continuous کا فارمولا: had + been + verb(ing)</li>
                  <li>یہ tense بتاتا ہے کہ کوئی کام ماضی میں کسی اور کام سے پہلے کتنے عرصے سے جاری تھا</li>
                  <li>مدت کے لیے for استعمال کریں (for two hours, for three days)</li>
                  <li>نقطہ آغاز کے لیے since استعمال کریں (since morning, since 2018)</li>
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
              href="/exercises-in-urdu/past-perfect-continuous-exercise-2"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Exercise: Cause & Effect
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