"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PastContinuousExercise1() {
  const exercises = [
    {
      id: 1,
      urdu: "میں سو رہا تھا جب گھنٹی بجی۔",
      answer: "I was sleeping when the bell rang",
      options: [
        "I was sleeping when the bell rang",
        "I slept when the bell rang",
        "I was sleep when the bell rang",
        "I was sleeping when the bell ringed"
      ],
      correct: 0
    },
    {
      id: 2,
      urdu: "وہ پڑھ رہی تھی جب میں آیا۔",
      answer: "She was studying when I came",
      options: [
        "She studied when I came",
        "She was studying when I came",
        "She was study when I came",
        "She was studying when I come"
      ],
      correct: 1
    },
    {
      id: 3,
      urdu: "وہ فٹبال کھیل رہے تھے جب بارش شروع ہوئی۔",
      answer: "They were playing football when it started raining",
      options: [
        "They played football when it started raining",
        "They were playing football when it started raining",
        "They were play football when it started raining",
        "They were playing football when it start raining"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "ہم کھانا کھا رہے تھے جب اس نے فون کیا۔",
      answer: "We were eating food when he called",
      options: [
        "We ate food when he called",
        "We were eating food when he called",
        "We were eat food when he called",
        "We were eating food when he call"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "میں ٹی وی دیکھ رہا تھا جب لائٹ چلی گئی۔",
      answer: "I was watching TV when the light went out",
      options: [
        "I watched TV when the light went out",
        "I was watching TV when the light went out",
        "I was watch TV when the light went out",
        "I was watching TV when the light go out"
      ],
      correct: 1
    },
    {
      id: 6,
      urdu: "وہ گاڑی چلا رہا تھا جب حادثہ ہوا۔",
      answer: "He was driving when the accident happened",
      options: [
        "He drove when the accident happened",
        "He was driving when the accident happened",
        "He was drive when the accident happened",
        "He was driving when the accident happen"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "وہ سوتے نہیں تھے جب میں نے انہیں فون کیا۔",
      answer: "They were not sleeping when I called them",
      options: [
        "They did not sleep when I called them",
        "They were not sleeping when I called them",
        "They were not sleep when I called them",
        "They wasn't sleeping when I called them"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "کیا تم پڑھ رہے تھے جب وہ آیا؟",
      answer: "Were you studying when he came?",
      options: [
        "Did you study when he came?",
        "Were you studying when he came?",
        "Was you studying when he came?",
        "Were you study when he came?"
      ],
      correct: 1
    },
    {
      id: 9,
      urdu: "میں سڑک پر چل رہا تھا جب اسے دیکھا۔",
      answer: "I was walking on the road when I saw him",
      options: [
        "I walked on the road when I saw him",
        "I was walking on the road when I saw him",
        "I was walk on the road when I saw him",
        "I was walking on the road when I see him"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "وہ خط لکھ رہی تھی جب قلم ختم ہو گیا۔",
      answer: "She was writing a letter when the pen ran out",
      options: [
        "She wrote a letter when the pen ran out",
        "She was writing a letter when the pen ran out",
        "She was write a letter when the pen ran out",
        "She was writing a letter when the pen run out"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "بچے پارک میں کھیل رہے تھے جب اندھیرا ہوا۔",
      answer: "The children were playing in the park when it got dark",
      options: [
        "The children played in the park when it got dark",
        "The children were playing in the park when it got dark",
        "The children were play in the park when it got dark",
        "The children were playing in the park when it get dark"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "کیا وہ سو رہا تھا جب تم آئے؟",
      answer: "Was he sleeping when you came?",
      options: [
        "Did he sleep when you came?",
        "Was he sleeping when you came?",
        "Were he sleeping when you came?",
        "Was he sleep when you came?"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-teal-500 to-green-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/past-continuous" className="text-white/80 hover:text-white transition duration-300">
              Past Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Continuous Tense - Exercise 1
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Interrupted Actions - رکاوٹ والے کام
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
                  <li>Past Continuous کا فارمولا: was/were + verb(ing)</li>
                  <li>I/He/She/It کے ساتھ was، You/We/They کے ساتھ were استعمال کریں</li>
                  <li>جب دو کاموں میں سے ایک جاری ہو اور دوسرا مداخلت کرے</li>
                  <li>جاری کام = Past Continuous، مداخلت کرنے والا کام = Past Simple</li>
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
              href="/exercises/past-continuous-exercise-2"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Exercise: Parallel Actions
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses/past-continuous"
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