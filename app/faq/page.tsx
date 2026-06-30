export default function FAQ() {
  const faqs = [
    {
      question: "What is TensesUrdu?",
      answer: "TensesUrdu is a free educational website that helps Urdu speakers learn English tenses with easy explanations, exercises, and quizzes in both English and Urdu."
    },
    {
      question: "Is this website free to use?",
      answer: "Yes! TensesUrdu is completely free for all users. We believe education should be accessible to everyone."
    },
    {
      question: "How many tenses are covered?",
      answer: "We cover all 12 English tenses: Present Simple, Present Continuous, Present Perfect, Present Perfect Continuous, Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous, Future Simple, Future Continuous, Future Perfect, and Future Perfect Continuous."
    },
    {
      question: "Do I need to create an account?",
      answer: "No, you can access all content without creating an account. We keep things simple and accessible."
    },
    {
      question: "How can I practice?",
      answer: "Each tense has dedicated exercises and quizzes. You can practice after each lesson to test your understanding."
    },
    {
      question: "What if I find a mistake?",
      answer: "We strive for accuracy but if you find an error, please contact us through our Contact page. We appreciate your feedback!"
    },
    {
      question: "Can I share this content?",
      answer: "You can share links to our pages, but please don't copy our content. We work hard to create original material."
    },
    {
      question: "How often is new content added?",
      answer: "We regularly update our content and add new exercises and tips. Check back often for new material."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Find answers to common questions about TensesUrdu
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition">
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-gray-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200 text-center">
          <p className="text-blue-800">
            Still have questions?{' '}
            <a href="/contact" className="font-semibold text-blue-600 hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}