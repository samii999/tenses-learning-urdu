import Link from 'next/link';
import { FaExclamationTriangle, FaCheckCircle, FaArrowLeft, FaLightbulb, FaHourglassHalf } from 'react-icons/fa';

export default function PastPerfectContinuousMistakesPage() {
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
           <Link href="/tenses-in-urdu/past-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
              Past Perfect Continuous Tense
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-2">
            <FaHourglassHalf className="text-4xl" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Past Perfect Continuous Tense: Common Mistakes
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            (ماضی مکمل جاری) - 15+ Common Mistakes with Urdu Explanations
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
                  Past Perfect Continuous Tense میں اردو بولنے والوں کی عام غلطیاں
                </h2>
                <p className="text-black text-lg" dir="rtl">
                  Past Perfect Continuous Tense (ماضی مکمل جاری) اُن کاموں کے لیے استعمال ہوتا ہے جو ماضی میں کسی اور کام سے پہلے شروع ہو کر جاری رہے اور پھر ماضی میں ہی ختم ہوئے۔ 
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
          
          {/* Mistake Category 1: Had Been Structure */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              1. Had Been کا غلط استعمال
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
                      <li className="font-urdu text-black" dir="rtl">میں دو گھنٹے سے پڑھ <span className="line-through text-red-600 font-bold">رہا تھا</span></li>
                      <li className="text-black">I had <span className="line-through text-red-600 font-bold">studying</span> for two hours</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں دو گھنٹے سے پڑھ <span className="text-green-600 font-bold">رہا تھا</span></li>
                      <li className="text-black">I had <span className="text-green-600 font-bold">been</span> studying for two hours</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Past Perfect Continuous کا فارمولا ہے: <strong>had + been + verb(ing)</strong>
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
                  <h3 className="text-xl font-bold text-black" dir="rtl">had been کے بعد verb کی غلط فارم</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I had been <span className="line-through text-red-600 font-bold">study</span></li>
                      <li className="text-black">I had been <span className="line-through text-red-600 font-bold">studied</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I had been <span className="text-green-600 font-bold">studying</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    had been کے بعد verb ہمیشہ <strong>ing</strong> فارم میں آتی ہے۔
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
                      <li className="text-black">I had been waiting <span className="line-through text-red-600 font-bold">since</span> two hours</li>
                      <li className="text-black">She had been working <span className="line-through text-red-600 font-bold">for</span> 2020</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I had been waiting <span className="text-green-600 font-bold">for</span> two hours</li>
                      <li className="text-black">She had been working <span className="text-green-600 font-bold">since</span> 2020</li>
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
                      <li className="font-urdu text-black" dir="rtl">میں پڑھ رہا تھا۔ (کتنی دیر سے؟)</li>
                      <li className="text-black">I had been studying. (How long?)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں <span className="text-green-600 font-bold">دو گھنٹے سے</span> پڑھ رہا تھا۔</li>
                      <li className="text-black">I had been studying <span className="text-green-600 font-bold">for two hours</span>.</li>
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
                      <li className="font-urdu text-black" dir="rtl">تم کتنے عرصے سے پڑھ رہے تھے؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">How much time you had been studying</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم <span className="text-green-600 font-bold">کتنے عرصے سے</span> پڑھ رہے تھے؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">How long had you been studying</span>?</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    مدت پوچھنے کے لیے <strong>How long</strong> استعمال کریں، اور had کو subject سے پہلے رکھیں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 4: Past Perfect vs Past Perfect Continuous */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              4. Past Perfect اور Past Perfect Continuous میں فرق
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
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
                      <li className="font-urdu text-black" dir="rtl">میں دو گھنٹے پڑھ چکا تھا۔ (نتیجہ نہیں بتا سکتے)</li>
                      <li className="text-black">I had studied for two hours. (غلط نہیں، مگر عمل نہیں بتاتا)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں دو گھنٹے سے <span className="text-green-600 font-bold">پڑھ رہا تھا</span> (عمل اہم ہے)</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">had been studying</span> for two hours</li>
                      <li className="font-urdu text-black" dir="rtl">میں نے کتاب <span className="text-green-600 font-bold">پڑھ لی تھی</span> (نتیجہ اہم ہے)</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">had read</span> the book</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Past Perfect Continuous</strong> = عمل (action) پر فوکس، کتنی دیر سے جاری تھا
                    <br /><strong>Past Perfect</strong> = نتیجہ (result) پر فوکس، کیا ہوا
                  </p>
                </div>
              </div>
              
              {/* Mistake 7 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    7
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">کام مکمل ہو چکا ہو تو Continuous کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں نے کتاب پڑھ لی تھی (کام مکمل) → <span className="line-through text-red-600 font-bold">I had been reading the book</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں نے کتاب پڑھ لی تھی (کام مکمل)</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">had read</span> the book</li>
                      <li className="font-urdu text-black" dir="rtl">میں دو گھنٹے سے پڑھ رہا تھا (جاری)</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">had been reading</span> for two hours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 5: Stative Verbs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              5. Stative Verbs کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 8 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    8
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Stative verbs کو Past Perfect Continuous میں استعمال کرنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں دو گھنٹے سے <span className="line-through text-red-600 font-bold">جان رہا تھا</span></li>
                      <li className="text-black">I had been <span className="line-through text-red-600 font-bold">knowing</span> for two hours</li>
                      <li className="font-urdu text-black" dir="rtl">وہ صبح سے <span className="line-through text-red-600 font-bold">چاہ رہا تھا</span></li>
                      <li className="text-black">He had been <span className="line-through text-red-600 font-bold">wanting</span> since morning</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں دو گھنٹے سے <span className="text-green-600 font-bold">جانتا تھا</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">had known</span> for two hours (Past Perfect)</li>
                      <li className="font-urdu text-black" dir="rtl">وہ صبح سے <span className="text-green-600 font-bold">چاہتا تھا</span></li>
                      <li className="text-black">He <span className="text-green-600 font-bold">had wanted</span> since morning (Past Perfect)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Stative verbs</strong> (know, want, like, love, hate, believe, understand) کو continuous tenses میں استعمال نہیں کیا جاتا۔
                    <br />اُن کے ساتھ Past Perfect استعمال کریں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 6: Questions and Negatives */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              6. سوالیہ اور منفی جملوں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 9 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    9
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">سوال میں had کو subject سے پہلے نہ رکھنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم دو گھنٹے سے پڑھ رہے تھے؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">You had been studying</span> for two hours?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم دو گھنٹے سے پڑھ رہے تھے؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Had you been studying</span> for two hours?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 10 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    10
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
                      <li className="text-black"><span className="line-through text-red-600 font-bold">How long you had been waiting</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black"><span className="text-green-600 font-bold">How long had you been waiting</span>?</li>
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
                  <h3 className="text-xl font-bold text-black" dir="rtl">منفی جملوں میں not کی غلط جگہ</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I had been studying <span className="line-through text-red-600 font-bold">not</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">had not been</span> studying</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">hadn't been</span> studying</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 7: Cause and Effect */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              7. وجہ اور نتیجہ (Cause and Effect) میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 12 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    12
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">وجہ بتانے کے لیے غلط tense کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ تھکا ہوا تھا کیونکہ وہ <span className="line-through text-red-600 font-bold">دوڑا</span></li>
                      <li className="text-black">He was tired because he <span className="line-through text-red-600 font-bold">ran</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ تھکا ہوا تھا کیونکہ وہ <span className="text-green-600 font-bold">دو گھنٹے سے دوڑ رہا تھا</span></li>
                      <li className="text-black">He was tired because he <span className="text-green-600 font-bold">had been running</span> for two hours</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    کسی کام کی وجہ بتانے کے لیے Past Perfect Continuous استعمال کریں۔ یہ بتاتا ہے کہ کام کتنے عرصے سے جاری تھا جس کی وجہ سے نتیجہ سامنے آیا۔
                  </p>
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
                  <p className="text-red-600 line-through">I had been runing</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I had been running</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">run → running (آخری consonant double)</p>
              </div>
              
              {/* Mistake 14 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-pink-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">All day, all week کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I worked all day before he came</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I had been working all day before he came</p>
                </div>
              </div>
              
              {/* Mistake 15 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-pink-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Since point کے ساتھ غلطی</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I had been waiting since two hours</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I had been waiting for two hours</p>
                  <p className="text-green-600">I had been waiting since 2 pm</p>
                </div>
              </div>
              
              {/* Mistake 16 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-pink-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Past Perfect Continuous میں had کا بار بار استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I had been studying and had been working</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I had been studying and working</p>
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
                    <td className="py-2 px-4 border-b text-red-600">I had working</td>
                    <td className="py-2 px-4 border-b text-green-600">I had been working</td>
                    <td className="py-2 px-4 border-b text-black">had + been + ing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I had been work</td>
                    <td className="py-2 px-4 border-b text-green-600">I had been working</td>
                    <td className="py-2 px-4 border-b text-black">verb + ing ضروری</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I had been knowing</td>
                    <td className="py-2 px-4 border-b text-green-600">I had known</td>
                    <td className="py-2 px-4 border-b text-black">Stative verbs no continuous</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">How long you had been waiting?</td>
                    <td className="py-2 px-4 border-b text-green-600">How long had you been waiting?</td>
                    <td className="py-2 px-4 border-b text-black">Question: had + subject + been?</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I had been waited</td>
                    <td className="py-2 px-4 border-b text-green-600">I had been waiting</td>
                    <td className="py-2 px-4 border-b text-black">ing form لازمی</td>
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
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">Past Perfect Continuous Tense میں ان غلطیوں سے بچیں</h3>
                <ul className="space-y-2 text-black" dir="rtl">
                  <li className="flex items-start">
                    <span className="text-pink-600 font-bold ml-2">✓</span>
                    <span>ہمیشہ <strong>had + been + verb(ing)</strong> کا فارمولا یاد رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 font-bold ml-2">✓</span>
                    <span>مدت کے لیے <strong>for</strong>، نقطہ آغاز کے لیے <strong>since</strong> استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 font-bold ml-2">✓</span>
                    <span>Stative verbs (know, want, like) کو continuous میں استعمال نہ کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 font-bold ml-2">✓</span>
                    <span>وجہ بتانے کے لیے Past Perfect Continuous استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 font-bold ml-2">✓</span>
                    <span>سوالات میں had کو subject سے پہلے رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 font-bold ml-2">✓</span>
                    <span>How long سے سوال پوچھیں، How much time سے نہیں</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/exercises-in-urdu/past-perfect-continuous-exercise-1"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises →
            </Link>
            <Link 
              href="/quizzes/past-perfect-continuous-quiz"
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Take Quiz
            </Link>
            <Link 
              href="/tenses-in-urdu/past-perfect-continuous"
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