"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

export default function PastContinuousQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const questions = [
    {
      id: 1,
      urdu: "میں سو رہا تھا جب گھنٹی بجی۔",
      question: "I _____ when the bell rang.",
      options: ["was sleeping", "were sleeping", "slept", "have been sleeping"],
      correct: 0,
      explanation: "Past Continuous کا فارمولا: was/were + verb(ing)۔ I کے ساتھ was sleeping استعمال ہوتا ہے۔"
    },
    {
      id: 2,
      urdu: "وہ پڑھ رہی تھی جب میں آیا۔",
      question: "She _____ when I came.",
      options: ["was studying", "were studying", "studied", "has been studying"],
      correct: 0,
      explanation: "She کے ساتھ was + verb(ing) استعمال ہوتا ہے۔ She was studying when I came صحیح ہے۔"
    },
    {
      id: 3,
      urdu: "وہ فٹبال کھیل رہے تھے جب بارش شروع ہوئی۔",
      question: "They _____ football when it started raining.",
      options: ["was playing", "were playing", "played", "have been playing"],
      correct: 1,
      explanation: "They کے ساتھ were + verb(ing) استعمال ہوتا ہے۔ They were playing football صحیح ہے۔"
    },
    {
      id: 4,
      urdu: "ہم کھانا کھا رہے تھے جب اس نے فون کیا۔",
      question: "We _____ food when he called.",
      options: ["was eating", "were eating", "ate", "have been eating"],
      correct: 1,
      explanation: "We کے ساتھ were + verb(ing) استعمال ہوتا ہے۔ We were eating food صحیح ہے۔"
    },
    {
      id: 5,
      urdu: "میں ٹی وی دیکھ رہا تھا جب لائٹ چلی گئی۔",
      question: "I _____ TV when the light went out.",
      options: ["was watching", "were watching", "watched", "have been watching"],
      correct: 0,
      explanation: "I کے ساتھ was watching استعمال ہوتا ہے۔ I was watching TV when the light went out صحیح ہے۔"
    },
    {
      id: 6,
      urdu: "وہ گاڑی چلا رہا تھا جب حادثہ ہوا۔",
      question: "He _____ when the accident happened.",
      options: ["was driving", "were driving", "drove", "has been driving"],
      correct: 0,
      explanation: "He کے ساتھ was driving استعمال ہوتا ہے۔ He was driving when the accident happened صحیح ہے۔"
    },
    {
      id: 7,
      urdu: "وہ سوتے نہیں تھے جب میں نے انہیں فون کیا۔",
      question: "They _____ when I called them.",
      options: ["was not sleeping", "were not sleeping", "did not sleep", "have not been sleeping"],
      correct: 1,
      explanation: "منفی جملوں میں were not + verb(ing) استعمال ہوتا ہے۔ They were not sleeping صحیح ہے۔"
    },
    {
      id: 8,
      urdu: "کیا تم پڑھ رہے تھے جب وہ آیا؟",
      question: "_____ you _____ when he came?",
      options: ["Was / studying", "Were / studying", "Did / study", "Have / been studying"],
      correct: 1,
      explanation: "سوال میں Were + you + verb(ing) استعمال ہوتا ہے۔ Were you studying when he came صحیح ہے۔"
    },
    {
      id: 9,
      urdu: "میں سڑک پر چل رہا تھا جب اسے دیکھا۔",
      question: "I _____ on the road when I saw him.",
      options: ["was walking", "were walking", "walked", "have been walking"],
      correct: 0,
      explanation: "I کے ساتھ was walking استعمال ہوتا ہے۔ I was walking on the road when I saw him صحیح ہے۔"
    },
    {
      id: 10,
      urdu: "وہ خط لکھ رہی تھی جب قلم ختم ہو گیا۔",
      question: "She _____ a letter when the pen ran out.",
      options: ["was writing", "were writing", "wrote", "has been writing"],
      correct: 0,
      explanation: "She کے ساتھ was writing استعمال ہوتا ہے۔ She was writing a letter when the pen ran out صحیح ہے۔"
    },
    {
      id: 11,
      urdu: "بچے پارک میں کھیل رہے تھے جب اندھیرا ہوا۔",
      question: "The children _____ in the park when it got dark.",
      options: ["was playing", "were playing", "played", "have been playing"],
      correct: 1,
      explanation: "The children (They) کے ساتھ were playing استعمال ہوتا ہے۔ The children were playing صحیح ہے۔"
    },
    {
      id: 12,
      urdu: "کیا وہ سو رہا تھا جب تم آئے؟",
      question: "_____ he _____ when you came?",
      options: ["Was / sleeping", "Were / sleeping", "Did / sleep", "Has / been sleeping"],
      correct: 0,
      explanation: "He کے ساتھ سوال میں Was + subject + verb(ing)۔ Was he sleeping when you came صحیح ہے۔"
    },
    {
      id: 13,
      urdu: "میں پڑھ رہا تھا جبکہ وہ سو رہی تھی۔",
      question: "I _____ while she _____.",
      options: ["was studying / was sleeping", "studied / slept", "was studying / slept", "studied / was sleeping"],
      correct: 0,
      explanation: "جب دو کام ایک ساتھ جاری ہوں تو دونوں Past Continuous میں ہوتے ہیں۔ I was studying while she was sleeping صحیح ہے۔"
    },
    {
      id: 14,
      urdu: "وہ کھانا پکا رہی تھی جبکہ میں کام کر رہا تھا۔",
      question: "She _____ while I _____.",
      options: ["cooked / worked", "was cooking / was working", "was cooking / worked", "cooked / was working"],
      correct: 1,
      explanation: "دونوں کام ایک ساتھ جاری تھے، اس لیے دونوں Past Continuous میں۔ She was cooking while I was working صحیح ہے۔"
    },
    {
      id: 15,
      urdu: "وہ نہیں سو رہے تھے جبکہ ہم کام کر رہے تھے۔",
      question: "They _____ while we _____.",
      options: ["did not sleep / worked", "were not sleeping / were working", "were not sleeping / worked", "did not sleep / were working"],
      correct: 1,
      explanation: "منفی Past Continuous کے ساتھ مثبت Past Continuous۔ They were not sleeping while we were working صحیح ہے۔"
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
        <section className="py-10 px-4 bg-gradient-to-r from-teal-500 to-green-500 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
                ← All Quizzes
              </Link>
              <span className="mx-2 text-white/60">|</span>
              <Link href="/tenses-in-urdu/past-continuous" className="text-white/80 hover:text-white transition duration-300">
                Past Continuous Tense
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Past Continuous Quiz - Results
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
              
              <div className="text-6xl font-bold text-teal-600 mb-4">
                {score} / {questions.length}
              </div>
              
              <p className="text-xl text-gray-700 mb-8">
                آپ نے {percentage.toFixed(0)}% سوالات درست کیے
              </p>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
                <div 
                  className="bg-teal-600 h-4 rounded-full transition-all duration-500"
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
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
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
      <section className="py-10 px-4 bg-gradient-to-r from-teal-500 to-green-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/quizzes" className="text-white/80 hover:text-white transition duration-300">
              ← All Quizzes
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/past-continuous" className="text-white/80 hover:text-white transition duration-300">
              Past Continuous Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Continuous Quiz
          </h1>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            اپنی Past Continuous Tense کی مہارت کو پرکھیں
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
              <span className="text-teal-600 font-bold">
                Score: {score}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-teal-600 h-2 rounded-full transition-all duration-300"
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
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50'
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
                      ? 'bg-teal-600 hover:bg-teal-700'
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
              href="/tenses-in-urdu/past-continuous"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
            <Link 
              href="/exercises-in-urdu/past-continuous-exercise-1"
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