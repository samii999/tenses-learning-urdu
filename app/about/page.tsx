export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            About TensesUrdu
          </h1>
          <p className="text-gray-600">
            Your complete guide to mastering English tenses in Urdu
          </p>
        </div>

        <div className="space-y-8">
          {/* Mission */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🎯 Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              TensesUrdu was created to make learning English tenses easy and accessible for Urdu speakers. 
              We believe that language should not be a barrier to education and opportunity.
            </p>
          </section>

          {/* What We Offer */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              📚 What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-1">📖 Clear Explanations</h3>
                <p className="text-blue-700 text-sm">Simple, easy-to-understand lessons with Urdu translations.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <h3 className="font-semibold text-green-800 mb-1">✅ Practice Exercises</h3>
                <p className="text-green-700 text-sm">Interactive exercises to test and reinforce your learning.</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <h3 className="font-semibold text-purple-800 mb-1">🎯 Quizzes</h3>
                <p className="text-purple-700 text-sm">Self-assessment tools to track your progress.</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                <h3 className="font-semibold text-orange-800 mb-1">💡 Expert Tips</h3>
                <p className="text-orange-700 text-sm">Common mistakes and how to avoid them.</p>
              </div>
            </div>
          </section>

          {/* Who We Are */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              👤 Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are a team of language enthusiasts and educators passionate about helping Urdu speakers 
              master English grammar. With years of teaching experience, we understand the common challenges 
              faced by Urdu speakers learning English.
            </p>
          </section>

          {/* Why Us */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              ⭐ Why Choose TensesUrdu
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside ml-2">
              <li>All content is bilingual (English + Urdu)</li>
              <li>Structured learning path from beginner to advanced</li>
              <li>Comprehensive coverage of all 12 tenses</li>
              <li>Free, accessible education for everyone</li>
              <li>Regular updates with new content</li>
            </ul>
          </section>

          {/* Our Values */}
          <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              💎 Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <span className="text-3xl block mb-2">📖</span>
                <h3 className="font-semibold text-gray-800">Education</h3>
                <p className="text-sm text-gray-600">Making learning accessible</p>
              </div>
              <div className="text-center">
                <span className="text-3xl block mb-2">🤝</span>
                <h3 className="font-semibold text-gray-800">Trust</h3>
                <p className="text-sm text-gray-600">Accurate, reliable content</p>
              </div>
              <div className="text-center">
                <span className="text-3xl block mb-2">🌍</span>
                <h3 className="font-semibold text-gray-800">Inclusion</h3>
                <p className="text-sm text-gray-600">Serving all learners</p>
              </div>
            </div>
          </section>

          {/* Join Us */}
          <section className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              🚀 Join Our Community
            </h2>
            <p className="text-blue-700 leading-relaxed">
              Ready to improve your English? Start exploring our content today and take your language 
              skills to the next level. We're here to support you every step of the way!
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a 
                href="/tenses-in-urdu" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
              >
                Start Learning
              </a>
              <a 
                href="/contact" 
                className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-2 px-6 rounded-lg border border-blue-300 transition"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}