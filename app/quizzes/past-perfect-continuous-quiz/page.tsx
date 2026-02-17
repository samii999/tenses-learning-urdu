"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

export default function PastPerfectContinuousQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      id: 1,
      urdu: "میں دو گھنٹے سے پڑھ رہا تھا جب وہ آیا۔",
      question: "I _____ for two hours when he came.",
      options: ["was studying", "had studied", "had been studying", "have been studying"],
      correct: 2,
      explanation: "Past Perfect Continuous: had + been + verb(ing)۔ I had been studying for two hours when he came صحیح ہے۔"
    },
    {
      id: 2,
      urdu: "وہ صبح سے کام کر رہی تھی جب میں پہنچا۔",
      question: "She _____ since morning when I arrived.",
      options: ["was working", "had worked", "had been working", "has been working"],
      correct: 2,
      explanation: "She کے ساتھ had been + verb(ing)۔ She had been working since morning when I arrived صحیح ہے۔"
    },
    {
      id: 3,
      urdu: "وہ تین گھنٹے سے انتظار کر رہے تھے جب بس آئی۔",
      question: "They _____ for three hours when the bus came.",
      options: ["were waiting", "had waited", "had been waiting", "have been waiting"],
      correct: 2,
      explanation: "They کے ساتھ had been + verb(ing)۔ They had been waiting for three hours when the bus came صحیح ہے۔"
    },
    {
      id: 4,
      urdu: "ہم 2015 سے یہاں رہ رہے تھے جب انہوں نے نیا گھر خریدا۔",
      question: "We _____ here since 2015 when they bought a new house.",
      options: ["were living", "had lived", "had been living", "have been living"],
      correct: 2,
      explanation: "We کے ساتھ had been + verb(ing)۔ We had been living here since 2015 when they bought a new house صحیح ہے۔"
    },
    {
      id: 5,
      urdu: "بارش دو گھنٹے سے ہو رہی تھی جب ہم گھر پہنچے۔",
      question: "It _____ for two hours when we reached home.",
      options: ["was raining", "had rained", "had been raining", "has been raining"],
      correct: 2,
      explanation: "It کے ساتھ had been + verb(ing)۔ It had been raining for two hours when we reached home صحیح ہے۔"
    },
    {
      id: 6,
      urdu: "وہ دس منٹ سے دوڑ رہا تھا جب اسے تھکن ہوئی۔",
      question: "He _____ for ten minutes when he got tired.",
      options: ["was running", "had run", "had been running", "has been running"],
      correct: 2,
      explanation: "He کے ساتھ had been + verb(ing)۔ He had been running for ten minutes when he got tired صحیح ہے۔"
    },
    {
      id: 7,
      urdu: "وہ کافی دیر سے سو رہی تھی جب اس نے فون کیا۔",
      question: "She _____ for a long time when he called.",
      options: ["was sleeping", "had slept", "had been sleeping", "has been sleeping"],
      correct: 2,
      explanation: "She کے ساتھ had been + verb(ing)۔ She had been sleeping for a long time when he called صحیح ہے۔"
    },
    {
      id: 8,
      urdu: "بچے تین گھنٹے سے کھیل رہے تھے جب اندھیرا ہوا۔",
      question: "The children _____ for three hours when it got dark.",
      options: ["were playing", "had played", "had been playing", "have been playing"],
      correct: 2,
      explanation: "The children (They) کے ساتھ had been + verb(ing)۔ The children had been playing for three hours when it got dark صحیح ہے۔"
    },
    {
      id: 9,
      urdu: "میں ایک گھنٹے سے کھانا پکا رہا تھا جب وہ آئے۔",
      question: "I _____ food for an hour when they came.",
      options: ["was cooking", "had cooked", "had been cooking", "have been cooking"],
      correct: 2,
      explanation: "I کے ساتھ had been + verb(ing)۔ I had been cooking food for an hour when they came صحیح ہے۔"
    },
    {
      id: 10,
      urdu: "وہ 2018 سے انگریزی سیکھ رہی تھی جب اسے نوکری ملی۔",
      question: "She _____ English since 2018 when she got a job.",
      options: ["was learning", "had learned", "had been learning", "has been learning"],
      correct: 2,
      explanation: "She کے ساتھ had been + verb(ing)۔ She had been learning English since 2018 when she got a job صحیح ہے۔"
    },
    {
      id: 11,
      urdu: "وہ شام سے ٹی وی دیکھ رہے تھے جب لائٹ چلی گئی۔",
      question: "They _____ TV since evening when the light went out.",
      options: ["were watching", "had watched", "had been watching", "have been watching"],
      correct: 2,
      explanation: "They کے ساتھ had been + verb(ing)۔ They had been watching TV since evening when the light went out صحیح ہے۔"
    },
    {
      id: 12,
      urdu: "کیا تم دو گھنٹے سے انتظار کر رہے تھے جب وہ آیا؟",
      question: "_____ you _____ for two hours when he came?",
      options: ["Had / been waiting", "Were / waiting", "Had / waited", "Have / been waiting"],
      correct: 0,
      explanation: "سوال میں Had + subject + been + verb(ing)۔ Had you been waiting for two hours when he came صحیح ہے۔"
    },
    {
      id: 13,
      urdu: "وہ تھکا ہوا تھا کیونکہ وہ دو گھنٹے سے دوڑ رہا تھا۔",
      question: "He was tired because he _____ for two hours.",
      options: ["ran", "had run", "had been running", "was running"],
      correct: 2,
      explanation: "وجہ بتانے کے لیے Past Perfect Continuous۔ He had been running for two hours صحیح ہے۔"
    },
    {
      id: 14,
      urdu: "اس کی آنکھیں سرخ تھیں کیونکہ وہ رو رہی تھی۔",
      question: "Her eyes were red because she _____.",
      options: ["cried", "had cried", "had been crying", "was crying"],
      correct: 2,
      explanation: "وجہ بتانے کے لیے Past Perfect Continuous۔ She had been crying صحیح ہے۔"
    },
    {
      id: 15,
      urdu: "وہ بیمار ہو گیا کیونکہ وہ دھوپ میں کھیل رہا تھا۔",
      question: "He got sick because he _____ in the sun.",
      options: ["played", "had played", "had been playing", "was playing"],
      correct: 2,
      explanation: "وجہ بتانے کے لیے Past Perfect Continuous۔ He had been playing in the sun صحیح ہے۔"
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
        <section className="py-10 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
                ← All Quizzes
              </Link>
              <span className="mx-2 text-white/60">|</span>
              <Link href="/tenses/past-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
                Past Perfect Continuous Tense
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Past Perfect Continuous Quiz - Results
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
              
              <div className="text-6xl font-bold text-pink-600 mb-4">
                {score} / {questions.length}
              </div>
              
              <p className="text-xl text-gray-700 mb-8">
                آپ نے {percentage.toFixed(0)}% سوالات درست کیے
              </p>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
                <div 
                  className="bg-pink-600 h-4 rounded-full transition-all duration-500"
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
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
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
      <section className="py-10 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
              ← All Quizzes
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/past-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
              Past Perfect Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Perfect Continuous Quiz
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            اپنی Past Perfect Continuous Tense کی مہارت کو پرکھیں
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
              <span className="text-pink-600 font-bold">
                Score: {score}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-pink-600 h-2 rounded-full transition-all duration-300"
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
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-pink-300 hover:bg-pink-50'
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
                      ? 'bg-pink-600 hover:bg-pink-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Check Answer
                  <FaArrowRight className="ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleContinue}
                  className="flex items-center justify-center px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg transition duration-300"
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
              href="/tenses/past-perfect-continuous"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
            <Link 
              href="/exercises/past-perfect-continuous-exercise-1"
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}