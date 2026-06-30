import Link from 'next/link';
import { FaExclamationTriangle, FaCheckCircle, FaArrowLeft, FaLightbulb } from 'react-icons/fa';

export default function PresentSimpleMistakesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/mistakes" className="text-white/80 hover:text-white transition duration-300">
              ← All Mistakes
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/present-simple" className="text-white/80 hover:text-white transition duration-300">
              Present Simple Tense
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Simple Tense: Common Mistakes in Urdu
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            (Present Indefinite) - 20+ Common Mistakes with Examples
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-8 border-red-500">
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-red-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-black mb-3" dir="rtl">
                  Present Simple Tense میں اردو بولنے والوں کی عام غلطیاں
                </h2>
                <p className="text-black text-lg" dir="rtl">
                  یہاں ہم ان 20+ عام غلطیوں کو دیکھیں گے جو اردو بولنے والے Present Simple Tense میں کرتے ہیں۔ 
                  ہر غلطی کو مثالوں کے ساتھ سمجھیں اور ان سے بچنا سیکھیں۔
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Mistakes */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Mistake Category 1: Third Person 's' */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-red-500 pl-4">
              1. Third Person 's' کا استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">He/She/It کے ساتھ 's' لگانا بھول جانا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ سکول <span className="line-through text-red-600 font-bold">جاتا</span></li>
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">go</span> to school</li>
                      <li className="font-urdu text-black" dir="rtl">وہ <span className="line-through text-red-600 font-bold">کھیلتا</span> کرکٹ</li>
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">play</span> cricket</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ سکول <span className="text-green-600 font-bold">جاتا ہے</span></li>
                      <li className="text-black">He <span className="text-green-600 font-bold">goes</span> to school</li>
                      <li className="font-urdu text-black" dir="rtl">وہ <span className="text-green-600 font-bold">کھیلتا ہے</span> کرکٹ</li>
                      <li className="text-black">He <span className="text-green-600 font-bold">plays</span> cricket</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    He, She, It اور کسی ایک شخص (Ali, Sara) کے ساتھ verb میں 's' یا 'es' لگانا ضروری ہے۔ 
                    اردو میں "تا ہے، تی ہے" کے لیے انگریزی میں verb کے آخر میں 's' آتا ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">ہر جگہ 's' لگانا (I, You, We, They کے ساتھ بھی)</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں <span className="line-through text-red-600 font-bold">کھیلتا</span></li>
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">plays</span></li>
                      <li className="font-urdu text-black" dir="rtl">تم <span className="line-through text-red-600 font-bold">جاتے</span></li>
                      <li className="text-black">You <span className="line-through text-red-600 font-bold">goes</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں <span className="text-green-600 font-bold">کھیلتا ہوں</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">play</span></li>
                      <li className="font-urdu text-black" dir="rtl">تم <span className="text-green-600 font-bold">جاتے ہو</span></li>
                      <li className="text-black">You <span className="text-green-600 font-bold">go</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    I, You, We, They کے ساتھ verb بغیر 's' کے استعمال ہوتی ہے۔ 's' صرف He, She, It کے ساتھ لگتی ہے۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 2: Negative Sentences */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-red-500 pl-4">
              2. Negative Sentences میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">He/She/It کے ساتھ 'don't' کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ <span className="line-through text-red-600 font-bold">نہیں جاتا</span></li>
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">don't go</span></li>
                      <li className="font-urdu text-black" dir="rtl">وہ <span className="line-through text-red-600 font-bold">نہیں کھاتی</span></li>
                      <li className="text-black">She <span className="line-through text-red-600 font-bold">don't eat</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ <span className="text-green-600 font-bold">نہیں جاتا</span></li>
                      <li className="text-black">He <span className="text-green-600 font-bold">doesn't go</span></li>
                      <li className="font-urdu text-black" dir="rtl">وہ <span className="text-green-600 font-bold">نہیں کھاتی</span></li>
                      <li className="text-black">She <span className="text-green-600 font-bold">doesn't eat</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    He/She/It کے ساتھ negative sentences میں 'does not' (doesn't) استعمال ہوتا ہے، 'do not' (don't) نہیں۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">does not کے بعد verb میں 's' لگانا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">He doesn't <span className="line-through text-red-600 font-bold">goes</span></li>
                      <li className="text-black">She doesn't <span className="line-through text-red-600 font-bold">eats</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">He doesn't <span className="text-green-600 font-bold">go</span></li>
                      <li className="text-black">She doesn't <span className="text-green-600 font-bold">eat</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    does not (doesn't) کے بعد verb ہمیشہ پہلی فارم میں آتی ہے، 's' نہیں لگتا۔ 'does' نے خود ہی 's' کا کام کر دیا ہے۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 3: Questions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-red-500 pl-4">
              3. Questions میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Does کے بعد verb میں 's' لگانا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا وہ <span className="line-through text-red-600 font-bold">جاتا ہے</span>؟</li>
                      <li className="text-black">Does he <span className="line-through text-red-600 font-bold">goes</span>?</li>
                      <li className="font-urdu text-black" dir="rtl">کیا وہ <span className="line-through text-red-600 font-bold">کھاتی ہے</span>؟</li>
                      <li className="text-black">Does she <span className="line-through text-red-600 font-bold">eats</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا وہ <span className="text-green-600 font-bold">جاتا ہے</span>؟</li>
                      <li className="text-black">Does he <span className="text-green-600 font-bold">go</span>?</li>
                      <li className="font-urdu text-black" dir="rtl">کیا وہ <span className="text-green-600 font-bold">کھاتی ہے</span>؟</li>
                      <li className="text-black">Does she <span className="text-green-600 font-bold">eat</span>?</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Do/Does کے بعد verb ہمیشہ پہلی فارم میں آتی ہے۔ Does نے خود ہی 's' کا کام کر دیا ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">I, You, We, They کے ساتھ 'Does' کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم <span className="line-through text-red-600 font-bold">جاتے ہو</span>؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">Does</span> you go?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم <span className="text-green-600 font-bold">جاتے ہو</span>؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Do</span> you go?</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    I, You, We, They کے ساتھ questions میں 'Do' استعمال ہوتا ہے، 'Does' نہیں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 4: Verb Forms */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-red-500 pl-4">
              4. Verb Forms میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 7 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    7
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">'es' کے غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">goes</span> (for play)</li>
                      <li className="text-black">She <span className="line-through text-red-600 font-bold">plays</span> (for watch)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">He <span className="text-green-600 font-bold">goes</span> (go + es)</li>
                      <li className="text-black">He <span className="text-green-600 font-bold">plays</span> (play + s)</li>
                      <li className="text-black">She <span className="text-green-600 font-bold">watches</span> (watch + es)</li>
                      <li className="text-black">She <span className="text-green-600 font-bold">studies</span> (study → studies)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <ul className="list-disc list-inside text-black space-y-1" dir="rtl">
                    <li>ch, sh, s, x, o سے ختم ہونے والے verbs کے ساتھ <strong>es</strong> لگتا ہے (watch→watches, go→goes)</li>
                    <li>عام verbs کے ساتھ صرف <strong>s</strong> لگتا ہے (play→plays, eat→eats)</li>
                    <li>Consonant + y سے ختم ہونے والے verbs میں y کو i کر کے <strong>es</strong> لگتا ہے (study→studies, cry→cries)</li>
                  </ul>
                </div>
              </div>
              
              {/* Mistake 8 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    8
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">'have' اور 'has' کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">have</span> a car</li>
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">has</span> a book</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">He <span className="text-green-600 font-bold">has</span> a car</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">have</span> a book</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    He, She, It کے ساتھ 'has' استعمال ہوتا ہے، I, You, We, They کے ساتھ 'have' استعمال ہوتا ہے۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 5: Urdu Interference */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-red-500 pl-4">
              5. اردو سے انگریزی ترجمے میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 9 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    9
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">اردو کی طرح انگریزی میں الفاظ ترتیب دینا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ بازار جاتا ہے روز</li>
                      <li className="text-black">He market goes daily</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ روز بازار جاتا ہے</li>
                      <li className="text-black">He goes to market daily</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    انگریزی میں جملے کی ترتیب Subject + Verb + Object ہوتی ہے۔ اردو کی طرح verb آخر میں نہیں آتی۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 10 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-red-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    10
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">اردو کے "ہوں، ہے، ہیں" کا غلط ترجمہ</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کھاتا <span className="line-through text-red-600 font-bold">ہوں</span></li>
                      <li className="text-black">I eat <span className="line-through text-red-600 font-bold">am</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کھاتا ہوں</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">eat</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Present Simple میں اردو کا "ہوں، ہے، ہیں" کا انگریزی میں علیحدہ ترجمہ نہیں ہوتا۔ یہ verb کے اندر ہی شامل ہے۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 6: Common Confusions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-red-500 pl-4">
              6. دیگر عام غلطیاں
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mistake 11 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-red-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">ہمیشہ (Always) کا غلط استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">He goes always to school</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">He always goes to school</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">Always verb سے پہلے آتا ہے</p>
              </div>
              
              {/* Mistake 12 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-red-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">کبھی نہیں (Never) کا غلط استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">He doesn't never go</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">He never goes</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">Never کے ساتھ don't/doesn't نہیں آتا (double negative)</p>
              </div>
              
              {/* Mistake 13 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-red-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">ہر روز (Every day) کا غلط استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I go every day to school</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I go to school every day</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">Every day عام طور پر آخر میں آتا ہے</p>
              </div>
              
              {/* Mistake 14 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-red-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Can کے ساتھ 's' لگانا</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">He cans play</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">He can play</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">Modal verbs (can, should, must) کے بعد 's' نہیں لگتا</p>
              </div>
            </div>
          </div>
          
          {/* Summary Table */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              Quick Summary - جلدی دہرائی
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">❌ Common Mistake</th>
                    <th className="py-3 px-4 border-b text-left text-black">✅ Correct</th>
                    <th className="py-3 px-4 border-b text-left text-black">Rule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">He go to school</td>
                    <td className="py-2 px-4 border-b text-green-600">He goes to school</td>
                    <td className="py-2 px-4 border-b text-black">He/She/It = verb + s</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">She don't like</td>
                    <td className="py-2 px-4 border-b text-green-600">She doesn't like</td>
                    <td className="py-2 px-4 border-b text-black">He/She/It = doesn't</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">Does he goes?</td>
                    <td className="py-2 px-4 border-b text-green-600">Does he go?</td>
                    <td className="py-2 px-4 border-b text-black">Does کے بعد base verb</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I has a book</td>
                    <td className="py-2 px-4 border-b text-green-600">I have a book</td>
                    <td className="py-2 px-4 border-b text-black">I = have, He = has</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">He watchs TV</td>
                    <td className="py-2 px-4 border-b text-green-600">He watches TV</td>
                    <td className="py-2 px-4 border-b text-black">watch + es</td>
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
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">ان غلطیوں سے بچنے کے لیے اہم نکات</h3>
                <ul className="space-y-2 text-black" dir="rtl">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>He, She, It کے ساتھ verb میں 's' لگانا یاد رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>Negative اور Question میں does کے بعد verb کو base form میں رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>I, You, We, They کے ساتھ do استعمال کریں، does نہیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>Always, never, usually جیسے adverbs کو verb سے پہلے رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>Double negative سے بچیں (never کے ساتھ don't استعمال نہ کریں)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/exercises-in-urdu/present-simple-exercise-1"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises →
            </Link>
            <Link 
              href="/quizzes/present-simple-quiz"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Take Quiz
            </Link>
            <Link 
              href="/tenses-in-urdu/present-simple"
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