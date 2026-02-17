"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

export default function FuturePerfectContinuousQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      id: 1,
      urdu: "اگلے سال تک، میں دس سال سے کام کر رہا ہوں گا۔",
      question: "By next year, I _____ for ten years.",
      options: ["will work", "will have worked", "will have been working", "will be working"],
      correct: 2,
      explanation: "Future Perfect Continuous کا فارمولا: will + have + been + verb(ing)۔ I will have been working for ten years by next year صحیح ہے۔"
    },
    {
      id: 2,
      urdu: "شام تک، وہ تین گھنٹے سے پڑھ رہی ہو گی۔",
      question: "By evening, she _____ for three hours.",
      options: ["will study", "will have studied", "will have been studying", "will be studying"],
      correct: 2,
      explanation: "She will have been studying for three hours by evening (will have been + verb-ing) صحیح ہے۔"
    },
    {
      id: 3,
      urdu: "2026 تک، ہم پانچ سال سے اس شہر میں رہ رہے ہوں گے۔",
      question: "By 2026, we _____ in this city for five years.",
      options: ["will live", "will have lived", "will have been living", "will be living"],
      correct: 2,
      explanation: "We will have been living in this city for five years by 2026 (will have been + verb-ing) صحیح ہے۔"
    },
    {
      id: 4,
      urdu: "اگلے مہینے تک، وہ دو سال سے اس کمپنی میں کام کر رہے ہوں گے۔",
      question: "By next month, they _____ in this company for two years.",
      options: ["will work", "will have worked", "will have been working", "will be working"],
      correct: 2,
      explanation: "They will have been working in this company for two years by next month صحیح ہے۔"
    },
    {
      id: 5,
      urdu: "کل صبح تک، بارش بارہ گھنٹے سے ہو رہی ہو گی۔",
      question: "By tomorrow morning, it _____ for twelve hours.",
      options: ["will rain", "will have rained", "will have been raining", "will be raining"],
      correct: 2,
      explanation: "It will have been raining for twelve hours by tomorrow morning صحیح ہے۔"
    },
    {
      id: 6,
      urdu: "شام 7 بجے تک، میں تین گھنٹے سے انتظار کر رہا ہوں گا۔",
      question: "By 7 pm, I _____ for three hours.",
      options: ["will wait", "will have waited", "will have been waiting", "will be waiting"],
      correct: 2,
      explanation: "I will have been waiting for three hours by 7 pm صحیح ہے۔"
    },
    {
      id: 7,
      urdu: "2027 تک، وہ دس سال سے انگریزی سیکھ رہی ہو گی۔",
      question: "By 2027, she _____ English for ten years.",
      options: ["will learn", "will have learned", "will have been learning", "will be learning"],
      correct: 2,
      explanation: "She will have been learning English for ten years by 2027 صحیح ہے۔"
    },
    {
      id: 8,
      urdu: "اگلے ہفتے تک، وہ پانچ دن سے بیمار ہوں گے۔",
      question: "By next week, they _____ sick for five days.",
      options: ["will be", "will have been", "will have been being", "will being"],
      correct: 1,
      explanation: "یہاں state verb (be) ہے، اس لیے Future Perfect Continuous نہیں لگے گا۔ By next week, they will have been sick for five days صحیح ہے۔"
    },
    {
      id: 9,
      urdu: "کل شام تک، ہم دو دن سے سفر کر رہے ہوں گے۔",
      question: "By tomorrow evening, we _____ for two days.",
      options: ["will travel", "will have traveled", "will have been traveling", "will be traveling"],
      correct: 2,
      explanation: "We will have been traveling for two days by tomorrow evening صحیح ہے۔"
    },
    {
      id: 10,
      urdu: "کیا تم اگلے سال تک دس سال سے کام کر رہے ہو گے؟",
      question: "_____ you _____ for ten years by next year?",
      options: ["Will / have worked", "Will / have been working", "Have / been working", "Will / be working"],
      correct: 1,
      explanation: "سوال میں Will + subject + have been + verb(ing)۔ Will you have been working for ten years by next year صحیح ہے۔"
    },
    {
      id: 11,
      urdu: "وہ شام تک دو گھنٹے سے انتظار نہیں کر رہے ہوں گے۔",
      question: "They _____ for two hours by evening.",
      options: ["will not wait", "will not have waited", "will not have been waiting", "will not be waiting"],
      correct: 2,
      explanation: "منفی میں will not have been + verb(ing)۔ They will not have been waiting for two hours by evening صحیح ہے۔"
    },
    {
      id: 12,
      urdu: "اگلے سال تک تم کتنے سال سے اس شہر میں رہ رہے ہو گے؟",
      question: "How many years _____ you _____ in this city by next year?",
      options: ["will / have lived", "will / have been living", "have / been living", "will / be living"],
      correct: 1,
      explanation: "WH سوال میں How many years will you have been living in this city by next year صحیح ہے۔"
    },
    {
      id: 13,
      urdu: "اگلے سال تک، وہ دس سال سے ایک ہی کمپنی میں کام کر رہا ہو گا۔",
      question: "By next year, he _____ in the same company for ten years.",
      options: ["will work", "will have worked", "will have been working", "will be working"],
      correct: 2,
      explanation: "He will have been working in the same company for ten years by next year صحیح ہے۔"
    },
    {
      id: 14,
      urdu: "2028 تک، وہ پندرہ سال سے تدریس دے رہی ہو گی۔",
      question: "By 2028, she _____ for fifteen years.",
      options: ["will teach", "will have taught", "will have been teaching", "will be teaching"],
      correct: 2,
      explanation: "She will have been teaching for fifteen years by 2028 صحیح ہے۔"
    },
    {
      id: 15,
      urdu: "اگلے مہینے تک، وہ دو سال سے اس پروجیکٹ پر کام کر رہے ہوں گے۔",
      question: "By next month, they _____ on this project for two years.",
      options: ["will work", "will have worked", "will have been working", "will be working"],
      correct: 2,
      explanation: "They will have been working on this project for two years by next month صحیح ہے۔"
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
        <section className="py-10 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
                ← All Quizzes
              </Link>
              <span className="mx-2 text-white/60">|</span>
              <Link href="/tenses/future-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
                Future Perfect Continuous Tense
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Future Perfect Continuous Quiz - Results
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
              
              <div className="text-6xl font-bold text-amber-600 mb-4">
                {score} / {questions.length}
              </div>
              
              <p className="text-xl text-gray-700 mb-8">
                آپ نے {percentage.toFixed(0)}% سوالات درست کیے
              </p>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
                <div 
                  className="bg-amber-600 h-4 rounded-full transition-all duration-500"
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
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
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
      <section className="py-10 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
              ← All Quizzes
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/future-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
              Future Perfect Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Future Perfect Continuous Quiz
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            اپنی Future Perfect Continuous Tense کی مہارت کو پرکھیں
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
              <span className="text-amber-600 font-bold">
                Score: {score}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-amber-600 h-2 rounded-full transition-all duration-300"
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
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50'
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
                      ? 'bg-amber-600 hover:bg-amber-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Check Answer
                  <FaArrowRight className="ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleContinue}
                  className="flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition duration-300"
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
              href="/tenses/future-perfect-continuous"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
            <Link 
              href="/exercises/future-perfect-continuous-exercise-1"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}