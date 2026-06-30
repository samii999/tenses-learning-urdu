'use client';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PresentContinuousExercise2() {
  const exercises = [
    {
      id: 1,
      urdu: "میں کل لاہور جا رہا ہوں۔",
      answer: "I am going to Lahore tomorrow",
      options: [
        "I am going to Lahore tomorrow",
        "I will go to Lahore tomorrow",
        "I go to Lahore tomorrow",
        "I am go to Lahore tomorrow"
      ],
      correct: 0
    },
    {
      id: 2,
      urdu: "وہ اگلے ہفتے لندن جا رہی ہے۔",
      answer: "She is going to London next week",
      options: [
        "She is going to London next week",
        "She will go to London next week",
        "She goes to London next week",
        "She are going to London next week"
      ],
      correct: 0
    },
    {
      id: 3,
      urdu: "ہم کل شام کو فلم دیکھنے جا رہے ہیں۔",
      answer: "We are going to watch a movie tomorrow evening",
      options: [
        "We will watch a movie tomorrow evening",
        "We are going to watch a movie tomorrow evening",
        "We watch a movie tomorrow evening",
        "We are watch a movie tomorrow evening"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "وہ کل پارٹی میں آ رہے ہیں۔",
      answer: "They are coming to the party tomorrow",
      options: [
        "They will come to the party tomorrow",
        "They are coming to the party tomorrow",
        "They come to the party tomorrow",
        "They are come to the party tomorrow"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "میں کل ڈاکٹر سے ملنے جا رہا ہوں۔",
      answer: "I am going to meet the doctor tomorrow",
      options: [
        "I will meet the doctor tomorrow",
        "I am going to meet the doctor tomorrow",
        "I meet the doctor tomorrow",
        "I am meet the doctor tomorrow"
      ],
      correct: 1
    },
    {
      id: 6,
      urdu: "وہ اگلے ماہ شادی کر رہے ہیں۔",
      answer: "They are getting married next month",
      options: [
        "They will get married next month",
        "They are getting married next month",
        "They get married next month",
        "They are get married next month"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "ہم کل رات کو ڈنر کر رہے ہیں۔",
      answer: "We are having dinner tomorrow night",
      options: [
        "We will have dinner tomorrow night",
        "We are having dinner tomorrow night",
        "We have dinner tomorrow night",
        "We are have dinner tomorrow night"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "وہ اگلے ہفتے نئی کار خرید رہا ہے۔",
      answer: "He is buying a new car next week",
      options: [
        "He will buy a new car next week",
        "He is buying a new car next week",
        "He buys a new car next week",
        "He are buying a new car next week"
      ],
      correct: 1
    },
    {
      id: 9,
      urdu: "میں کل صبح جلدی اُٹھ رہا ہوں۔",
      answer: "I am waking up early tomorrow morning",
      options: [
        "I will wake up early tomorrow morning",
        "I am waking up early tomorrow morning",
        "I wake up early tomorrow morning",
        "I am wake up early tomorrow morning"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "وہ کل شام 7 بجے آ رہے ہیں۔",
      answer: "They are coming at 7 pm tomorrow",
      options: [
        "They will come at 7 pm tomorrow",
        "They are coming at 7 pm tomorrow",
        "They come at 7 pm tomorrow",
        "They are come at 7 pm tomorrow"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "کیا تم کل آ رہے ہو؟",
      answer: "Are you coming tomorrow?",
      options: [
        "Will you come tomorrow?",
        "Are you coming tomorrow?",
        "Do you come tomorrow?",
        "Are you come tomorrow?"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "ہم اگلے سال نیا گھر خرید رہے ہیں۔",
      answer: "We are buying a new house next year",
      options: [
        "We will buy a new house next year",
        "We are buying a new house next year",
        "We buy a new house next year",
        "We are buy a new house next year"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises-in-urdu" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/present-continuous" className="text-white/80 hover:text-white transition duration-300">
              Present Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Continuous Tense - Exercise 2
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Future Arrangements - مستقبل کے منصوبے
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
                  <li>مستقبل کے پہلے سے طے شدہ منصوبوں کے لیے Present Continuous استعمال کریں</li>
                  <li>will کی بجائے am/is/are + going to یا am/is/are + verb(ing) استعمال کریں</li>
                  <li>وقت کا ذکر (tomorrow, next week) ضرور کریں</li>
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
              href="/exercises-in-urdu/present-continuous-exercise-1"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Previous Exercise
            </Link>
            <Link 
              href="/exercises-in-urdu/present-perfect-exercise-1"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Tense: Present Perfect
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses-in-urdu/present-continuous"
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