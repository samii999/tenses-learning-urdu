"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

export default function FutureSimpleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      id: 1,
      urdu: "میں کل تم سے ملوں گا۔",
      question: "I _____ you tomorrow.",
      options: ["meet", "will meet", "am meet", "going to meet"],
      correct: 1,
      explanation: "Future Simple کا فارمولا: will + verb(1st form)۔ I will meet you tomorrow صحیح ہے۔"
    },
    {
      id: 2,
      urdu: "بارش ہو گی۔",
      question: "It _____ rain.",
      options: ["will", "is", "going to", "has"],
      correct: 0,
      explanation: "پیش گوئی کے لیے will + verb۔ It will rain صحیح ہے۔"
    },
    {
      id: 3,
      urdu: "وہ کامیاب ہو گا۔",
      question: "He _____ succeed.",
      options: ["will", "is", "going to", "has"],
      correct: 0,
      explanation: "will + verb (succeed)۔ He will succeed صحیح ہے۔"
    },
    {
      id: 4,
      urdu: "ہم کل فلم دیکھیں گے۔",
      question: "We _____ a movie tomorrow.",
      options: ["watch", "will watch", "are watch", "going to watch"],
      correct: 1,
      explanation: "will + watch۔ We will watch a movie tomorrow صحیح ہے۔"
    },
    {
      id: 5,
      urdu: "وہ شاید دیر سے آئے گی۔",
      question: "She will _____ come late.",
      options: ["probably", "probable", "maybe", "perhaps"],
      correct: 0,
      explanation: "probably (شاید) will کے بعد آتا ہے۔ She will probably come late صحیح ہے۔"
    },
    {
      id: 6,
      urdu: "فون کی گھنٹی بج رہی ہے۔ میں اٹھا کر دیکھوں گا۔",
      question: "The phone is ringing. I _____ it up.",
      options: ["pick", "will pick", "am picking", "going to pick"],
      correct: 1,
      explanation: "اس وقت کا فیصلہ (spontaneous decision) کے لیے will۔ I will pick it up صحیح ہے۔"
    },
    {
      id: 7,
      urdu: "مجھے بھوک لگی ہے۔ میں کچھ کھاؤں گا۔",
      question: "I am hungry. I _____ something.",
      options: ["eat", "will eat", "am eating", "going to eat"],
      correct: 1,
      explanation: "اس وقت کا فیصلہ کے لیے will۔ I will eat something صحیح ہے۔"
    },
    {
      id: 8,
      urdu: "وہ شاید ہم سے ملنے آئے گا۔",
      question: "He will _____ come to meet us.",
      options: ["probably", "probable", "maybe", "perhaps"],
      correct: 0,
      explanation: "probably will کے بعد آتا ہے۔ He will probably come to meet us صحیح ہے۔"
    },
    {
      id: 9,
      urdu: "کل کا موسم کیسا ہو گا؟",
      question: "What _____ the weather be like tomorrow?",
      options: ["is", "will", "does", "has"],
      correct: 1,
      explanation: "سوال میں will subject سے پہلے آتا ہے۔ What will the weather be like tomorrow صحیح ہے۔"
    },
    {
      id: 10,
      urdu: "مجھے یقین ہے وہ وقت پر پہنچ جائے گا۔",
      question: "I am sure he _____ arrive on time.",
      options: ["will", "is", "going to", "has"],
      correct: 0,
      explanation: "یقین کے اظہار کے لیے will۔ He will arrive on time صحیح ہے۔"
    },
    {
      id: 11,
      urdu: "وہ شاید آج نہ آئے۔",
      question: "He will probably _____ come today.",
      options: ["not", "no", "don't", "doesn't"],
      correct: 0,
      explanation: "منفی میں will not / won't استعمال ہوتا ہے۔ He will probably not come today صحیح ہے۔"
    },
    {
      id: 12,
      urdu: "کیا تم کل پارٹی میں آؤ گے؟",
      question: "_____ you come to the party tomorrow?",
      options: ["Do", "Will", "Are", "Have"],
      correct: 1,
      explanation: "سوال میں Will subject سے پہلے آتا ہے۔ Will you come to the party tomorrow صحیح ہے۔"
    },
    {
      id: 13,
      urdu: "میں تمہاری مدد کروں گا۔ (وعدہ)",
      question: "I _____ help you.",
      options: ["will", "am", "going to", "have"],
      correct: 0,
      explanation: "وعدے کے لیے will۔ I will help you صحیح ہے۔"
    },
    {
      id: 14,
      urdu: "کیا میں دروازہ کھول دوں؟ (پیشکش)",
      question: "_____ I open the door?",
      options: ["Will", "Shall", "Do", "Am"],
      correct: 1,
      explanation: "پیشکش (offer) کے لیے I/We کے ساتھ shall استعمال ہوتا ہے۔ Shall I open the door صحیح ہے۔"
    },
    {
      id: 15,
      urdu: "کیا ہم کل ملیں گے؟ (تجویز)",
      question: "_____ we meet tomorrow?",
      options: ["Will", "Shall", "Do", "Are"],
      correct: 1,
      explanation: "تجویز (suggestion) کے لیے We کے ساتھ shall استعمال ہوتا ہے۔ Shall we meet tomorrow صحیح ہے۔"
    }
  ];

  const handleOptionClick = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      // Check if answer is correct
      const isCorrect = selectedOption === questions[currentQuestion].correct;
      
      // Save answer
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = isCorrect;
      setAnswers(newAnswers);
      
      // Update score
      if (isCorrect) {
        setScore(score + 1);
      }

      // Show explanation
      setShowExplanation(true);
    }
  };

  const handleContinue = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setAnswers([]);
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    const getResultMessage = () => {
      if (percentage >= 80) return "ماشاء اللہ! بہت عمدہ!";
      if (percentage >= 60) return "اچھا ہے، مزید مشق کریں";
      if (percentage >= 40) return "اور مشق کی ضرورت ہے";
      return "دوبارہ کوشش کریں";
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-10 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
                ← All Quizzes
              </Link>
              <span className="mx-2 text-white/60">|</span>
              <Link href="/tenses-in-urdu/future-simple" className="text-white/80 hover:text-white transition duration-300">
                Future Simple Tense
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Future Simple Quiz - Results
            </h1>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <FaTrophy className="text-yellow-600 text-5xl" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{getResultMessage()}</h2>
              
              <div className="text-6xl font-bold text-green-600 mb-4">
                {score} / {questions.length}
              </div>
              
              <p className="text-xl text-gray-700 mb-8">
                آپ نے {percentage.toFixed(0)}% سوالات درست کیے
              </p>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
                <div 
                  className="bg-green-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{score}</div>
                  <div className="text-gray-700">Correct</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{questions.length - score}</div>
                  <div className="text-gray-700">Incorrect</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleRestart}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
                >
                  <FaRedo className="mr-2" />
                  Try Again
                </button>
                <Link 
                  href="/quizzes"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
                >
                  More Quizzes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
              ← All Quizzes
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/future-simple" className="text-white/80 hover:text-white transition duration-300">
              Future Simple Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Future Simple Quiz
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            اپنی Future Simple Tense کی مہارت کو پرکھیں
          </p>
        </div>
      </section>

      {/* Quiz Progress */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-green-600 font-bold">
                Score: {score}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Question */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <p className="font-urdu text-2xl text-gray-900 mb-4" dir="rtl">
                {questions[currentQuestion].urdu}
              </p>
              <p className="text-2xl text-gray-900 font-bold mb-6">
                {questions[currentQuestion].question}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-lg border-2 transition duration-300 ${
                    selectedOption === index
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                  } ${showExplanation ? 'cursor-not-allowed opacity-75' : ''}`}
                >
                  <span className="text-black">{option}</span>
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className={`mb-8 p-6 rounded-lg ${
                selectedOption === questions[currentQuestion].correct
                  ? 'bg-green-50 border-2 border-green-300'
                  : 'bg-red-50 border-2 border-red-300'
              }`}>
                <div className="flex items-start gap-3">
                  {selectedOption === questions[currentQuestion].correct ? (
                    <FaCheckCircle className="text-green-500 text-2xl mt-1 flex-shrink-0" />
                  ) : (
                    <FaTimesCircle className="text-red-500 text-2xl mt-1 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-bold text-black mb-2">
                      {selectedOption === questions[currentQuestion].correct ? 'صحیح!' : 'غلط!'}
                    </p>
                    <p className="text-black" dir="rtl">
                      {questions[currentQuestion].explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between">
              {!showExplanation ? (
                <button
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className={`flex items-center justify-center px-6 py-3 rounded-lg text-white font-bold transition duration-300 ${
                    selectedOption !== null
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Check Answer
                  <FaArrowRight className="ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleContinue}
                  className="flex items-center justify-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition duration-300"
                >
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                  <FaArrowRight className="ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/tenses-in-urdu/future-simple"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
            <Link 
              href="/exercises-in-urdu/future-simple-exercise-1"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}