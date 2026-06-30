"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PastPerfectExercise1() {
  const exercises = [
    {
      id: 1,
      urdu: "جب وہ آیا، میں کھانا کھا چکا تھا۔",
      answer: "When he came, I had eaten food",
      options: [
        "When he came, I ate food",
        "When he came, I had eaten food",
        "When he came, I have eaten food",
        "When he had come, I had eaten food"
      ],
      correct: 1
    },
    {
      id: 2,
      urdu: "وہ جا چکی تھی جب میں پہنچا۔",
      answer: "She had gone when I arrived",
      options: [
        "She went when I arrived",
        "She had gone when I arrived",
        "She has gone when I arrived",
        "She had went when I arrived"
      ],
      correct: 1
    },
    {
      id: 3,
      urdu: "بارش شروع ہو چکی تھی جب ہم نکلے۔",
      answer: "The rain had started when we left",
      options: [
        "The rain started when we left",
        "The rain had started when we left",
        "The rain has started when we left",
        "The rain had start when we left"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "اس نے خط لکھ لیا تھا۔",
      answer: "He had written the letter",
      options: [
        "He wrote the letter",
        "He has written the letter",
        "He had written the letter",
        "He had wrote the letter"
      ],
      correct: 2
    },
    {
      id: 5,
      urdu: "ہم فلم دیکھ چکے تھے۔",
      answer: "We had watched the movie",
      options: [
        "We watched the movie",
        "We have watched the movie",
        "We had watched the movie",
        "We had watch the movie"
      ],
      correct: 2
    },
    {
      id: 6,
      urdu: "ٹرین جا چکی تھی جب ہم سٹیشن پہنچے۔",
      answer: "The train had left when we reached the station",
      options: [
        "The train left when we reached the station",
        "The train had left when we reached the station",
        "The train has left when we reached the station",
        "The train had leave when we reached the station"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "وہ بیمار ہو گیا تھا اس لیے وہ نہیں آیا۔",
      answer: "He had fallen sick so he did not come",
      options: [
        "He fell sick so he did not come",
        "He had fallen sick so he did not come",
        "He has fallen sick so he did not come",
        "He had fell sick so he did not come"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "میں نے وہ کتاب پڑھ لی تھی۔",
      answer: "I had read that book",
      options: [
        "I read that book",
        "I have read that book",
        "I had read that book",
        "I had readed that book"
      ],
      correct: 2
    },
    {
      id: 9,
      urdu: "وہ سو چکی تھی جب میں نے فون کیا۔",
      answer: "She had slept when I called",
      options: [
        "She slept when I called",
        "She had slept when I called",
        "She has slept when I called",
        "She had sleep when I called"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "ہم نے کھانا کھا لیا تھا اس لیے ہم بھوکے نہیں تھے۔",
      answer: "We had eaten food so we were not hungry",
      options: [
        "We ate food so we were not hungry",
        "We had eaten food so we were not hungry",
        "We have eaten food so we were not hungry",
        "We had ate food so we were not hungry"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "وہ پہلے ہی جا چکا تھا۔",
      answer: "He had already left",
      options: [
        "He already left",
        "He has already left",
        "He had already left",
        "He had already leave"
      ],
      correct: 2
    },
    {
      id: 12,
      urdu: "کیا تم نے پہلے یہ فلم دیکھی تھی؟",
      answer: "Had you watched this movie before?",
      options: [
        "Did you watch this movie before?",
        "Have you watched this movie before?",
        "Had you watched this movie before?",
        "Had you watch this movie before?"
      ],
      correct: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
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
            Past Perfect Tense - Exercise 1
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Sequence Practice - ترتیب کی مشق
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
                  <li>Past Perfect کا فارمولا: had + verb(3rd form)</li>
                  <li>دو کاموں میں سے پہلے والے کام کے لیے Past Perfect استعمال کریں</li>
                  <li>بعد والے کام کے لیے Past Simple استعمال کریں</li>
                  <li>ترتیب: پہلے والا کام = had + 3rd form، بعد والا کام = 2nd form</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition duration-300"
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
              href="/exercises-in-urdu/past-perfect-exercise-2"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Exercise: Time Clauses
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