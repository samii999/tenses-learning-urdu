'use client';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PresentSimpleExercise2() {
  const exercises = [
    {
      id: 1,
      urdu: "وہ سکول نہیں جاتا۔",
      answer: "He does not go to school",
      options: [
        "He does not go to school",
        "He do not go to school",
        "He doesn't goes to school",
        "He not go to school"
      ],
      correct: 0
    },
    {
      id: 2,
      urdu: "کیا تم انگریزی بولتے ہو؟",
      answer: "Do you speak English?",
      options: [
        "Do you speak English?",
        "Does you speak English?",
        "Do you speaks English?",
        "Are you speak English?"
      ],
      correct: 0
    },
    {
      id: 3,
      urdu: "وہ فٹبال نہیں کھیلتی۔",
      answer: "She does not play football",
      options: [
        "She do not play football",
        "She does not play football",
        "She doesn't plays football",
        "She not play football"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "کیا وہ صبح سویرے اٹھتا ہے؟",
      answer: "Does he wake up early?",
      options: [
        "Do he wake up early?",
        "Does he wake up early?",
        "Does he wakes up early?",
        "Is he wake up early?"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "تم اچھا کام نہیں کرتے۔",
      answer: "You do not do good work",
      options: [
        "You do not do good work",
        "You does not do good work",
        "You don't does good work",
        "You not do good work"
      ],
      correct: 0
    },
    {
      id: 6,
      urdu: "کیا سورج مغرب سے نکلتا ہے؟",
      answer: "Does the sun rise in the west?",
      options: [
        "Do the sun rise in the west?",
        "Does the sun rise in the west?",
        "Does the sun rises in the west?",
        "Is the sun rise in the west?"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "وہ روزانہ ورزش نہیں کرتی۔",
      answer: "She does not exercise daily",
      options: [
        "She do not exercise daily",
        "She does not exercise daily",
        "She doesn't exercises daily",
        "She not exercise daily"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "کیا تمہارا بھائی ڈاکٹر ہے؟",
      answer: "Is your brother a doctor?",
      options: [
        "Is your brother a doctor?",
        "Are your brother a doctor?",
        "Do your brother a doctor?",
        "Does your brother a doctor?"
      ],
      correct: 0
    },
    {
      id: 9,
      urdu: "وہ پانی نہیں پیتے۔",
      answer: "They do not drink water",
      options: [
        "They do not drink water",
        "They does not drink water",
        "They don't drinks water",
        "They not drink water"
      ],
      correct: 0
    },
    {
      id: 10,
      urdu: "کیا تم انگریزی سیکھتے ہو؟",
      answer: "Do you learn English?",
      options: [
        "Do you learn English?",
        "Does you learn English?",
        "Do you learns English?",
        "Are you learn English?"
      ],
      correct: 0
    },
    {
      id: 11,
      urdu: "وہ کہاں رہتا ہے؟",
      answer: "Where does he live?",
      options: [
        "Where do he live?",
        "Where does he live?",
        "Where does he lives?",
        "Where he lives?"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "تم کیا کرتے ہو؟",
      answer: "What do you do?",
      options: [
        "What do you do?",
        "What does you do?",
        "What do you does?",
        "What you do?"
      ],
      correct: 0
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
            <Link href="/tenses/present-simple" className="text-white/80 hover:text-white transition duration-300">
              Present Simple Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Simple Tense - Exercise 2
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Questions & Negatives - سوالیہ اور منفی جملے
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
                  <li>منفی جملوں میں do not / does not استعمال کریں</li>
                  <li>سوالیہ جملوں میں Do/Does کو subject سے پہلے رکھیں</li>
                  <li>does کے بعد verb کی پہلی فارم استعمال کریں</li>
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
              href="/exercises/present-simple-exercise-1"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Previous Exercise
            </Link>
            <Link 
              href="/quizzes/present-simple-quiz"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Take Quiz
            </Link>
            <Link 
              href="/tenses/present-simple"
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