import Link from 'next/link';
import { FaExclamationTriangle, FaCheckCircle, FaArrowLeft, FaLightbulb, FaHistory } from 'react-icons/fa';

export default function PresentPerfectMistakesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/mistakes" className="text-white/80 hover:text-white transition duration-300">
              ← All Mistakes
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/present-perfect" className="text-white/80 hover:text-white transition duration-300">
              Present Perfect Tense
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-2">
            <FaHistory className="text-4xl" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Present Perfect Tense: Common Mistakes
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            (حال مکمل) - 20+ Common Mistakes with Urdu Explanations
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-8 border-purple-500">
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-purple-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-black mb-3" dir="rtl">
                  Present Perfect Tense میں اردو بولنے والوں کی عام غلطیاں
                </h2>
                <p className="text-black text-lg" dir="rtl">
                  Present Perfect Tense (حال مکمل) اُن کاموں کے لیے استعمال ہوتا ہے جو ماضی میں ہوئے مگر اُن کا اثر حال پر موجود ہے۔ 
                  یہاں ہم اِس tense میں ہونے والی 20 سے زیادہ عام غلطیوں کو تفصیل سے دیکھیں گے۔
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Mistakes */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Mistake Category 1: Have/Has Confusion */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              1. Have اور Has کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Subject کے مطابق have/has کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ کھانا کھا چکا <span className="line-through text-red-600 font-bold">ہے</span></li>
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">have</span> eaten food</li>
                      <li className="font-urdu text-black" dir="rtl">میں جا چکا <span className="line-through text-red-600 font-bold">ہے</span></li>
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">has</span> gone</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ کھانا کھا چکا <span className="text-green-600 font-bold">ہے</span></li>
                      <li className="text-black">He <span className="text-green-600 font-bold">has</span> eaten food</li>
                      <li className="font-urdu text-black" dir="rtl">میں جا چکا <span className="text-green-600 font-bold">ہوں</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">have</span> gone</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>He/She/It</strong> کے ساتھ <strong>has</strong> استعمال ہوتا ہے۔
                    <br /><strong>I/You/We/They</strong> کے ساتھ <strong>have</strong> استعمال ہوتا ہے۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 2: Past Participle (3rd Form) */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              2. Verb کی تیسری فارم (Past Participle) میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">verb کی پہلی یا دوسری فارم کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have <span className="line-through text-red-600 font-bold">eat</span></li>
                      <li className="text-black">She has <span className="line-through text-red-600 font-bold">went</span></li>
                      <li className="text-black">They have <span className="line-through text-red-600 font-bold">wrote</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have <span className="text-green-600 font-bold">eaten</span></li>
                      <li className="text-black">She has <span className="text-green-600 font-bold">gone</span></li>
                      <li className="text-black">They have <span className="text-green-600 font-bold">written</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Present Perfect میں ہمیشہ verb کی <strong>تیسری فارم</strong> (Past Participle) استعمال ہوتی ہے۔
                    <br /> Irregular verbs کی تیسری فارم یاد کرنا ضروری ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Regular verbs میں ed کی جگہ غلط فارم</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have <span className="line-through text-red-600 font-bold">studied</span> (یہ درست ہے!)</li>
                      <li className="text-black">She has <span className="line-through text-red-600 font-bold">stoped</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have <span className="text-green-600 font-bold">studied</span> (study → studied)</li>
                      <li className="text-black">She has <span className="text-green-600 font-bold">stopped</span> (stop → stopped)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>y</strong> سے ختم ہونے والے verbs: y کو i کر کے <strong>ed</strong> (study → studied)
                    <br /><strong>CVC</strong> والے verbs: آخری consonant double کریں (stop → stopped)
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 3: Time Expressions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              3. وقت کے الفاظ (Time Expressions) میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">ماضی کے مخصوص وقت کا استعمال (yesterday, last week)</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have seen him <span className="line-through text-red-600 font-bold">yesterday</span></li>
                      <li className="text-black">She has gone <span className="line-through text-red-600 font-bold">last week</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I saw him <span className="text-green-600 font-bold">yesterday</span> (Past Simple)</li>
                      <li className="text-black">I have seen him <span className="text-green-600 font-bold">today</span></li>
                      <li className="text-black">She went <span className="text-green-600 font-bold">last week</span> (Past Simple)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Present Perfect <strong>ماضی کے مخصوص وقت</strong> (yesterday, last week, in 2020) کے ساتھ استعمال نہیں ہوتا۔
                    <br />اُن کے ساتھ Past Simple استعمال کریں۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Since اور For کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have lived here <span className="line-through text-red-600 font-bold">since</span> 5 years</li>
                      <li className="text-black">She has worked here <span className="line-through text-red-600 font-bold">for</span> 2020</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have lived here <span className="text-green-600 font-bold">for</span> 5 years</li>
                      <li className="text-black">She has worked here <span className="text-green-600 font-bold">since</span> 2020</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>For</strong> + مدت (for two hours, for five years)
                    <br /><strong>Since</strong> + نقطہ آغاز (since morning, since 2020, since Monday)
                  </p>
                </div>
              </div>
              
              {/* Mistake 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Already, Just, Yet کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have <span className="line-through text-red-600 font-bold">yet</span> finished</li>
                      <li className="text-black">I have finished <span className="line-through text-red-600 font-bold">yet</span> (negative میں صحیح ہے)</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">Already</span> have you finished?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have <span className="text-green-600 font-bold">already</span> finished</li>
                      <li className="text-black">I have <span className="text-green-600 font-bold">just</span> finished</li>
                      <li className="text-black">I haven't finished <span className="text-green-600 font-bold">yet</span></li>
                      <li className="text-black">Have you finished <span className="text-green-600 font-bold">yet</span>?</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Already</strong>: have/has کے بعد (مثبت جملوں میں)
                    <br /><strong>Just</strong>: have/has کے بعد (ابھی ہوا کام)
                    <br /><strong>Yet</strong>: منفی اور سوالیہ جملوں کے آخر میں
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 4: Past Simple Confusion */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              4. Past Simple کے ساتھ فرق نہ سمجھنا
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 7 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    7
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Present Perfect اور Past Simple میں فرق نہ سمجھنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">have gone</span> to London last year</li>
                      <li className="text-black">She <span className="line-through text-red-600 font-bold">has visited</span> the museum yesterday</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">went</span> to London last year</li>
                      <li className="text-black">She <span className="text-green-600 font-bold">visited</span> the museum yesterday</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">have been</span> to London (تجربہ)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Past Simple</strong>: ماضی کا مخصوص وقت (yesterday, last year)
                    <br /><strong>Present Perfect</strong>: نامعلوم وقت، تجربہ، حالیہ اثر
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 5: Been vs Gone */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              5. Been اور Gone میں فرق
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 8 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    8
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Been اور Gone کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ لندن گیا ہوا ہے (وہ وہاں ہے)</li>
                      <li className="text-black">He has <span className="line-through text-red-600 font-bold">been</span> to London (غلط معنی)</li>
                      <li className="font-urdu text-black" dir="rtl">وہ لندن جا چکا ہے (واپس آ گیا)</li>
                      <li className="text-black">He has <span className="line-through text-red-600 font-bold">gone</span> to London (غلط معنی)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ لندن <span className="text-green-600 font-bold">گیا ہوا ہے</span> (ابھی وہیں ہے)</li>
                      <li className="text-black">He has <span className="text-green-600 font-bold">gone</span> to London</li>
                      <li className="font-urdu text-black" dir="rtl">وہ لندن <span className="text-green-600 font-bold">جا چکا ہے</span> (واپس آ گیا)</li>
                      <li className="text-black">He has <span className="text-green-600 font-bold">been</span> to London</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Gone to</strong>: گیا ہوا ہے اور وہیں ہے (ابھی واپس نہیں آیا)
                    <br /><strong>Been to</strong>: جا چکا ہے اور واپس آ گیا ہے (تجربہ)
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 6: Questions and Negatives */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              6. سوالیہ اور منفی جملوں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 9 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    9
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">سوال میں have/has کو subject سے پہلے نہ رکھنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم نے کھانا کھایا ہے؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">You have eaten</span> food?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم نے کھانا کھایا ہے؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Have you eaten</span> food?</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    سوال بنانے کے لیے <strong>have/has</strong> کو subject سے پہلے رکھیں۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 10 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    10
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">منفی جملوں میں not کی غلط جگہ</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have eaten <span className="line-through text-red-600 font-bold">not</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">have not</span> eaten</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">haven't</span> eaten</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 7: Common Confusions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              7. دیگر عام غلطیاں
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mistake 11 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-purple-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Never کے ساتھ not کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I haven't never been there</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I have never been there</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">Never کے ساتھ not استعمال نہیں ہوتا (double negative)</p>
              </div>
              
              {/* Mistake 12 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-purple-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Ever کا غلط استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I have ever been there</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">Have you ever been there?</p>
                  <p className="text-green-600">I have never been there</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">Ever صرف سوال اور منفی جملوں میں استعمال ہوتا ہے</p>
              </div>
              
              {/* Mistake 13 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-purple-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">This is the first time کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">This is the first time I eat here</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">This is the first time I have eaten here</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">This is the first time کے بعد Present Perfect استعمال ہوتا ہے</p>
              </div>
              
              {/* Mistake 14 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-purple-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Dead - Died - Dead کا فرق</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">He has dead</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">He has died</p>
                  <p className="text-green-600">He is dead</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">die (verb) → died (past), dead (adjective)</p>
              </div>
            </div>
          </div>
          
          {/* Irregular Verbs Table */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              Common Irregular Verbs - 3rd Form
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">Base Form</th>
                    <th className="py-3 px-4 border-b text-left text-black">Past Simple (2nd)</th>
                    <th className="py-3 px-4 border-b text-left text-black">Past Participle (3rd)</th>
                    <th className="py-3 px-4 border-b text-left text-black">Urdu Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-2 px-4 border-b">go</td><td className="py-2 px-4 border-b">went</td><td className="py-2 px-4 border-b text-purple-600 font-bold">gone</td><td className="py-2 px-4 border-b" dir="rtl">جانا</td></tr>
                  <tr><td className="py-2 px-4 border-b">eat</td><td className="py-2 px-4 border-b">ate</td><td className="py-2 px-4 border-b text-purple-600 font-bold">eaten</td><td className="py-2 px-4 border-b" dir="rtl">کھانا</td></tr>
                  <tr><td className="py-2 px-4 border-b">see</td><td className="py-2 px-4 border-b">saw</td><td className="py-2 px-4 border-b text-purple-600 font-bold">seen</td><td className="py-2 px-4 border-b" dir="rtl">دیکھنا</td></tr>
                  <tr><td className="py-2 px-4 border-b">write</td><td className="py-2 px-4 border-b">wrote</td><td className="py-2 px-4 border-b text-purple-600 font-bold">written</td><td className="py-2 px-4 border-b" dir="rtl">لکھنا</td></tr>
                  <tr><td className="py-2 px-4 border-b">take</td><td className="py-2 px-4 border-b">took</td><td className="py-2 px-4 border-b text-purple-600 font-bold">taken</td><td className="py-2 px-4 border-b" dir="rtl">لینا</td></tr>
                  <tr><td className="py-2 px-4 border-b">do</td><td className="py-2 px-4 border-b">did</td><td className="py-2 px-4 border-b text-purple-600 font-bold">done</td><td className="py-2 px-4 border-b" dir="rtl">کرنا</td></tr>
                  <tr><td className="py-2 px-4 border-b">buy</td><td className="py-2 px-4 border-b">bought</td><td className="py-2 px-4 border-b text-purple-600 font-bold">bought</td><td className="py-2 px-4 border-b" dir="rtl">خریدنا</td></tr>
                  <tr><td className="py-2 px-4 border-b">drink</td><td className="py-2 px-4 border-b">drank</td><td className="py-2 px-4 border-b text-purple-600 font-bold">drunk</td><td className="py-2 px-4 border-b" dir="rtl">پینا</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Summary Table */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              Quick Summary - جلدی دہرائی
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">❌ Common Mistake</th>
                    <th className="py-3 px-4 border-b text-left text-black">✅ Correct</th>
                    <th className="py-3 px-4 border-b text-left text-black">Rule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I have went</td>
                    <td className="py-2 px-4 border-b text-green-600">I have gone</td>
                    <td className="py-2 px-4 border-b text-black">3rd form (gone)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">He have eaten</td>
                    <td className="py-2 px-4 border-b text-green-600">He has eaten</td>
                    <td className="py-2 px-4 border-b text-black">He = has</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I have seen him yesterday</td>
                    <td className="py-2 px-4 border-b text-green-600">I saw him yesterday</td>
                    <td className="py-2 px-4 border-b text-black">Past Simple with yesterday</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I have been to London (ابھی وہیں ہے)</td>
                    <td className="py-2 px-4 border-b text-green-600">I have gone to London</td>
                    <td className="py-2 px-4 border-b text-black">Gone = still there</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I have never been? (سوال)</td>
                    <td className="py-2 px-4 border-b text-green-600">Have you ever been?</td>
                    <td className="py-2 px-4 border-b text-black">Ever for questions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Tips Box */}
          <div className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md p-6 border-2 border-purple-300">
            <div className="flex items-start gap-4">
              <FaLightbulb className="text-yellow-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">Present Perfect Tense میں ان غلطیوں سے بچیں</h3>
                <ul className="space-y-2 text-black" dir="rtl">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold ml-2">✓</span>
                    <span>He/She/It کے ساتھ <strong>has</strong> استعمال کریں، باقی کے ساتھ <strong>have</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold ml-2">✓</span>
                    <span>ہمیشہ verb کی <strong>تیسری فارم</strong> استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold ml-2">✓</span>
                    <span>yesterday, last week کے ساتھ Past Simple استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold ml-2">✓</span>
                    <span><strong>Been</strong> (واپس آ گیا) اور <strong>Gone</strong> (ابھی وہیں ہے) کا فرق یاد رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold ml-2">✓</span>
                    <span><strong>Ever</strong> صرف سوال میں، <strong>Never</strong> منفی معنی میں</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/exercises/present-perfect-exercise-1"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises →
            </Link>
            <Link 
              href="/quizzes/present-perfect-quiz"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Take Quiz
            </Link>
            <Link 
              href="/tenses/present-perfect"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}