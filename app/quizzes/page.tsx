import Link from 'next/link';
import { FaQuestionCircle, FaClock, FaCalendarAlt, FaRocket, FaTrophy, FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function QuizzesPage() {
  const quizCategories = [
    {
      title: "Present Tenses",
      icon: <FaClock className="text-blue-600 text-3xl" />,
      color: "blue",
      description: "Test your understanding of present tenses",
      quizzes: [
        { name: "Present Simple Quiz", href: "/quizzes/present-simple-quiz", questions: 15, difficulty: "Beginner", time: "10 min" },
        { name: "Present Continuous Quiz", href: "/quizzes/present-continuous-quiz", questions: 15, difficulty: "Beginner", time: "10 min" },
        { name: "Present Perfect Quiz", href: "/quizzes/present-perfect-quiz", questions: 20, difficulty: "Intermediate", time: "15 min" },
        { name: "Present Perfect Continuous Quiz", href: "/quizzes/present-perfect-continuous-quiz", questions: 20, difficulty: "Intermediate", time: "15 min" }
      ]
    },
    {
      title: "Past Tenses",
      icon: <FaCalendarAlt className="text-green-600 text-3xl" />,
      color: "green",
      description: "Test your understanding of past tenses",
      quizzes: [
        { name: "Past Simple Quiz", href: "/quizzes/past-simple-quiz", questions: 15, difficulty: "Beginner", time: "10 min" },
        { name: "Past Continuous Quiz", href: "/quizzes/past-continuous-quiz", questions: 15, difficulty: "Intermediate", time: "10 min" },
        { name: "Past Perfect Quiz", href: "/quizzes/past-perfect-quiz", questions: 20, difficulty: "Intermediate", time: "15 min" },
        { name: "Past Perfect Continuous Quiz", href: "/quizzes/past-perfect-continuous-quiz", questions: 20, difficulty: "Advanced", time: "15 min" }
      ]
    },
    {
      title: "Future Tenses",
      icon: <FaRocket className="text-purple-600 text-3xl" />,
      color: "purple",
      description: "Test your understanding of future tenses",
      quizzes: [
        { name: "Future Simple Quiz", href: "/quizzes/future-simple-quiz", questions: 15, difficulty: "Beginner", time: "10 min" },
        { name: "Future Continuous Quiz", href: "/quizzes/future-continuous-quiz", questions: 15, difficulty: "Intermediate", time: "10 min" },
        { name: "Future Perfect Quiz", href: "/quizzes/future-perfect-quiz", questions: 20, difficulty: "Advanced", time: "15 min" },
        { name: "Future Perfect Continuous Quiz", href: "/quizzes/future-perfect-continuous-quiz", questions: 20, difficulty: "Advanced", time: "15 min" }
      ]
    }
  ];

  const featuredQuizzes = [
    {
      title: "Present Simple vs Present Continuous",
      href: "/quizzes/present-simple-vs-continuous",
      questions: 20,
      difficulty: "Intermediate",
      description: "Choose between present simple and continuous"
    },
    {
      title: "Past Tenses Challenge",
      href: "/quizzes/past-tenses-mixed",
      questions: 25,
      difficulty: "Advanced",
      description: "Mixed past tenses quiz"
    },
    {
      title: "Future Forms",
      href: "/quizzes/future-forms",
      questions: 20,
      difficulty: "Intermediate",
      description: "Will, going to, and future continuous"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaQuestionCircle className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">
              English Tenses Quizzes
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
            Test your knowledge of English tenses with interactive quizzes designed for Urdu speakers
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/20 px-4 py-2 rounded-full">12 Tenses</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">200+ Questions</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Instant Results</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Urdu Explanations</span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="bg-purple-100 p-4 rounded-full">
                <FaTrophy className="text-purple-600 text-4xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4" dir="rtl">
                  اپنی انگلش ٹیسٹ کریں
                </h2>
                <p className="text-gray-700 text-lg mb-4" dir="rtl">
                  یہاں آپ تمام 12 انگلش ٹینسز کے کوئزز حل کر سکتے ہیں۔ ہر کوئز میں 15-20 سوالات ہیں اور 
                  فوری نتائج کے ساتھ اردو میں وضاحت بھی دی گئی ہے۔
                </p>
                <p className="text-gray-700 text-lg" dir="rtl">
                  اپنی کمزوریوں کو پہچانیں اور بہتری لائیں۔ ہر کوئز کے بعد آپ اپنا سکور دیکھ سکتے ہیں 
                  اور غلط جوابوں کی وضاحت پڑھ سکتے ہیں۔
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-purple-600 text-4xl font-bold mb-2">12</div>
              <div className="text-gray-600">Tenses Covered</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-purple-600 text-4xl font-bold mb-2">200+</div>
              <div className="text-gray-600">Total Questions</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-purple-600 text-4xl font-bold mb-2">3</div>
              <div className="text-gray-600">Difficulty Levels</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-purple-600 text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-600">Free Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quizzes by Category */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" dir="rtl">
            ٹینس کے لحاظ سے کوئزز
          </h2>
          
          <div className="space-y-12">
            {quizCategories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-${category.color}-100 p-4 rounded-full`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600" dir="rtl">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.quizzes.map((quiz, index) => (
                    <Link 
                      key={index}
                      href={quiz.href}
                      className={`group block p-6 rounded-xl border-2 border-${category.color}-200 hover:border-${category.color}-400 hover:shadow-lg transition duration-300 bg-${category.color}-50`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-bold text-gray-900">{quiz.name}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm">
                          {quiz.questions} Qs
                        </span>
                        <span className={`${getDifficultyColor(quiz.difficulty)} px-3 py-1 rounded-full text-sm`}>
                          {quiz.difficulty}
                        </span>
                        <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm">
                          {quiz.time}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-${category.color}-600 font-semibold group-hover:text-${category.color}-800`}>
                          Start Quiz
                        </span>
                        <FaArrowRight className={`text-${category.color}-400 group-hover:text-${category.color}-600 transition`} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" dir="rtl">
            کوئز کیسے کام کرتا ہے؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" dir="rtl">کوئز منتخب کریں</h3>
              <p className="text-gray-600" dir="rtl">اپنی پسند کا tense منتخب کریں</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" dir="rtl">سوالات کے جواب دیں</h3>
              <p className="text-gray-600" dir="rtl">15-20 سوالات حل کریں</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" dir="rtl">نتیجہ دیکھیں</h3>
              <p className="text-gray-600" dir="rtl">اپنا سکور اور وضاحت دیکھیں</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center" dir="rtl">
              کوئز دینے کے لیے نکات
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3" dir="rtl">⏱️ وقت کا خیال رکھیں</h3>
                <p dir="rtl">ہر سوال کے لیے تقریباً 30-40 سیکنڈ رکھیں</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3" dir="rtl">📚 پہلے سبق دہرائیں</h3>
                <p dir="rtl">کوئز دینے سے پہلے متعلقہ سبق ضرور دہرائیں</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3" dir="rtl">❌ غلطیوں سے سیکھیں</h3>
                <p dir="rtl">غلط جوابوں کی وضاحت ضرور پڑھیں</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3" dir="rtl">🔄 دوبارہ کوشش کریں</h3>
                <p dir="rtl">کوئز کو دوبارہ حل کریں جب تک مکمل سمجھ نہ آ جائے</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6" dir="rtl">
            آج ہی کوئز دینا شروع کریں
          </h2>
          <p className="text-xl text-gray-700 mb-8" dir="rtl">
            اپنی انگلش ٹینسز کی مہارت کو پرکھیں اور بہتر بنائیں
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/quizzes/present-simple-quiz"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Start with Present Simple
            </Link>
            <Link 
              href="/tenses"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Review Tenses First
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12 px-4 bg-gray-100 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/tenses-in-urdu" 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">📚 All Tenses</h3>
              <p className="text-gray-600">Review all tenses before quizzes</p>
            </Link>
            
            <Link 
              href="/exercises-in-urdu" 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">✏️ Practice Exercises</h3>
              <p className="text-gray-600">More practice with exercises</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}