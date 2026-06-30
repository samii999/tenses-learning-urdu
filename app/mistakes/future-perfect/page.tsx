import Link from 'next/link';
import { FaExclamationTriangle, FaCheckCircle, FaArrowLeft, FaLightbulb, FaHourglassHalf } from 'react-icons/fa';

export default function FuturePerfectMistakesPage() {
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
            <Link href="/tenses-in-urdu/future-perfect" className="text-white/80 hover:text-white transition duration-300">
              Future Perfect Tense
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-2">
            <FaHourglassHalf className="text-4xl" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Future Perfect Tense: Common Mistakes
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            (مستقبل مکمل) - 15+ Common Mistakes with Urdu Explanations
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
                  Future Perfect Tense میں اردو بولنے والوں کی عام غلطیاں
                </h2>
                <p className="text-black text-lg" dir="rtl">
                  Future Perfect Tense (مستقبل مکمل) اُن کاموں کے لیے استعمال ہوتا ہے جو مستقبل میں کسی خاص وقت تک مکمل ہو چکے ہوں گے۔ 
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
          
          {/* Mistake Category 1: Will Have + 3rd Form */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              1. Will Have کے بعد Verb کی غلط فارم
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">will have کے بعد verb کی پہلی یا دوسری فارم کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کل تک کھانا کھا <span className="line-through text-red-600 font-bold">چکا ہوں گا</span></li>
                      <li className="text-black">I will have <span className="line-through text-red-600 font-bold">eat</span> food by tomorrow</li>
                      <li className="text-black">I will have <span className="line-through text-red-600 font-bold">ate</span> food by tomorrow</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کل تک کھانا کھا <span className="text-green-600 font-bold">چکا ہوں گا</span></li>
                      <li className="text-black">I will have <span className="text-green-600 font-bold">eaten</span> food by tomorrow</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Future Perfect میں will have کے بعد ہمیشہ verb کی <strong>تیسری فارم</strong> (Past Participle) استعمال ہوتی ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Regular verbs میں ed کی غلط فارم</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have <span className="line-through text-red-600 font-bold">stoped</span></li>
                      <li className="text-black">She will have <span className="line-through text-red-600 font-bold">studyed</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have <span className="text-green-600 font-bold">stopped</span></li>
                      <li className="text-black">She will have <span className="text-green-600 font-bold">studied</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <ul className="list-disc list-inside text-black space-y-1" dir="rtl">
                    <li><strong>CVC</strong> والے verbs: آخری consonant double کریں (stop → stopped)</li>
                    <li><strong>y</strong> سے ختم ہونے والے verbs: y کو i کر کے <strong>ed</strong> (study → studied)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 2: By and By the Time */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              2. By اور By the Time کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
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
                      <li className="text-black">I will have finished <span className="line-through text-red-600 font-bold">at</span> 7 pm</li>
                      <li className="text-black">I will have finished <span className="line-through text-red-600 font-bold">in</span> tomorrow</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have finished <span className="text-green-600 font-bold">by</span> 7 pm</li>
                      <li className="text-black">I will have finished <span className="text-green-600 font-bold">by</span> tomorrow</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Future Perfect میں وقت سے پہلے مکمل ہونے کے لیے <strong>by</strong> استعمال ہوتا ہے۔
                    <br />at (وقت نقطہ) اور in (مدت) استعمال نہیں ہوتے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
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
                      <li className="font-urdu text-black" dir="rtl"><span className="line-through text-red-600 font-bold">جب تک</span> وہ آئے گا، میں جا چکا ہوں گا</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">By the time</span> he will come, I will have left</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl"><span className="text-green-600 font-bold">جب تک</span> وہ آتا ہے، میں جا چکا ہوں گا</li>
                      <li className="text-black"><span className="text-green-600 font-bold">By the time</span> he comes, I will have left</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    By the time کے بعد <strong>Present Simple</strong> استعمال ہوتا ہے، Future Simple نہیں۔
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
              {/* Mistake 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    5
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
                      <li className="font-urdu text-black" dir="rtl">میں کھانا کھا چکا ہوں گا۔ (کب تک؟)</li>
                      <li className="text-black">I will have eaten food. (By when?)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں <span className="text-green-600 font-bold">شام تک</span> کھانا کھا چکا ہوں گا۔</li>
                      <li className="text-black">I will have eaten food <span className="text-green-600 font-bold">by evening</span>.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Future Perfect میں وقت کا ذکر ضروری ہے۔ بتانا ہوتا ہے کہ <strong>کب تک</strong> کام مکمل ہو چکا ہو گا۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Before اور After کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have left <span className="line-through text-red-600 font-bold">before</span> he will come</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have left <span className="text-green-600 font-bold">before</span> he comes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 4: Future Perfect vs Future Simple */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              4. Future Perfect اور Future Simple میں فرق
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 7 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    7
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
                      <li className="font-urdu text-black" dir="rtl">میں شام تک کھانا کھا <span className="line-through text-red-600 font-bold">ؤں گا</span></li>
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">will eat</span> food by evening (کام مکمل نہیں ہوگا)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں شام تک کھانا کھا <span className="text-green-600 font-bold">چکا ہوں گا</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">will have eaten</span> food by evening</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Future Perfect</strong> = کام مکمل ہو چکا ہو گا (completed)
                    <br /><strong>Future Simple</strong> = کام ہو گا (will happen)
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 5: Already and Just */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              5. Already اور Just کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 8 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    8
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Already اور Just کی غلط جگہ</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have finished <span className="line-through text-red-600 font-bold">already</span> by 7 pm</li>
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">just</span> will have finished by 7 pm</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will have <span className="text-green-600 font-bold">already</span> finished by 7 pm</li>
                      <li className="text-black">I will have <span className="text-green-600 font-bold">just</span> finished by 7 pm</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Already اور Just will have کے <strong>بعد</strong> آتے ہیں۔
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
                  <h3 className="text-xl font-bold text-black" dir="rtl">سوال میں will کو subject سے پہلے نہ رکھنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم شام تک کھانا کھا چکے ہو گے؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">You will have eaten</span> food by evening?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم شام تک کھانا کھا چکے ہو گے؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Will you have eaten</span> food by evening?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 10 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      <li className="text-black"><span className="line-through text-red-600 font-bold">What you will have done</span> by evening?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black"><span className="text-green-600 font-bold">What will you have done</span> by evening?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 11 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      <li className="text-black">I will have finished <span className="line-through text-red-600 font-bold">not</span> by evening</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">will not have</span> finished by evening</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">won't have</span> finished by evening</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 7: Two Actions in Future */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              7. مستقبل کے دو کاموں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 12 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    12
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">دونوں کاموں میں Future Perfect کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">جب تک وہ <span className="line-through text-red-600 font-bold">آئے گا</span>، میں جا چکا ہوں گا</li>
                      <li className="text-black">By the time he <span className="line-through text-red-600 font-bold">will come</span>, I will have left</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">جب تک وہ <span className="text-green-600 font-bold">آتا ہے</span>، میں جا چکا ہوں گا</li>
                      <li className="text-black">By the time he <span className="text-green-600 font-bold">comes</span>, I will have left</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    By the time, when, before, after کے بعد <strong>Present Simple</strong> استعمال ہوتا ہے، Future Perfect نہیں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 8: Common Confusions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              8. دیگر عام غلطیاں
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mistake 13 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-purple-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Irregular verbs کی غلط فارم</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I will have went</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I will have gone</p>
                </div>
              </div>
              
              {/* Mistake 14 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-purple-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Will have کی جگہ will has</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">He will has finished</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">He will have finished</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">will کے بعد ہمیشہ have آتا ہے، has نہیں</p>
              </div>
              
              {/* Mistake 15 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-purple-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">مدت کے لیے for کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I will have worked here since 10 years by 2025</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I will have worked here for 10 years by 2025</p>
                </div>
              </div>
              
              {/* Mistake 16 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-purple-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Future Perfect کی جگہ Present Perfect</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I have finished by tomorrow</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I will have finished by tomorrow</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Irregular Verbs Table - 3rd Form */}
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
                    <th className="py-3 px-4 border-b text-left text-black" dir="rtl">اردو معنی</th>
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
                    <td className="py-2 px-4 border-b text-red-600">I will have eat</td>
                    <td className="py-2 px-4 border-b text-green-600">I will have eaten</td>
                    <td className="py-2 px-4 border-b text-black">will have + 3rd form</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I will have went</td>
                    <td className="py-2 px-4 border-b text-green-600">I will have gone</td>
                    <td className="py-2 px-4 border-b text-black">go → gone</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I will finish by evening</td>
                    <td className="py-2 px-4 border-b text-green-600">I will have finished by evening</td>
                    <td className="py-2 px-4 border-b text-black">by = Future Perfect</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">He will has gone</td>
                    <td className="py-2 px-4 border-b text-green-600">He will have gone</td>
                    <td className="py-2 px-4 border-b text-black">will + have (all subjects)</td>
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
          <div className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md p-6 border-2 border-purple-300">
            <div className="flex items-start gap-4">
              <FaLightbulb className="text-yellow-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">Future Perfect Tense میں ان غلطیوں سے بچیں</h3>
                <ul className="space-y-2 text-black" dir="rtl">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold ml-2">✓</span>
                    <span>ہمیشہ <strong>will have + verb(3rd form)</strong> کا فارمولا یاد رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold ml-2">✓</span>
                    <span>وقت سے پہلے مکمل ہونے کے لیے <strong>by</strong> استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold ml-2">✓</span>
                    <span>By the time, when, before کے بعد <strong>Present Simple</strong> استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold ml-2">✓</span>
                    <span>Irregular verbs کی تیسری فارم یاد کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold ml-2">✓</span>
                    <span>سوالات میں will کو subject سے پہلے رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold ml-2">✓</span>
                    <span>منفی جملوں میں not will اور have کے درمیان آتا ہے</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/exercises-in-urdu/future-perfect-exercise-1"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises →
            </Link>
            <Link 
              href="/quizzes/future-perfect-quiz"
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Take Quiz
            </Link>
            <Link 
              href="/tenses-in-urdu/future-perfect"
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