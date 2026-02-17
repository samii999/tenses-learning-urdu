import Link from 'next/link';
import { FaExclamationTriangle, FaCheckCircle, FaArrowLeft, FaLightbulb, FaHourglassHalf } from 'react-icons/fa';

export default function PresentPerfectContinuousMistakesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/mistakes" className="text-white/80 hover:text-white transition duration-300">
              ← All Mistakes
            </Link>
            <span className="mx-2 text-white/60">|</span>
            <Link href="/tenses/present-perfect-continuous" className="text-white/80 hover:text-white transition duration-300">
              Present Perfect Continuous Tense
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-2">
            <FaHourglassHalf className="text-4xl" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Present Perfect Continuous Tense: Common Mistakes
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            (حال مکمل جاری) - 15+ Common Mistakes with Urdu Explanations
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-8 border-amber-500">
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-amber-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-black mb-3" dir="rtl">
                  Present Perfect Continuous Tense میں اردو بولنے والوں کی عام غلطیاں
                </h2>
                <p className="text-black text-lg" dir="rtl">
                  Present Perfect Continuous Tense (حال مکمل جاری) اُن کاموں کے لیے استعمال ہوتا ہے جو ماضی میں شروع ہوئے، اب تک جاری ہیں اور حال میں بھی ہو رہے ہیں۔ 
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
          
          {/* Mistake Category 1: Have/Has Been Confusion */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-amber-500 pl-4">
              1. Have/Has Been کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      <li className="font-urdu text-black" dir="rtl">وہ دو گھنٹے سے پڑھ <span className="line-through text-red-600 font-bold">رہا ہے</span></li>
                      <li className="text-black">He <span className="line-through text-red-600 font-bold">have been</span> studying for two hours</li>
                      <li className="font-urdu text-black" dir="rtl">میں صبح سے کام کر <span className="line-through text-red-600 font-bold">رہا ہے</span></li>
                      <li className="text-black">I <span className="line-through text-red-600 font-bold">has been</span> working since morning</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">وہ دو گھنٹے سے پڑھ <span className="text-green-600 font-bold">رہا ہے</span></li>
                      <li className="text-black">He <span className="text-green-600 font-bold">has been</span> studying for two hours</li>
                      <li className="font-urdu text-black" dir="rtl">میں صبح سے کام کر <span className="text-green-600 font-bold">رہا ہوں</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">have been</span> working since morning</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>He/She/It</strong> کے ساتھ <strong>has been</strong> استعمال ہوتا ہے۔
                    <br /><strong>I/You/We/They</strong> کے ساتھ <strong>have been</strong> استعمال ہوتا ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
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
                      <li className="text-black">I have <span className="line-through text-red-600 font-bold">studying</span> for two hours</li>
                      <li className="text-black">She has <span className="line-through text-red-600 font-bold">working</span> since morning</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have <span className="text-green-600 font-bold">been</span> studying for two hours</li>
                      <li className="text-black">She has <span className="text-green-600 font-bold">been</span> working since morning</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Present Perfect Continuous کا فارمولا ہے: <strong>have/has + been + verb(ing)</strong>
                    <br />'been' اس tense کا لازمی حصہ ہے۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 2: For and Since Confusion */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-amber-500 pl-4">
              2. For اور Since میں فرق
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      <li className="text-black">I have been waiting <span className="line-through text-red-600 font-bold">since</span> two hours</li>
                      <li className="text-black">She has been working <span className="line-through text-red-600 font-bold">for</span> 2020</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have been waiting <span className="text-green-600 font-bold">for</span> two hours</li>
                      <li className="text-black">She has been working <span className="text-green-600 font-bold">since</span> 2020</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>For</strong> + مدت (for two hours, for five years, for three days)
                    <br /><strong>Since</strong> + نقطہ آغاز (since morning, since 2020, since Monday)
                  </p>
                </div>
              </div>
              
              {/* Mistake 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      <li className="font-urdu text-black" dir="rtl">میں پڑھ رہا ہوں۔ (کتنی دیر سے؟)</li>
                      <li className="text-black">I have been studying. (How long?)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں <span className="text-green-600 font-bold">دو گھنٹے سے</span> پڑھ رہا ہوں۔</li>
                      <li className="text-black">I have been studying <span className="text-green-600 font-bold">for two hours</span>.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Present Perfect Continuous میں وقت کا ذکر (for/since) ضروری ہے۔ یہ بتاتا ہے کہ کام کتنے عرصے سے جاری ہے۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 3: Verb + ing */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-amber-500 pl-4">
              3. Verb + ing میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    5
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
                      <li className="text-black">I have been <span className="line-through text-red-600 font-bold">study</span></li>
                      <li className="text-black">She has been <span className="line-through text-red-600 font-bold">work</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have been <span className="text-green-600 font-bold">studying</span></li>
                      <li className="text-black">She has been <span className="text-green-600 font-bold">working</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Continuous tense ہونے کی وجہ سے verb میں <strong>ing</strong> لگانا ضروری ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">'ing' کے غلط قواعد</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have been <span className="line-through text-red-600 font-bold">writeing</span></li>
                      <li className="text-black">He has been <span className="line-through text-red-600 font-bold">runing</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have been <span className="text-green-600 font-bold">writing</span> (e ہٹا کر ing)</li>
                      <li className="text-black">He has been <span className="text-green-600 font-bold">running</span> (double n)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <ul className="list-disc list-inside text-black space-y-1" dir="rtl">
                    <li>e سے ختم ہونے والے verbs: <strong>e</strong> ہٹا کر ing (write → writing)</li>
                    <li>CVC والے verbs: آخری consonant <strong>double</strong> (run → running)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 4: Stative Verbs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-amber-500 pl-4">
              4. Stative Verbs کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 7 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    7
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Stative verbs کو Present Perfect Continuous میں استعمال کرنا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں دو گھنٹے سے <span className="line-through text-red-600 font-bold">جان رہا ہوں</span></li>
                      <li className="text-black">I have been <span className="line-through text-red-600 font-bold">knowing</span> for two hours</li>
                      <li className="font-urdu text-black" dir="rtl">وہ صبح سے <span className="line-through text-red-600 font-bold">چاہ رہا ہے</span></li>
                      <li className="text-black">He has been <span className="line-through text-red-600 font-bold">wanting</span> since morning</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں دو گھنٹے سے <span className="text-green-600 font-bold">جانتا ہوں</span></li>
                      <li className="text-black">I have <span className="text-green-600 font-bold">known</span> for two hours (Present Perfect)</li>
                      <li className="font-urdu text-black" dir="rtl">وہ صبح سے <span className="text-green-600 font-bold">چاہتا ہے</span></li>
                      <li className="text-black">He has <span className="text-green-600 font-bold">wanted</span> since morning (Present Perfect)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Stative verbs</strong> (know, want, like, love, hate, believe) کو continuous tenses میں استعمال نہیں کیا جاتا۔
                    <br />اُن کے ساتھ Present Perfect استعمال کریں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 5: Present Perfect vs Present Perfect Continuous */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-amber-500 pl-4">
              5. Present Perfect اور Present Perfect Continuous میں فرق
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 8 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      <li className="font-urdu text-black" dir="rtl">میں نے دو گھنٹے پڑھا ہے (نتیجہ نہیں بتا سکتے)</li>
                      <li className="text-black">I have studied for two hours (غلط نہیں، مگر نتیجہ نہیں بتاتا)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں دو گھنٹے سے <span className="text-green-600 font-bold">پڑھ رہا ہوں</span> (عمل اہم ہے)</li>
                      <li className="text-black">I have <span className="text-green-600 font-bold">been studying</span> for two hours</li>
                      <li className="font-urdu text-black" dir="rtl">میں نے کتاب <span className="text-green-600 font-bold">پڑھ لی ہے</span> (نتیجہ اہم ہے)</li>
                      <li className="text-black">I have <span className="text-green-600 font-bold">read</span> the book</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>Present Perfect Continuous</strong> = عمل (action) پر فوکس
                    <br /><strong>Present Perfect</strong> = نتیجہ (result) پر فوکس
                  </p>
                </div>
              </div>
              
              {/* Mistake 9 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    9
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
                      <li className="font-urdu text-black" dir="rtl">میں نے کتاب پڑھ لی ہے (کام مکمل) → <span className="line-through text-red-600 font-bold">I have been reading the book</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں نے کتاب پڑھ لی ہے (کام مکمل)</li>
                      <li className="text-black">I have <span className="text-green-600 font-bold">read</span> the book</li>
                      <li className="font-urdu text-black" dir="rtl">میں دو گھنٹے سے پڑھ رہا ہوں (جاری)</li>
                      <li className="text-black">I have <span className="text-green-600 font-bold">been reading</span> for two hours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 6: Questions and Negatives */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-amber-500 pl-4">
              6. سوالیہ اور منفی جملوں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 10 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    10
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
                      <li className="font-urdu text-black" dir="rtl">تم دو گھنٹے سے پڑھ رہے ہو؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">You have been studying</span> for two hours?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم دو گھنٹے سے پڑھ رہے ہو؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Have you been studying</span> for two hours?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 11 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      <li className="text-black"><span className="line-through text-red-600 font-bold">How long you have been waiting</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black"><span className="text-green-600 font-bold">How long have you been waiting</span>?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mistake 12 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
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
                      <li className="text-black">I have been <span className="line-through text-red-600 font-bold">not</span> studying</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I have <span className="text-green-600 font-bold">not been</span> studying</li>
                      <li className="text-black">I <span className="text-green-600 font-bold">haven't been</span> studying</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 7: How Long Questions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-amber-500 pl-4">
              7. How Long کے سوالات میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 13 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-amber-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    13
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">How long کے ساتھ Present Perfect Continuous کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم کب سے پڑھ رہے ہو؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">When are you studying</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">تم <span className="text-green-600 font-bold">کب سے</span> پڑھ رہے ہو؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">How long have you been studying</span>?</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    مدت پوچھنے کے لیے <strong>How long</strong> استعمال کریں، When نہیں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 8: Common Confusions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-amber-500 pl-4">
              8. دیگر عام غلطیاں
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mistake 14 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-amber-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Lately, recently کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I am working hard lately</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I have been working hard lately</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">Lately, recently کے ساتھ Present Perfect Continuous استعمال کریں</p>
              </div>
              
              {/* Mistake 15 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-amber-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">All day, all week کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I work all day</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I have been working all day</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">All day, all week کے ساتھ Continuous استعمال کریں</p>
              </div>
              
              {/* Mistake 16 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-amber-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">فعل کی غلط فارم</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I have been swiming</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I have been swimming</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">swim → swimming (double m)</p>
              </div>
              
              {/* Mistake 17 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-amber-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Short forms کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I've been waiting (یہ صحیح ہے!)</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I've been waiting (صحیح)</p>
                  <p className="text-green-600">He's been working (صحیح)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Summary Table */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-amber-500 pl-4">
              Quick Summary - جلدی دہرائی
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-amber-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">❌ Common Mistake</th>
                    <th className="py-3 px-4 border-b text-left text-black">✅ Correct</th>
                    <th className="py-3 px-4 border-b text-left text-black">Rule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I have working</td>
                    <td className="py-2 px-4 border-b text-green-600">I have been working</td>
                    <td className="py-2 px-4 border-b text-black">have + been + ing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">He have been waiting</td>
                    <td className="py-2 px-4 border-b text-green-600">He has been waiting</td>
                    <td className="py-2 px-4 border-b text-black">He = has</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I have been wait</td>
                    <td className="py-2 px-4 border-b text-green-600">I have been waiting</td>
                    <td className="py-2 px-4 border-b text-black">verb + ing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I have been knowing</td>
                    <td className="py-2 px-4 border-b text-green-600">I have known</td>
                    <td className="py-2 px-4 border-b text-black">Stative verbs no continuous</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">How long you have been waiting?</td>
                    <td className="py-2 px-4 border-b text-green-600">How long have you been waiting?</td>
                    <td className="py-2 px-4 border-b text-black">Question: have + subject + been?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Tips Box */}
          <div className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-md p-6 border-2 border-amber-300">
            <div className="flex items-start gap-4">
              <FaLightbulb className="text-yellow-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">Present Perfect Continuous Tense میں ان غلطیوں سے بچیں</h3>
                <ul className="space-y-2 text-black" dir="rtl">
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold ml-2">✓</span>
                    <span>ہمیشہ <strong>have/has + been + verb(ing)</strong> کا فارمولا یاد رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold ml-2">✓</span>
                    <span>He/She/It کے ساتھ <strong>has been</strong> استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold ml-2">✓</span>
                    <span>مدت کے لیے <strong>for</strong>، نقطہ آغاز کے لیے <strong>since</strong> استعمال کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold ml-2">✓</span>
                    <span>Stative verbs (know, want, like) کو continuous میں استعمال نہ کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 font-bold ml-2">✓</span>
                    <span>سوالات میں have/has کو subject سے پہلے رکھیں</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/exercises/present-perfect-continuous-exercise-1"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises →
            </Link>
            <Link 
              href="/quizzes/present-perfect-continuous-quiz"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Take Quiz
            </Link>
            <Link 
              href="/tenses/present-perfect-continuous"
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