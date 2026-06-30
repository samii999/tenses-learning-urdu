"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

export default function FutureContinuousQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      id: 1,
      urdu: "میں کل شام 7 بجے پڑھ رہا ہوں گا۔",
      question: "I _____ at 7 pm tomorrow.",
      options: ["will study", "will be studying", "am studying", "will have studied"],
      correct: 1,
      explanation: "Future Continuous کا فارمولا: will + be + verb(ing)۔ I will be studying at 7 pm tomorrow صحیح ہے۔"
    },
    {
      id: 2,
      urdu: "وہ کل اس وقت سو رہی ہو گی۔",
      question: "She _____ at that time tomorrow.",
      options: ["will sleep", "will be sleeping", "is sleeping", "will have slept"],
      correct: 1,
      explanation: "She will be sleeping at that time tomorrow (will be + verb-ing) صحیح ہے۔"
    },
    {
      id: 3,
      urdu: "ہم کل سارا دن کھیل رہے ہوں گے۔",
      question: "We _____ all day tomorrow.",
      options: ["will play", "will be playing", "are playing", "will have played"],
      correct: 1,
      explanation: "We will be playing all day tomorrow (will be + verb-ing) صحیح ہے۔"
    },
    {
      id: 4,
      urdu: "وہ کل شام 8 بجے آ رہے ہوں گے۔",
      question: "They _____ at 8 pm tomorrow.",
      options: ["will come", "will be coming", "are coming", "will have come"],
      correct: 1,
      explanation: "They will be coming at 8 pm tomorrow (will be + verb-ing) صحیح ہے۔"
    },
    {
      id: 5,
      urdu: "بارش کل سارا دن ہو رہی ہو گی۔",
      question: "It _____ all day tomorrow.",
      options: ["will rain", "will be raining", "is raining", "will have rained"],
      correct: 1,
      explanation: "It will be raining all day tomorrow (will be + verb-ing) صحیح ہے۔"
    },
    {
      id: 6,
      urdu: "میں کل صبح 6 بجے جاگ رہا ہوں گا۔",
      question: "I _____ up at 6 am tomorrow.",
      options: ["will wake", "will be waking", "am waking", "will have woken"],
      correct: 1,
      explanation: "I will be waking up at 6 am tomorrow (will be + verb-ing) صحیح ہے۔"
    },
    {
      id: 7,
      urdu: "وہ کل اس وقت کام کر رہے ہوں گے۔",
      question: "They _____ at that time tomorrow.",
      options: ["will work", "will be working", "are working", "will have worked"],
      correct: 1,
      explanation: "They will be working at that time tomorrow (will be + verb-ing) صحیح ہے۔"
    },
    {
      id: 8,
      urdu: "کیا تم کل شام 7 بجے پڑھ رہے ہو گے؟",
      question: "_____ you _____ at 7 pm tomorrow?",
      options: ["Will / study", "Will / be studying", "Are / studying", "Will / have studied"],
      correct: 1,
      explanation: "سوال میں Will + subject + be + verb(ing)۔ Will you be studying at 7 pm tomorrow صحیح ہے۔"
    },
    {
      id: 9,
      urdu: "کیا وہ کل اس وقت سو رہی ہو گی؟",
      question: "_____ she _____ at that time tomorrow?",
      options: ["Will / sleep", "Will / be sleeping", "Is / sleeping", "Will / have slept"],
      correct: 1,
      explanation: "Will she be sleeping at that time tomorrow صحیح ہے۔"
    },
    {
      id: 10,
      urdu: "میں کل اس وقت کھانا نہیں کھا رہا ہوں گا۔",
      question: "I _____ at that time tomorrow.",
      options: ["will not eat", "will not be eating", "am not eating", "will not have eaten"],
      correct: 1,
      explanation: "منفی میں will not be + verb(ing)۔ I will not be eating at that time tomorrow صحیح ہے۔"
    },
    {
      id: 11,
      urdu: "وہ کل شام کو ٹی وی نہیں دیکھ رہے ہوں گے۔",
      question: "They _____ TV tomorrow evening.",
      options: ["will not watch", "will not be watching", "are not watching", "will not have watched"],
      correct: 1,
      explanation: "They will not be watching TV tomorrow evening صحیح ہے۔"
    },
    {
      id: 12,
      urdu: "تم کل شام 7 بجے کیا کر رہے ہو گے؟",
      question: "What _____ you _____ at 7 pm tomorrow?",
      options: ["will / do", "will / be doing", "are / doing", "will / have done"],
      correct: 1,
      explanation: "WH سوال میں What will you be doing at 7 pm tomorrow صحیح ہے۔"
    },
    {
      id: 13,
      urdu: "میں پڑھ رہا ہوں گا جبکہ وہ سو رہی ہو گی۔",
      question: "I _____ while she _____.",
      options: ["will study / will sleep", "will be studying / will be sleeping", "am studying / is sleeping", "will have studied / will have slept"],
      correct: 1,
      explanation: "دونوں کام ایک ساتھ جاری ہوں گے، اس لیے دونوں Future Continuous میں۔ I will be studying while she will be sleeping صحیح ہے۔"
    },
    {
      id: 14,
      urdu: "وہ کھانا پکا رہی ہو گی جبکہ میں کام کر رہا ہوں گا۔",
      question: "She _____ while I _____.",
      options: ["will cook / will work", "will be cooking / will be working", "is cooking / am working", "will have cooked / will have worked"],
      correct: 1,
      explanation: "She will be cooking while I will be working (دونوں Future Continuous) صحیح ہے۔"
    },
    {
      id: 15,
      urdu: "وہ نہیں سو رہے ہوں گے جبکہ ہم کام کر رہے ہوں گے۔",
      question: "They _____ while we _____.",
      options: ["will not sleep / will work", "will not be sleeping / will be working", "are not sleeping / are working", "will not have slept / will have worked"],
      correct: 1,
      explanation: "منفی Future Continuous کے ساتھ مثبت Future Continuous۔ They will not be sleeping while we will be working صحیح ہے۔"
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
        <section className="py-10 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
                ← All Quizzes
              </Link>
              <span className="mx-2 text-white/60">|</span>
              <Link href="/tenses-in-urdu/future-continuous" className="text-white/80 hover:text-white transition duration-300">
                Future Continuous Tense
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Future Continuous Quiz - Results
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
      <section className="py-10 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
              ← All Quizzes
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/future-continuous" className="text-white/80 hover:text-white transition duration-300">
              Future Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Future Continuous Quiz
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            اپنی Future Continuous Tense کی مہارت کو پرکھیں
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
                  className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg transition duration-300"
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
              href="/tenses-in-urdu/future-continuous"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
            <Link 
              href="/exercises-in-urdu/future-continuous-exercise-1"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}