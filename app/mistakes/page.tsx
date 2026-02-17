import Link from 'next/link';
import { FaExclamationTriangle, FaArrowRight, FaClock, FaCalendarAlt, FaLightbulb, FaCheckCircle, FaRocket } from 'react-icons/fa';

export default function MistakesPage() {
  const mistakeCategories = [
    {
      title: "Present Tenses",
      icon: <FaClock className="text-blue-600 text-3xl" />,
      color: "blue",
      tenses: [
        { name: "Present Simple", href: "/mistakes/present-simple", count: 14, description: "Third person 's', negatives, questions" },
        { name: "Present Continuous", href: "/mistakes/present-continuous", count: 12, description: "-ing forms, am/is/are confusion" },
        { name: "Present Perfect", href: "/mistakes/present-perfect", count: 15, description: "have/has, irregular verbs" },
        { name: "Present Perfect Continuous", href: "/mistakes/present-perfect-continuous", count: 10, description: "for/since, been + ing" }
      ]
    },
    {
      title: "Past Tenses",
      icon: <FaCalendarAlt className="text-green-600 text-3xl" />,
      color: "green",
      tenses: [
        { name: "Past Simple", href: "/mistakes/past-simple", count: 16, description: "irregular verbs, did + verb" },
        { name: "Past Continuous", href: "/mistakes/past-continuous", count: 11, description: "was/were, when vs while" },
        { name: "Past Perfect", href: "/mistakes/past-perfect", count: 13, description: "had + past participle" },
        { name: "Past Perfect Continuous", href: "/mistakes/past-perfect-continuous", count: 9, description: "had been + ing" }
      ]
    },
    {
      title: "Future Tenses",
      icon: <FaRocket className="text-purple-600 text-3xl" />,
      color: "purple",
      tenses: [
        { name: "Future Simple", href: "/mistakes/future-simple", count: 12, description: "will vs going to" },
        { name: "Future Continuous", href: "/mistakes/future-continuous", count: 10, description: "will be + ing" },
        { name: "Future Perfect", href: "/mistakes/future-perfect", count: 8, description: "will have + past participle" },
        { name: "Future Perfect Continuous", href: "/mistakes/future-perfect-continuous", count: 7, description: "will have been + ing" }
      ]
    }
  ];

  const topMistakes = [
    {
      mistake: "He go to school",
      correct: "He goes to school",
      rule: "Third person 's'",
      tense: "Present Simple"
    },
    {
      mistake: "She don't like",
      correct: "She doesn't like",
      rule: "doesn't vs don't",
      tense: "Present Simple"
    },
    {
      mistake: "I have went",
      correct: "I have gone",
      rule: "Irregular verb",
      tense: "Present Perfect"
    },
    {
      mistake: "He was go",
      correct: "He was going",
      rule: "was + ing",
      tense: "Past Continuous"
    },
    {
      mistake: "I will going",
      correct: "I will go / I am going",
      rule: "will + base verb",
      tense: "Future Simple"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/" className="text-white/80 hover:text-white transition duration-300">
              ← Home
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <FaExclamationTriangle className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Common Mistakes in English Tenses
            </h1>
          </div>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl" dir="rtl">
            اردو بولنے والوں کی 100+ عام غلطیاں - ہر tense کے لیے مکمل رہنمائی
          </p>
          <p className="text-lg mt-4 opacity-80">
            Learn from common errors and improve your English grammar
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-red-500">
            <div className="flex items-start gap-6">
              <div className="bg-red-100 p-4 rounded-full">
                <FaExclamationTriangle className="text-red-600 text-4xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" dir="rtl">
                  غلطیوں سے سیکھیں، انگریزی کو بہتر بنائیں
                </h2>
                <p className="text-black text-lg mb-4" dir="rtl">
                  ہم سب انگریزی سیکھتے ہوئے غلطیاں کرتے ہیں۔ یہاں ہم نے 100 سے زیادہ عام غلطیاں جمع کی ہیں جو اردو بولنے والوں کو تینسز میں کرتے ہیں۔ ہر غلطی کو تفصیل سے سمجھیں، اُس کی وجہ جانیں، اور صحیح طریقہ سیکھیں۔
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full flex items-center">
                    <FaCheckCircle className="mr-2" />
                    <span>100+ Common Mistakes</span>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center">
                    <FaCheckCircle className="mr-2" />
                    <span>12 Tenses Covered</span>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full flex items-center">
                    <FaLightbulb className="mr-2" />
                    <span>Urdu Explanations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 5 Common Mistakes */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-10" dir="rtl">
            سب سے عام 5 غلطیاں
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topMistakes.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border-2 border-red-200">
                <div className="bg-red-500 text-white px-4 py-2 flex justify-between items-center">
                  <span className="font-bold">#{index + 1} Most Common</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded">{item.tense}</span>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="bg-red-50 p-3 rounded-lg mb-2 border border-red-200">
                      <p className="text-red-600 font-bold line-through">{item.mistake}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="text-green-600 font-bold">{item.correct}</p>
                    </div>
                  </div>
                  <p className="text-black font-semibold" dir="rtl">{item.rule}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes by Tense Category */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-4" dir="rtl">
            تینسز کے لحاظ سے غلطیاں
          </h2>
          <p className="text-center text-black mb-12 max-w-2xl mx-auto" dir="rtl">
            نیچے دیے گئے کسی بھی تینسز پر کلک کریں اور اُس تینسز میں ہونے والی عام غلطیوں کو تفصیل سے سیکھیں۔
          </p>
          
          <div className="space-y-12">
            {mistakeCategories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`bg-${category.color}-100 p-4 rounded-full`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-black">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.tenses.map((tense, index) => {
                    const colorClasses = {
                      blue: "border-blue-200 hover:border-blue-400 bg-blue-50",
                      green: "border-green-200 hover:border-green-400 bg-green-50",
                      purple: "border-purple-200 hover:border-purple-400 bg-purple-50"
                    };
                    
                    return (
                      <Link 
                        key={index}
                        href={tense.href}
                        className={`group block p-6 rounded-xl border-2 ${colorClasses[category.color as keyof typeof colorClasses]} hover:shadow-lg transition duration-300`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xl font-bold text-black">{tense.name}</h4>
                          <span className={`bg-${category.color}-200 text-${category.color}-800 px-3 py-1 rounded-full text-sm font-bold`}>
                            {tense.count} mistakes
                          </span>
                        </div>
                        <p className="text-black mb-4" dir="rtl">{tense.description}</p>
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800">
                          <span>See Mistakes</span>
                          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistake Patterns */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-10" dir="rtl">
            عام غلطیوں کے پیٹرن
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
              <h3 className="text-xl font-bold mb-3" dir="rtl">تھرڈ پرسن 's'</h3>
              <div className="bg-red-50 p-3 rounded-lg mb-2">
                <p className="text-red-600 line-through">He go, She play</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-green-600">He goes, She plays</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
              <h3 className="text-xl font-bold mb-3" dir="rtl">Do/Does Confusion</h3>
              <div className="bg-red-50 p-3 rounded-lg mb-2">
                <p className="text-red-600 line-through">She don't, Does he goes?</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-green-600">She doesn't, Does he go?</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
              <h3 className="text-xl font-bold mb-3" dir="rtl">Irregular Verbs</h3>
              <div className="bg-red-50 p-3 rounded-lg mb-2">
                <p className="text-red-600 line-through">I have went, She has wrote</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-green-600">I have gone, She has written</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
              <h3 className="text-xl font-bold mb-3" dir="rtl">Was/Were</h3>
              <div className="bg-red-50 p-3 rounded-lg mb-2">
                <p className="text-red-600 line-through">They was, I were</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-green-600">They were, I was</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center" dir="rtl">
              غلطیوں سے بچنے کے آسان طریقے
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3" dir="rtl">1️⃣ روزانہ پریکٹس کریں</h3>
                <p dir="rtl">روزانہ 10 منٹ بھی پریکٹس کرنے سے غلطیاں کم ہوتی ہیں۔</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3" dir="rtl">2️⃣ غلطیوں کو نوٹ کریں</h3>
                <p dir="rtl">جو غلطیاں بار بار ہوتی ہیں، اُنہیں لکھ کر یاد کریں۔</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3" dir="rtl">3️⃣ ایک وقت میں ایک تینسز</h3>
                <p dir="rtl">ایک وقت میں صرف ایک تینسز پر توجہ دیں اور اُسے مکمل سیکھیں۔</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3" dir="rtl">4️⃣ بولنے کی مشق کریں</h3>
                <p dir="rtl">صرف پڑھنا کافی نہیں، بول کر پریکٹس کریں۔</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-8" dir="rtl">
            فوری رہنمائی - ایک نظر میں
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-black rounded-lg">
              <thead className="bg-red-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left text-black">Tense</th>
                  <th className="py-3 px-4 border-b text-left text-black">Common Mistake</th>
                  <th className="py-3 px-4 border-b text-left text-black">Correct Form</th>
                  <th className="py-3 px-4 border-b text-left text-black">Rule</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 text-black font-bold">Present Simple</td>
                  <td className="py-2 px-4 text-red-600">He go to school</td>
                  <td className="py-2 px-4 text-green-600">He goes to school</td>
                  <td className="py-2 px-4 text-black">He/She/It + verb(s)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-black font-bold">Present Continuous</td>
                  <td className="py-2 px-4 text-red-600">I am go</td>
                  <td className="py-2 px-4 text-green-600">I am going</td>
                  <td className="py-2 px-4 text-black">am/is/are + verb(ing)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-black font-bold">Present Perfect</td>
                  <td className="py-2 px-4 text-red-600">I have went</td>
                  <td className="py-2 px-4 text-green-600">I have gone</td>
                  <td className="py-2 px-4 text-black">have/has + verb(3rd)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-black font-bold">Past Simple</td>
                  <td className="py-2 px-4 text-red-600">I didn't went</td>
                  <td className="py-2 px-4 text-green-600">I didn't go</td>
                  <td className="py-2 px-4 text-black">did + base verb</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 text-black font-bold">Past Continuous</td>
                  <td className="py-2 px-4 text-red-600">They was going</td>
                  <td className="py-2 px-4 text-green-600">They were going</td>
                  <td className="py-2 px-4 text-black">was/were + ing</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-black font-bold">Future Simple</td>
                  <td className="py-2 px-4 text-red-600">I will going</td>
                  <td className="py-2 px-4 text-green-600">I will go</td>
                  <td className="py-2 px-4 text-black">will + base verb</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" dir="rtl">
            کسی بھی tense کی غلطیاں سیکھیں
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Choose a tense below to see all common mistakes with Urdu explanations
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/mistakes/present-simple" className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition">
              Present Simple
            </Link>
            <Link href="/mistakes/present-continuous" className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg transition">
              Present Continuous
            </Link>
            <Link href="/mistakes/past-simple" className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg transition">
              Past Simple
            </Link>
            <Link href="/mistakes/future-simple" className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-lg transition">
              Future Simple
            </Link>
          </div>
          
          <div className="mt-8">
            <Link href="/exercises" className="text-white underline hover:no-underline">
              Practice with exercises →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}