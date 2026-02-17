import Link from 'next/link';
import { FaArrowRight, FaBookOpen, FaLanguage, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

export default function TensesInUrduPage() {
  const tenses = [
    {
      name: "Present Simple",
      urduName: "حال سادہ",
      description: "دوران حال کی عادتیں، حقائق اور مستقل سچائیاں",
      href: "/tenses/present-simple",
      examples: [
        "میں روزانہ سکول جاتا ہوں۔ (I go to school daily.)",
        "سورج مشرق سے نکلتا ہے۔ (The sun rises in the east.)"
      ]
    },
    {
      name: "Present Continuous",
      urduName: "حال جاری",
      description: "ابھی جاری کام یا قریب کے مستقبل کے منصوبے",
      href: "/tenses/present-continuous",
      examples: [
        "وہ ابھی کھانا کھا رہا ہے۔ (He is eating food now.)",
        "ہم کل لاہور جا رہے ہیں۔ (We are going to Lahore tomorrow.)"
      ]
    },
    {
      name: "Present Perfect",
      urduName: "حال مکمل",
      description: "گذشتہ کام جن کا اثر حال پر ہے",
      href: "/tenses/present-perfect",
      examples: [
        "میں نے یہ کتاب پڑھی ہے۔ (I have read this book.)",
        "وہ کبھی امریکا نہیں گیا ہے۔ (He has never been to America.)"
      ]
    },
    {
      name: "Present Perfect Continuous",
      urduName: "حال مکمل جاری",
      description: "گذشتہ سے جاری کام جو ابھی بھی چل رہا ہے",
      href: "/tenses/present-perfect-continuous",
      examples: [
        "میں دو گھنٹے سے پڑھ رہا ہوں۔ (I have been studying for two hours.)",
        "وہ 2010 سے یہاں رہ رہے ہیں۔ (They have been living here since 2010.)"
      ]
    },
    {
      name: "Past Simple",
      urduName: "ماضی سادہ",
      description: "ماضی کا مکمل ہوا کام",
      href: "/tenses/past-simple",
      examples: [
        "میں کل بازار گیا تھا۔ (I went to market yesterday.)",
        "اس نے اپنا کام مکمل کیا۔ (He completed his work.)"
      ]
    },
    {
      name: "Past Continuous",
      urduName: "ماضی جاری",
      description: "ماضی میں جاری تھا یا دو کام ایک ساتھ ہو رہے تھے",
      href: "/tenses/past-continuous",
      examples: [
        "میں سوتا تھا جب وہ آیا۔ (I was sleeping when he came.)",
        "وہ صبح سے کام کر رہا تھا۔ (He was working since morning.)"
      ]
    },
    {
      name: "Past Perfect",
      urduName: "ماضی مکمل",
      description: "ماضی کے دو کاموں میں سے پہلے مکمل ہوا کام",
      href: "/tenses/past-perfect",
      examples: [
        "میں کھانا کھا چکا تھا جب وہ آیا۔ (I had eaten food when he came.)",
        "بارش شروع ہو چکی تھی جب ہم گھر پہنچے۔ (The rain had started when we reached home.)"
      ]
    },
    {
      name: "Past Perfect Continuous",
      urduName: "ماضی مکمل جاری",
      description: "ماضی میں کسی وقت سے جاری تھا اور ماضی میں ہی ختم ہوا",
      href: "/tenses/past-perfect-continuous",
      examples: [
        "میں دو گھنٹے سے پڑھ رہا تھا جب وہ آیا۔ (I had been studying for two hours when he came.)",
        "وہ تین سال سے یہ کام کر رہا تھا۔ (He had been doing this work for three years.)"
      ]
    },
    {
      name: "Future Simple",
      urduName: "مستقبل سادہ",
      description: "مستقبل میں ہونے والا کام",
      href: "/tenses/future-simple",
      examples: [
        "میں کل آپ سے ملوں گا۔ (I will meet you tomorrow.)",
        "وہ ضرور کامیاب ہوگا۔ (He will surely succeed.)"
      ]
    },
    {
      name: "Future Continuous",
      urduName: "مستقبل جاری",
      description: "مستقبل میں کسی خاص وقت پر جاری ہوگا",
      href: "/tenses/future-continuous",
      examples: [
        "میں کل اس وقت سفر کر رہا ہوں گا۔ (I will be traveling at that time tomorrow.)",
        "وہ اگلے ماہ نیا گھر بنا رہا ہوگا۔ (He will be building a new house next month.)"
      ]
    },
    {
      name: "Future Perfect",
      urduName: "مستقبل مکمل",
      description: "مستقبل میں کسی وقت تک مکمل ہو چکا ہوگا",
      href: "/tenses/future-perfect",
      examples: [
        "میں اگلے سال تک ڈگری مکمل کر چکا ہوں گا۔ (I will have completed my degree by next year.)",
        "وہ شام تک کام ختم کر چکا ہوگا۔ (He will have finished the work by evening.)"
      ]
    },
    {
      name: "Future Perfect Continuous",
      urduName: "مستقبل مکمل جاری",
      description: "مستقبل میں کسی وقت تک مسلسل جاری رہے گا",
      href: "/tenses/future-perfect-continuous",
      examples: [
        "میں دس سال سے یہاں کام کر رہا ہوں گا۔ (I will have been working here for ten years.)",
        "وہ تین گھنٹے سے انتظار کر رہا ہوگا۔ (He will have been waiting for three hours.)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tenses in Urdu - Complete Guide
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Master all 12 English tenses with detailed Urdu explanations and examples
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/20 px-4 py-2 rounded-full">English tenses in Urdu</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Tenses in Urdu with examples</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">English grammar tenses in Urdu</span>
          </div>
          <Link 
            href="/tenses/present-simple" 
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Start Learning All Tenses
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Guide to Tenses in Urdu
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Welcome to your complete resource for learning English tenses in Urdu. 
              This comprehensive guide covers all 12 English tenses with detailed Urdu 
              explanations, practical examples, and easy-to-understand grammar rules 
              designed specifically for Urdu speakers.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Whether you're a beginner starting your English learning journey or 
              looking to refine your grammar skills, our <strong>tenses in Urdu 
              grammar</strong> guide provides everything you need. Each tense is 
              explained with Urdu to English examples that you can use in daily 
              conversations.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FaLightbulb className="text-yellow-500 mr-3" />
                Why Learn English Tenses in Urdu?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-900">Urdu explanations make complex grammar concepts easy to understand</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-900">Practical examples help you use tenses correctly in real conversations</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-900">Step-by-step learning path from basic to advanced tenses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* All Tenses Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All 12 English Tenses Explained in Urdu
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Explore each English tense with Urdu explanations and examples. Perfect for 
              beginners learning English tenses in Urdu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenses.map((tense, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{tense.name}</h3>
                      <p className="text-gray-600 font-urdu text-lg mt-1">{tense.urduName}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-600 font-bold px-3 py-1 rounded-full text-sm">
                      {Math.floor(index/4)+1}{['st','nd','rd','th'][Math.floor(index/4)]} Group
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{tense.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <FaLanguage className="text-blue-500 mr-2" />
                      Examples:
                    </h4>
                    <ul className="space-y-2">
                      {tense.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-700 bg-gray-50 p-3 rounded-lg text-sm">
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={tense.href}
                    className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
                  >
                    <FaBookOpen className="mr-2" />
                    Learn {tense.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Master Tenses in Urdu and English
          </h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Start with Basic Tenses</h3>
                <p className="text-gray-700">
                  Begin with <strong>Present Simple</strong> and <strong>Past Simple</strong> tenses. 
                  These are the foundation of English grammar and most commonly used in daily 
                  conversations. Our Urdu explanations make these concepts easy to grasp.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Practice with Examples</h3>
                <p className="text-gray-700">
                  Each tense comes with practical <strong>tenses in Urdu with examples</strong> 
                  that show real-world usage. Practice converting Urdu sentences to English 
                  and vice versa to build confidence.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Apply in Exercises</h3>
                <p className="text-gray-700">
                  After learning each tense, test your knowledge with our interactive exercises. 
                  These are designed specifically for Urdu speakers learning English tenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/" 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">← Back to Home</h3>
              <p className="text-gray-600">Return to main learning portal</p>
            </Link>
            
            <Link 
              href="/exercises-in-urdu" 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Practice Exercises →</h3>
              <p className="text-gray-600">Test your tense knowledge</p>
            </Link>
            
            <Link 
              href="/tips" 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Learning Tips →</h3>
              <p className="text-gray-600">Master tenses faster</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}