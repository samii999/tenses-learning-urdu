"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function FutureContinuousExercise1() {
  const exercises = [
    {
      id: 1,
      urdu: "میں کل شام 7 بجے پڑھ رہا ہوں گا۔",
      answer: "I will be studying at 7 pm tomorrow",
      options: [
        "I will study at 7 pm tomorrow",
        "I will be studying at 7 pm tomorrow",
        "I am studying at 7 pm tomorrow",
        "I will be study at 7 pm tomorrow"
      ],
      correct: 1
    },
    {
      id: 2,
      urdu: "وہ کل اس وقت سو رہی ہو گی۔",
      answer: "She will be sleeping at that time tomorrow",
      options: [
        "She will sleep at that time tomorrow",
        "She will be sleeping at that time tomorrow",
        "She is sleeping at that time tomorrow",
        "She will be sleep at that time tomorrow"
      ],
      correct: 1
    },
    {
      id: 3,
      urdu: "ہم کل سارا دن کھیل رہے ہوں گے۔",
      answer: "We will be playing all day tomorrow",
      options: [
        "We will play all day tomorrow",
        "We will be playing all day tomorrow",
        "We are playing all day tomorrow",
        "We will be play all day tomorrow"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "وہ کل شام 8 بجے آ رہے ہوں گے۔",
      answer: "They will be coming at 8 pm tomorrow",
      options: [
        "They will come at 8 pm tomorrow",
        "They will be coming at 8 pm tomorrow",
        "They are coming at 8 pm tomorrow",
        "They will be come at 8 pm tomorrow"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "بارش کل سارا دن ہو رہی ہو گی۔",
      answer: "It will be raining all day tomorrow",
      options: [
        "It will rain all day tomorrow",
        "It will be raining all day tomorrow",
        "It is raining all day tomorrow",
        "It will be rain all day tomorrow"
      ],
      correct: 1
    },
    {
      id: 6,
      urdu: "میں کل صبح 6 بجے جاگ رہا ہوں گا۔",
      answer: "I will be waking up at 6 am tomorrow",
      options: [
        "I will wake up at 6 am tomorrow",
        "I will be waking up at 6 am tomorrow",
        "I am waking up at 6 am tomorrow",
        "I will be wake up at 6 am tomorrow"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "وہ کل اس وقت کام کر رہے ہوں گے۔",
      answer: "They will be working at that time tomorrow",
      options: [
        "They will work at that time tomorrow",
        "They will be working at that time tomorrow",
        "They are working at that time tomorrow",
        "They will be work at that time tomorrow"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "کیا تم کل شام 7 بجے پڑھ رہے ہو گے؟",
      answer: "Will you be studying at 7 pm tomorrow?",
      options: [
        "Will you study at 7 pm tomorrow?",
        "Will you be studying at 7 pm tomorrow?",
        "Are you studying at 7 pm tomorrow?",
        "Will you be study at 7 pm tomorrow?"
      ],
      correct: 1
    },
    {
      id: 9,
      urdu: "کیا وہ کل اس وقت سو رہی ہو گی؟",
      answer: "Will she be sleeping at that time tomorrow?",
      options: [
        "Will she sleep at that time tomorrow?",
        "Will she be sleeping at that time tomorrow?",
        "Is she sleeping at that time tomorrow?",
        "Will she be sleep at that time tomorrow?"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "میں کل اس وقت کھانا نہیں کھا رہا ہوں گا۔",
      answer: "I will not be eating at that time tomorrow",
      options: [
        "I will not eat at that time tomorrow",
        "I will not be eating at that time tomorrow",
        "I am not eating at that time tomorrow",
        "I will not be eat at that time tomorrow"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "وہ کل شام کو ٹی وی نہیں دیکھ رہے ہوں گے۔",
      answer: "They will not be watching TV tomorrow evening",
      options: [
        "They will not watch TV tomorrow evening",
        "They will not be watching TV tomorrow evening",
        "They are not watching TV tomorrow evening",
        "They will not be watch TV tomorrow evening"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "تم کل شام 7 بجے کیا کر رہے ہو گے؟",
      answer: "What will you be doing at 7 pm tomorrow?",
      options: [
        "What will you do at 7 pm tomorrow?",
        "What will you be doing at 7 pm tomorrow?",
        "What are you doing at 7 pm tomorrow?",
        "What will you be do at 7 pm tomorrow?"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/future-continuous" className="text-white/80 hover:text-white transition duration-300">
              Future Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Future Continuous Tense - Exercise 1
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Future Interruptions - مستقبل میں رکاوٹیں
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
                  <li>Future Continuous کا فارمولا: will + be + verb(ing)</li>
                  <li>یہ tense مستقبل میں کسی خاص وقت پر جاری کاموں کے لیے استعمال ہوتا ہے</li>
                  <li>وقت کا ذکر ضروری ہے (at 7 pm, at that time, all day)</li>
                  <li>will کے بعد be لگانا لازمی ہے</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition duration-300"
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
              href="/exercises/future-continuous-exercise-2"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Exercise: Parallel Future Actions
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses/future-continuous"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Review Lesson
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}