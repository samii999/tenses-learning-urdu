export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              📌 Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to TensesUrdu. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          {/* AdSense-Specific Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              🍪 Cookies and Third-Party Advertising
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use Google AdSense to serve ads on our website. As a third-party vendor, Google uses cookies to serve ads based on your prior visits to our website or other sites on the internet. [citation:14]
            </p>
            <div className="mt-4 space-y-3">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-blue-800 text-sm">
                  <span className="font-semibold">🔹 Google's Use of Cookies:</span> Google's advertising cookies enable it and its partners to serve ads to you based on your visit to our site and/or other sites on the internet. [citation:14]
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-blue-800 text-sm">
                  <span className="font-semibold">🔹 Opting Out:</span> You may opt out of personalized advertising by visiting your{' '}
                  <a 
                    href="https://adssettings.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Google Ads Settings
                  </a>
                  . You can also opt out of some third-party vendors' use of cookies by visiting{' '}
                  <a 
                    href="https://www.aboutads.info" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    www.aboutads.info
                  </a>
                  . [citation:14]
                </p>
              </div>
            </div>
          </section>

          

          {/* Contact Section */}
          <section className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              📧 Contact Us
            </h2>
            <p className="text-blue-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-3 space-y-2">
              <p className="text-blue-800">
                <span className="font-semibold">📧 Email:</span>{' '}
                <a href="mailto:um558899@gmail.com" className="text-blue-600 hover:underline">
                  um558899@gmail.com
                </a>
              </p>
              <p className="text-blue-800">
                <span className="font-semibold">🌐 Website:</span>{' '}
                <a href="https://tensesurdu.vercel.app" className="text-blue-600 hover:underline">
                  tensesurdu.vercel.app
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}