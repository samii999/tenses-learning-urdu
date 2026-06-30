import Link from 'next/link';
import { FaExclamationTriangle, FaCheckCircle, FaArrowLeft, FaLightbulb, FaClock } from 'react-icons/fa';

export default function FutureContinuousMistakesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/mistakes" className="text-white/80 hover:text-white transition duration-300">
              ← All Mistakes
            </Link>
            <span className="mx-2 text-white/60">|</span>
           <Link href="/tenses-in-urdu/future-continuous" className="text-white/80 hover:text-white transition duration-300">
              Future Continuous Tense
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-2">
            <FaClock className="text-4xl" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Future Continuous Tense: Common Mistakes
            </h1>
          </div>
          <p className="text-lg md:text-xl opacity-90" dir="rtl">
            (مستقبل جاری) - 15+ Common Mistakes with Urdu Explanations
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
                  Future Continuous Tense میں اردو بولنے والوں کی عام غلطیاں
                </h2>
                <p className="text-black text-lg" dir="rtl">
                  Future Continuous Tense (مستقبل جاری) اُن کاموں کے لیے استعمال ہوتا ہے جو مستقبل میں کسی خاص وقت پر جاری ہوں گے۔ 
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
          
          {/* Mistake Category 1: Will Be Structure */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              1. Will Be کا غلط استعمال
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">'will' کے بعد 'be' لگانا بھول جانا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کل شام 7 بجے پڑھ <span className="line-through text-red-600 font-bold">رہا ہوں</span></li>
                      <li className="text-black">I will <span className="line-through text-red-600 font-bold">studying</span> at 7 pm tomorrow</li>
                      <li className="font-urdu text-black" dir="rtl">وہ کل آ <span className="line-through text-red-600 font-bold">رہا ہے</span></li>
                      <li className="text-black">He will <span className="line-through text-red-600 font-bold">coming</span> tomorrow</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں کل شام 7 بجے پڑھ <span className="text-green-600 font-bold">رہا ہوں گا</span></li>
                      <li className="text-black">I will <span className="text-green-600 font-bold">be studying</span> at 7 pm tomorrow</li>
                      <li className="font-urdu text-black" dir="rtl">وہ کل آ <span className="text-green-600 font-bold">رہا ہو گا</span></li>
                      <li className="text-black">He will <span className="text-green-600 font-bold">be coming</span> tomorrow</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Future Continuous کا صحیح فارمولا ہے: <strong>will + be + verb(ing)</strong>۔ 'will' کے بعد 'be' لگانا ضروری ہے۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">'will be' کے بعد verb کی غلط فارم</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will be <span className="line-through text-red-600 font-bold">study</span></li>
                      <li className="text-black">She will be <span className="line-through text-red-600 font-bold">played</span></li>
                      <li className="text-black">They will be <span className="line-through text-red-600 font-bold">ate</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will be <span className="text-green-600 font-bold">studying</span></li>
                      <li className="text-black">She will be <span className="text-green-600 font-bold">playing</span></li>
                      <li className="text-black">They will be <span className="text-green-600 font-bold">eating</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    'will be' کے بعد verb ہمیشہ <strong>ing</strong> فارم میں آتی ہے۔ یہ continuous tense ہے اس لیے verb میں ing لگے گا۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 2: Time Expressions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              2. وقت کے الفاظ (Time Expressions) میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
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
                      <li className="font-urdu text-black" dir="rtl">میں پڑھ رہا ہوں گا۔ (کب؟)</li>
                      <li className="text-black">I will be studying. (When?)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں <span className="text-green-600 font-bold">کل شام 7 بجے</span> پڑھ رہا ہوں گا۔</li>
                      <li className="text-black">I will be studying <span className="text-green-600 font-bold">at 7 pm tomorrow</span>.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Future Continuous میں وقت کا ذکر ضروری ہے۔ بتانا ہوتا ہے کہ <strong>کب</strong> کام جاری ہو گا۔
                  </p>
                </div>
              </div>
              
              {/* Mistake 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
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
                      <li className="text-black"><span className="line-through text-red-600 font-bold">At 7 pm</span> I will be studying</li>
                      <li className="text-black">I will be <span className="line-through text-red-600 font-bold">at 7 pm</span> studying</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will be studying <span className="text-green-600 font-bold">at 7 pm</span></li>
                      <li className="text-black">I will be studying <span className="text-green-600 font-bold">tomorrow evening</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    وقت کے الفاظ عام طور پر جملے کے <strong>آخر</strong> میں آتے ہیں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 3: Will vs Going To */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              3. Will اور Going To میں فرق
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">Going to کے ساتھ Future Continuous بنانا</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I am going to <span className="line-through text-red-600 font-bold">be study</span></li>
                      <li className="text-black">I am going to <span className="line-through text-red-600 font-bold">studying</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I <span className="text-green-600 font-bold">will be studying</span></li>
                      <li className="text-black">I am going to <span className="text-green-600 font-bold">study</span> (Future Simple)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    Future Continuous صرف <strong>will be + ing</strong> سے بنتا ہے۔ Going to کے ساتھ continuous نہیں بنتا۔
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 4: Two Actions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              4. دو کاموں والے جملوں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">دونوں کاموں میں Future Continuous کا استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں پڑھ <span className="line-through text-red-600 font-bold">رہا ہوں گا</span> جب وہ آ <span className="line-through text-red-600 font-bold">رہا ہو گا</span></li>
                      <li className="text-black">I will be studying when he will be coming</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">میں پڑھ <span className="text-green-600 font-bold">رہا ہوں گا</span> جب وہ <span className="text-green-600 font-bold">آئے گا</span></li>
                      <li className="text-black">I <span className="text-green-600 font-bold">will be studying</span> when he <span className="text-green-600 font-bold">comes</span></li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    دو کاموں والے جملوں میں: 
                    <br />- جو کام <strong>جاری</strong> ہے وہ Future Continuous میں
                    <br />- جو کام <strong>مداخلت</strong> کرتا ہے وہ Present Simple میں (will کے بغیر)
                  </p>
                </div>
              </div>
              
              {/* Mistake 7 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    7
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">When اور While کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will be studying <span className="line-through text-red-600 font-bold">while</span> he comes</li>
                      <li className="text-black">I will study <span className="line-through text-red-600 font-bold">when</span> he will be coming</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black">I will be studying <span className="text-green-600 font-bold">when</span> he comes</li>
                      <li className="text-black"><span className="text-green-600 font-bold">While</span> I am studying, he will come</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    <strong>When</strong> + short action (comes)  
                    <br /><strong>While</strong> + long action (am studying)
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 5: Questions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              5. سوالیہ جملوں میں غلطیاں
            </h2>
            
            <div className="space-y-6">
              {/* Mistake 8 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    8
                  </div>
                  <h3 className="text-xl font-bold text-black" dir="rtl">سوال میں 'be' کا غلط استعمال</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                      <FaExclamationTriangle className="text-red-500 mr-2" />
                      <h4 className="font-bold text-red-600 text-lg">❌ غلط</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم <span className="line-through text-red-600 font-bold">پڑھ رہے ہو گے</span>؟</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">Will you studying</span>?</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">You will be studying</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="font-urdu text-black" dir="rtl">کیا تم <span className="text-green-600 font-bold">پڑھ رہے ہو گے</span>؟</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Will you be studying</span>?</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    سوال کا صحیح فارمولا ہے: <strong>Will + subject + be + verb(ing)?</strong>
                  </p>
                </div>
              </div>
              
              {/* Mistake 9 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    9
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
                      <li className="text-black"><span className="line-through text-red-600 font-bold">What you will be doing</span>?</li>
                      <li className="text-black"><span className="line-through text-red-600 font-bold">Where you will be going</span>?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                    <div className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <h4 className="font-bold text-green-600 text-lg">✅ صحیح</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-black"><span className="text-green-600 font-bold">What will you be doing</span>?</li>
                      <li className="text-black"><span className="text-green-600 font-bold">Where will you be going</span>?</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-bold text-black mb-2" dir="rtl">🔍 وضاحت:</h5>
                  <p className="text-black" dir="rtl">
                    WH Questions کا صحیح فارمولا ہے: <strong>WH + will + subject + be + verb(ing)?</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mistake Category 6: Common Confusions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              6. دیگر عام غلطیاں
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mistake 10 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-blue-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">Stative verbs کے ساتھ Continuous</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I will be knowing the answer</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I will know the answer</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">Stative verbs (know, believe, hate) continuous میں نہیں آتیں</p>
              </div>
              
              {/* Mistake 11 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-blue-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">فعل کی غلط فارم</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">He will be runing</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">He will be running</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">run → running (آخری consonant double)</p>
              </div>
              
              {/* Mistake 12 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-blue-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">حرف جار کا غلط استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I will be there in 7 pm</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I will be there at 7 pm</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">وقت کے ساتھ 'at' استعمال ہوتا ہے</p>
              </div>
              
              {/* Mistake 13 */}
              <div className="bg-white rounded-xl shadow-md p-5 border-2 border-blue-200">
                <h4 className="font-bold text-black mb-3" dir="rtl">All day, all night کا استعمال</h4>
                <div className="bg-red-50 p-3 rounded-lg mb-2">
                  <p className="text-red-600 line-through">I will study all day at 7 pm</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-600">I will be studying all day tomorrow</p>
                </div>
                <p className="text-black text-sm mt-2" dir="rtl">All day کے ساتھ specific time نہیں آتا</p>
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
                    <td className="py-2 px-4 border-b text-red-600">I will studying</td>
                    <td className="py-2 px-4 border-b text-green-600">I will be studying</td>
                    <td className="py-2 px-4 border-b text-black">will + be + ing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">He will be play</td>
                    <td className="py-2 px-4 border-b text-green-600">He will be playing</td>
                    <td className="py-2 px-4 border-b text-black">verb میں ing لازمی</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I will be study</td>
                    <td className="py-2 px-4 border-b text-green-600">I will be studying</td>
                    <td className="py-2 px-4 border-b text-black">ing فارم ضروری</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">I will be knowing</td>
                    <td className="py-2 px-4 border-b text-green-600">I will know</td>
                    <td className="py-2 px-4 border-b text-black">Stative verbs no ing</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-red-600">Will you studying?</td>
                    <td className="py-2 px-4 border-b text-green-600">Will you be studying?</td>
                    <td className="py-2 px-4 border-b text-black">Question: Will + subject + be + ing?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Tips Box */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-md p-6 border-2 border-blue-300">
            <div className="flex items-start gap-4">
              <FaLightbulb className="text-yellow-500 text-3xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3" dir="rtl">Future Continuous Tense میں ان غلطیوں سے بچیں</h3>
                <ul className="space-y-2 text-black" dir="rtl">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>ہمیشہ <strong>will be + verb(ing)</strong> کا فارمولا یاد رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>وقت کا ذکر ضرور کریں (at 7 pm, tomorrow evening)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>دو کاموں والے جملوں میں ایک کام Present Simple میں رکھیں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>Stative verbs (know, want, like) کے ساتھ continuous استعمال نہ کریں</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold ml-2">✓</span>
                    <span>سوالات میں will کو subject سے پہلے رکھیں</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/exercises-in-urdu/future-continuous-exercise-1"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Practice Exercises →
            </Link>
            <Link 
              href="/quizzes/future-continuous-quiz"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Take Quiz
            </Link>
            <Link 
              href="/tenses-in-urdu/future-continuous"
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