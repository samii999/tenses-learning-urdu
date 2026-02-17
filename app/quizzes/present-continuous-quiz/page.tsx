"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

export default function PresentContinuousQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      id: 1,
      urdu: "میں پانی پی رہا ہوں۔",
      question: "I _____ water.",
      options: ["am drink", "am drinking", "drinking", "drink"],
      correct: 1,
      explanation: "Present Continuous کا فارمولا: I + am + verb(ing)۔ I am drinking صحیح ہے۔"
    },
    {
      id: 2,
      urdu: "وہ کتاب پڑھ رہی ہے۔",
      question: "She _____ a book.",
      options: ["is read", "is reading", "reading", "are reading"],
      correct: 1,
      explanation: "She کے ساتھ is + verb(ing) استعمال ہوتا ہے۔ She is reading صحیح ہے۔"
    },
    {
      id: 3,
      urdu: "وہ فٹبال کھیل رہے ہیں۔",
      question: "They _____ football.",
      options: ["are play", "are playing", "playing", "is playing"],
      correct: 1,
      explanation: "They کے ساتھ are + verb(ing) استعمال ہوتا ہے۔ They are playing صحیح ہے۔"
    },
    {
      id: 4,
      urdu: "میں کھانا نہیں کھا رہا ہوں۔",
      question: "I _____ food.",
      options: ["am not eat", "am not eating", "not eating", "don't eating"],
      correct: 1,
      explanation: "منفی جملوں میں am not + verb(ing) استعمال ہوتا ہے۔ I am not eating صحیح ہے۔"
    },
    {
      id: 5,
      urdu: "کیا تم پڑھ رہے ہو؟",
      question: "_____ you studying?",
      options: ["Do", "Are", "Is", "Am"],
      correct: 1,
      explanation: "You کے ساتھ سوال میں Are استعمال ہوتا ہے۔ Are you studying صحیح ہے۔"
    },
    {
      id: 6,
      urdu: "وہ کہاں جا رہا ہے؟",
      question: "Where _____ he going?",
      options: ["is", "are", "am", "do"],
      correct: 0,
      explanation: "He کے ساتھ سوال میں is استعمال ہوتا ہے۔ Where is he going صحیح ہے۔"
    },
    {
      id: 7,
      urdu: "بچے پارک میں کھیل رہے ہیں۔",
      question: "The children _____ in the park.",
      options: ["is playing", "are playing", "playing", "am playing"],
      correct: 1,
      explanation: "The children (They) کے ساتھ are + verb(ing) استعمال ہوتا ہے۔ The children are playing صحیح ہے۔"
    },
    {
      id: 8,
      urdu: "وہ کیا کر رہی ہے؟",
      question: "What _____ she doing?",
      options: ["is", "are", "am", "do"],
      correct: 0,
      explanation: "She کے ساتھ سوال میں is استعمال ہوتا ہے۔ What is she doing صحیح ہے۔"
    },
    {
      id: 9,
      urdu: "ہم انگریزی سیکھ رہے ہیں۔",
      question: "We _____ English.",
      options: ["are learn", "are learning", "learning", "is learning"],
      correct: 1,
      explanation: "We کے ساتھ are + verb(ing) استعمال ہوتا ہے۔ We are learning صحیح ہے۔"
    },
    {
      id: 10,
      urdu: "وہ سو نہیں رہا ہے۔",
      question: "He _____ sleeping.",
      options: ["is not", "are not", "am not", "not"],
      correct: 0,
      explanation: "He کے ساتھ منفی میں is not استعمال ہوتا ہے۔ He is not sleeping صحیح ہے۔"
    },
    {
      id: 11,
      urdu: "کیا بارش ہو رہی ہے؟",
      question: "_____ it raining?",
      options: ["Is", "Are", "Am", "Do"],
      correct: 0,
      explanation: "It کے ساتھ سوال میں Is استعمال ہوتا ہے۔ Is it raining صحیح ہے۔"
    },
    {
      id: 12,
      urdu: "وہ گانا گا رہے ہیں۔",
      question: "They _____ a song.",
      options: ["is singing", "are singing", "singing", "am singing"],
      correct: 1,
      explanation: "They کے ساتھ are + verb(ing) استعمال ہوتا ہے۔ They are singing صحیح ہے۔"
    },
    {
      id: 13,
      urdu: "میں کل لاہور جا رہا ہوں۔",
      question: "I _____ to Lahore tomorrow.",
      options: ["am go", "am going", "will go", "going"],
      correct: 1,
      explanation: "مستقبل کے منصوبوں کے لیے Present Continuous استعمال ہوتا ہے۔ I am going صحیح ہے۔"
    },
    {
      id: 14,
      urdu: "وہ اگلے ہفتے لندن جا رہی ہے۔",
      question: "She _____ to London next week.",
      options: ["is go", "is going", "goes", "will go"],
      correct: 1,
      explanation: "پہلے سے طے شدہ منصوبے کے لیے Present Continuous استعمال ہوتا ہے۔ She is going صحیح ہے۔"
    },
    {
      id: 15,
      urdu: "وہ شام 7 بجے آ رہے ہیں۔",
      question: "They _____ at 7 pm.",
      options: ["are come", "are coming", "comes", "will come"],
      correct: 1,
      explanation: "مستقبل کے منصوبے کے لیے Present Continuous استعمال ہوتا ہے۔ They are coming صحیح ہے۔"
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
        <section className="py-10 px-4 bg-gradient-to-r from-green-500 to-teal-500 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
                ← All Quizzes
              </Link>
              <span className="mx-2 text-white/60">|</span>
              <Link href="/tenses/present-continuous" className="text-white/80 hover:text-white transition duration-300">
                Present Continuous Tense
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Present Continuous Quiz - Results
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
      <section className="py-10 px-4 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
              ← All Quizzes
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/present-continuous" className="text-white/80 hover:text-white transition duration-300">
              Present Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Continuous Quiz
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            اپنی Present Continuous Tense کی مہارت کو پرکھیں
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
              href="/tenses/present-continuous"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
            <Link 
              href="/exercises/present-continuous-exercise-1"
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