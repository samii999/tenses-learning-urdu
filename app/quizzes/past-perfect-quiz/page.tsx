"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

export default function PastPerfectQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      id: 1,
      urdu: "جب وہ آیا، میں کھانا کھا چکا تھا۔",
      question: "When he came, I _____ food.",
      options: ["ate", "had eaten", "have eaten", "was eating"],
      correct: 1,
      explanation: "پہلے والے کام کے لیے Past Perfect (had + 3rd form) استعمال ہوتا ہے۔ I had eaten صحیح ہے۔"
    },
    {
      id: 2,
      urdu: "وہ جا چکی تھی جب میں پہنچا۔",
      question: "She _____ when I arrived.",
      options: ["left", "had left", "has left", "was leaving"],
      correct: 1,
      explanation: "پہلے والے کام کے لیے Past Perfect۔ She had left when I arrived صحیح ہے۔"
    },
    {
      id: 3,
      urdu: "بارش شروع ہو چکی تھی جب ہم نکلے۔",
      question: "The rain _____ when we left.",
      options: ["started", "had started", "has started", "was starting"],
      correct: 1,
      explanation: "پہلے والے کام کے لیے Past Perfect۔ The rain had started when we left صحیح ہے۔"
    },
    {
      id: 4,
      urdu: "اس نے خط لکھ لیا تھا۔",
      question: "He _____ the letter.",
      options: ["wrote", "had written", "has written", "was writing"],
      correct: 1,
      explanation: "Past Perfect: had + 3rd form (written)۔ He had written the letter صحیح ہے۔"
    },
    {
      id: 5,
      urdu: "ہم فلم دیکھ چکے تھے۔",
      question: "We _____ the movie.",
      options: ["watched", "had watched", "have watched", "were watching"],
      correct: 1,
      explanation: "Past Perfect: had + 3rd form (watched)۔ We had watched the movie صحیح ہے۔"
    },
    {
      id: 6,
      urdu: "ٹرین جا چکی تھی جب ہم سٹیشن پہنچے۔",
      question: "The train _____ when we reached the station.",
      options: ["left", "had left", "has left", "was leaving"],
      correct: 1,
      explanation: "پہلے والے کام کے لیے Past Perfect۔ The train had left when we reached the station صحیح ہے۔"
    },
    {
      id: 7,
      urdu: "وہ بیمار ہو گیا تھا اس لیے وہ نہیں آیا۔",
      question: "He _____ sick, so he did not come.",
      options: ["fell", "had fallen", "has fallen", "was falling"],
      correct: 1,
      explanation: "وجہ بتانے کے لیے Past Perfect۔ He had fallen sick, so he did not come صحیح ہے۔"
    },
    {
      id: 8,
      urdu: "میں نے وہ کتاب پڑھ لی تھی۔",
      question: "I _____ that book.",
      options: ["read", "had read", "have read", "was reading"],
      correct: 1,
      explanation: "Past Perfect: had + 3rd form (read)۔ I had read that book صحیح ہے۔"
    },
    {
      id: 9,
      urdu: "وہ سو چکی تھی جب میں نے فون کیا۔",
      question: "She _____ when I called.",
      options: ["slept", "had slept", "has slept", "was sleeping"],
      correct: 1,
      explanation: "پہلے والے کام کے لیے Past Perfect۔ She had slept when I called صحیح ہے۔"
    },
    {
      id: 10,
      urdu: "ہم نے کھانا کھا لیا تھا اس لیے ہم بھوکے نہیں تھے۔",
      question: "We _____ food, so we were not hungry.",
      options: ["ate", "had eaten", "have eaten", "were eating"],
      correct: 1,
      explanation: "وجہ بتانے کے لیے Past Perfect۔ We had eaten food, so we were not hungry صحیح ہے۔"
    },
    {
      id: 11,
      urdu: "وہ پہلے ہی جا چکا تھا۔",
      question: "He _____ already _____.",
      options: ["had / left", "has / left", "did / leave", "was / leaving"],
      correct: 0,
      explanation: "Already کے ساتھ Past Perfect: had already left۔ He had already left صحیح ہے۔"
    },
    {
      id: 12,
      urdu: "کیا تم نے پہلے یہ فلم دیکھی تھی؟",
      question: "_____ you _____ this movie before?",
      options: ["Had / watched", "Have / watched", "Did / watch", "Were / watching"],
      correct: 0,
      explanation: "سوال میں Had + subject + 3rd form۔ Had you watched this movie before صحیح ہے۔"
    },
    {
      id: 13,
      urdu: "میں نے کھانا کھا لیا تھا اس سے پہلے کہ وہ آیا۔",
      question: "I _____ food before he came.",
      options: ["ate", "had eaten", "have eaten", "was eating"],
      correct: 1,
      explanation: "Before کے ساتھ پہلے والا کام Past Perfect میں۔ I had eaten food before he came صحیح ہے۔"
    },
    {
      id: 14,
      urdu: "وہ جا چکی تھی اس کے بعد میں پہنچا۔",
      question: "She _____ after I arrived.",
      options: ["left", "had left", "has left", "was leaving"],
      correct: 1,
      explanation: "After کے ساتھ پہلے والا کام Past Perfect میں۔ She had left after I arrived صحیح ہے۔"
    },
    {
      id: 15,
      urdu: "جب تک وہ آیا، میں کام ختم کر چکا تھا۔",
      question: "By the time he came, I _____ work.",
      options: ["finished", "had finished", "have finished", "was finishing"],
      correct: 1,
      explanation: "By the time کے ساتھ پہلے والا کام Past Perfect میں۔ I had finished work by the time he came صحیح ہے۔"
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
        <section className="py-10 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
                ← All Quizzes
              </Link>
              <span className="mx-2 text-white/60">|</span>
              <Link href="/tenses-in-urdu/past-perfect" className="text-white/80 hover:text-white transition duration-300">
                Past Perfect Tense
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Past Perfect Quiz - Results
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
      <section className="py-10 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
              ← All Quizzes
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/past-perfect" className="text-white/80 hover:text-white transition duration-300">
              Past Perfect Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Perfect Quiz
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            اپنی Past Perfect Tense کی مہارت کو پرکھیں
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
              href="/tenses-in-urdu/past-perfect"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
            <Link 
              href="/exercises-in-urdu/past-perfect-exercise-1"
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