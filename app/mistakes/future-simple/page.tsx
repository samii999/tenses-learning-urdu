import Link from 'next/link';
import { FaExclamationTriangle, FaCheckCircle, FaArrowLeft, FaLightbulb, FaClock } from 'react-icons/fa';

export default function FutureSimpleMistakesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/mistakes" className="text-white/80 hover:text-white transition duration-300">
              ← All Mistakes
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/future-simple" className="text-white/80 hover:text-white transition duration-300">
              Future Simple Tense
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-2">
            <FaClock className="text-4xl" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Future Simple Tense: Common Mistakes
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            (مستقبل مطلق) - 20+ Common Mistakes with Urdu Explanations
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-8 border-green-500">
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-green-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-black mb-3" dir="rtl">
                  Future Simple Tense میں اردو بولنے والوں کی عام غلطیاں
                </h2>
                <p className="text-black text-lg" dir="rtl">
                  Future Simple Tense (مستقبل مطلق) اُن کاموں کے لیے استعمال ہوتا ہے جو مستقبل میں ہوں گے۔ 
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
          
          {/* Mistake Category 1: Will + Verb */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              1. Will کے بعد Verb کی غلط فارم
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">will کے بعد verb کی دوسری یا تیسری فارم کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کل <span className="line-through text-red-600 font-bold">گیا</span> گا</li>
                      <li className="text-black">I will <span className="line-through text-red-600 font-bold">went</span> tomorrow</li>
                      <li className="text-black">I will <span className="line-through text-red-600 font-bold">gone</span> tomorrow</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کل <span className="text-green-600 font-bold">جاؤں</span> گا</li>
                      <li className="text-black">I will <span className="text-green-600 font-bold">go</span> tomorrow</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    will کے بعد verb ہمیشہ <strong>پہلی فارم</strong> (base form) میں آتی ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">will کے بعد 'to' کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will <span className="line-through text-red-600 font-bold">to go</span></li>
                      <li className="text-black">She will <span className="line-through text-red-600 font-bold">to come</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will <span className="text-green-600 font-bold">go</span></li>
                      <li className="text-black">She will <span className="text-green-600 font-bold">come</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    will کے بعد کبھی 'to' نہیں آتا۔ براہ راست verb آتی ہے۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 2: Will vs Going To */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              2. Will اور Going To میں فرق
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">پہلے سے طے شدہ منصوبے کے لیے will کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں نے ٹکٹ خرید لیے ہیں۔ میں کل <span className="line-through text-red-600 font-bold">جاؤں گا</span>۔</li>
                      <li className="text-black">I have bought tickets. I <span className="line-through text-red-600 font-bold">will go</span> tomorrow.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں نے ٹکٹ خرید لیے ہیں۔ میں کل <span className="text-green-600 font-bold">جانے والا ہوں</span>۔</li>
                      <li className="text-black">I have bought tickets. I <span className="text-green-600 font-bold">am going to go</span> tomorrow.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Going to</strong> = پہلے سے طے شدہ منصوبے
                    <br /><strong>Will</strong> = اس وقت کیا گیا فیصلہ
                  </p>
                </div>
              </div>
              
              {/* Mistake 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">اس وقت کیے گئے فیصلے کے لیے going to کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">فون کی گھنٹی بج رہی ہے۔ میں <span className="line-through text-red-600 font-bold">اٹھانے والا ہوں</span>۔</li>
                      <li className="text-black">The phone is ringing. I <span className="line-through text-red-600 font-bold">am going to</span> answer it.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">فون کی گھنٹی بج رہی ہے۔ میں <span className="text-green-600 font-bold">اٹھاؤں گا</span>۔</li>
                      <li className="text-black">The phone is ringing. I <span className="text-green-600 font-bold">will</span> answer it.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 3: Going To Structure */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              3. Going To کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">going to کے بعد verb کی غلط فارم</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I am going to <span className="line-through text-red-600 font-bold">went</span></li>
                      <li className="text-black">She is going to <span className="line-through text-red-600 font-bold">gone</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I am going to <span className="text-green-600 font-bold">go</span></li>
                      <li className="text-black">She is going to <span className="text-green-600 font-bold">come</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    going to کے بعد verb ہمیشہ <strong>پہلی فارم</strong> میں آتی ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">going to میں am/is/are کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">is</span> going to go</li>
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">are</span> going to come</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">am</span> going to go</li>
                      <li className="text-black">He <span className="text-green-600 font-bold">is</span> going to come</li>
                      <li className="text-black">They <span className="text-green-600 font-bold">are</span> going to play</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 4: Questions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              4. سوالیہ جملوں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 7 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    7
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
                      <li className="font-urdu text-black" dir="rtl">تم کل آؤ گے؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">You will come</span> tomorrow?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم کل آؤ گے؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Will you come</span> tomorrow?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 8 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    8
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
                      <li className="text-black"><span className="line-through text-red-600 font-bold">Where you will go</span>?</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">What you will do</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black"><span className="text-green-600 font-bold">Where will you go</span>?</li>
                      <li className="text-black"><span className="text-green-600 font-bold">What will you do</span>?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 9 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    9
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Going to کے سوالات میں غلطیاں</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم جانے والے ہو؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">You are going to go</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم جانے والے ہو؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Are you going to go</span>?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 5: Negative Sentences */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              5. منفی جملوں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 10 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    10
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">will not کی غلط جگہ</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will go <span className="line-through text-red-600 font-bold">not</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">will not</span> go</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">won't</span> go</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 11 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    11
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">going to کے منفی جملوں میں غلطیاں</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I am going to <span className="line-through text-red-600 font-bold">not go</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I am <span className="text-green-600 font-bold">not going to go</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">'m not going to go</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 6: Time Expressions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              6. وقت کے الفاظ (Time Expressions) میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 12 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    12
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
                      <li className="font-urdu text-black" dir="rtl">میں جاؤں گا۔ (کب؟)</li>
                      <li className="text-black">I will go. (When?)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں <span className="text-green-600 font-bold">کل</span> جاؤں گا۔</li>
                      <li className="text-black">I will go <span className="text-green-600 font-bold">tomorrow</span>.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 13 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    13
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">وقت کے الفاظ کی غلط جگہ</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black"><span className="line-through text-red-600 font-bold">Tomorrow</span> I will go</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will go <span className="text-green-600 font-bold">tomorrow</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 7: Promises and Offers */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              7. وعدوں اور پیشکشوں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 14 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    14
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">وعدوں کے لیے Present Continuous کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں تمہاری مدد <span className="line-through text-red-600 font-bold">کر رہا ہوں</span>۔ (وعدہ)</li>
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">am helping</span> you. (promise)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں تمہاری مدد <span className="text-green-600 font-bold">کروں گا</span>۔</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">will help</span> you.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 15 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    15
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">پیشکش کے لیے going to کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا میں دروازہ کھولنے والا ہوں؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">Am I going to open</span> the door?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا میں دروازہ <span className="text-green-600 font-bold">کھولوں</span>؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Shall I open</span> the door?</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Will I open</span> the door?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 8: Common Confusions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              8. دیگر عام غلطیاں
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mistake 16 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-green-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Shall کا غلط استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">He shall come tomorrow</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">He will come tomorrow</p>
                  <p className="text-green-600">I shall come / We shall come (formal)</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">Shall صرف I اور We کے ساتھ استعمال ہوتا ہے (رسمی)</p>
              </div>
              
              {/* Mistake 17 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-green-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">May, Might, Will میں فرق</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I will rain tomorrow (یقین)</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">It will rain tomorrow (یقین)</p>
                  <p className="text-green-600">It may rain tomorrow (امکان)</p>
                  <p className="text-green-600">It might rain tomorrow (کم امکان)</p>
                </div>
              </div>
              
              {/* Mistake 18 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-green-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Will کے بعد ing کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I will going tomorrow</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I will go tomorrow</p>
                  <p className="text-green-600">I will be going tomorrow (Future Continuous)</p>
                </div>
              </div>
              
              {/* Mistake 19 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-green-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">When, If کے ساتھ will کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">When he will come, I will go</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">When he comes, I will go</p>
                  <p className="text-green-600">If he comes, I will go</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">When/If کے بعد will استعمال نہیں ہوتا</p>
              </div>
            </div>
          </div>
          
          {/* Summary Table */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              Quick Summary - جلدی دہرائی
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-green-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">❌ Common Mistake</th>
                    <th className="py-3 px-4 border-b text-left text-black">✅ Correct</th>
                    <th className="py-3 px-4 border-b text-left text-black">Rule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I will went</td>
                    <td className="py-2 px-4 border-b text-green-600">I will go</td>
                    <td className="py-2 px-4 border-b text-black">will + 1st form</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I am going to went</td>
                    <td className="py-2 px-4 border-b text-green-600">I am going to go</td>
                    <td className="py-2 px-4 border-b text-black">going to + 1st form</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I will to go</td>
                    <td className="py-2 px-4 border-b text-green-600">I will go</td>
                    <td className="py-2 px-4 border-b text-black">will کے بعد to نہیں</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I have bought tickets. I will go.</td>
                    <td className="py-2 px-4 border-b text-green-600">I am going to go.</td>
                    <td className="py-2 px-4 border-b text-black">Planned = going to</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">You will go?</td>
                    <td className="py-2 px-4 border-b text-green-600">Will you go?</td>
                    <td className="py-2 px-4 border-b text-black">Question: Will + subject?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Tips Box */}
          <div className="mb-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-md p-6 border-2 border-green-300">
            <div className="flex items-start gap-4">
              <FaLightbulb className="text-yellow-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">Future Simple Tense میں ان غلطیوں سے بچیں</h3>
                <ul className="space-y-2 text-black" dir="rtl">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>will کے بعد ہمیشہ verb کی <strong>پہلی فارم</strong> استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span><strong>پہلے سے طے شدہ منصوبے</strong> کے لیے going to استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span><strong>اس وقت کا فیصلہ</strong> اور <strong>وعدہ</strong> کے لیے will استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>سوالات میں will کو subject سے پہلے رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>When اور If کے بعد will استعمال نہ کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>وقت کا ذکر کریں (tomorrow, next week, soon)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/exercises-in-urdu/future-simple-exercise-1"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises →
            </Link>
            <Link 
              href="/quizzes/future-simple-quiz"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Take Quiz
            </Link>
            <Link 
              href="/tenses-in-urdu/future-simple"
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