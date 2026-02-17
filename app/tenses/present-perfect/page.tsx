import Link from 'next/link';

export default function PresentPerfectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/tenses" className="text-white/80 hover:text-white transition duration-300">
              ← All Tenses
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Perfect Tense in Urdu
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            (Present Perfect Tense) - Aasaan Urdu Mein Seekhein
          </p>
        </div>
      </section>

      {/* Main Content - Pure Teaching */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              1. Present Perfect Tense Kya Hai?
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-4" dir="rtl">
                <strong className="text-purple-600">Present Perfect Tense</strong> کو اردو میں 
                <strong className="text-purple-600"> "حال مکمل"</strong> کہتے ہیں۔ یہ ان کاموں کے لیے استعمال ہوتا ہے 
                جو ماضی میں ختم ہو چکے ہیں لیکن ان کا اثر حال پر موجود ہے۔
              </p>
              
              <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                <h3 className="font-bold text-black mb-3 text-lg" dir="rtl">
                  Present Perfect Kab Use Karein؟
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <strong className="text-black">حال میں اثر</strong>
                      <p className="text-black text-sm" dir="rtl">ماضی کا کام جس کا اثر اب ہے</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <strong className="text-black">زندگی کا تجربہ</strong>
                      <p className="text-black text-sm" dir="rtl">آپ نے زندگی میں کیا کیا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <strong className="text-black">ابھی ختم ہوا کام</strong>
                      <p className="text-black text-sm" dir="rtl">تھوڑی دیر پہلے ختم ہوا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-100 text-yellow-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <strong className="text-black">کبھی نہ کبھی</strong>
                      <p className="text-black text-sm" dir="rtl">کسی بھی وقت (life experience)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
              <h3 className="font-bold text-black mb-3" dir="rtl">مثالیں:</h3>
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    میں نے کھانا کھا لیا ہے۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">I have eaten food</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ لندن جا چکا ہے۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">He has gone to London</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    ہم نے یہ فلم دیکھ لی ہے۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">We have watched this movie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pehchan */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              2. Present Perfect Ki Pehchan Kaise Karein؟
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اردو میں Present Perfect کی پہچان یہ ہے کہ جملے میں یہ الفاظ آتے ہیں:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">چکا ہے</div>
                  <p className="text-black font-bold">مرد واحد</p>
                  <p className="text-black text-sm">(مذکر)</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">چکی ہے</div>
                  <p className="text-black font-bold">عورت واحد</p>
                  <p className="text-black text-sm">(مؤنث)</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">چکے ہیں</div>
                  <p className="text-black font-bold">جمع</p>
                  <p className="text-black text-sm">(مذکر و مؤنث)</p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="bg-purple-50 p-3 rounded-lg inline-block">
                  <p className="text-black font-bold" dir="rtl">یہ بھی پہچان ہے: "لیا ہے، دیا ہے، کیا ہے"</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 mt-6" dir="rtl">پہچان کی مثالیں:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ کھانا کھا <strong className="text-purple-600">چکا ہے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"چکا ہے" آیا → Present Perfect</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        اس نے کتاب پڑھ <strong className="text-purple-600">لی ہے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"لی ہے" آیا → Present Perfect</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        ہم کام ختم کر <strong className="text-purple-600">چکے ہیں۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"چکے ہیں" آئے → Present Perfect</td>
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
                  <span>اردو میں <strong>"چکا ہے، چکی ہے، چکے ہیں"</strong> یا <strong>"لیا ہے، دیا ہے، کیا ہے"</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>یہ کام ماضی میں ختم ہوا مگر اثر اب ہے</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>کام کا وقت معلوم نہیں یا اہم نہیں</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Formula - Asaan Rule */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              3. Present Perfect Ka Asaan Formula
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="text-center mb-8">
                <div className="bg-black text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + have/has + Verb (3rd form) + Object
                  </div>
                </div>
                <p className="text-black mt-2">یہ سادہ Formula یاد رکھیں</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 text-center">
                  2 Rules Yad Rakhein:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Rule 1 */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-300">
                    <h4 className="font-bold text-lg text-black mb-3 text-center">I, You, We, They</h4>
                    <div className="text-center mb-3">
                      <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                        <span className="text-2xl font-bold text-blue-700">have</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-black">I</span>
                        <span className="font-bold text-blue-700">have eaten</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">You</span>
                        <span className="font-bold text-blue-700">have played</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">We</span>
                        <span className="font-bold text-blue-700">have gone</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">They</span>
                        <span className="font-bold text-blue-700">have read</span>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-sm bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                        I, You, We, They = HAVE
                      </span>
                    </div>
                  </div>
                  
                  {/* Rule 2 */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border-2 border-purple-300">
                    <h4 className="font-bold text-lg text-black mb-3 text-center">He, She, It</h4>
                    <div className="text-center mb-3">
                      <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                        <span className="text-2xl font-bold text-purple-700">has</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-black">He</span>
                        <span className="font-bold text-purple-700">has eaten</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">She</span>
                        <span className="font-bold text-purple-700">has played</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">It</span>
                        <span className="font-bold text-purple-700">has worked</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">Ali</span>
                        <span className="font-bold text-purple-700">has read</span>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-sm bg-purple-200 text-purple-800 px-3 py-1 rounded-full">
                        He, She, It = HAS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Verb 3rd Form Rules */}
              <div className="bg-gray-50 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4" dir="rtl">
                  Verb کی تیسری فارم (Past Participle):
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-black rounded-lg">
                    <thead className="bg-purple-100">
                      <tr>
                        <th className="py-3 px-4 border-b text-left text-black">Verb (Base)</th>
                        <th className="py-3 px-4 border-b text-left text-black">Verb (3rd Form)</th>
                        <th className="py-3 px-4 border-b text-left text-black">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">eat</td>
                        <td className="py-3 px-4 border-b text-black font-bold text-purple-600">eaten</td>
                        <td className="py-3 px-4 border-b text-black">Irregular</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">go</td>
                        <td className="py-3 px-4 border-b text-black font-bold text-purple-600">gone</td>
                        <td className="py-3 px-4 border-b text-black">Irregular</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">see</td>
                        <td className="py-3 px-4 border-b text-black font-bold text-purple-600">seen</td>
                        <td className="py-3 px-4 border-b text-black">Irregular</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">do</td>
                        <td className="py-3 px-4 border-b text-black font-bold text-purple-600">done</td>
                        <td className="py-3 px-4 border-b text-black">Irregular</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">work</td>
                        <td className="py-3 px-4 border-b text-black font-bold text-purple-600">worked</td>
                        <td className="py-3 px-4 border-b text-black">Regular (ed)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">play</td>
                        <td className="py-3 px-4 border-b text-black font-bold text-purple-600">played</td>
                        <td className="py-3 px-4 border-b text-black">Regular (ed)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-black mt-3 text-sm" dir="rtl">
                  <strong>نوٹ:</strong> Irregular verbs کی 3rd form یاد کرنی ہوتی ہے۔ Regular verbs میں صرف آخر میں "ed" لگتا ہے۔
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Positive Sentences */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              4. Positive Sentences - سادہ جملے
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اب ہم اردو جملوں کو انگریزی میں تبدیل کرنا سیکھیں گے:
              </p>
              
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="py-3 px-4 border-b text-left text-black">اردو جملہ</th>
                      <th className="py-3 px-4 border-b text-left text-black">انگریزی جملہ</th>
                      <th className="py-3 px-4 border-b text-left text-black">Helping Verb</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">میں نے کھانا کھا لیا ہے۔</td>
                      <td className="py-3 px-4 font-bold text-black">I have eaten food</td>
                      <td className="py-3 px-4"><span className="text-blue-600">have</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">اس نے کتاب پڑھ لی ہے۔</td>
                      <td className="py-3 px-4 font-bold text-black">She has read the book</td>
                      <td className="py-3 px-4"><span className="text-purple-600">has</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">تم نے کام ختم کر لیا ہے۔</td>
                      <td className="py-3 px-4 font-bold text-black">You have finished the work</td>
                      <td className="py-3 px-4"><span className="text-blue-600">have</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ لندن جا چکا ہے۔</td>
                      <td className="py-3 px-4 font-bold text-black">He has gone to London</td>
                      <td className="py-3 px-4"><span className="text-purple-600">has</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">ہم نے یہ فلم دیکھ لی ہے۔</td>
                      <td className="py-3 px-4 font-bold text-black">We have seen this movie</td>
                      <td className="py-3 px-4"><span className="text-blue-600">have</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-3" dir="rtl">پریکٹس کریں:</h3>
                <p className="text-black mb-3" dir="rtl">نیچے دیے ہوئے اردو جملوں کو انگریزی میں لکھیں:</p>
                <ol className="space-y-3 list-decimal list-inside text-black" dir="rtl">
                  <li className="font-urdu text-lg text-black">میں نے پانی پی لیا ہے۔</li>
                  <li className="font-urdu text-lg text-black">اس نے خط لکھ دیا ہے۔</li>
                  <li className="font-urdu text-lg text-black">ہم نے کھانا کھا لیا ہے۔</li>
                  <li className="font-urdu text-lg text-black">وہ گاڑی خرید چکے ہیں۔</li>
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
                <div className="bg-black text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + have/has + not + Verb(3rd) + Object
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">I, You, We, They</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">میں نے نہیں کھایا۔</div>
                      <p className="text-black">I have not eaten</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">ہم نہیں گئے۔</div>
                      <p className="text-black">We have not gone</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">He, She, It</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">اس نے نہیں پڑھا۔</div>
                      <p className="text-black">He has not read</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ نہیں آئی۔</div>
                      <p className="text-black">She has not come</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-5 rounded-xl">
                <h3 className="font-bold text-black mb-3">Short Forms:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-black"><strong>have not</strong> = haven't</p>
                    <p className="text-black text-sm">I haven't eaten</p>
                  </div>
                  <div>
                    <p className="text-black"><strong>has not</strong> = hasn't</p>
                    <p className="text-black text-sm">He hasn't come</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Questions */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              6. Questions - سوالات بنانا
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Yes/No Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">Have/Has + Subject + Verb(3rd) + ?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم نے کھانا کھا لیا ہے؟</div>
                    <p className="text-black font-bold">Have you eaten food?</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ لندن جا چکا ہے؟</div>
                    <p className="text-black font-bold">Has he gone to London?</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم نے یہ فلم دیکھی ہے؟</div>
                    <p className="text-black font-bold">Have you seen this movie?</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-4">WH Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">WH + Have/Has + Subject + Verb(3rd) + ?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم نے کیا کھایا ہے؟</div>
                    <p className="text-black font-bold">What have you eaten?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کہاں گیا ہے؟</div>
                    <p className="text-black font-bold">Where has he gone?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم نے یہ کیوں کیا ہے؟</div>
                    <p className="text-black font-bold">Why have you done this?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Time Words */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              7. Present Perfect کے ساتھ استعمال ہونے والے الفاظ
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-black mb-3 text-center text-lg">Already (پہلے ہی)</h4>
                  <div className="space-y-2">
                    <p className="font-urdu text-black" dir="rtl">میں پہلے ہی کھا چکا ہوں۔</p>
                    <p className="text-black">I have already eaten.</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-black mb-3 text-center text-lg">Just (ابھی)</h4>
                  <div className="space-y-2">
                    <p className="font-urdu text-black" dir="rtl">وہ ابھی آیا ہے۔</p>
                    <p className="text-black">He has just come.</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-black mb-3 text-center text-lg">Yet (ابھی تک)</h4>
                  <div className="space-y-2">
                    <p className="font-urdu text-black" dir="rtl">وہ ابھی تک نہیں آیا۔</p>
                    <p className="text-black">He has not come yet.</p>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-black mb-3 text-center text-lg">Ever / Never (کبھی / کبھی نہیں)</h4>
                  <div className="space-y-2">
                    <p className="font-urdu text-black" dir="rtl">کیا تم کبھی لندن گئے ہو؟</p>
                    <p className="text-black">Have you ever been to London?</p>
                    <p className="font-urdu text-black" dir="rtl">میں کبھی نہیں گیا۔</p>
                    <p className="text-black">I have never been.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Quick Review */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-yellow-500 pl-4">
              8. Quick Review - جلدی دہرائی
            </h2>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-md p-6 border-2 border-yellow-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">پہچان:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full ml-2"></div>
                      <span>چکا ہے، چکی ہے، چکے ہیں</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full ml-2"></div>
                      <span>لیا ہے، دیا ہے، کیا ہے</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Formula:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>Subject + have/has + Verb(3rd)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Helping Verbs:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>I, You, We, They = have</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>He, She, It = has</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">استعمال:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                      <span>ماضی کا کام، حال میں اثر</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                      <span>زندگی کے تجربات</span>
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
              href="/exercises/present-perfect-exercise-1"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-purple-200 text-center group"
            >
              <div className="text-purple-600 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-black mb-2">Practice Exercises</h3>
              <p className="text-black mb-4">Present Perfect ki practice karo</p>
              <span className="text-purple-600 font-semibold group-hover:text-purple-800">
                Exercises Start Karo →
              </span>
            </Link>
            
            <Link 
              href="/tenses/present-perfect-continuous"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-pink-200 text-center group"
            >
              <div className="text-pink-600 text-3xl mb-4">➡️</div>
              <h3 className="text-xl font-bold text-black mb-2">Next Tense</h3>
              <p className="text-black mb-4">Present Perfect Continuous seekhein</p>
              <span className="text-pink-600 font-semibold group-hover:text-pink-800">
                Agla Sabaq Parho →
              </span>
            </Link>
            
            <Link 
              href="/tenses"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-blue-200 text-center group"
            >
              <div className="text-blue-600 text-3xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-black mb-2">All Tenses</h3>
              <p className="text-black mb-4">Saare tenses ka index dekhein</p>
              <span className="text-blue-600 font-semibold group-hover:text-blue-800">
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
                href="/mistakes/present-perfect"
                className="text-black hover:text-purple-600 font-medium"
              >
                Common Mistakes
              </Link>
              <Link 
                href="/tips"
                className="text-black hover:text-purple-600 font-medium"
              >
                Learning Tips
              </Link>
              <Link 
                href="/quizzes/present-perfect-quiz"
                className="text-black hover:text-purple-600 font-medium"
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