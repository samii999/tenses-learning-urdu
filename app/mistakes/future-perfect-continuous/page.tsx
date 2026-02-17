import Link from 'next/link';
import { FaExclamationTriangle, FaCheckCircle, FaArrowLeft, FaLightbulb, FaHourglassHalf } from 'react-icons/fa';

export default function FuturePerfectContinuousMistakesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/mistakes" className="text-white/80 hover:text-white transition duration-300">
              ← All Mistakes
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/future-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
              Future Perfect Continuous Tense
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-2">
            <FaHourglassHalf className="text-4xl" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Future Perfect Continuous Tense: Common Mistakes
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            (مستقبل مکمل جاری) - 15+ Common Mistakes with Urdu Explanations
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-8 border-pink-500">
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-pink-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-black mb-3" dir="rtl">
                  Future Perfect Continuous Tense میں اردو بولنے والوں کی عام غلطیاں
                </h2>
                <p className="text-black text-lg" dir="rtl">
                  Future Perfect Continuous Tense (مستقبل مکمل جاری) اُن کاموں کے لیے استعمال ہوتا ہے جو مستقبل میں کسی خاص وقت تک جاری رہ چکے ہوں گے۔ 
                  یہاں ہم اِس tense میں ہونے والی 15 سے زیادہ عام غلطیوں کو تفصیل سے دیکھیں گے۔
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Mistakes */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Mistake Category 1: Will Have Been Structure */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              1. Will Have Been کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">'been' لگانا بھول جانا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں اگلے سال 10 سال سے کام کر <span className="line-through text-red-600 font-bold">رہا ہوں گا</span></li>
                      <li className="text-black">I will have <span className="line-through text-red-600 font-bold">working</span> for 10 years next year</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں اگلے سال 10 سال سے کام کر <span className="text-green-600 font-bold">رہا ہوں گا</span></li>
                      <li className="text-black">I will have <span className="text-green-600 font-bold">been</span> working for 10 years next year</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Future Perfect Continuous کا فارمولا ہے: <strong>will have + been + verb(ing)</strong>
                    <br />'been' اس tense کا لازمی حصہ ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">will have been کے بعد verb کی غلط فارم</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have been <span className="line-through text-red-600 font-bold">study</span></li>
                      <li className="text-black">I will have been <span className="line-through text-red-600 font-bold">studied</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have been <span className="text-green-600 font-bold">studying</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    will have been کے بعد verb ہمیشہ <strong>ing</strong> فارم میں آتی ہے۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 2: For and Since */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              2. For اور Since میں فرق
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">For اور Since کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have been waiting <span className="line-through text-red-600 font-bold">since</span> two hours by 5 pm</li>
                      <li className="text-black">She will have been working <span className="line-through text-red-600 font-bold">for</span> 2020 by next year</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have been waiting <span className="text-green-600 font-bold">for</span> two hours by 5 pm</li>
                      <li className="text-black">She will have been working <span className="text-green-600 font-bold">since</span> 2020 by next year</li>
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
              
              {/* Mistake 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">وقت کا ذکر نہ کرنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں پڑھ رہا ہوں گا۔ (کتنی دیر سے؟ کب تک؟)</li>
                      <li className="text-black">I will have been studying. (How long? By when?)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں <span className="text-green-600 font-bold">اگلے سال تک 10 سال سے</span> پڑھ رہا ہوں گا۔</li>
                      <li className="text-black">I will have been studying <span className="text-green-600 font-bold">for 10 years by next year</span>.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 3: Duration Questions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              3. How Long کے سوالات میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">How long کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم اگلے سال تک کتنے عرصے سے پڑھ رہے ہو گے؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">How much time will you have been studying</span> by next year?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم اگلے سال تک <span className="text-green-600 font-bold">کتنے عرصے سے</span> پڑھ رہے ہو گے؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">How long will you have been studying</span> by next year?</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    مدت پوچھنے کے لیے <strong>How long</strong> استعمال کریں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 4: By and By the Time */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              4. By اور By the Time کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">By کے بجائے at یا in کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have been working <span className="line-through text-red-600 font-bold">at</span> 2025 for 10 years</li>
                      <li className="text-black">I will have been working <span className="line-through text-red-600 font-bold">in</span> next year for 5 years</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have been working <span className="text-green-600 font-bold">by</span> 2025 for 10 years</li>
                      <li className="text-black">I will have been working <span className="text-green-600 font-bold">by</span> next year for 5 years</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Future Perfect Continuous میں وقت سے پہلے کی مدت کے لیے <strong>by</strong> استعمال ہوتا ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 7 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    7
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">By the time کے بعد غلط tense</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl"><span className="line-through text-red-600 font-bold">جب تک</span> وہ آئے گا، میں 2 گھنٹے سے انتظار کر رہا ہوں گا</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">By the time</span> he will come, I will have been waiting for 2 hours</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl"><span className="text-green-600 font-bold">جب تک</span> وہ آتا ہے، میں 2 گھنٹے سے انتظار کر رہا ہوں گا</li>
                      <li className="text-black"><span className="text-green-600 font-bold">By the time</span> he comes, I will have been waiting for 2 hours</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    By the time کے بعد <strong>Present Simple</strong> استعمال ہوتا ہے، Future Perfect Continuous نہیں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 5: Future Perfect vs Future Perfect Continuous */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              5. Future Perfect اور Future Perfect Continuous میں فرق
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 8 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    8
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">دونوں tenses میں فرق نہ سمجھنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں اگلے سال تک 10 سال <span className="line-through text-red-600 font-bold">کام کر چکا ہوں گا</span> (نتیجہ؟)</li>
                      <li className="text-black">I will have worked for 10 years by next year (غلط نہیں، مگر عمل نہیں بتاتا)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں اگلے سال تک 10 سال سے <span className="text-green-600 font-bold">کام کر رہا ہوں گا</span> (عمل اہم ہے)</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">will have been working</span> for 10 years by next year</li>
                      <li className="font-urdu text-black" dir="rtl">میں اگلے سال تک کتاب <span className="text-green-600 font-bold">لکھ چکا ہوں گا</span> (نتیجہ اہم ہے)</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">will have written</span> the book by next year</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Future Perfect Continuous</strong> = عمل (action) پر فوکس، کتنی دیر سے جاری ہو گا
                    <br /><strong>Future Perfect</strong> = نتیجہ (result) پر فوکس، کیا مکمل ہو چکا ہو گا
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 6: Stative Verbs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              6. Stative Verbs کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 9 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    9
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Stative verbs کو Future Perfect Continuous میں استعمال کرنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں اگلے سال تک 10 سال سے <span className="line-through text-red-600 font-bold">جان رہا ہوں گا</span></li>
                      <li className="text-black">I will have been <span className="line-through text-red-600 font-bold">knowing</span> for 10 years by next year</li>
                      <li className="font-urdu text-black" dir="rtl">وہ شام تک 2 گھنٹے سے <span className="line-through text-red-600 font-bold">چاہ رہا ہو گا</span></li>
                      <li className="text-black">He will have been <span className="line-through text-red-600 font-bold">wanting</span> for 2 hours by evening</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں اگلے سال تک 10 سال سے <span className="text-green-600 font-bold">جانتا ہوں گا</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">will have known</span> for 10 years by next year (Future Perfect)</li>
                      <li className="font-urdu text-black" dir="rtl">وہ شام تک 2 گھنٹے سے <span className="text-green-600 font-bold">چاہتا ہو گا</span></li>
                      <li className="text-black">He <span className="text-green-600 font-bold">will have wanted</span> for 2 hours by evening (Future Perfect)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Stative verbs</strong> (know, want, like, love, hate, believe) کو continuous tenses میں استعمال نہیں کیا جاتا۔
                    <br />اُن کے ساتھ Future Perfect استعمال کریں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 7: Questions and Negatives */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              7. سوالیہ اور منفی جملوں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 10 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    10
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">سوال میں will کو subject سے پہلے نہ رکھنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم اگلے سال تک 10 سال سے کام کر رہے ہو گے؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">You will have been working</span> for 10 years by next year?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم اگلے سال تک 10 سال سے کام کر رہے ہو گے؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Will you have been working</span> for 10 years by next year?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 11 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    11
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">WH Questions میں غلط ترتیب</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black"><span className="line-through text-red-600 font-bold">How long you will have been waiting</span> by 5 pm?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black"><span className="text-green-600 font-bold">How long will you have been waiting</span> by 5 pm?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 12 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    12
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
                      <li className="text-black">I will have been working <span className="line-through text-red-600 font-bold">not</span> for 10 years by next year</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">will not have been</span> working for 10 years by next year</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">won't have been</span> working for 10 years by next year</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 8: Common Confusions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              8. دیگر عام غلطیاں
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mistake 13 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-pink-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">فعل کی غلط فارم (Spelling)</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I will have been runing</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I will have been running</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">run → running (double n)</p>
              </div>
              
              {/* Mistake 14 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-pink-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">All day, all week کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I will work all day by evening</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I will have been working all day by evening</p>
                </div>
              </div>
              
              {/* Mistake 15 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-pink-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Since point کے ساتھ غلطی</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I will have been waiting since two hours by 5 pm</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I will have been waiting for two hours by 5 pm</p>
                  <p className="text-green-600">I will have been waiting since 3 pm by 5 pm</p>
                </div>
              </div>
              
              {/* Mistake 16 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-pink-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Future Perfect Continuous میں will have been کا بار بار استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I will have been studying and will have been working</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I will have been studying and working</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Summary Table */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              Quick Summary - جلدی دہرائی
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-pink-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">❌ Common Mistake</th>
                    <th className="py-3 px-4 border-b text-left text-black">✅ Correct</th>
                    <th className="py-3 px-4 border-b text-left text-black">Rule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I will have working</td>
                    <td className="py-2 px-4 border-b text-green-600">I will have been working</td>
                    <td className="py-2 px-4 border-b text-black">will have + been + ing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I will have been work</td>
                    <td className="py-2 px-4 border-b text-green-600">I will have been working</td>
                    <td className="py-2 px-4 border-b text-black">verb + ing ضروری</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I will have been knowing</td>
                    <td className="py-2 px-4 border-b text-green-600">I will have known</td>
                    <td className="py-2 px-4 border-b text-black">Stative verbs no continuous</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">How long you will have been waiting?</td>
                    <td className="py-2 px-4 border-b text-green-600">How long will you have been waiting?</td>
                    <td className="py-2 px-4 border-b text-black">Question: will + subject + have been?</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">By the time he will come</td>
                    <td className="py-2 px-4 border-b text-green-600">By the time he comes</td>
                    <td className="py-2 px-4 border-b text-black">by the time + Present Simple</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Tips Box */}
          <div className="mb-8 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl shadow-md p-6 border-2 border-pink-300">
            <div className="flex items-start gap-4">
              <FaLightbulb className="text-yellow-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">Future Perfect Continuous Tense میں ان غلطیوں سے بچیں</h3>
                <ul className="space-y-2 text-black" dir="rtl">
                  <li className="flex items-start">
                    <span className="text-pink-600 font-bold ml-2">✓</span>
                    <span>ہمیشہ <strong>will have + been + verb(ing)</strong> کا فارمولا یاد رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 font-bold ml-2">✓</span>
                    <span>مدت کے لیے <strong>for</strong>، نقطہ آغاز کے لیے <strong>since</strong> استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 font-bold ml-2">✓</span>
                    <span>وقت سے پہلے کی مدت کے لیے <strong>by</strong> استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 font-bold ml-2">✓</span>
                    <span>By the time کے بعد <strong>Present Simple</strong> استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 font-bold ml-2">✓</span>
                    <span>Stative verbs (know, want, like) کو continuous میں استعمال نہ کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 font-bold ml-2">✓</span>
                    <span>سوالات میں will کو subject سے پہلے رکھیں</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/exercises/future-perfect-continuous-exercise-1"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises →
            </Link>
            <Link 
              href="/quizzes/future-perfect-continuous-quiz"
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Take Quiz
            </Link>
            <Link 
              href="/tenses/future-perfect-continuous"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review Lesson
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}