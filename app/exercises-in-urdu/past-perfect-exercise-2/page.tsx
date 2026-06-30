"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PastPerfectExercise2() {
  const exercises = [
    {
      id: 1,
      urdu: "میں نے کھانا کھا لیا تھا اس سے پہلے کہ وہ آیا۔",
      answer: "I had eaten food before he came",
      options: [
        "I ate food before he came",
        "I had eaten food before he came",
        "I have eaten food before he came",
        "I had ate food before he came"
      ],
      correct: 1
    },
    {
      id: 2,
      urdu: "وہ جا چکی تھی اس کے بعد میں پہنچا۔",
      answer: "She had gone after I arrived",
      options: [
        "She went after I arrived",
        "She had gone after I arrived",
        "She has gone after I arrived",
        "She had went after I arrived"
      ],
      correct: 1
    },
    {
      id: 3,
      urdu: "جب تک وہ آیا، میں کام ختم کر چکا تھا۔",
      answer: "By the time he came, I had finished work",
      options: [
        "By the time he came, I finished work",
        "By the time he came, I had finished work",
        "By the time he had come, I had finished work",
        "By the time he came, I have finished work"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "وہ بیمار ہو گیا تھا اس لیے وہ نہیں آیا۔",
      answer: "He had fallen sick, so he did not come",
      options: [
        "He fell sick, so he did not come",
        "He had fallen sick, so he did not come",
        "He has fallen sick, so he did not come",
        "He had fell sick, so he did not come"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "میں نے وہ کتاب پڑھ لی تھی اس سے پہلے کہ میں نے فلم دیکھی۔",
      answer: "I had read that book before I watched the movie",
      options: [
        "I read that book before I watched the movie",
        "I had read that book before I watched the movie",
        "I have read that book before I watched the movie",
        "I had read that book before I had watched the movie"
      ],
      correct: 1
    },
    {
      id: 6,
      urdu: "ٹرین جا چکی تھی جب تک ہم سٹیشن پہنچے۔",
      answer: "The train had left by the time we reached the station",
      options: [
        "The train left by the time we reached the station",
        "The train had left by the time we reached the station",
        "The train has left by the time we reached the station",
        "The train had leave by the time we reached the station"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "وہ پہلے ہی جا چکا تھا اس لیے میں اس سے نہیں ملا۔",
      answer: "He had already left, so I did not meet him",
      options: [
        "He already left, so I did not meet him",
        "He had already left, so I did not meet him",
        "He has already left, so I did not meet him",
        "He had already leave, so I did not meet him"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "کیا تم نے پہلے کبھی یہ جگہ دیکھی تھی؟",
      answer: "Had you ever seen this place before?",
      options: [
        "Did you ever see this place before?",
        "Have you ever seen this place before?",
        "Had you ever seen this place before?",
        "Had you ever saw this place before?"
      ],
      correct: 2
    },
    {
      id: 9,
      urdu: "جب تک وہ پہنچی، ہم کھانا کھا چکے تھے۔",
      answer: "By the time she arrived, we had eaten food",
      options: [
        "By the time she arrived, we ate food",
        "By the time she arrived, we had eaten food",
        "By the time she had arrived, we had eaten food",
        "By the time she arrived, we have eaten food"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "اس نے خط لکھ لیا تھا اس سے پہلے کہ اسے بھولا۔",
      answer: "He had written the letter before he forgot",
      options: [
        "He wrote the letter before he forgot",
        "He had written the letter before he forgot",
        "He has written the letter before he forgot",
        "He had wrote the letter before he forgot"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "وہ سو چکی تھی اس لیے اس نے فون نہیں سنا۔",
      answer: "She had slept, so she did not hear the phone",
      options: [
        "She slept, so she did not hear the phone",
        "She had slept, so she did not hear the phone",
        "She has slept, so she did not hear the phone",
        "She had sleep, so she did not hear the phone"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "کیا تم نے وہ کام ختم کر لیا تھا اس سے پہلے کہ اس نے پوچھا؟",
      answer: "Had you finished that work before he asked?",
      options: [
        "Did you finish that work before he asked?",
        "Have you finished that work before he asked?",
        "Had you finished that work before he asked?",
        "Had you finish that work before he asked?"
      ],
      correct: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises-in-urdu" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/past-perfect" className="text-white/80 hover:text-white transition duration-300">
              Past Perfect Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Perfect Tense - Exercise 2
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Time Clauses - زمانی جملے
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
                  <li><strong>Before</strong> (سے پہلے) - پہلے والا کام Past Perfect میں</li>
                  <li><strong>After</strong> (کے بعد) - پہلے والا کام Past Perfect میں</li>
                  <li><strong>By the time</strong> (جب تک) - پہلے والا کام Past Perfect میں</li>
                  <li><strong>So</strong> (اس لیے) - وجہ بتانے کے لیے Past Perfect استعمال کریں</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-indigo-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition duration-300"
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
              href="/exercises-in-urdu/past-perfect-exercise-1"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Previous Exercise
            </Link>
            <Link 
              href="/exercises-in-urdu/past-perfect-continuous-exercise-1"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next: Past Perfect Continuous
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses-in-urdu/past-perfect"
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