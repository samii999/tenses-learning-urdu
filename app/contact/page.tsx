export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                📍 Get in Touch
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We're here to help! Whether you have questions about English tenses, 
                suggestions for new content, or just want to say hello, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                <span className="text-2xl">📧</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a href="mailto:um558899@gmail.com" className="text-blue-600 hover:underline">
                    um558899@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                <span className="text-2xl">🌐</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Website</h3>
                  <a href="https://tensesurdu.vercel.app" className="text-blue-600 hover:underline">
                    tensesurdu.vercel.app
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                <span className="text-2xl">⏰</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Response Time</h3>
                  <p className="text-gray-600">We aim to respond within 24-48 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">💡 Quick Tips</h3>
              <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                <li>Check our FAQ page for common questions</li>
                <li>Be specific about your question for faster help</li>
                <li>Include screenshots if you're reporting an issue</li>
              </ul>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 flex flex-col justify-center">
            <div className="text-center">
              <span className="text-5xl block mb-4">📧</span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Email Us Directly
              </h3>
              <p className="text-gray-600 mb-4">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:um558899@gmail.com" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
              >
                um558899@gmail.com
              </a>
              <p className="mt-4 text-sm text-gray-500">
                Or use the email button in your email client
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}