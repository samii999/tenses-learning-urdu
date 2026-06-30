import Link from 'next/link';
import { FaExclamationTriangle, FaCheckCircle, FaArrowLeft, FaLightbulb, FaHistory } from 'react-icons/fa';

export default function PastSimpleMistakesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/mistakes" className="text-white/80 hover:text-white transition duration-300">
              ← All Mistakes
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/past-simple" className="text-white/80 hover:text-white transition duration-300">
              Past Simple Tense
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-2">
            <FaHistory className="text-4xl" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Past Simple Tense: Common Mistakes
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            (ماضی مطلق) - 20+ Common Mistakes with Urdu Explanations
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-8 border-blue-500">
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-blue-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-black mb-3" dir="rtl">
                  Past Simple Tense میں اردو بولنے والوں کی عام غلطیاں
                </h2>
                <p className="text-black text-lg" dir="rtl">
                  Past Simple Tense (ماضی مطلق) اُن کاموں کے لیے استعمال ہوتا ہے جو ماضی میں مکمل ہو چکے ہیں۔ 
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
          
          {/* Mistake Category 1: Regular Verbs - ed */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              1. Regular Verbs میں 'ed' کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">verb میں 'ed' لگانا بھول جانا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کل <span className="line-through text-red-600 font-bold">کھیل</span></li>
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">play</span> yesterday</li>
                      <li className="font-urdu text-black" dir="rtl">وہ گزشتہ سال <span className="line-through text-red-600 font-bold">کام</span></li>
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">work</span> last year</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کل <span className="text-green-600 font-bold">کھیلا</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">played</span> yesterday</li>
                      <li className="font-urdu text-black" dir="rtl">وہ گزشتہ سال <span className="text-green-600 font-bold">کام کیا</span></li>
                      <li className="text-black">He <span className="text-green-600 font-bold">worked</span> last year</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Past Simple میں regular verbs کے ساتھ <strong>ed</strong> لگانا ضروری ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">'ed' لگانے کے غلط قواعد</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">stoped</span> the car</li>
                      <li className="text-black">She <span className="line-through text-red-600 font-bold">studyed</span> hard</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">stopped</span> the car</li>
                      <li className="text-black">She <span className="text-green-600 font-bold">studied</span> hard</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <ul className="list-disc list-inside text-black space-y-1" dir="rtl">
                    <li><strong>CVC</strong> والے verbs: آخری consonant double کریں (stop → stopped)</li>
                    <li><strong>y</strong> سے ختم ہونے والے verbs: y کو i کر کے <strong>ed</strong> (study → studied)</li>
                    <li><strong>e</strong> سے ختم ہونے والے verbs: صرف <strong>d</strong> لگائیں (like → liked)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 2: Irregular Verbs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              2. Irregular Verbs میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Irregular verbs کی دوسری فارم کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">goed</span> to school</li>
                      <li className="text-black">She <span className="line-through text-red-600 font-bold">eated</span> food</li>
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">buyed</span> a car</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">went</span> to school</li>
                      <li className="text-black">She <span className="text-green-600 font-bold">ate</span> food</li>
                      <li className="text-black">He <span className="text-green-600 font-bold">bought</span> a car</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Irregular verbs کی دوسری فارم (2nd form) یاد کرنا ضروری ہے۔ یہ rules نہیں مانتیں۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Irregular verbs کی فہرست میں الجھن</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-black rounded-lg">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="py-3 px-4 border-b text-left text-black">Base Form</th>
                        <th className="py-3 px-4 border-b text-left text-black">Past Simple</th>
                        <th className="py-3 px-4 border-b text-left text-black">Urdu Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-2 px-4 border-b">go</td><td className="py-2 px-4 border-b text-blue-600 font-bold">went</td><td className="py-2 px-4 border-b" dir="rtl">جانا</td></tr>
                      <tr><td className="py-2 px-4 border-b">eat</td><td className="py-2 px-4 border-b text-blue-600 font-bold">ate</td><td className="py-2 px-4 border-b" dir="rtl">کھانا</td></tr>
                      <tr><td className="py-2 px-4 border-b">see</td><td className="py-2 px-4 border-b text-blue-600 font-bold">saw</td><td className="py-2 px-4 border-b" dir="rtl">دیکھنا</td></tr>
                      <tr><td className="py-2 px-4 border-b">come</td><td className="py-2 px-4 border-b text-blue-600 font-bold">came</td><td className="py-2 px-4 border-b" dir="rtl">آنا</td></tr>
                      <tr><td className="py-2 px-4 border-b">buy</td><td className="py-2 px-4 border-b text-blue-600 font-bold">bought</td><td className="py-2 px-4 border-b" dir="rtl">خریدنا</td></tr>
                      <tr><td className="py-2 px-4 border-b">drink</td><td className="py-2 px-4 border-b text-blue-600 font-bold">drank</td><td className="py-2 px-4 border-b" dir="rtl">پینا</td></tr>
                      <tr><td className="py-2 px-4 border-b">write</td><td className="py-2 px-4 border-b text-blue-600 font-bold">wrote</td><td className="py-2 px-4 border-b" dir="rtl">لکھنا</td></tr>
                      <tr><td className="py-2 px-4 border-b">read</td><td className="py-2 px-4 border-b text-blue-600 font-bold">read</td><td className="py-2 px-4 border-b" dir="rtl">پڑھنا</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 3: Did + Verb */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              3. Did کے ساتھ Verb کی غلط فارم
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">منفی جملوں میں did کے بعد verb کی دوسری فارم</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I didn't <span className="line-through text-red-600 font-bold">went</span></li>
                      <li className="text-black">She didn't <span className="line-through text-red-600 font-bold">ate</span></li>
                      <li className="text-black">He didn't <span className="line-through text-red-600 font-bold">came</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I didn't <span className="text-green-600 font-bold">go</span></li>
                      <li className="text-black">She didn't <span className="text-green-600 font-bold">eat</span></li>
                      <li className="text-black">He didn't <span className="text-green-600 font-bold">come</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>did</strong> کے بعد verb ہمیشہ <strong>پہلی فارم</strong> (base form) میں آتی ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">سوالیہ جملوں میں did کے بعد verb کی دوسری فارم</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم <span className="line-through text-red-600 font-bold">گئے</span>؟</li>
                      <li className="text-black">Did you <span className="line-through text-red-600 font-bold">went</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم <span className="text-green-600 font-bold">گئے</span>؟</li>
                      <li className="text-black">Did you <span className="text-green-600 font-bold">go</span>?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 4: Was/Were Confusion */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              4. Was اور Were کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 7 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    7
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Subject کے مطابق was/were کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">were</span> there</li>
                      <li className="text-black">They <span className="line-through text-red-600 font-bold">was</span> happy</li>
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">were</span> late</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">was</span> there</li>
                      <li className="text-black">They <span className="text-green-600 font-bold">were</span> happy</li>
                      <li className="text-black">He <span className="text-green-600 font-bold">was</span> late</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>I, He, She, It</strong> کے ساتھ <strong>was</strong> استعمال ہوتا ہے۔
                    <br /><strong>You, We, They</strong> کے ساتھ <strong>were</strong> استعمال ہوتا ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 8 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    8
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Was/Were کے ساتھ verb کی غلط فارم</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I was <span className="line-through text-red-600 font-bold">go</span> to school</li>
                      <li className="text-black">They were <span className="line-through text-red-600 font-bold">play</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">went</span> to school</li>
                      <li className="text-black">They <span className="text-green-600 font-bold">played</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    was/were کوئی کام ظاہر کرنے کے لیے نہیں، حالت ظاہر کرنے کے لیے ہیں۔ کام کے لیے Past Simple استعمال کریں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 5: Time Expressions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              5. وقت کے الفاظ (Time Expressions) میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 9 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    9
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">وقت کے الفاظ کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I went <span className="line-through text-red-600 font-bold">in</span> yesterday</li>
                      <li className="text-black">She came <span className="line-through text-red-600 font-bold">at</span> last week</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I went <span className="text-green-600 font-bold">yesterday</span></li>
                      <li className="text-black">She came <span className="text-green-600 font-bold">last week</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    yesterday, last week, last year جیسے الفاظ کے ساتھ حروف جار (in, at, on) نہیں لگتے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 10 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    10
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
                      <li className="font-urdu text-black" dir="rtl">میں گیا۔ (کب؟)</li>
                      <li className="text-black">I went. (When?)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں <span className="text-green-600 font-bold">کل</span> گیا۔</li>
                      <li className="text-black">I went <span className="text-green-600 font-bold">yesterday</span>.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 6: Questions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              6. سوالیہ جملوں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 11 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    11
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">سوال میں did کو subject سے پہلے نہ رکھنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم گئے؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">You went</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم <span className="text-green-600 font-bold">گئے</span>؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Did you go</span>?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 12 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    12
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
                      <li className="text-black"><span className="line-through text-red-600 font-bold">Where you went</span>?</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">What you did</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black"><span className="text-green-600 font-bold">Where did you go</span>?</li>
                      <li className="text-black"><span className="text-green-600 font-bold">What did you do</span>?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 7: Common Confusions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              7. دیگر عام غلطیاں
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mistake 13 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-blue-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Used to کے ساتھ Past Simple</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I used to went there</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I used to go there</p>
                  <p className="text-green-600">I went there</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">used to کے بعد verb کی پہلی فارم آتی ہے</p>
              </div>
              
              {/* Mistake 14 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-blue-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Could کے ساتھ Past Simple</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I could went</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I could go</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">could کے بعد verb کی پہلی فارم آتی ہے</p>
              </div>
              
              {/* Mistake 15 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-blue-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">فعل کی غلط فارم</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I feeled sick yesterday</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I felt sick yesterday</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">feel → felt (irregular)</p>
              </div>
              
              {/* Mistake 16 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-blue-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Past Simple میں دو فعل</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I went and buy food</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I went and bought food</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">دونوں verbs کو past میں رکھیں</p>
              </div>
            </div>
          </div>
          
          {/* Irregular Verbs Table */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              Common Irregular Verbs - Past Simple
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">Base Form</th>
                    <th className="py-3 px-4 border-b text-left text-black">Past Simple</th>
                    <th className="py-3 px-4 border-b text-left text-black">Urdu Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-2 px-4 border-b">go</td><td className="py-2 px-4 border-b text-blue-600 font-bold">went</td><td className="py-2 px-4 border-b" dir="rtl">گیا</td></tr>
                  <tr><td className="py-2 px-4 border-b">eat</td><td className="py-2 px-4 border-b text-blue-600 font-bold">ate</td><td className="py-2 px-4 border-b" dir="rtl">کھایا</td></tr>
                  <tr><td className="py-2 px-4 border-b">see</td><td className="py-2 px-4 border-b text-blue-600 font-bold">saw</td><td className="py-2 px-4 border-b" dir="rtl">دیکھا</td></tr>
                  <tr><td className="py-2 px-4 border-b">come</td><td className="py-2 px-4 border-b text-blue-600 font-bold">came</td><td className="py-2 px-4 border-b" dir="rtl">آیا</td></tr>
                  <tr><td className="py-2 px-4 border-b">buy</td><td className="py-2 px-4 border-b text-blue-600 font-bold">bought</td><td className="py-2 px-4 border-b" dir="rtl">خریدا</td></tr>
                  <tr><td className="py-2 px-4 border-b">drink</td><td className="py-2 px-4 border-b text-blue-600 font-bold">drank</td><td className="py-2 px-4 border-b" dir="rtl">پیا</td></tr>
                  <tr><td className="py-2 px-4 border-b">write</td><td className="py-2 px-4 border-b text-blue-600 font-bold">wrote</td><td className="py-2 px-4 border-b" dir="rtl">لکھا</td></tr>
                  <tr><td className="py-2 px-4 border-b">read</td><td className="py-2 px-4 border-b text-blue-600 font-bold">read</td><td className="py-2 px-4 border-b" dir="rtl">پڑھا</td></tr>
                  <tr><td className="py-2 px-4 border-b">take</td><td className="py-2 px-4 border-b text-blue-600 font-bold">took</td><td className="py-2 px-4 border-b" dir="rtl">لیا</td></tr>
                  <tr><td className="py-2 px-4 border-b">give</td><td className="py-2 px-4 border-b text-blue-600 font-bold">gave</td><td className="py-2 px-4 border-b" dir="rtl">دیا</td></tr>
                </tbody>
              </table>
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
                    <td className="py-2 px-4 border-b text-red-600">I go yesterday</td>
                    <td className="py-2 px-4 border-b text-green-600">I went yesterday</td>
                    <td className="py-2 px-4 border-b text-black">Past میں verb کی 2nd form</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I didn't went</td>
                    <td className="py-2 px-4 border-b text-green-600">I didn't go</td>
                    <td className="py-2 px-4 border-b text-black">did کے بعد 1st form</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">Did you went?</td>
                    <td className="py-2 px-4 border-b text-green-600">Did you go?</td>
                    <td className="py-2 px-4 border-b text-black">did کے بعد 1st form</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I was go</td>
                    <td className="py-2 px-4 border-b text-green-600">I went</td>
                    <td className="py-2 px-4 border-b text-black">was کے ساتھ verb نہیں</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I have gone yesterday</td>
                    <td className="py-2 px-4 border-b text-green-600">I went yesterday</td>
                    <td className="py-2 px-4 border-b text-black">yesterday = Past Simple</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Tips Box */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 border-2 border-blue-300">
            <div className="flex items-start gap-4">
              <FaLightbulb className="text-yellow-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">Past Simple Tense میں ان غلطیوں سے بچیں</h3>
                <ul className="space-y-2 text-black" dir="rtl">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold ml-2">✓</span>
                    <span>Regular verbs کے ساتھ <strong>ed</strong> لگانا یاد رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold ml-2">✓</span>
                    <span>Irregular verbs کی دوسری فارم (2nd form) یاد کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold ml-2">✓</span>
                    <span>منفی اور سوالیہ جملوں میں did کے بعد verb کی پہلی فارم استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold ml-2">✓</span>
                    <span>I, He, She, It کے ساتھ <strong>was</strong>، You, We, They کے ساتھ <strong>were</strong> استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold ml-2">✓</span>
                    <span>yesterday, last week, in 2020 جیسے وقت کے الفاظ استعمال کریں</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/exercises-in-urdu/past-simple-exercise-1"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises →
            </Link>
            <Link 
              href="/quizzes/past-simple-quiz"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Take Quiz
            </Link>
            <Link 
              href="/tenses-in-urdu/past-simple"
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