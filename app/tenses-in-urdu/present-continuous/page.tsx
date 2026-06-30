import Link from 'next/link';

export default function PresentContinuousPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/tenses-in-urdu" className="text-white/80 hover:text-white transition duration-300">
              ← All Tenses
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Continuous Tense in Urdu
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            (Present Progressive Tense) - Aasaan Urdu Mein Seekhein
          </p>
        </div>
      </section>

      {/* Main Content - Pure Teaching */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              1. Present Continuous Tense Kya Hai?
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-4" dir="rtl">
                <strong className="text-green-600">Present Continuous Tense</strong> کو اردو میں 
                <strong className="text-green-600"> "حال جاری"</strong> کہتے ہیں۔ یہ ان کاموں کے لیے استعمال ہوتا ہے 
                جو اس وقت ہو رہے ہیں یا فی الحال جاری ہیں۔
              </p>
              
              <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                <h3 className="font-bold text-black mb-3 text-lg" dir="rtl">
                  Present Continuous Kab Use Karein؟
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <strong className="text-black">جو کام ابھی ہو رہا ہے</strong>
                      <p className="text-black text-sm" dir="rtl">جو کام اس وقت ہو رہا ہے</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <strong className="text-black">عارضی صورتحال</strong>
                      <p className="text-black text-sm" dir="rtl">کچھ دنوں سے جاری کام</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <strong className="text-black">مستقبل کے منصوبے</strong>
                      <p className="text-black text-sm" dir="rtl">پہلے سے طے شدہ کام</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-100 text-yellow-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <strong className="text-black">بدلتی ہوئی صورتحال</strong>
                      <p className="text-black text-sm" dir="rtl">جو حالات بدل رہے ہیں</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-5 rounded-xl border border-green-200">
              <h3 className="font-bold text-black mb-3" dir="rtl">مثالیں:</h3>
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ ابھی پانی پی رہا ہے۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">He is drinking water now</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    میں ان دنوں ایک کتاب لکھ رہا ہوں۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">I am writing a book these days</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    ہم کل لاہور جا رہے ہیں۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">We are going to Lahore tomorrow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pehchan */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              2. Present Continuous Ki Pehchan Kaise Karein؟
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اردو میں Present Continuous کی پہچان بہت آسان ہے۔ جملے کے آخر میں یہ الفاظ آتے ہیں:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">رہا ہے</div>
                  <p className="text-black font-bold">مرد واحد</p>
                  <p className="text-black text-sm">(واحد مذکر)</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">رہی ہے</div>
                  <p className="text-black font-bold">عورت واحد</p>
                  <p className="text-black text-sm">(واحد مؤنث)</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">رہے ہیں</div>
                  <p className="text-black font-bold">جمع</p>
                  <p className="text-black text-sm">(مذکر و مؤنث)</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4" dir="rtl">پہچان کی مثالیں:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ پانی <strong className="text-green-600">پی رہا ہے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"رہا ہے" آیا → Present Continuous</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ کتاب <strong className="text-green-600">پڑھ رہی ہے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"رہی ہے" آئی → Present Continuous</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ کھانا <strong className="text-green-600">کھا رہے ہیں۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"رہے ہیں" آئے → Present Continuous</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
              <h3 className="font-bold text-black mb-3" dir="rtl">یاد رکھیں:</h3>
              <ul className="space-y-2 text-black" dir="rtl">
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>اردو میں <strong>"رہا ہے، رہی ہے، رہے ہیں"</strong> دیکھ کر پہچان جائیں</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>یہ ظاہر کرتا ہے کہ کام اس وقت ہو رہا ہے</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>Present Continuous کی یہ خاص پہچان ہے</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Formula - Asaan Rule */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              3. Present Continuous Ka Asaan Formula
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="text-center mb-8">
                <div className="bg-gray-900 text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + is/am/are + Verb (ing) + Object
                  </div>
                </div>
                <p className="text-black mt-2">یہ سادہ Formula یاد رکھیں</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 text-center">
                  3 Rules Yad Rakhein:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Rule 1 */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border-2 border-blue-300">
                    <h4 className="font-bold text-lg text-black mb-2 text-center">I</h4>
                    <div className="text-center mb-2">
                      <div className="inline-block bg-white px-3 py-1 rounded-lg shadow">
                        <span className="text-xl font-bold text-blue-700">am</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-black">I am eating</p>
                      <p className="text-black text-sm">میں کھا رہا ہوں</p>
                    </div>
                  </div>
                  
                  {/* Rule 2 */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border-2 border-green-300">
                    <h4 className="font-bold text-lg text-black mb-2 text-center">He, She, It</h4>
                    <div className="text-center mb-2">
                      <div className="inline-block bg-white px-3 py-1 rounded-lg shadow">
                        <span className="text-xl font-bold text-green-700">is</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-black">He is eating</p>
                      <p className="text-black text-sm">وہ کھا رہا ہے</p>
                    </div>
                  </div>
                  
                  {/* Rule 3 */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border-2 border-purple-300">
                    <h4 className="font-bold text-lg text-black mb-2 text-center">You, We, They</h4>
                    <div className="text-center mb-2">
                      <div className="inline-block bg-white px-3 py-1 rounded-lg shadow">
                        <span className="text-xl font-bold text-purple-700">are</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-black">They are eating</p>
                      <p className="text-black text-sm">وہ کھا رہے ہیں</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Verb + ing Rules */}
              <div className="bg-gray-50 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4" dir="rtl">
                  Verb میں "ing" کیسے لگائیں؟
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-black rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 border-b text-left text-black">Rule</th>
                        <th className="py-3 px-4 border-b text-left text-black">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">عام verbs میں صرف <strong>ing</strong> لگائیں</td>
                        <td className="py-3 px-4 border-b text-black">eat → eating, play → playing</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">e سے ختم ہونے والے verbs کا e ہٹا کر <strong>ing</strong> لگائیں</td>
                        <td className="py-3 px-4 border-b text-black">write → writing, dance → dancing</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">CVC والے verbs کا آخری consonant double کریں پھر <strong>ing</strong></td>
                        <td className="py-3 px-4 border-b text-black">sit → sitting, run → running</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">ie سے ختم ہونے والے verbs کی ie کو y کریں پھر <strong>ing</strong></td>
                        <td className="py-3 px-4 border-b text-black">die → dying, lie → lying</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Positive Sentences */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              4. Positive Sentences - سادہ جملے
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اب ہم اردو جملوں کو انگریزی میں تبدیل کرنا سیکھیں گے:
              </p>
              
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="py-3 px-4 border-b text-left text-black">اردو جملہ</th>
                      <th className="py-3 px-4 border-b text-left text-black">انگریزی جملہ</th>
                      <th className="py-3 px-4 border-b text-left text-black">Helping Verb</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">میں پانی پی رہا ہوں۔</td>
                      <td className="py-3 px-4 font-bold text-black">I am drinking water</td>
                      <td className="py-3 px-4"><span className="text-blue-600">am</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ کتاب پڑھ رہی ہے۔</td>
                      <td className="py-3 px-4 font-bold text-black">She is reading a book</td>
                      <td className="py-3 px-4"><span className="text-green-600">is</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">تم کھانا کھا رہے ہو۔</td>
                      <td className="py-3 px-4 font-bold text-black">You are eating food</td>
                      <td className="py-3 px-4"><span className="text-purple-600">are</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ سکول جا رہا ہے۔</td>
                      <td className="py-3 px-4 font-bold text-black">He is going to school</td>
                      <td className="py-3 px-4"><span className="text-green-600">is</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">ہم انگریزی سیکھ رہے ہیں۔</td>
                      <td className="py-3 px-4 font-bold text-black">We are learning English</td>
                      <td className="py-3 px-4"><span className="text-purple-600">are</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-3" dir="rtl">پریکٹس کریں:</h3>
                <p className="text-black mb-3" dir="rtl">نیچے دیے ہوئے اردو جملوں کو انگریزی میں لکھیں:</p>
                <ol className="space-y-3 list-decimal list-inside text-black" dir="rtl">
                  <li className="font-urdu text-lg text-black">میں سو رہا ہوں۔</li>
                  <li className="font-urdu text-lg text-black">وہ گانا گا رہی ہے۔</li>
                  <li className="font-urdu text-lg text-black">تم کام کر رہے ہو۔</li>
                  <li className="font-urdu text-lg text-black">بچے کھیل رہے ہیں۔</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Section 5: Negative Sentences */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-red-500 pl-4">
              5. Negative Sentences - نفی والے جملے
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-center mb-6">
                <div className="bg-gray-900 text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + is/am/are + not + Verb(ing) + Object
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-2 text-center">I</h4>
                  <div className="text-center">
                    <p className="text-black font-bold">I am not eating</p>
                    <p className="text-black text-sm" dir="rtl">میں نہیں کھا رہا</p>
                  </div>
                </div>
                
                <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-2 text-center">He, She, It</h4>
                  <div className="text-center">
                    <p className="text-black font-bold">He is not eating</p>
                    <p className="text-black text-sm" dir="rtl">وہ نہیں کھا رہا</p>
                  </div>
                </div>
                
                <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-2 text-center">You, We, They</h4>
                  <div className="text-center">
                    <p className="text-black font-bold">They are not eating</p>
                    <p className="text-black text-sm" dir="rtl">وہ نہیں کھا رہے</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-5 rounded-xl">
                <h3 className="font-bold text-black mb-3">Short Forms:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-black"><strong>is not</strong> = isn't</p>
                    <p className="text-black text-sm">He isn't coming</p>
                  </div>
                  <div>
                    <p className="text-black"><strong>are not</strong> = aren't</p>
                    <p className="text-black text-sm">They aren't working</p>
                  </div>
                  <div>
                    <p className="text-black"><strong>am not</strong> = ain't (informal)</p>
                    <p className="text-black text-sm">I ain't going (slang)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Questions */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              6. Questions - سوالات بنانا
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Yes/No Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-gray-900 text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">Is/Am/Are + Subject + Verb(ing) + ?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم پانی پی رہے ہو؟</div>
                    <p className="text-black font-bold">Are you drinking water؟</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ کھانا کھا رہا ہے؟</div>
                    <p className="text-black font-bold">Is he eating food؟</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا میں ٹھیک بول رہا ہوں؟</div>
                    <p className="text-black font-bold">Am I speaking correctly؟</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-4">WH Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-gray-900 text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">WH + Is/Am/Are + Subject + Verb(ing) + ?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم کہاں جا رہے ہو؟</div>
                    <p className="text-black font-bold">Where are you going؟</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کیا کر رہی ہے؟</div>
                    <p className="text-black font-bold">What is she doing؟</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کیوں رو رہا ہے؟</div>
                    <p className="text-black font-bold">Why is he crying؟</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Quick Review */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-yellow-500 pl-4">
              7. Quick Review - جلدی دہرائی
            </h2>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-md p-6 border-2 border-yellow-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">پہچان:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                      <span>اردو میں "رہا ہے، رہی ہے، رہے ہیں"</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Formula:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>Subject + is/am/are + Verb(ing)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Helping Verbs:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>I = am</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>He, She, It = is</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>You, We, They = are</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">استعمال:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></div>
                      <span>ابھی ہو رہا کام</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></div>
                      <span>مستقبل کے منصوبے</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section at Bottom */}
      <section className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-10" dir="rtl">
            اب پریکٹس کریں اور آگے بڑھیں
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/exercises-in-urdu/present-continuous-exercise-1"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-green-200 text-center group"
            >
              <div className="text-green-600 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-black mb-2">Practice Exercises</h3>
              <p className="text-black mb-4">Present Continuous ki practice karo</p>
              <span className="text-green-600 font-semibold group-hover:text-green-800">
                Exercises Start Karo →
              </span>
            </Link>
            
            <Link 
              href="/tenses-in-urdu/present-perfect"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-blue-200 text-center group"
            >
              <div className="text-blue-600 text-3xl mb-4">➡️</div>
              <h3 className="text-xl font-bold text-black mb-2">Next Tense</h3>
              <p className="text-black mb-4">Present Perfect Tense seekhein</p>
              <span className="text-blue-600 font-semibold group-hover:text-blue-800">
                Agla Sabaq Parho →
              </span>
            </Link>
            
            <Link 
              href="/tenses-in-urdu"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-purple-200 text-center group"
            >
              <div className="text-purple-600 text-3xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-black mb-2">All Tenses</h3>
              <p className="text-black mb-4">Saare tenses ka index dekhein</p>
              <span className="text-purple-600 font-semibold group-hover:text-purple-800">
                All Tenses Dekhein →
              </span>
            </Link>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-black mb-6" dir="rtl">
              Common mistakes aur learning tips ke liye in pages par jayein:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/mistakes/present-continuous"
                className="text-black hover:text-green-600 font-medium"
              >
                Common Mistakes
              </Link>
              <Link 
                href="/tips"
                className="text-black hover:text-green-600 font-medium"
              >
                Learning Tips
              </Link>
              <Link 
                href="/quizzes/present-continuous-quiz"
                className="text-black hover:text-green-600 font-medium"
              >
                Take Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}