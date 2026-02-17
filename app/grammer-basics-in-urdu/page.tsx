import Link from 'next/link';
import { FaBook, FaUser, FaArrowRight, FaSearch, FaLightbulb } from 'react-icons/fa';

export default function GrammarBasicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            English Grammar Basics in Urdu
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
            Noun, Pronoun, Subject, Object, Verb - Complete Guide for Urdu Speakers
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#noun" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition">Noun</a>
            <a href="#pronoun" className="px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition">Pronoun</a>
            <a href="#subject" className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full hover:bg-yellow-200 transition">Subject</a>
            <a href="#object" className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition">Object</a>
            <a href="#verb" className="px-4 py-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition">Verb</a>
          </div>
        </div>
      </section>

      {/* Noun Section */}
      <section id="noun" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-blue-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaBook className="text-blue-600 text-3xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Noun (اسم)</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">تعریف:</h3>
                <p className="text-black text-lg" dir="rtl">
                  Noun کسی بھی شخص، جگہ، چیز یا خیال کے نام کو کہتے ہیں۔
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-blue-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-black mb-4" dir="rtl">🌍 شخص (Person)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> <span className="text-black" dir="rtl">علی - Ali</span></li>
                    <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> <span className="text-black" dir="rtl">سارہ - Sara</span></li>
                    <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> <span className="text-black" dir="rtl">ڈاکٹر - Doctor</span></li>
                  </ul>
                </div>
                
                <div className="border border-blue-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-black mb-4" dir="rtl">📍 جگہ (Place)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> <span className="text-black" dir="rtl">لاہور - Lahore</span></li>
                    <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> <span className="text-black" dir="rtl">سکول - School</span></li>
                    <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> <span className="text-black" dir="rtl">پارک - Park</span></li>
                  </ul>
                </div>
                
                <div className="border border-blue-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-black mb-4" dir="rtl">📦 چیز (Thing)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> <span className="text-black" dir="rtl">کتاب - Book</span></li>
                    <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> <span className="text-black" dir="rtl">قلم - Pen</span></li>
                    <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> <span className="text-black" dir="rtl">میز - Table</span></li>
                  </ul>
                </div>
                
                <div className="border border-blue-200 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-black mb-4" dir="rtl">💭 خیال (Idea)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> <span className="text-black" dir="rtl">محبت - Love</span></li>
                    <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> <span className="text-black" dir="rtl">خوشی - Happiness</span></li>
                    <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">•</span> <span className="text-black" dir="rtl">آزادی - Freedom</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pronoun Section */}
      <section id="pronoun" className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-green-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <FaUser className="text-green-600 text-3xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Pronoun (ضمیر)</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">تعریف:</h3>
                <p className="text-black text-lg" dir="rtl">
                  Pronoun وہ لفظ ہے جو noun کی جگہ استعمال ہوتا ہے۔
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="py-3 px-4 border-b text-left text-black">Subject Pronoun</th>
                      <th className="py-3 px-4 border-b text-left text-black">Object Pronoun</th>
                      <th className="py-3 px-4 border-b text-left text-black">Possessive Pronoun</th>
                      <th className="py-3 px-4 border-b text-left text-black" dir="rtl">اردو معنی</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="py-2 px-4 border-b text-black">I</td><td className="py-2 px-4 border-b text-black">me</td><td className="py-2 px-4 border-b text-black">mine</td><td className="py-2 px-4 border-b text-black" dir="rtl">میں</td></tr>
                    <tr><td className="py-2 px-4 border-b text-black">You</td><td className="py-2 px-4 border-b text-black">you</td><td className="py-2 px-4 border-b text-black">yours</td><td className="py-2 px-4 border-b text-black" dir="rtl">تم، آپ</td></tr>
                    <tr><td className="py-2 px-4 border-b text-black">He</td><td className="py-2 px-4 border-b text-black">him</td><td className="py-2 px-4 border-b text-black">his</td><td className="py-2 px-4 border-b text-black" dir="rtl">وہ (مرد)</td></tr>
                    <tr><td className="py-2 px-4 border-b text-black">She</td><td className="py-2 px-4 border-b text-black">her</td><td className="py-2 px-4 border-b text-black">hers</td><td className="py-2 px-4 border-b text-black" dir="rtl">وہ (عورت)</td></tr>
                    <tr><td className="py-2 px-4 border-b text-black">It</td><td className="py-2 px-4 border-b text-black">it</td><td className="py-2 px-4 border-b text-black">its</td><td className="py-2 px-4 border-b text-black" dir="rtl">یہ (بے جان)</td></tr>
                    <tr><td className="py-2 px-4 border-b text-black">We</td><td className="py-2 px-4 border-b text-black">us</td><td className="py-2 px-4 border-b text-black">ours</td><td className="py-2 px-4 border-b text-black" dir="rtl">ہم</td></tr>
                    <tr><td className="py-2 px-4 border-b text-black">They</td><td className="py-2 px-4 border-b text-black">them</td><td className="py-2 px-4 border-b text-black">theirs</td><td className="py-2 px-4 border-b text-black" dir="rtl">وہ (جمع)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Section */}
      <section id="subject" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-yellow-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-100 p-4 rounded-full">
                <FaArrowRight className="text-yellow-600 text-3xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Subject (فاعل)</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">تعریف:</h3>
                <p className="text-black text-lg" dir="rtl">
                  Subject وہ ہے جو جملے میں کام کرتا ہے۔
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="border border-yellow-200 p-4 rounded-lg">
                  <p className="font-urdu text-lg text-black" dir="rtl"><span className="text-yellow-600 font-bold">علی</span> کھانا کھاتا ہے۔</p>
                  <p className="text-black"><span className="text-yellow-600 font-bold">Ali</span> eats food.</p>
                  <p className="text-sm text-black mt-1" dir="rtl">Subject = علی (Ali)</p>
                </div>
                <div className="border border-yellow-200 p-4 rounded-lg">
                  <p className="font-urdu text-lg text-black" dir="rtl"><span className="text-yellow-600 font-bold">سارہ</span> کتاب پڑھتی ہے۔</p>
                  <p className="text-black"><span className="text-yellow-600 font-bold">Sara</span> reads a book.</p>
                  <p className="text-sm text-black mt-1" dir="rtl">Subject = سارہ (Sara)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Object Section */}
      <section id="object" className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-orange-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-100 p-4 rounded-full">
                <FaSearch className="text-orange-600 text-3xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Object (مفعول)</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">تعریف:</h3>
                <p className="text-black text-lg" dir="rtl">
                  Object وہ ہے جس پر کام کیا جائے۔
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="border border-orange-200 p-4 rounded-lg">
                  <p className="font-urdu text-lg text-black" dir="rtl">علی <span className="text-orange-600 font-bold">کھانا</span> کھاتا ہے۔</p>
                  <p className="text-black">Ali eats <span className="text-orange-600 font-bold">food</span>.</p>
                  <p className="text-sm text-black mt-1" dir="rtl">Object = کھانا (food)</p>
                </div>
                <div className="border border-orange-200 p-4 rounded-lg">
                  <p className="font-urdu text-lg text-black" dir="rtl">سارہ <span className="text-orange-600 font-bold">کتاب</span> پڑھتی ہے۔</p>
                  <p className="text-black">Sara reads <span className="text-orange-600 font-bold">a book</span>.</p>
                  <p className="text-sm text-black mt-1" dir="rtl">Object = کتاب (book)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verb Section */}
      <section id="verb" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-red-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-100 p-4 rounded-full">
                <FaLightbulb className="text-red-600 text-3xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Verb (فعل)</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">تعریف:</h3>
                <p className="text-black text-lg" dir="rtl">
                  Verb وہ ہے جو کسی کام کے ہونے کو ظاہر کرے۔
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-red-200 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-black mb-2">Action Verbs</h4>
                  <p className="text-red-600">Run, Eat, Sleep, Play</p>
                </div>
                <div className="border border-red-200 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-black mb-2">Linking Verbs</h4>
                  <p className="text-red-600">Is, Am, Are, Was, Were</p>
                </div>
                <div className="border border-red-200 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-black mb-2">Helping Verbs</h4>
                  <p className="text-red-600">Do, Does, Did, Have, Has</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12 px-4 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/verb-forms" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            View A to Z Verb Forms →
          </Link>
        </div>
      </section>
    </div>
  );
}