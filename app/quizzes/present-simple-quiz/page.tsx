"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

export default function PresentSimpleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      id: 1,
      urdu: "وہ روزانہ سکول جاتا ہے۔",
      question: "He _____ to school daily.",
      options: ["go", "goes", "going", "is go"],
      correct: 1,
      explanation: "He, She, It کے ساتھ verb میں 's' یا 'es' لگتا ہے۔ He goes صحیح ہے۔"
    },
    {
      id: 2,
      urdu: "میں انگریزی بولتا ہوں۔",
      question: "I _____ English.",
      options: ["speak", "speaks", "am speak", "speaking"],
      correct: 0,
      explanation: "I کے ساتھ verb بغیر 's' کے آتی ہے۔ I speak صحیح ہے۔"
    },
    {
      id: 3,
      urdu: "وہ کتاب نہیں پڑھتی۔",
      question: "She _____ read books.",
      options: ["do not", "does not", "is not", "are not"],
      correct: 1,
      explanation: "منفی جملوں میں She کے ساتھ does not استعمال ہوتا ہے۔ She does not read صحیح ہے۔"
    },
    {
      id: 4,
      urdu: "کیا تم فٹبال کھیلتے ہو؟",
      question: "_____ you play football?",
      options: ["Do", "Does", "Are", "Is"],
      correct: 0,
      explanation: "You کے ساتھ سوال میں Do استعمال ہوتا ہے۔ Do you play صحیح ہے۔"
    },
    {
      id: 5,
      urdu: "سورج مشرق سے نکلتا ہے۔",
      question: "The sun _____ in the east.",
      options: ["rise", "rises", "is rise", "are rise"],
      correct: 1,
      explanation: "The sun (It) کے ساتھ verb میں 's' لگتا ہے۔ The sun rises صحیح ہے۔"
    },
    {
      id: 6,
      urdu: "وہ کہاں رہتا ہے؟",
      question: "Where _____ he live?",
      options: ["do", "does", "is", "are"],
      correct: 1,
      explanation: "He کے ساتھ سوال میں Does استعمال ہوتا ہے۔ Where does he live صحیح ہے۔"
    },
    {
      id: 7,
      urdu: "وہ روزانہ ورزش نہیں کرتے۔",
      question: "They _____ exercise daily.",
      options: ["do not", "does not", "is not", "are not"],
      correct: 0,
      explanation: "They کے ساتھ منفی میں do not استعمال ہوتا ہے۔ They do not exercise صحیح ہے۔"
    },
    {
      id: 8,
      urdu: "میرا بھائی ڈاکٹر ہے۔",
      question: "My brother _____ a doctor.",
      options: ["am", "is", "are", "be"],
      correct: 1,
      explanation: "My brother (He) کے ساتھ is استعمال ہوتا ہے۔ My brother is a doctor صحیح ہے۔"
    },
    {
      id: 9,
      urdu: "تم کیا کرتے ہو؟",
      question: "What _____ you do?",
      options: ["do", "does", "are", "is"],
      correct: 0,
      explanation: "You کے ساتھ سوال میں Do استعمال ہوتا ہے۔ What do you do صحیح ہے۔"
    },
    {
      id: 10,
      urdu: "وہ پانی پیتے ہیں۔",
      question: "They _____ water.",
      options: ["drink", "drinks", "are drink", "is drink"],
      correct: 0,
      explanation: "They کے ساتھ verb بغیر 's' کے آتی ہے۔ They drink صحیح ہے۔"
    },
    {
      id: 11,
      urdu: "وہ صبح سویرے نہیں اٹھتا۔",
      question: "He _____ wake up early.",
      options: ["do not", "does not", "is not", "are not"],
      correct: 1,
      explanation: "He کے ساتھ منفی میں does not استعمال ہوتا ہے۔ He does not wake up صحیح ہے۔"
    },
    {
      id: 12,
      urdu: "کیا وہ انگریزی بولتی ہے؟",
      question: "_____ she speak English?",
      options: ["Do", "Does", "Is", "Are"],
      correct: 1,
      explanation: "She کے ساتھ سوال میں Does استعمال ہوتا ہے۔ Does she speak English صحیح ہے۔"
    },
    {
      id: 13,
      urdu: "ہم ہر روز کام کرتے ہیں۔",
      question: "We _____ every day.",
      options: ["work", "works", "are work", "is work"],
      correct: 0,
      explanation: "We کے ساتھ verb بغیر 's' کے آتی ہے۔ We work صحیح ہے۔"
    },
    {
      id: 14,
      urdu: "وہ کہاں رہتی ہے؟",
      question: "Where _____ she live?",
      options: ["do", "does", "is", "are"],
      correct: 1,
      explanation: "She کے ساتھ سوال میں Does استعمال ہوتا ہے۔ Where does she live صحیح ہے۔"
    },
    {
      id: 15,
      urdu: "بچے پارک میں کھیلتے ہیں۔",
      question: "The children _____ in the park.",
      options: ["play", "plays", "is play", "are play"],
      correct: 0,
      explanation: "The children (They) کے ساتھ verb بغیر 's' کے آتی ہے۔ The children play صحیح ہے۔"
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
              <Link href="/tenses/present-simple" className="text-white/80 hover:text-white transition duration-300">
                Present Simple Tense
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Present Simple Quiz - Results
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
      <section className="py-10 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
              ← All Quizzes
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/present-simple" className="text-white/80 hover:text-white transition duration-300">
              Present Simple Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Simple Quiz
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            اپنی Present Simple Tense کی مہارت کو پرکھیں
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
                  className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300"
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
              href="/tenses/present-simple"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
            <Link 
              href="/exercises/present-simple-exercise-1"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}