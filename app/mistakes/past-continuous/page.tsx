import Link from 'next/link';
import { FaExclamationTriangle, FaCheckCircle, FaArrowLeft, FaLightbulb, FaClock } from 'react-icons/fa';

export default function PastContinuousMistakesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-teal-500 to-green-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/mistakes" className="text-white/80 hover:text-white transition duration-300">
              ← All Mistakes
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/past-continuous" className="text-white/80 hover:text-white transition duration-300">
              Past Continuous Tense
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-2">
            <FaClock className="text-4xl" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Past Continuous Tense: Common Mistakes
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            (ماضی جاری) - 15+ Common Mistakes with Urdu Explanations
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-8 border-teal-500">
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-teal-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-black mb-3" dir="rtl">
                  Past Continuous Tense میں اردو بولنے والوں کی عام غلطیاں
                </h2>
                <p className="text-black text-lg" dir="rtl">
                  Past Continuous Tense (ماضی جاری) اُن کاموں کے لیے استعمال ہوتا ہے جو ماضی میں کسی خاص وقت پر جاری تھے۔ 
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
          
          {/* Mistake Category 1: Was/Were Confusion */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              1. Was اور Were کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
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
                      <li className="font-urdu text-black" dir="rtl">میں کھانا کھا <span className="line-through text-red-600 font-bold">رہے تھے</span></li>
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">were</span> eating food</li>
                      <li className="font-urdu text-black" dir="rtl">وہ پانی پی <span className="line-through text-red-600 font-bold">رہا تھا</span> (یہ صحیح ہے!)</li>
                      <li className="text-black">They <span className="line-through text-red-600 font-bold">was</span> drinking water</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کھانا کھا <span className="text-green-600 font-bold">رہا تھا</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">was</span> eating food</li>
                      <li className="font-urdu text-black" dir="rtl">وہ پانی پی <span className="text-green-600 font-bold">رہے تھے</span></li>
                      <li className="text-black">They <span className="text-green-600 font-bold">were</span> drinking water</li>
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
            </div>
          </div>
          
          {/* Mistake Category 2: Verb + ing */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              2. Verb میں 'ing' لگانے کی غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">verb میں 'ing' لگانا بھول جانا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں پانی پی <span className="line-through text-red-600 font-bold">رہا تھا</span></li>
                      <li className="text-black">I was <span className="line-through text-red-600 font-bold">drink</span> water</li>
                      <li className="font-urdu text-black" dir="rtl">وہ کھانا کھا <span className="line-through text-red-600 font-bold">رہے تھے</span></li>
                      <li className="text-black">They were <span className="line-through text-red-600 font-bold">eat</span> food</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں پانی پی <span className="text-green-600 font-bold">رہا تھا</span></li>
                      <li className="text-black">I was <span className="text-green-600 font-bold">drinking</span> water</li>
                      <li className="font-urdu text-black" dir="rtl">وہ کھانا کھا <span className="text-green-600 font-bold">رہے تھے</span></li>
                      <li className="text-black">They were <span className="text-green-600 font-bold">eating</span> food</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Past Continuous میں verb کے ساتھ <strong>ing</strong> لگانا ضروری ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">'ing' لگانے کے غلط قواعد</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I was <span className="line-through text-red-600 font-bold">writeing</span></li>
                      <li className="text-black">He was <span className="line-through text-red-600 font-bold">runing</span></li>
                      <li className="text-black">She was <span className="line-through text-red-600 font-bold">swiming</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I was <span className="text-green-600 font-bold">writing</span> (e ہٹا کر ing)</li>
                      <li className="text-black">He was <span className="text-green-600 font-bold">running</span> (double n)</li>
                      <li className="text-black">She was <span className="text-green-600 font-bold">swimming</span> (double m)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <ul className="list-disc list-inside text-black space-y-1" dir="rtl">
                    <li>e سے ختم ہونے والے verbs: <strong>e</strong> ہٹا کر ing (write → writing)</li>
                    <li>CVC والے verbs: آخری consonant <strong>double</strong> (run → running, swim → swimming)</li>
                    <li>ie سے ختم ہونے والے verbs: ie کو <strong>y</strong> کریں (die → dying)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 3: When and While */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              3. When اور While کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">When اور While میں فرق نہ سمجھنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں سو رہا تھا <span className="line-through text-red-600 font-bold">جبکہ</span> گھنٹی بجی</li>
                      <li className="text-black">I was sleeping <span className="line-through text-red-600 font-bold">while</span> the bell rang</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں سو رہا تھا <span className="text-green-600 font-bold">جب</span> گھنٹی بجی</li>
                      <li className="text-black">I was sleeping <span className="text-green-600 font-bold">when</span> the bell rang</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>When</strong> + Past Simple (چھوٹا کام)
                    <br /><strong>While</strong> + Past Continuous (لمبا کام)
                  </p>
                </div>
              </div>
              
              {/* Mistake 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">جب دو کام ایک ساتھ جاری ہوں</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں پڑھ رہا تھا <span className="line-through text-red-600 font-bold">جب</span> وہ سو رہی تھی</li>
                      <li className="text-black">I was studying <span className="line-through text-red-600 font-bold">when</span> she was sleeping</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں پڑھ رہا تھا <span className="text-green-600 font-bold">جبکہ</span> وہ سو رہی تھی</li>
                      <li className="text-black">I was studying <span className="text-green-600 font-bold">while</span> she was sleeping</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 4: Two Actions Together */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              4. دو کاموں والے جملوں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">دونوں کاموں میں Past Continuous کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں پڑھ رہا تھا جب وہ آ رہا تھا</li>
                      <li className="text-black">I was studying when he was coming</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں پڑھ رہا تھا جب وہ <span className="text-green-600 font-bold">آیا</span></li>
                      <li className="text-black">I was studying when he <span className="text-green-600 font-bold">came</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    دو کاموں والے جملوں میں:
                    <br />- جو کام <strong>جاری</strong> ہے = Past Continuous
                    <br />- جو کام <strong>مداخلت</strong> کرتا ہے = Past Simple
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 5: Time Expressions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              5. وقت کے الفاظ (Time Expressions) میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 7 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    7
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
                      <li className="font-urdu text-black" dir="rtl">میں پڑھ رہا تھا۔ (کب؟)</li>
                      <li className="text-black">I was studying. (When?)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں <span className="text-green-600 font-bold">کل شام 7 بجے</span> پڑھ رہا تھا۔</li>
                      <li className="text-black">I was studying <span className="text-green-600 font-bold">at 7 pm yesterday</span>.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 8 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    8
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">All day, all night کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">worked</span> all day yesterday</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">was working</span> all day yesterday</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    All day, all night, the whole day کے ساتھ Past Continuous استعمال کریں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 6: Questions and Negatives */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              6. سوالیہ اور منفی جملوں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 9 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    9
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">سوال میں was/were کو subject سے پہلے نہ رکھنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم پڑھ رہے تھے؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">You were studying</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم پڑھ رہے تھے؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Were you studying</span>?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 10 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      <li className="text-black"><span className="line-through text-red-600 font-bold">Where you were going</span>?</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">What you were doing</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black"><span className="text-green-600 font-bold">Where were you going</span>?</li>
                      <li className="text-black"><span className="text-green-600 font-bold">What were you doing</span>?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 11 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      <li className="text-black">I was studying <span className="line-through text-red-600 font-bold">not</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">was not</span> studying</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">wasn't</span> studying</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 7: Stative Verbs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              7. Stative Verbs کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 12 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    12
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Stative verbs کو Past Continuous میں استعمال کرنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں جواب <span className="line-through text-red-600 font-bold">جان رہا تھا</span></li>
                      <li className="text-black">I was <span className="line-through text-red-600 font-bold">knowing</span> the answer</li>
                      <li className="font-urdu text-black" dir="rtl">وہ پانی <span className="line-through text-red-600 font-bold">چاہ رہا تھا</span></li>
                      <li className="text-black">He was <span className="line-through text-red-600 font-bold">wanting</span> water</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں جواب <span className="text-green-600 font-bold">جانتا تھا</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">knew</span> the answer</li>
                      <li className="font-urdu text-black" dir="rtl">وہ پانی <span className="text-green-600 font-bold">چاہتا تھا</span></li>
                      <li className="text-black">He <span className="text-green-600 font-bold">wanted</span> water</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Stative verbs</strong> (know, want, like, love, hate, believe) کو continuous tenses میں استعمال نہیں کیا جاتا۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 8: Common Confusions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              8. دیگر عام غلطیاں
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mistake 13 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-teal-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Past Simple کے ساتھ فرق</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I watched TV when he came (غلط معنی)</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I was watching TV when he came (صحیح)</p>
                  <p className="text-green-600">I watched TV when he came (کام مکمل)</p>
                </div>
              </div>
              
              {/* Mistake 14 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-teal-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">At that time کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I studied at that time</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I was studying at that time</p>
                </div>
              </div>
              
              {/* Mistake 15 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-teal-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">فعل کی غلط فارم</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I was lieing on bed</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I was lying on bed</p>
                </div>
              </div>
              
              {/* Mistake 16 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-teal-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Always کے ساتھ Past Continuous</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">He always came late (عادت)</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">He was always coming late (شکایت)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Summary Table */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              Quick Summary - جلدی دہرائی
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-teal-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">❌ Common Mistake</th>
                    <th className="py-3 px-4 border-b text-left text-black">✅ Correct</th>
                    <th className="py-3 px-4 border-b text-left text-black">Rule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I were studying</td>
                    <td className="py-2 px-4 border-b text-green-600">I was studying</td>
                    <td className="py-2 px-4 border-b text-black">I = was</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">He were playing</td>
                    <td className="py-2 px-4 border-b text-green-600">He was playing</td>
                    <td className="py-2 px-4 border-b text-black">He = was</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I was study</td>
                    <td className="py-2 px-4 border-b text-green-600">I was studying</td>
                    <td className="py-2 px-4 border-b text-black">verb + ing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I was knowing</td>
                    <td className="py-2 px-4 border-b text-green-600">I knew</td>
                    <td className="py-2 px-4 border-b text-black">Stative verbs no ing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I was watching when he was coming</td>
                    <td className="py-2 px-4 border-b text-green-600">I was watching when he came</td>
                    <td className="py-2 px-4 border-b text-black">when + Past Simple</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Tips Box */}
          <div className="mb-8 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl shadow-md p-6 border-2 border-teal-300">
            <div className="flex items-start gap-4">
              <FaLightbulb className="text-yellow-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">Past Continuous Tense میں ان غلطیوں سے بچیں</h3>
                <ul className="space-y-2 text-black" dir="rtl">
                  <li className="flex items-start">
                    <span className="text-teal-600 font-bold ml-2">✓</span>
                    <span>Subject کے مطابق صحیح helping verb استعمال کریں (I/he/she = was, you/we/they = were)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 font-bold ml-2">✓</span>
                    <span>verb میں <strong>ing</strong> لگانا ہمیشہ یاد رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 font-bold ml-2">✓</span>
                    <span><strong>When</strong> کے ساتھ Past Simple، <strong>While</strong> کے ساتھ Past Continuous استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 font-bold ml-2">✓</span>
                    <span>Stative verbs (know, want, like) کو continuous میں استعمال نہ کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 font-bold ml-2">✓</span>
                    <span>وقت کا ذکر کریں (at 7 pm yesterday, at that time)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/exercises-in-urdu/past-continuous-exercise-1"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises →
            </Link>
            <Link 
              href="/quizzes/past-continuous-quiz"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Take Quiz
            </Link>
            <Link 
              href="/tenses-in-urdu/past-continuous"
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