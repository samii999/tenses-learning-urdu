import Link from 'next/link';
import { FaBook, FaGraduationCap, FaQuestionCircle, FaLightbulb, FaChartLine } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn English Tenses in Urdu
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Master English grammar tenses step by step through Urdu explanations. Our complete guide 
            helps beginners learn English tenses with Urdu examples and practical exercises.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/tenses-in-urdu" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Start Learning Tenses
            </Link>
            <Link 
              href="/exercises-in-urdu" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Practice Exercises
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Complete English Tenses Course in Urdu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <FaBook size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tense Lessons in Urdu</h3>
              <p className="text-gray-700 mb-4">
                Learn all 12 English tenses with detailed Urdu explanations, Urdu to English examples, 
                and clear grammar rules designed for Urdu speakers.
              </p>
              <Link href="/tenses-in-urdu" className="text-blue-600 font-semibold hover:text-blue-800">
                Explore Tenses →
              </Link>
            </div>

            <div className="bg-green-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-green-600 mb-4">
                <FaGraduationCap size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practice Exercises</h3>
              <p className="text-gray-700 mb-4">
                Test your knowledge with interactive exercises for each tense. Practice English tenses 
                in Urdu with immediate feedback and Urdu explanations.
              </p>
              <Link href="/exercises-in-urdu" className="text-green-600 font-semibold hover:text-green-800">
                Start Exercises →
              </Link>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-purple-600 mb-4">
                <FaQuestionCircle size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Quizzes</h3>
              <p className="text-gray-700 mb-4">
                Take quizzes to assess your progress. Our English tenses quizzes in Urdu help you 
                identify areas for improvement and track your learning.
              </p>
              <Link href="/quizzes" className="text-purple-600 font-semibold hover:text-purple-800">
                Take Quizzes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Tenses Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Master All 12 English Tenses
          </h2>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Our comprehensive English grammar tenses in Urdu course covers all tenses with Urdu 
            examples and practical applications for daily conversation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Present Tenses", tenses: ["Present Simple", "Present Continuous", "Present Perfect", "Present Perfect Continuous"], color: "bg-blue-100" },
              { title: "Past Tenses", tenses: ["Past Simple", "Past Continuous", "Past Perfect", "Past Perfect Continuous"], color: "bg-green-100" },
              { title: "Future Tenses", tenses: ["Future Simple", "Future Continuous", "Future Perfect", "Future Perfect Continuous"], color: "bg-purple-100" },
            ].map((group, index) => (
              <div key={index} className={`${group.color} p-6 rounded-xl shadow-md`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {group.tenses.map((tense, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                      <Link 
                        href={`/tenses/${tense.toLowerCase().replace(/ /g, '-')}`}
                        className="text-gray-800 hover:text-blue-700 transition duration-300"
                      >
                        {tense}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Tools</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaLightbulb className="text-yellow-600 mr-3" />
                  <Link href="/tips" className="text-gray-800 hover:text-blue-700">
                    Learning Tips
                  </Link>
                </li>
                <li className="flex items-center">
                  <FaQuestionCircle className="text-yellow-600 mr-3" />
                  <Link href="/mistakes" className="text-gray-800 hover:text-blue-700">
                    Common Mistakes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Learn English Tenses With Us?
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-6">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Urdu Medium Instruction</h3>
                <p className="text-gray-700">
                  We explain English grammar tenses in Urdu language, making it easy for Urdu speakers 
                  to understand complex concepts. Learn tenses step by step with Urdu explanations.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-6">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Practical Examples</h3>
                <p className="text-gray-700">
                  Every tense comes with real-life examples in both Urdu and English. Practice English 
                  tenses in Urdu with sentences you can use in daily conversations.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-6">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Structured Learning Path</h3>
                <p className="text-gray-700">
                  Our course follows a logical progression from basic to advanced tenses. Perfect for 
                  beginners learning English grammar in Urdu who want systematic guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Learning English Tenses Today!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Urdu speakers who have mastered English tenses with our easy-to-follow 
            Urdu explanations and practical exercises.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/tenses-in-urdu" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Begin Free Lessons
            </Link>
            <Link 
              href="/exercises-in-urdu" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Try Free Exercises
            </Link>
          </div>
          <p className="mt-8 text-sm opacity-80">
            Complete English tenses course in Urdu • Free for all learners • No registration required
          </p>
        </div>
      </section>
    </div>
  );
}