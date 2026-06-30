"use client";

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function FutureContinuousExercise2() {
  const exercises = [
    {
      id: 1,
      urdu: "میں پڑھ رہا ہوں گا جبکہ وہ سو رہی ہو گی۔",
      answer: "I will be studying while she will be sleeping",
      options: [
        "I will study while she will sleep",
        "I will be studying while she will be sleeping",
        "I am studying while she is sleeping",
        "I will be study while she will be sleep"
      ],
      correct: 1
    },
    {
      id: 2,
      urdu: "وہ کھانا پکا رہی ہو گی جبکہ میں کام کر رہا ہوں گا۔",
      answer: "She will be cooking while I will be working",
      options: [
        "She will cook while I will work",
        "She will be cooking while I will be working",
        "She is cooking while I am working",
        "She will be cook while I will be work"
      ],
      correct: 1
    },
    {
      id: 3,
      urdu: "بچے کھیل رہے ہوں گے جبکہ ہم بات کر رہے ہوں گے۔",
      answer: "The children will be playing while we will be talking",
      options: [
        "The children will play while we will talk",
        "The children will be playing while we will be talking",
        "The children are playing while we are talking",
        "The children will be play while we will be talk"
      ],
      correct: 1
    },
    {
      id: 4,
      urdu: "وہ گاڑی چلا رہا ہو گا جبکہ وہ گانا گا رہی ہو گی۔",
      answer: "He will be driving while she will be singing",
      options: [
        "He will drive while she will sing",
        "He will be driving while she will be singing",
        "He is driving while she is singing",
        "He will be drive while she will be sing"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "میں خط لکھ رہا ہوں گا جبکہ وہ کتاب پڑھ رہا ہو گا۔",
      answer: "I will be writing a letter while he will be reading a book",
      options: [
        "I will write a letter while he will read a book",
        "I will be writing a letter while he will be reading a book",
        "I am writing a letter while he is reading a book",
        "I will be write a letter while he will be read a book"
      ],
      correct: 1
    },
    {
      id: 6,
      urdu: "وہ ٹی وی دیکھ رہے ہوں گے جبکہ ہم کھانا کھا رہے ہوں گے۔",
      answer: "They will be watching TV while we will be eating",
      options: [
        "They will watch TV while we will eat",
        "They will be watching TV while we will be eating",
        "They are watching TV while we are eating",
        "They will be watch TV while we will be eat"
      ],
      correct: 1
    },
    {
      id: 7,
      urdu: "پرندے گا رہے ہوں گے جبکہ سورج نکل رہا ہو گا۔",
      answer: "The birds will be singing while the sun will be rising",
      options: [
        "The birds will sing while the sun will rise",
        "The birds will be singing while the sun will be rising",
        "The birds are singing while the sun is rising",
        "The birds will be sing while the sun will be rise"
      ],
      correct: 1
    },
    {
      id: 8,
      urdu: "وہ دوڑ رہا ہو گا جبکہ میں چل رہا ہوں گا۔",
      answer: "He will be running while I will be walking",
      options: [
        "He will run while I will walk",
        "He will be running while I will be walking",
        "He is running while I am walking",
        "He will be run while I will be walk"
      ],
      correct: 1
    },
    {
      id: 9,
      urdu: "وہ نہیں سو رہے ہوں گے جبکہ ہم کام کر رہے ہوں گے۔",
      answer: "They will not be sleeping while we will be working",
      options: [
        "They will not sleep while we will work",
        "They will not be sleeping while we will be working",
        "They are not sleeping while we are working",
        "They will not be sleep while we will be work"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "کیا تم پڑھ رہے ہو گے جبکہ وہ کھیل رہے ہوں گے؟",
      answer: "Will you be studying while they will be playing?",
      options: [
        "Will you study while they will play?",
        "Will you be studying while they will be playing?",
        "Are you studying while they are playing?",
        "Will you be study while they will be play?"
      ],
      correct: 1
    },
    {
      id: 11,
      urdu: "وہ ہنس رہے ہوں گے جبکہ وہ رو رہی ہو گی۔",
      answer: "They will be laughing while she will be crying",
      options: [
        "They will laugh while she will cry",
        "They will be laughing while she will be crying",
        "They are laughing while she is crying",
        "They will be laugh while she will be cry"
      ],
      correct: 1
    },
    {
      id: 12,
      urdu: "میں سو نہیں رہا ہوں گا جبکہ وہ کام کر رہا ہو گا۔",
      answer: "I will not be sleeping while he will be working",
      options: [
        "I will not sleep while he will work",
        "I will not be sleeping while he will be working",
        "I am not sleeping while he is working",
        "I will not be sleep while he will be work"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-cyan-500 to-sky-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises-in-urdu" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/future-continuous" className="text-white/80 hover:text-white transition duration-300">
              Future Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Future Continuous Tense - Exercise 2
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Parallel Future Actions - ایک ساتھ جاری مستقبل کے کام
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
                  <li>جب دو کام مستقبل میں ایک ساتھ جاری ہوں تو دونوں Future Continuous میں ہوتے ہیں</li>
                  <li>ربط کے لیے while (جبکہ) استعمال کریں</li>
                  <li>دونوں کاموں کے لیے will be + verb(ing) کا فارمولا استعمال کریں</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-cyan-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-cyan-100 text-cyan-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-cyan-500 hover:bg-cyan-50 transition duration-300"
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
              href="/exercises-in-urdu/future-continuous-exercise-1"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              Previous Exercise
            </Link>
            <Link 
              href="/exercises-in-urdu/future-perfect-exercise-1"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next: Future Perfect
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses-in-urdu/future-continuous"
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