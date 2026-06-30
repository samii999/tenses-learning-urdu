"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

export default function PastSimpleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      id: 1,
      urdu: "میں نے کل کھانا کھایا۔",
      question: "I _____ food yesterday.",
      options: ["eat", "ate", "eaten", "have eaten"],
      correct: 1,
      explanation: "Past Simple میں verb کی دوسری فارم استعمال ہوتی ہے۔ eat کی دوسری فارم ate ہے۔"
    },
    {
      id: 2,
      urdu: "وہ کل سکول گیا۔",
      question: "He _____ to school yesterday.",
      options: ["go", "goed", "went", "gone"],
      correct: 2,
      explanation: "go کی دوسری فارم went ہے۔ He went to school صحیح ہے۔"
    },
    {
      id: 3,
      urdu: "ہم نے کل فلم دیکھی۔",
      question: "We _____ a movie yesterday.",
      options: ["watch", "watched", "have watched", "are watching"],
      correct: 1,
      explanation: "Regular verb watch میں ed لگتا ہے۔ We watched a movie صحیح ہے۔"
    },
    {
      id: 4,
      urdu: "اس نے مجھے خط لکھا۔",
      question: "She _____ me a letter.",
      options: ["write", "wrote", "written", "has written"],
      correct: 1,
      explanation: "write کی دوسری فارم wrote ہے۔ She wrote me a letter صحیح ہے۔"
    },
    {
      id: 5,
      urdu: "وہ کل شام آئے۔",
      question: "They _____ yesterday evening.",
      options: ["come", "came", "comed", "have come"],
      correct: 1,
      explanation: "come کی دوسری فارم came ہے۔ They came yesterday evening صحیح ہے۔"
    },
    {
      id: 6,
      urdu: "میں نے کل پانی پیا۔",
      question: "I _____ water yesterday.",
      options: ["drink", "drunk", "drank", "have drunk"],
      correct: 2,
      explanation: "drink کی دوسری فارم drank ہے۔ I drank water yesterday صحیح ہے۔"
    },
    {
      id: 7,
      urdu: "اس نے کل کتاب خریدی۔",
      question: "He _____ a book yesterday.",
      options: ["buy", "buyed", "bought", "has bought"],
      correct: 2,
      explanation: "buy کی دوسری فارم bought ہے۔ He bought a book yesterday صحیح ہے۔"
    },
    {
      id: 8,
      urdu: "ہم نے کل کام کیا۔",
      question: "We _____ yesterday.",
      options: ["work", "worked", "have worked", "are working"],
      correct: 1,
      explanation: "Regular verb work میں ed لگتا ہے۔ We worked yesterday صحیح ہے۔"
    },
    {
      id: 9,
      urdu: "وہ کل یہاں آیا۔",
      question: "He _____ here yesterday.",
      options: ["come", "came", "comed", "has come"],
      correct: 1,
      explanation: "come کی دوسری فارم came ہے۔ He came here yesterday صحیح ہے۔"
    },
    {
      id: 10,
      urdu: "میں نے کل گاڑی چلائی۔",
      question: "I _____ a car yesterday.",
      options: ["drive", "drove", "driven", "have driven"],
      correct: 1,
      explanation: "drive کی دوسری فارم drove ہے۔ I drove a car yesterday صحیح ہے۔"
    },
    {
      id: 11,
      urdu: "اس نے کل خط پڑھا۔",
      question: "She _____ the letter yesterday.",
      options: ["read", "readed", "has read", "reads"],
      correct: 0,
      explanation: "read کی دوسری فارم بھی read ہے (تلفظ بدل جاتا ہے)۔ She read the letter yesterday صحیح ہے۔"
    },
    {
      id: 12,
      urdu: "میں نے کل کھانا نہیں کھایا۔",
      question: "I _____ not _____ food yesterday.",
      options: ["do / eat", "did / ate", "did / eat", "have / eaten"],
      correct: 2,
      explanation: "منفی جملوں میں did not + verb(1st form) استعمال ہوتا ہے۔ I did not eat food yesterday صحیح ہے۔"
    },
    {
      id: 13,
      urdu: "کیا تم کل سکول گئے؟",
      question: "_____ you _____ to school yesterday?",
      options: ["Did / go", "Did / went", "Do / go", "Were / go"],
      correct: 0,
      explanation: "سوال میں Did + subject + verb(1st form) استعمال ہوتا ہے۔ Did you go to school yesterday صحیح ہے۔"
    },
    {
      id: 14,
      urdu: "تم کل کہاں گئے؟",
      question: "Where _____ you _____ yesterday?",
      options: ["did / went", "did / go", "do / go", "were / go"],
      correct: 1,
      explanation: "WH سوال میں WH + did + subject + verb(1st form)۔ Where did you go yesterday صحیح ہے۔"
    },
    {
      id: 15,
      urdu: "اس نے خط کیوں نہیں پڑھا؟",
      question: "Why _____ she not _____ the letter?",
      options: ["did / read", "did / readed", "did / read", "was / read"],
      correct: 0,
      explanation: "Why did she not read the letter? (did کے بعد verb کی پہلی فارم read) صحیح ہے۔"
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
        <section className="py-10 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
                ← All Quizzes
              </Link>
              <span className="mx-2 text-white/60">|</span>
              <Link href="/tenses-in-urdu/past-simple" className="text-white/80 hover:text-white transition duration-300">
                Past Simple Tense
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Past Simple Quiz - Results
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
              
              <div className="text-6xl font-bold text-blue-600 mb-4">
                {score} / {questions.length}
              </div>
              
              <p className="text-xl text-gray-700 mb-8">
                آپ نے {percentage.toFixed(0)}% سوالات درست کیے
              </p>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
                <div 
                  className="bg-blue-600 h-4 rounded-full transition-all duration-500"
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
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
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
      <section className="py-10 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
              ← All Quizzes
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/past-simple" className="text-white/80 hover:text-white transition duration-300">
              Past Simple Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Simple Quiz
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            اپنی Past Simple Tense کی مہارت کو پرکھیں
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
              <span className="text-blue-600 font-bold">
                Score: {score}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
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
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
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
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Check Answer
                  <FaArrowRight className="ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleContinue}
                  className="flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition duration-300"
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
              href="/tenses-in-urdu/past-simple"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
            <Link 
              href="/exercises-in-urdu/past-simple-exercise-1"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}