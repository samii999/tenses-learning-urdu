"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

export default function PresentPerfectContinuousQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      id: 1,
      urdu: "میں دو گھنٹے سے پڑھ رہا ہوں۔",
      question: "I _____ for two hours.",
      options: ["have been studying", "have studied", "am studying", "has been studying"],
      correct: 0,
      explanation: "Present Perfect Continuous کا فارمولا: have/has + been + verb(ing)۔ I have been studying for two hours صحیح ہے۔"
    },
    {
      id: 2,
      urdu: "وہ صبح سے کام کر رہی ہے۔",
      question: "She _____ since morning.",
      options: ["has worked", "has been working", "have been working", "is working"],
      correct: 1,
      explanation: "She کے ساتھ has been + verb(ing) استعمال ہوتا ہے۔ She has been working since morning صحیح ہے۔"
    },
    {
      id: 3,
      urdu: "ہم 2015 سے یہاں رہ رہے ہیں۔",
      question: "We _____ here since 2015.",
      options: ["have been living", "have lived", "are living", "has been living"],
      correct: 0,
      explanation: "We کے ساتھ have been + verb(ing) استعمال ہوتا ہے۔ We have been living here since 2015 صحیح ہے۔"
    },
    {
      id: 4,
      urdu: "وہ تین گھنٹے سے انتظار کر رہا ہے۔",
      question: "He _____ for three hours.",
      options: ["has waited", "has been waiting", "have been waiting", "is waiting"],
      correct: 1,
      explanation: "He کے ساتھ has been + verb(ing) استعمال ہوتا ہے۔ He has been waiting for three hours صحیح ہے۔"
    },
    {
      id: 5,
      urdu: "بچے شام سے کھیل رہے ہیں۔",
      question: "The children _____ since evening.",
      options: ["have played", "have been playing", "are playing", "has been playing"],
      correct: 1,
      explanation: "The children (They) کے ساتھ have been + verb(ing) استعمال ہوتا ہے۔ The children have been playing since evening صحیح ہے۔"
    },
    {
      id: 6,
      urdu: "میں دس منٹ سے آپ کا انتظار کر رہا ہوں۔",
      question: "I _____ for you for ten minutes.",
      options: ["have waited", "have been waiting", "am waiting", "has been waiting"],
      correct: 1,
      explanation: "I کے ساتھ have been + verb(ing) استعمال ہوتا ہے۔ I have been waiting for you for ten minutes صحیح ہے۔"
    },
    {
      id: 7,
      urdu: "وہ 2020 سے انگریزی سیکھ رہی ہے۔",
      question: "She _____ English since 2020.",
      options: ["has learned", "has been learning", "have been learning", "is learning"],
      correct: 1,
      explanation: "She کے ساتھ has been + verb(ing) استعمال ہوتا ہے۔ She has been learning English since 2020 صحیح ہے۔"
    },
    {
      id: 8,
      urdu: "بارش دو گھنٹے سے ہو رہی ہے۔",
      question: "It _____ for two hours.",
      options: ["has rained", "has been raining", "is raining", "have been raining"],
      correct: 1,
      explanation: "It کے ساتھ has been + verb(ing) استعمال ہوتا ہے۔ It has been raining for two hours صحیح ہے۔"
    },
    {
      id: 9,
      urdu: "وہ کافی دیر سے سو رہا ہے۔",
      question: "He _____ for a long time.",
      options: ["has slept", "has been sleeping", "is sleeping", "have been sleeping"],
      correct: 1,
      explanation: "He کے ساتھ has been + verb(ing) استعمال ہوتا ہے۔ He has been sleeping for a long time صحیح ہے۔"
    },
    {
      id: 10,
      urdu: "کیا تم دو گھنٹے سے پڑھ رہے ہو؟",
      question: "_____ you _____ for two hours?",
      options: ["Have / been studying", "Have / studied", "Has / been studying", "Are / studying"],
      correct: 0,
      explanation: "سوال میں Have + subject + been + verb(ing)۔ Have you been studying for two hours صحیح ہے۔"
    },
    {
      id: 11,
      urdu: "وہ صبح سے کام نہیں کر رہی۔",
      question: "She _____ since morning.",
      options: ["has not worked", "has not been working", "have not been working", "is not working"],
      correct: 1,
      explanation: "منفی میں has not been + verb(ing) استعمال ہوتا ہے۔ She has not been working since morning صحیح ہے۔"
    },
    {
      id: 12,
      urdu: "تم کب سے انگریزی سیکھ رہے ہو؟",
      question: "How long _____ you _____ English?",
      options: ["have / been learning", "have / learned", "has / been learning", "are / learning"],
      correct: 0,
      explanation: "How long کے ساتھ have + subject + been + verb(ing)۔ How long have you been learning English صحیح ہے۔"
    },
    {
      id: 13,
      urdu: "وہ تھکا ہوا ہے کیونکہ وہ دو گھنٹے سے دوڑ رہا ہے۔",
      question: "He is tired because he _____ for two hours.",
      options: ["has run", "has been running", "ran", "was running"],
      correct: 1,
      explanation: "وجہ بتانے کے لیے Present Perfect Continuous استعمال ہوتا ہے۔ He has been running for two hours صحیح ہے۔"
    },
    {
      id: 14,
      urdu: "اس کی آنکھیں سرخ ہیں کیونکہ وہ رو رہی ہے۔",
      question: "Her eyes are red because she _____.",
      options: ["has cried", "has been crying", "cried", "was crying"],
      correct: 1,
      explanation: "وجہ بتانے کے لیے Present Perfect Continuous استعمال ہوتا ہے۔ She has been crying صحیح ہے۔"
    },
    {
      id: 15,
      urdu: "وہ بیمار ہے کیونکہ وہ دھوپ میں کھیل رہا ہے۔",
      question: "He is sick because he _____ in the sun.",
      options: ["has played", "has been playing", "played", "was playing"],
      correct: 1,
      explanation: "وجہ بتانے کے لیے Present Perfect Continuous استعمال ہوتا ہے۔ He has been playing in the sun صحیح ہے۔"
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
              <Link href="/tenses-in-urdu/present-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
                Present Perfect Continuous Tense
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Present Perfect Continuous Quiz - Results
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
           <Link href="/tenses-in-urdu/present-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
              Present Perfect Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Perfect Continuous Quiz
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            اپنی Present Perfect Continuous Tense کی مہارت کو پرکھیں
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
              href="/tenses-in-urdu/present-perfect-continuous"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
            <Link 
              href="/exercises-in-urdu/present-perfect-continuous-exercise-1"
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