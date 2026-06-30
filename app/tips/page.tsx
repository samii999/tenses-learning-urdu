import Link from 'next/link';
import { FaLightbulb, FaCheckCircle, FaClock, FaCalendarAlt, FaHourglassHalf, FaBrain, FaRocket, FaBookOpen } from 'react-icons/fa';

export default function TipsPage() {
  const tips = [
    {
      category: "Present Tenses",
      icon: <FaClock className="text-blue-600 text-3xl" />,
      color: "blue",
      tips: [
        {
          title: "Present Simple Tips",
          items: [
            "He, She, It کے ساتھ verb میں 's' یا 'es' لگانا نہ بھولیں",
            "عادتوں اور حقائق کے لیے Present Simple استعمال کریں",
            "Negative اور Question میں do/does کا صحیح استعمال کریں",
            "Always, never, usually جیسے adverbs کو verb سے پہلے رکھیں"
          ]
        },
        {
          title: "Present Continuous Tips",
          items: [
            "ابھی جاری کاموں کے لیے Present Continuous استعمال کریں",
            "فعل کے ساتھ 'ing' لگانا لازمی ہے",
            "I کے ساتھ 'am'، He/She/It کے ساتھ 'is'، You/We/They کے ساتھ 'are' استعمال کریں",
            "Stative verbs (know, want, like) کو Continuous میں استعمال نہ کریں"
          ]
        },
        {
          title: "Present Perfect Tips",
          items: [
            "تجربات اور حالیہ واقعات کے لیے Present Perfect استعمال کریں",
            "Have/has کا صحیح استعمال کریں (I/You/We/They = have, He/She/It = has)",
            "فعل کی تیسری فارم (3rd form) استعمال کریں",
            "ماضی کے مخصوص وقت (yesterday, last week) کے ساتھ Present Perfect استعمال نہ کریں"
          ]
        },
        {
          title: "Present Perfect Continuous Tips",
          items: [
            "کام کی مدت بتانے کے لیے Present Perfect Continuous استعمال کریں",
            "فارمولا یاد رکھیں: have/has + been + verb(ing)",
            "مدت کے لیے 'for'، نقطہ آغاز کے لیے 'since' استعمال کریں",
            "How long سے سوال پوچھیں"
          ]
        }
      ]
    },
    {
      category: "Past Tenses",
      icon: <FaCalendarAlt className="text-green-600 text-3xl" />,
      color: "green",
      tips: [
        {
          title: "Past Simple Tips",
          items: [
            "ماضی کے مکمل کاموں کے لیے Past Simple استعمال کریں",
            "Regular verbs میں 'ed' لگانا یاد رکھیں",
            "Irregular verbs کی دوسری فارم (2nd form) یاد کریں",
            "Negative اور Question میں did کے بعد verb کی پہلی فارم استعمال کریں"
          ]
        },
        {
          title: "Past Continuous Tips",
          items: [
            "ماضی میں جاری کاموں کے لیے Past Continuous استعمال کریں",
            "فارمولا: was/were + verb(ing)",
            "I/He/She/It = was, You/We/They = were",
            "جب دو کام ایک ساتھ جاری ہوں تو دونوں کو Past Continuous میں رکھیں"
          ]
        },
        {
          title: "Past Perfect Tips",
          items: [
            "دو کاموں میں پہلے والے کام کے لیے Past Perfect استعمال کریں",
            "فارمولا: had + verb(3rd form)",
            "By the time, before, after کے ساتھ Past Perfect استعمال کریں",
            "ترتیب سمجھیں: پہلے والا کام = Past Perfect، بعد والا = Past Simple"
          ]
        },
        {
          title: "Past Perfect Continuous Tips",
          items: [
            "کام کی مدت بتانے کے لیے Past Perfect Continuous استعمال کریں",
            "فارمولا: had + been + verb(ing)",
            "وجہ بتانے کے لیے استعمال کریں (He was tired because he had been running)",
            "How long سے سوال پوچھیں"
          ]
        }
      ]
    },
    {
      category: "Future Tenses",
      icon: <FaHourglassHalf className="text-purple-600 text-3xl" />,
      color: "purple",
      tips: [
        {
          title: "Future Simple Tips",
          items: [
            "will + verb (پہلی فارم) کا فارمولا یاد رکھیں",
            "اس وقت کیے گئے فیصلوں کے لیے will استعمال کریں",
            "وعدوں اور پیشکشوں کے لیے will استعمال کریں",
            "پہلے سے طے شدہ منصوبوں کے لیے going to استعمال کریں"
          ]
        },
        {
          title: "Future Continuous Tips",
          items: [
            "مستقبل میں جاری کاموں کے لیے Future Continuous استعمال کریں",
            "فارمولا: will + be + verb(ing)",
            "وقت کا ذکر ضروری کریں (at 7 pm, tomorrow evening)",
            "دو کاموں میں مداخلت کرنے والے کام کے لیے Present Simple استعمال کریں"
          ]
        },
        {
          title: "Future Perfect Tips",
          items: [
            "مستقبل میں کسی وقت تک مکمل کام کے لیے Future Perfect استعمال کریں",
            "فارمولا: will + have + verb(3rd form)",
            "by (تک) کے ساتھ استعمال کریں",
            "By the time کے بعد Present Simple استعمال کریں"
          ]
        },
        {
          title: "Future Perfect Continuous Tips",
          items: [
            "مستقبل میں کسی وقت تک جاری کام کی مدت بتانے کے لیے استعمال کریں",
            "فارمولا: will + have + been + verb(ing)",
            "مدت کے لیے for، نقطہ آغاز کے لیے since استعمال کریں",
            "How long سے سوال پوچھیں"
          ]
        }
      ]
    }
  ];

  const quickMemoryTips = [
    {
      title: "Present Tenses",
      icon: "🕐",
      rule: "Present = اب کا زمانہ",
      memory: "Present Simple = عادت / حقیقت\nPresent Continuous = ابھی جاری\nPresent Perfect = تجربہ / نتیجہ\nPresent Perfect Continuous = مدت"
    },
    {
      title: "Past Tenses",
      icon: "📅",
      rule: "Past = گزرا ہوا زمانہ",
      memory: "Past Simple = مکمل کام\nPast Continuous = جاری تھا\nPast Perfect = پہلے والا کام\nPast Perfect Continuous = مدت تھی"
    },
    {
      title: "Future Tenses",
      icon: "🔮",
      rule: "Future = آنے والا زمانہ",
      memory: "Future Simple = ہو گا\nFuture Continuous = جاری ہو گا\nFuture Perfect = مکمل ہو چکا ہو گا\nFuture Perfect Continuous = مدت ہو گی"
    }
  ];

  const commonMistakesReminder = [
    {
      mistake: "He go to school",
      correct: "He goes to school",
      tip: "He/She/It کے ساتھ verb میں 's' لگائیں"
    },
    {
      mistake: "I have went",
      correct: "I have gone",
      tip: "Present Perfect میں verb کی تیسری فارم استعمال کریں"
    },
    {
      mistake: "She don't like",
      correct: "She doesn't like",
      tip: "He/She/It کے ساتھ doesn't استعمال کریں"
    },
    {
      mistake: "I will going",
      correct: "I will go / I am going",
      tip: "will کے بعد verb کی پہلی فارم آتی ہے"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FaLightbulb className="text-5xl" />
            <h1 className="text-4xl md:text-5xl font-bold">
              English Tenses Learning Tips
            </h1>
          </div>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl" dir="rtl">
            انگلش ٹینسز سیکھنے کے آسان طریقے - اردو میں مکمل رہنمائی
          </p>
          <p className="text-lg mt-4 opacity-80">
            Master all 12 tenses with these practical tips and memory tricks
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-yellow-500">
            <div className="flex items-start gap-6">
              <div className="bg-yellow-100 p-4 rounded-full">
                <FaBrain className="text-yellow-600 text-4xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-black mb-4" dir="rtl">
                  ٹینسز سیکھنے کے آسان طریقے
                </h2>
                <p className="text-black text-lg mb-4" dir="rtl">
                  انگلش کے 12 ٹینسز سیکھنا مشکل لگ سکتا ہے، مگر صحیح tips اور rules کے ساتھ آپ آسانی سے انہیں یاد کر سکتے ہیں۔ 
                  یہاں ہم نے ہر tense کے لیے آسان tips، rules، اور memory tricks دی ہیں۔
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full flex items-center">
                    <FaCheckCircle className="mr-2" />
                    <span>12 Tenses</span>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full flex items-center">
                    <FaCheckCircle className="mr-2" />
                    <span>Easy Rules</span>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full flex items-center">
                    <FaRocket className="mr-2" />
                    <span>Memory Tricks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Memory Tips */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-10" dir="rtl">
            جلدی یاد رکھنے کے طریقے
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickMemoryTips.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-2 border-yellow-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-black font-semibold mb-3" dir="rtl">{item.rule}</p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  {item.memory.split('\n').map((line, i) => (
                    <p key={i} className="text-black text-sm mb-1" dir="rtl">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Tips by Category */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-12" dir="rtl">
            ٹینس کے لحاظ سے اہم نکات
          </h2>
          
          <div className="space-y-12">
            {tips.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`bg-${category.color}-100 p-4 rounded-full`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-black">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.tips.map((tense, index) => (
                    <div key={index} className="border-2 border-gray-200 rounded-xl p-5 hover:shadow-lg transition">
                      <h4 className="text-xl font-bold text-black mb-4 border-b-2 border-yellow-300 pb-2">
                        {tense.title}
                      </h4>
                      <ul className="space-y-2">
                        {tense.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FaLightbulb className="text-yellow-500 mt-1 flex-shrink-0 text-sm" />
                            <span className="text-black text-sm" dir="rtl">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes Reminder */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-8" dir="rtl">
            بار بار ہونے والی غلطیاں - یاد رکھیں
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonMistakesReminder.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-5 border-2 border-red-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    !
                  </div>
                  <div>
                    <p className="text-red-600 line-through text-sm">{item.mistake}</p>
                    <p className="text-green-600 font-bold">{item.correct}</p>
                  </div>
                </div>
                <p className="text-black text-sm" dir="rtl">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Learning Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center" dir="rtl">
              انگلش سیکھنے کے گولڈن رولز
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3" dir="rtl">1️⃣ روزانہ پریکٹس کریں</h3>
                <p dir="rtl">روزانہ صرف 15 منٹ پریکٹس بھی آپ کی انگلش بہتر کر سکتی ہے۔</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3" dir="rtl">2️⃣ غلطیوں سے نہ گھبرائیں</h3>
                <p dir="rtl">غلطیاں سیکھنے کا حصہ ہیں۔ ہر غلطی سے کچھ نیا سیکھیں۔</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3" dir="rtl">3️⃣ بولنے کی مشق کریں</h3>
                <p dir="rtl">صرف پڑھنا کافی نہیں، بول کر پریکٹس کریں۔</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <h3 className="text-xl font-bold mb-3" dir="rtl">4️⃣ ایک وقت میں ایک tense</h3>
                <p dir="rtl">ایک ساتھ سارے tenses سیکھنے کی کوشش نہ کریں۔ ایک tense مکمل کریں پھر اگلا شروع کریں۔</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Links */}
      <section className="py-12 px-4 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-8" dir="rtl">
            مزید پریکٹس کریں
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/tenses-in-urdu"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center"
            >
              <FaBookOpen className="mr-2" />
              All Tenses
            </Link>
            <Link 
              href="/exercises-in-urdu"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center"
            >
              <FaBookOpen className="mr-2" />
              Practice Exercises
            </Link>
            <Link 
              href="/mistakes"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center"
            >
              <FaBookOpen className="mr-2" />
              Common Mistakes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}