'use client';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PresentPerfectExercise2() {
  const exercises = [
    {
      id: 1,
      urdu: "میں نے ابھی کھانا کھایا ہے۔",
      answer: "I have just eaten food",
      options: [
        "I have just eaten food",
        "I just ate food",
        "I have just ate food",
        "I have just eat food"
      ],
      correct: 0
    },
    {
      id: 2,
      urdu: "اس نے ابھی کام ختم کیا ہے۔",
      answer: "He has just finished work",
      options: [
        "He has just finish work",
        "He just finished work",
        "He has just finished work",
        "He have just finished work"
      ],
      correct: 2
    },
    {
      id: 3,
      urdu: "کیا تم نے ابھی اسے دیکھا ہے؟",
      answer: "Have you just seen him?",
      options: [
        "Did you just see him?",
        "Have you just saw him?",
        "Have you just seen him?",
        "Has you just seen him?"
      ],
      correct: 2
    },
    {
      id: 4,
      urdu: "وہ ابھی آئی ہے۔",
      answer: "She has just come",
      options: [
        "She has just came",
        "She just came",
        "She have just come",
        "She has just come"
      ],
      correct: 3
    },
    {
      id: 5,
      urdu: "میں نے پہلے ہی یہ کام کر لیا ہے۔",
      answer: "I have already done this work",
      options: [
        "I already did this work",
        "I have already done this work",
        "I have already did this work",
        "I have already do this work"
      ],
      correct: 1
    },
    {
      id: 6,
      urdu: "کیا تم نے اپنا کام کر لیا ہے؟",
      answer: "Have you done your work?",
      options: [
        "Did you do your work?",
        "Have you done your work?",
        "Has you done your work?",
        "Have you did your work?"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "میں نے ابھی تک نہیں کھایا۔",
      answer: "I have not eaten yet",
      options: [
        "I have not ate yet",
        "I haven't eaten yet",
        "I didn't eat yet",
        "I have not eat yet"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "کیا تم نے ابھی تک خط لکھا ہے؟",
      answer: "Have you written the letter yet?",
      options: [
        "Did you write the letter yet?",
        "Have you wrote the letter yet?",
        "Have you written the letter yet?",
        "Has you written the letter yet?"
      ],
      correct: 2
    },
    {
      id: 9,
      urdu: "وہ پہلے ہی جا چکی ہے۔",
      answer: "She has already gone",
      options: [
        "She already went",
        "She has already went",
        "She has already gone",
        "She have already gone"
      ],
      correct: 2
    },
    {
      id: 10,
      urdu: "میں نے ابھی تک وہ فلم نہیں دیکھی۔",
      answer: "I have not watched that movie yet",
      options: [
        "I didn't watch that movie yet",
        "I have not watched that movie yet",
        "I haven't watched that movie already",
        "I have not watch that movie yet"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "کیا تم نے پہلے ہی کھانا کھا لیا ہے؟",
      answer: "Have you already eaten food?",
      options: [
        "Did you already eat food?",
        "Have you already ate food?",
        "Have you already eaten food?",
        "Has you already eaten food?"
      ],
      correct: 2
    },
    {
      id: 12,
      urdu: "اس نے ابھی فون کیا ہے۔",
      answer: "He has just called",
      options: [
        "He just called",
        "He has just call",
        "He have just called",
        "He has just called"
      ],
      correct: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises-in-urdu" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/present-perfect" className="text-white/80 hover:text-white transition duration-300">
              Present Perfect Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Perfect Tense - Exercise 2
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Recent Actions - حالیہ کام
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
                  <li><strong>Just</strong> (ابھی) - have/has کے بعد استعمال ہوتا ہے</li>
                  <li><strong>Already</strong> (پہلے ہی) - have/has کے بعد استعمال ہوتا ہے</li>
                  <li><strong>Yet</strong> (ابھی تک) - منفی اور سوالیہ جملوں کے آخر میں استعمال ہوتا ہے</li>
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
              href="/exercises-in-urdu/present-perfect-exercise-1"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Previous Exercise
            </Link>
            <Link 
              href="/exercises-in-urdu/present-perfect-continuous-exercise-1"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Tense: Present Perfect Continuous
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses-in-urdu/present-perfect"
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