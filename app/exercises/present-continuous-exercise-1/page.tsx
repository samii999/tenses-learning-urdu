'use client';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

export default function PresentContinuousExercise1() {
  const exercises = [
    {
      id: 1,
      urdu: "میں پانی پی رہا ہوں۔",
      answer: "I am drinking water",
      options: [
        "I am drinking water",
        "I drinking water",
        "I am drink water",
        "I am drink water"
      ],
      correct: 0
    },
    {
      id: 2,
      urdu: "وہ کتاب پڑھ رہی ہے۔",
      answer: "She is reading a book",
      options: [
        "She is read a book",
        "She reading a book",
        "She is reading a book",
        "She are reading a book"
      ],
      correct: 2
    },
    {
      id: 3,
      urdu: "وہ فٹبال کھیل رہے ہیں۔",
      answer: "They are playing football",
      options: [
        "They are play football",
        "They playing football",
        "They are playing football",
        "They is playing football"
      ],
      correct: 2
    },
    {
      id: 4,
      urdu: "بچے پارک میں کھیل رہے ہیں۔",
      answer: "The children are playing in the park",
      options: [
        "The children is playing in the park",
        "The children are playing in the park",
        "The children playing in the park",
        "The children are play in the park"
      ],
      correct: 1
    },
    {
      id: 5,
      urdu: "وہ گانا گا رہا ہے۔",
      answer: "He is singing a song",
      options: [
        "He is sing a song",
        "He singing a song",
        "He are singing a song",
        "He is singing a song"
      ],
      correct: 3
    },
    {
      id: 6,
      urdu: "ہم انگریزی سیکھ رہے ہیں۔",
      answer: "We are learning English",
      options: [
        "We are learn English",
        "We learning English",
        "We are learning English",
        "We is learning English"
      ],
      correct: 2
    },
    {
      id: 7,
      urdu: "تم کیا کر رہے ہو؟",
      answer: "What are you doing?",
      options: [
        "What are you doing?",
        "What you doing?",
        "What are you do?",
        "What is you doing?"
      ],
      correct: 0
    },
    {
      id: 8,
      urdu: "بارش ہو رہی ہے۔",
      answer: "It is raining",
      options: [
        "It is rain",
        "It raining",
        "It is raining",
        "It are raining"
      ],
      correct: 2
    },
    {
      id: 9,
      urdu: "پرندے آسمان میں اُڑ رہے ہیں۔",
      answer: "The birds are flying in the sky",
      options: [
        "The birds is flying in the sky",
        "The birds are flying in the sky",
        "The birds are fly in the sky",
        "The birds flying in the sky"
      ],
      correct: 1
    },
    {
      id: 10,
      urdu: "میں اپنا کام کر رہا ہوں۔",
      answer: "I am doing my work",
      options: [
        "I am do my work",
        "I doing my work",
        "I am doing my work",
        "I are doing my work"
      ],
      correct: 2
    },
    {
      id: 11,
      urdu: "وہ کھانا بنا رہی ہے۔",
      answer: "She is cooking food",
      options: [
        "She is cook food",
        "She cooking food",
        "She are cooking food",
        "She is cooking food"
      ],
      correct: 3
    },
    {
      id: 12,
      urdu: "میرے دوست میرا انتظار کر رہے ہیں۔",
      answer: "My friends are waiting for me",
      options: [
        "My friends is waiting for me",
        "My friends are waiting for me",
        "My friends are wait for me",
        "My friends waiting for me"
      ],
      correct: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/exercises" className="text-white/80 hover:text-white transition duration-300">
              ← All Exercises
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/present-continuous" className="text-white/80 hover:text-white transition duration-300">
              Present Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Continuous Tense - Exercise 1
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            Current Actions - ابھی جاری کام
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
                  <li>Present Continuous کا فارمولا: am/is/are + verb(ing)</li>
                  <li>I کے ساتھ am، He/She/It کے ساتھ is، You/We/They کے ساتھ are</li>
                  <li>verb میں ing لگانا لازمی ہے</li>
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
              <div key={ex.id} className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      className="text-left p-4 rounded-lg border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition duration-300"
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
              href="/exercises/present-continuous-exercise-2"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Next Exercise: Future Arrangements
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses/present-continuous"
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