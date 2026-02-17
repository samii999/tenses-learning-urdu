'use client';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PresentPerfectExercise1() {
  const exercises = [
    {
      id: 1,
      urdu: "میں نے لندن دیکھا ہے۔",
      answer: "I have seen London",
      options: [
        "I have seen London",
        "I has seen London",
        "I have saw London",
        "I have see London"
      ],
      correct: 0
    },
    {
      id: 2,
      urdu: "اس نے کبھی جاپان نہیں دیکھا۔",
      answer: "He has never seen Japan",
      options: [
        "He have never seen Japan",
        "He has never saw Japan",
        "He has never seen Japan",
        "He has not ever seen Japan"
      ],
      correct: 2
    },
    {
      id: 3,
      urdu: "کیا تم نے کبھی تیراکی کی ہے؟",
      answer: "Have you ever swum?",
      options: [
        "Have you ever swim?",
        "Has you ever swum?",
        "Have you ever swum?",
        "Did you ever swim?"
      ],
      correct: 2
    },
    {
      id: 4,
      urdu: "وہ کبھی امریکہ نہیں گئی۔",
      answer: "She has never been to America",
      options: [
        "She have never been to America",
        "She has never gone to America",
        "She has never been to America",
        "She has never went to America"
      ],
      correct: 2
    },
    {
      id: 5,
      urdu: "ہم نے یہ فلم دیکھی ہے۔",
      answer: "We have watched this movie",
      options: [
        "We have watch this movie",
        "We has watched this movie",
        "We have watched this movie",
        "We have see this movie"
      ],
      correct: 2
    },
    {
      id: 6,
      urdu: "اس نے وہ کتاب پڑھی ہے۔",
      answer: "He has read that book",
      options: [
        "He have read that book",
        "He has read that book",
        "He has readed that book",
        "He has read that book"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "کیا تم نے کبھی ہوائی جہاز اُڑایا ہے؟",
      answer: "Have you ever flown a plane?",
      options: [
        "Have you ever fly a plane?",
        "Has you ever flown a plane?",
        "Have you ever flown a plane?",
        "Did you ever fly a plane?"
      ],
      correct: 2
    },
    {
      id: 8,
      urdu: "میں نے کبھی برف نہیں دیکھی۔",
      answer: "I have never seen snow",
      options: [
        "I has never seen snow",
        "I have never saw snow",
        "I have never seen snow",
        "I have not never seen snow"
      ],
      correct: 2
    },
    {
      id: 9,
      urdu: "وہ تین ممالک جا چکا ہے۔",
      answer: "He has been to three countries",
      options: [
        "He have been to three countries",
        "He has went to three countries",
        "He has been to three countries",
        "He has gone to three countries"
      ],
      correct: 2
    },
    {
      id: 10,
      urdu: "کیا تم نے کبھی چینی کھانا کھایا ہے؟",
      answer: "Have you ever eaten Chinese food?",
      options: [
        "Have you ever ate Chinese food?",
        "Have you ever eaten Chinese food?",
        "Has you ever eaten Chinese food?",
        "Did you ever eat Chinese food?"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "میں نے وہ شخص دیکھا ہے۔",
      answer: "I have seen that person",
      options: [
        "I have saw that person",
        "I has seen that person",
        "I have seen that person",
        "I have see that person"
      ],
      correct: 2
    },
    {
      id: 12,
      urdu: "اس نے کبھی خط نہیں لکھا۔",
      answer: "She has never written a letter",
      options: [
        "She have never written a letter",
        "She has never wrote a letter",
        "She has never written a letter",
        "She has never write a letter"
      ],
      correct: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/present-perfect" className="text-white/80 hover:text-white transition duration-300">
              Present Perfect Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Perfect Tense - Exercise 1
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Life Experiences - زندگی کے تجربات
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
                  <li>Present Perfect کا فارمولا: have/has + verb(3rd form)</li>
                  <li>I/You/We/They کے ساتھ have، He/She/It کے ساتھ has</li>
                  <li>Never (کبھی نہیں) منفی معنی دیتا ہے، اس کے ساتھ not نہیں لگتا</li>
                  <li>Ever (کبھی) صرف سوالیہ جملوں میں استعمال ہوتا ہے</li>
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
              href="/exercises/present-perfect-exercise-2"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Exercise: Recent Actions
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses/present-perfect"
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