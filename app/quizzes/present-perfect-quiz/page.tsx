"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

export default function PresentPerfectQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      id: 1,
      urdu: "میں نے لندن دیکھا ہے۔",
      question: "I _____ London.",
      options: ["have see", "have seen", "has seen", "saw"],
      correct: 1,
      explanation: "Present Perfect کا فارمولا: I + have + verb(3rd form)۔ I have seen London صحیح ہے۔"
    },
    {
      id: 2,
      urdu: "اس نے کبھی جاپان نہیں دیکھا۔",
      question: "He _____ never _____ Japan.",
      options: ["have / seen", "has / saw", "has / seen", "have / saw"],
      correct: 2,
      explanation: "He کے ساتھ has + never + verb(3rd form) استعمال ہوتا ہے۔ He has never seen Japan صحیح ہے۔"
    },
    {
      id: 3,
      urdu: "کیا تم نے کبھی تیراکی کی ہے؟",
      question: "_____ you ever _____?",
      options: ["Have / swim", "Has / swum", "Have / swum", "Did / swim"],
      correct: 2,
      explanation: "سوال میں Have + subject + ever + verb(3rd form)۔ Have you ever swum صحیح ہے۔"
    },
    {
      id: 4,
      urdu: "وہ کبھی امریکہ نہیں گئی۔",
      question: "She _____ never _____ to America.",
      options: ["have / been", "has / gone", "has / been", "have / gone"],
      correct: 2,
      explanation: "She کے ساتھ has + never + been (جانا اور واپس آنا)۔ She has never been to America صحیح ہے۔"
    },
    {
      id: 5,
      urdu: "ہم نے یہ فلم دیکھی ہے۔",
      question: "We _____ this movie.",
      options: ["have watch", "have watched", "has watched", "watched"],
      correct: 1,
      explanation: "We کے ساتھ have + verb(3rd form)۔ We have watched this movie صحیح ہے۔"
    },
    {
      id: 6,
      urdu: "اس نے وہ کتاب پڑھی ہے۔",
      question: "He _____ that book.",
      options: ["has read", "have read", "has readed", "read"],
      correct: 0,
      explanation: "He کے ساتھ has + verb(3rd form)۔ read کی تیسری فارم بھی read ہے۔ He has read that book صحیح ہے۔"
    },
    {
      id: 7,
      urdu: "کیا تم نے کبھی ہوائی جہاز اُڑایا ہے؟",
      question: "_____ you ever _____ a plane?",
      options: ["Have / flew", "Have / flown", "Has / flown", "Did / fly"],
      correct: 1,
      explanation: "Have + you + ever + verb(3rd form)۔ Have you ever flown a plane صحیح ہے۔"
    },
    {
      id: 8,
      urdu: "میں نے کبھی برف نہیں دیکھی۔",
      question: "I _____ never _____ snow.",
      options: ["have / saw", "have / seen", "has / seen", "did / see"],
      correct: 1,
      explanation: "I + have + never + verb(3rd form)۔ I have never seen snow صحیح ہے۔"
    },
    {
      id: 9,
      urdu: "وہ تین ممالک جا چکا ہے۔",
      question: "He _____ _____ to three countries.",
      options: ["has / been", "have / been", "has / gone", "have / gone"],
      correct: 0,
      explanation: "He has been to three countries (واپس آ گیا)۔ He has been to three countries صحیح ہے۔"
    },
    {
      id: 10,
      urdu: "کیا تم نے کبھی چینی کھانا کھایا ہے؟",
      question: "_____ you ever _____ Chinese food?",
      options: ["Have / ate", "Have / eaten", "Has / eaten", "Did / eat"],
      correct: 1,
      explanation: "Have + you + ever + verb(3rd form)۔ Have you ever eaten Chinese food صحیح ہے۔"
    },
    {
      id: 11,
      urdu: "میں نے ابھی کھانا کھایا ہے۔",
      question: "I _____ just _____ food.",
      options: ["have / eat", "have / eaten", "has / eaten", "have / ate"],
      correct: 1,
      explanation: "Just کا استعمال have/has کے بعد ہوتا ہے۔ I have just eaten food صحیح ہے۔"
    },
    {
      id: 12,
      urdu: "کیا تم نے ابھی تک خط لکھا ہے؟",
      question: "_____ you written the letter _____?",
      options: ["Have / yet", "Has / yet", "Have / already", "Did / yet"],
      correct: 0,
      explanation: "سوال میں yet کا استعمال آخر میں ہوتا ہے۔ Have you written the letter yet صحیح ہے۔"
    },
    {
      id: 13,
      urdu: "وہ پہلے ہی جا چکی ہے۔",
      question: "She _____ already _____.",
      options: ["has / went", "have / gone", "has / gone", "has / been"],
      correct: 2,
      explanation: "Already کا استعمال has کے بعد ہوتا ہے۔ She has already gone صحیح ہے۔"
    },
    {
      id: 14,
      urdu: "میں نے ابھی تک وہ فلم نہیں دیکھی۔",
      question: "I _____ not watched that movie _____.",
      options: ["have / yet", "has / yet", "have / already", "did / yet"],
      correct: 0,
      explanation: "منفی جملوں میں yet کا استعمال آخر میں ہوتا ہے۔ I have not watched that movie yet صحیح ہے۔"
    },
    {
      id: 15,
      urdu: "کیا تم نے پہلے ہی کھانا کھا لیا ہے؟",
      question: "_____ you already _____ food?",
      options: ["Have / ate", "Have / eaten", "Has / eaten", "Did / eat"],
      correct: 1,
      explanation: "Already کا استعمال have کے بعد ہوتا ہے۔ Have you already eaten food صحیح ہے۔"
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
        <section className="py-10 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
                ← All Quizzes
              </Link>
              <span className="mx-2 text-white/60">|</span>
              <Link href="/tenses-in-urdu/present-perfect" className="text-white/80 hover:text-white transition duration-300">
                Present Perfect Tense
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Present Perfect Quiz - Results
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
      <section className="py-10 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
              ← All Quizzes
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/present-perfect" className="text-white/80 hover:text-white transition duration-300">
              Present Perfect Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Perfect Quiz
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            اپنی Present Perfect Tense کی مہارت کو پرکھیں
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
              href="/tenses-in-urdu/present-perfect"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
            <Link 
              href="/exercises-in-urdu/present-perfect-exercise-1"
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