"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

export default function FuturePerfectQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      id: 1,
      urdu: "میں شام تک کام ختم کر چکا ہوں گا۔",
      question: "I _____ work by evening.",
      options: ["will finish", "will have finished", "have finished", "will be finishing"],
      correct: 1,
      explanation: "Future Perfect کا فارمولا: will + have + verb(3rd form)۔ I will have finished work by evening صحیح ہے۔"
    },
    {
      id: 2,
      urdu: "وہ کل تک کتاب پڑھ چکی ہو گی۔",
      question: "She _____ the book by tomorrow.",
      options: ["will read", "will have read", "has read", "will be reading"],
      correct: 1,
      explanation: "She will have read the book by tomorrow (will have + 3rd form) صحیح ہے۔"
    },
    {
      id: 3,
      urdu: "ہم اگلے ہفتے تک یہ کام کر چکے ہوں گے۔",
      question: "We _____ this work by next week.",
      options: ["will do", "will have done", "have done", "will be doing"],
      correct: 1,
      explanation: "We will have done this work by next week (will have + 3rd form) صحیح ہے۔"
    },
    {
      id: 4,
      urdu: "وہ 2025 تک گریجویشن کر چکے ہوں گے۔",
      question: "They _____ by 2025.",
      options: ["will graduate", "will have graduated", "have graduated", "will be graduating"],
      correct: 1,
      explanation: "They will have graduated by 2025 (will have + 3rd form) صحیح ہے۔"
    },
    {
      id: 5,
      urdu: "میں کل صبح تک خط لکھ چکا ہوں گا۔",
      question: "I _____ the letter by tomorrow morning.",
      options: ["will write", "will have written", "have written", "will be writing"],
      correct: 1,
      explanation: "I will have written the letter by tomorrow morning (will have + 3rd form) صحیح ہے۔"
    },
    {
      id: 6,
      urdu: "ٹرین شام 7 بجے تک پہنچ چکی ہو گی۔",
      question: "The train _____ by 7 pm.",
      options: ["will arrive", "will have arrived", "has arrived", "will be arriving"],
      correct: 1,
      explanation: "The train will have arrived by 7 pm (will have + 3rd form) صحیح ہے۔"
    },
    {
      id: 7,
      urdu: "وہ کل رات تک واپس آ چکے ہوں گے۔",
      question: "They _____ by tomorrow night.",
      options: ["will return", "will have returned", "have returned", "will be returning"],
      correct: 1,
      explanation: "They will have returned by tomorrow night (will have + 3rd form) صحیح ہے۔"
    },
    {
      id: 8,
      urdu: "کیا تم شام تک کھانا کھا چکے ہو گے؟",
      question: "_____ you _____ food by evening?",
      options: ["Will / eat", "Will / have eaten", "Have / eaten", "Will / be eating"],
      correct: 1,
      explanation: "سوال میں Will + subject + have + 3rd form۔ Will you have eaten food by evening صحیح ہے۔"
    },
    {
      id: 9,
      urdu: "کیا وہ کل تک کام ختم کر چکی ہو گی؟",
      question: "_____ she _____ work by tomorrow?",
      options: ["Will / finish", "Will / have finished", "Has / finished", "Will / be finishing"],
      correct: 1,
      explanation: "Will she have finished work by tomorrow صحیح ہے۔"
    },
    {
      id: 10,
      urdu: "میں شام تک یہ کام نہیں کر چکا ہوں گا۔",
      question: "I _____ this work by evening.",
      options: ["will not do", "will not have done", "have not done", "will not be doing"],
      correct: 1,
      explanation: "منفی میں will not have + 3rd form۔ I will not have done this work by evening صحیح ہے۔"
    },
    {
      id: 11,
      urdu: "وہ کل تک خط نہیں لکھ چکی ہو گی۔",
      question: "She _____ the letter by tomorrow.",
      options: ["will not write", "will not have written", "has not written", "will not be writing"],
      correct: 1,
      explanation: "She will not have written the letter by tomorrow صحیح ہے۔"
    },
    {
      id: 12,
      urdu: "تم کل شام تک کیا کر چکے ہو گے؟",
      question: "What _____ you _____ by tomorrow evening?",
      options: ["will / do", "will / have done", "have / done", "will / be doing"],
      correct: 1,
      explanation: "WH سوال میں What will you have done by tomorrow evening صحیح ہے۔"
    },
    {
      id: 13,
      urdu: "اگلے سال تک، میں دس سال سے کام کر چکا ہوں گا۔",
      question: "By next year, I _____ for ten years.",
      options: ["will work", "will have worked", "have worked", "will be working"],
      correct: 1,
      explanation: "By next year, I will have worked for ten years (مدت کے ساتھ Future Perfect) صحیح ہے۔"
    },
    {
      id: 14,
      urdu: "اگلے مہینے تک، ہم نیا گھر خرید چکے ہوں گے۔",
      question: "By next month, we _____ a new house.",
      options: ["will buy", "will have bought", "have bought", "will be buying"],
      correct: 1,
      explanation: "By next month, we will have bought a new house (will have + 3rd form) صحیح ہے۔"
    },
    {
      id: 15,
      urdu: "کیا تم اگلے سال تک نئی زبان سیکھ چکے ہو گے؟",
      question: "_____ you _____ a new language by next year?",
      options: ["Will / learn", "Will / have learned", "Have / learned", "Will / be learning"],
      correct: 1,
      explanation: "Will you have learned a new language by next year صحیح ہے۔"
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
        <section className="py-10 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
                ← All Quizzes
              </Link>
              <span className="mx-2 text-white/60">|</span>
              <Link href="/tenses/future-perfect" className="text-white/80 hover:text-white transition duration-300">
                Future Perfect Tense
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Future Perfect Quiz - Results
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
              
              <div className="text-6xl font-bold text-purple-600 mb-4">
                {score} / {questions.length}
              </div>
              
              <p className="text-xl text-gray-700 mb-8">
                آپ نے {percentage.toFixed(0)}% سوالات درست کیے
              </p>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
                <div 
                  className="bg-purple-600 h-4 rounded-full transition-all duration-500"
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
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
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
      <section className="py-10 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
              ← All Quizzes
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/future-perfect" className="text-white/80 hover:text-white transition duration-300">
              Future Perfect Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Future Perfect Quiz
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            اپنی Future Perfect Tense کی مہارت کو پرکھیں
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
              <span className="text-purple-600 font-bold">
                Score: {score}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
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
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
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
                      ? 'bg-purple-600 hover:bg-purple-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Check Answer
                  <FaArrowRight className="ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleContinue}
                  className="flex items-center justify-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg transition duration-300"
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
              href="/tenses/future-perfect"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
            <Link 
              href="/exercises/future-perfect-exercise-1"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}