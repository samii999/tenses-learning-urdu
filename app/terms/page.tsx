export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Terms & Conditions
          </h1>
          <p className="text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By using TensesUrdu, you agree to these terms. If you disagree, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2. Educational Purpose
            </h2>
            <p className="leading-relaxed">
              Our content is for educational purposes only. While we strive for accuracy, we do not 
              guarantee that all information is error-free or complete.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              3. User Conduct
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use the website for personal, non-commercial learning</li>
              <li>Do not misuse or attempt to hack the website</li>
              <li>Do not copy content without permission</li>
              <li>Do not post harmful or inappropriate content</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              4. Intellectual Property
            </h2>
            <p className="leading-relaxed">
              All content on TensesUrdu, including text, graphics, and exercises, is our property or 
              used with permission. You may not reproduce, distribute, or create derivative works 
              without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              5. Disclaimer of Warranties
            </h2>
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <p className="text-yellow-800">
                ⚠️ Our content is provided "as is" without any warranties, express or implied. 
                We are not responsible for any losses or damages from using our website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              6. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              TensesUrdu and its owners are not liable for any direct, indirect, incidental, or 
              consequential damages arising from your use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              7. External Links
            </h2>
            <p className="leading-relaxed">
              We may link to external websites for your convenience. We are not responsible for their 
              content, privacy practices, or terms of use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              8. Google AdSense
            </h2>
            <p className="leading-relaxed">
              This website uses Google AdSense to display ads. By using this site, you agree to Google's 
              policies and terms regarding advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              9. Changes to Terms
            </h2>
            <p className="leading-relaxed">
              We reserve the right to update these terms at any time. Continued use of the website means 
              you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              10. Governing Law
            </h2>
            <p className="leading-relaxed">
              These terms are governed by the laws of Pakistan. Any disputes shall be resolved in the 
              courts of Pakistan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              11. Contact Us
            </h2>
            <p className="leading-relaxed">
              Questions about these terms? Contact us at:{' '}
              <a href="mailto:tensesurdu@gmail.com" className="text-blue-600 hover:underline">
                tensesurdu@gmail.com
              </a>
            </p>
          </section>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <p className="text-sm text-gray-500">
              <span className="font-semibold">📅 Version:</span> 1.0
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}