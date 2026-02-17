import Link from 'next/link';
import { FaExclamationTriangle, FaCheckCircle, FaArrowLeft, FaLightbulb, FaClock } from 'react-icons/fa';

export default function PresentContinuousMistakesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/mistakes" className="text-white/80 hover:text-white transition duration-300">
              ← All Mistakes
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/present-continuous" className="text-white/80 hover:text-white transition duration-300">
              Present Continuous Tense
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-2">
            <FaClock className="text-4xl" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Present Continuous Tense: Common Mistakes
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            (حال جاری) - 15+ Common Mistakes with Urdu Explanations
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
                  Present Continuous Tense میں اردو بولنے والوں کی عام غلطیاں
                </h2>
                <p className="text-black text-lg" dir="rtl">
                  Present Continuous Tense (حال جاری) اُن کاموں کے لیے استعمال ہوتا ہے جو اس وقت ہو رہے ہیں یا مستقبل قریب میں ہونے والے ہیں۔ 
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
          
          {/* Mistake Category 1: Am/Is/Are Confusion */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              1. Am, Is, Are کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Subject کے مطابق helping verb کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ کھانا کھا <span className="line-through text-red-600 font-bold">رہے ہیں</span></li>
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">are</span> eating food</li>
                      <li className="font-urdu text-black" dir="rtl">میں پانی پی <span className="line-through text-red-600 font-bold">رہا ہے</span></li>
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">is</span> drinking water</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ کھانا کھا <span className="text-green-600 font-bold">رہا ہے</span></li>
                      <li className="text-black">He <span className="text-green-600 font-bold">is</span> eating food</li>
                      <li className="font-urdu text-black" dir="rtl">میں پانی پی <span className="text-green-600 font-bold">رہا ہوں</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">am</span> drinking water</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>I</strong> کے ساتھ <strong>am</strong>، <strong>He/She/It</strong> کے ساتھ <strong>is</strong>، اور <strong>You/We/They</strong> کے ساتھ <strong>are</strong> استعمال ہوتا ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">'am' کی جگہ 'I is' یا 'I are' کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">is going</span></li>
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">are coming</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">am going</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">am coming</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    I کے ساتھ ہمیشہ <strong>am</strong> استعمال ہوتا ہے۔ is اور are I کے ساتھ نہیں آتے۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 2: -ing Form Errors */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              2. Verb میں 'ing' لگانے کی غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
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
                      <li className="font-urdu text-black" dir="rtl">وہ پانی پی <span className="line-through text-red-600 font-bold">رہا ہے</span></li>
                      <li className="text-black">He is <span className="line-through text-red-600 font-bold">drink</span> water</li>
                      <li className="font-urdu text-black" dir="rtl">میں کھانا کھا <span className="line-through text-red-600 font-bold">رہا ہوں</span></li>
                      <li className="text-black">I am <span className="line-through text-red-600 font-bold">eat</span> food</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ پانی پی <span className="text-green-600 font-bold">رہا ہے</span></li>
                      <li className="text-black">He is <span className="text-green-600 font-bold">drinking</span> water</li>
                      <li className="font-urdu text-black" dir="rtl">میں کھانا کھا <span className="text-green-600 font-bold">رہا ہوں</span></li>
                      <li className="text-black">I am <span className="text-green-600 font-bold">eating</span> food</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Present Continuous میں verb کے ساتھ <strong>ing</strong> لگانا ضروری ہے۔ یہی اس tense کی پہچان ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
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
                      <li className="text-black">He is <span className="line-through text-red-600 font-bold">writeing</span></li>
                      <li className="text-black">She is <span className="line-through text-red-600 font-bold">runing</span></li>
                      <li className="text-black">They are <span className="line-through text-red-600 font-bold">swiming</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">He is <span className="text-green-600 font-bold">writing</span> (e ہٹا کر ing)</li>
                      <li className="text-black">She is <span className="text-green-600 font-bold">running</span> (double n)</li>
                      <li className="text-black">They are <span className="text-green-600 font-bold">swimming</span> (double m)</li>
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
          
          {/* Mistake Category 3: Stative Verbs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              3. Stative Verbs کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Stative verbs کو Present Continuous میں استعمال کرنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں <span className="line-through text-red-600 font-bold">جان رہا ہوں</span> جواب</li>
                      <li className="text-black">I am <span className="line-through text-red-600 font-bold">knowing</span> the answer</li>
                      <li className="font-urdu text-black" dir="rtl">وہ <span className="line-through text-red-600 font-bold">چاہ رہا ہے</span> پانی</li>
                      <li className="text-black">He is <span className="line-through text-red-600 font-bold">wanting</span> water</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں <span className="text-green-600 font-bold">جانتا ہوں</span> جواب</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">know</span> the answer</li>
                      <li className="font-urdu text-black" dir="rtl">وہ <span className="text-green-600 font-bold">چاہتا ہے</span> پانی</li>
                      <li className="text-black">He <span className="text-green-600 font-bold">wants</span> water</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Stative verbs</strong> (know, want, like, love, hate, believe, understand) حالت ظاہر کرتی ہیں، عمل نہیں۔ 
                    اِنہیں continuous tenses میں استعمال نہیں کیا جاتا۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">مشہور Stative Verbs کی فہرست</h3>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-red-600 line-through">I am knowing</p>
                      <p className="text-green-600">I know</p>
                    </div>
                    <div>
                      <p className="text-red-600 line-through">I am wanting</p>
                      <p className="text-green-600">I want</p>
                    </div>
                    <div>
                      <p className="text-red-600 line-through">I am liking</p>
                      <p className="text-green-600">I like</p>
                    </div>
                    <div>
                      <p className="text-red-600 line-through">I am hating</p>
                      <p className="text-green-600">I hate</p>
                    </div>
                    <div>
                      <p className="text-red-600 line-through">I am believing</p>
                      <p className="text-green-600">I believe</p>
                    </div>
                    <div>
                      <p className="text-red-600 line-through">I am understanding</p>
                      <p className="text-green-600">I understand</p>
                    </div>
                    <div>
                      <p className="text-red-600 line-through">I am needing</p>
                      <p className="text-green-600">I need</p>
                    </div>
                    <div>
                      <p className="text-red-600 line-through">I am belonging</p>
                      <p className="text-green-600">I belong</p>
                    </div>
                    <div>
                      <p className="text-red-600 line-through">I am seeming</p>
                      <p className="text-green-600">I seem</p>
                    </div>
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
                  <h3 className="text-xl font-bold text-black" dir="rtl">سوال میں am/is/are کو subject سے پہلے نہ رکھنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم کھانا کھا رہے ہو؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">You are eating</span> food?</li>
                      <li className="font-urdu text-black" dir="rtl">وہ کہاں جا رہا ہے؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">He is where going</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم کھانا کھا رہے ہو؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Are you eating</span> food?</li>
                      <li className="font-urdu text-black" dir="rtl">وہ کہاں جا رہا ہے؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Where is he going</span>?</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    سوال بنانے کے لیے <strong>am/is/are</strong> کو subject سے پہلے رکھیں۔ 
                    <br />Yes/No Questions: <strong>Am/Is/Are + subject + verb(ing)?</strong>
                    <br />WH Questions: <strong>WH + am/is/are + subject + verb(ing)?</strong>
                  </p>
                </div>
              </div>
              
              {/* Mistake 8 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    8
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">سوال میں 'ing' لگانا بھول جانا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">Are you <span className="line-through text-red-600 font-bold">eat</span>?</li>
                      <li className="text-black">Is he <span className="line-through text-red-600 font-bold">drink</span> water?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">Are you <span className="text-green-600 font-bold">eating</span>?</li>
                      <li className="text-black">Is he <span className="text-green-600 font-bold">drinking</span> water?</li>
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
              {/* Mistake 9 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    9
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">منفی جملوں میں 'not' کی غلط جگہ</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I am <span className="line-through text-red-600 font-bold">going not</span></li>
                      <li className="text-black">He is <span className="line-through text-red-600 font-bold">coming not</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I am <span className="text-green-600 font-bold">not going</span></li>
                      <li className="text-black">He is <span className="text-green-600 font-bold">not coming</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    منفی جملوں میں <strong>not</strong> helping verb (am/is/are) کے بعد اور main verb سے پہلے آتا ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 10 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    10
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Short forms کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">amn't</span> going</li>
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">isn't</span> coming (یہ صحیح ہے)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I am <span className="text-green-600 font-bold">not</span> going</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">'m not</span> going</li>
                      <li className="text-black">He <span className="text-green-600 font-bold">isn't</span> coming</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>am not</strong> کی کوئی معیاری short form نہیں ہے۔ عام بول چال میں "I'm not" استعمال ہوتا ہے۔
                    <br />is not = isn't, are not = aren't
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 6: Future Use */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              6. مستقبل کے لیے Present Continuous کا استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 11 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    11
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">مستقبل کے منصوبوں کے لیے Present Continuous کی بجائے will کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کل <span className="line-through text-red-600 font-bold">جاؤں گا</span> لاہور</li>
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">will go</span> to Lahore tomorrow (پلانڈ نہیں لگتا)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کل <span className="text-green-600 font-bold">جا رہا ہوں</span> لاہور</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">am going</span> to Lahore tomorrow (پلانڈ)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    پہلے سے طے شدہ مستقبل کے منصوبوں کے لیے <strong>Present Continuous</strong> استعمال ہوتا ہے، will نہیں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 7: Common Confusions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              7. دیگر عام غلطیاں
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mistake 12 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-green-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Always کے ساتھ Present Continuous</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">He always is coming late</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">He is always coming late (شکایت)</p>
                  <p className="text-green-600">He always comes late (عام عادت)</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">Always کے ساتھ Continuous بار بار ہونے والی شکایت ظاہر کرتا ہے</p>
              </div>
              
              {/* Mistake 13 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-green-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">فعل کی غلط فارم</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">He is lieing on bed</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">He is lying on bed</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">lie → lying (ie کو y کریں)</p>
              </div>
              
              {/* Mistake 14 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-green-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">موجودہ وقت کا اظہار</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I read a book now</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I am reading a book now</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">Now, at the moment کے ساتھ Continuous استعمال کریں</p>
              </div>
              
              {/* Mistake 15 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-green-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">This week, these days کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I work a lot these days</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I am working a lot these days</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">These days, this week کے ساتھ Continuous استعمال کریں</p>
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
                    <td className="py-2 px-4 border-b text-red-600">He are going</td>
                    <td className="py-2 px-4 border-b text-green-600">He is going</td>
                    <td className="py-2 px-4 border-b text-black">He = is</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I is eating</td>
                    <td className="py-2 px-4 border-b text-green-600">I am eating</td>
                    <td className="py-2 px-4 border-b text-black">I = am</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">She is write</td>
                    <td className="py-2 px-4 border-b text-green-600">She is writing</td>
                    <td className="py-2 px-4 border-b text-black">verb + ing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I am knowing</td>
                    <td className="py-2 px-4 border-b text-green-600">I know</td>
                    <td className="py-2 px-4 border-b text-black">Stative verbs no ing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">You going?</td>
                    <td className="py-2 px-4 border-b text-green-600">Are you going?</td>
                    <td className="py-2 px-4 border-b text-black">Question: Are you + ing?</td>
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
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">Present Continuous Tense میں ان غلطیوں سے بچیں</h3>
                <ul className="space-y-2 text-black" dir="rtl">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>Subject کے مطابق صحیح helping verb استعمال کریں (I am, He is, They are)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>verb میں <strong>ing</strong> لگانا ہمیشہ یاد رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>Stative verbs (know, want, like) کو continuous میں استعمال نہ کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>سوالات میں helping verb کو subject سے پہلے رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>Now, at the moment, these days جیسے الفاظ کے ساتھ Continuous استعمال کریں</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/exercises/present-continuous-exercise-1"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises →
            </Link>
            <Link 
              href="/quizzes/present-continuous-quiz"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Take Quiz
            </Link>
            <Link 
              href="/tenses/present-continuous"
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