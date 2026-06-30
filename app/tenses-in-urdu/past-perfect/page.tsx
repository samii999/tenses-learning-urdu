import Link from 'next/link';

export default function PastPerfectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/tenses-in-urdu" className="text-white/80 hover:text-white transition duration-300">
              ← All Tenses
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Perfect Tense in Urdu
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            (Past Perfect Tense) - Aasaan Urdu Mein Seekhein
          </p>
        </div>
      </section>

      {/* Main Content - Pure Teaching */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              1. Past Perfect Tense Kya Hai?
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-4" dir="rtl">
                <strong className="text-purple-600">Past Perfect Tense</strong> کو اردو میں 
                <strong className="text-purple-600"> "ماضی مکمل"</strong> کہتے ہیں۔ یہ ان کاموں کے لیے استعمال ہوتا ہے 
                جو ماضی میں دو کاموں میں سے پہلے مکمل ہو چکے تھے۔
              </p>
              
              <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                <h3 className="font-bold text-black mb-3 text-lg" dir="rtl">
                  Past Perfect Kab Use Karein؟
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <strong className="text-black">پہلے والا کام</strong>
                      <p className="text-black text-sm" dir="rtl">دو کاموں میں سے جو پہلے ہوا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <strong className="text-black">ماضی میں ختم شدہ</strong>
                      <p className="text-black text-sm" dir="rtl">کسی خاص وقت سے پہلے مکمل ہوا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <strong className="text-black">تجربہ (ماضی میں)</strong>
                      <p className="text-black text-sm" dir="rtl">ماضی کے کسی وقت سے پہلے کا تجربہ</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <strong className="text-black">وجہ بتانا</strong>
                      <p className="text-black text-sm" dir="rtl">ماضی میں کسی کام کی وجہ بتانا</p>
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
                    میں کھانا کھا چکا تھا جب وہ آیا۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">I had eaten food when he came</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ جا چکی تھی جب میں پہنچا۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">She had gone when I arrived</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    بارش شروع ہو چکی تھی جب ہم نکلے۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">The rain had started when we left</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pehchan */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              2. Past Perfect Ki Pehchan Kaise Karein؟
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اردو میں Past Perfect کی پہچان یہ ہے کہ جملے میں یہ الفاظ آتے ہیں:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">چکا تھا</div>
                  <p className="text-black font-bold">مرد واحد</p>
                  <p className="text-black text-sm">(میں، وہ)</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">چکی تھی</div>
                  <p className="text-black font-bold">عورت واحد</p>
                  <p className="text-black text-sm">(وہ)</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">چکے تھے</div>
                  <p className="text-black font-bold">جمع</p>
                  <p className="text-black text-sm">(ہم، تم، وہ)</p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="bg-purple-50 p-3 rounded-lg inline-block">
                  <p className="text-black font-bold" dir="rtl">یہ بھی پہچان ہے: "لیا تھا، دیا تھا، کیا تھا" + "جب"</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 mt-6" dir="rtl">پہچان کی مثالیں:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        میں کھانا کھا <strong className="text-purple-600">چکا تھا</strong> جب وہ آیا۔
                      </td>
                      <td className="py-3 px-4 text-black">"چکا تھا" + جب → Past Perfect</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ جا <strong className="text-purple-600">چکی تھی</strong> جب میں پہنچا۔
                      </td>
                      <td className="py-3 px-4 text-black">"چکی تھی" + جب → Past Perfect</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        ہم کام ختم کر <strong className="text-purple-600">چکے تھے</strong>۔
                      </td>
                      <td className="py-3 px-4 text-black">"چکے تھے" → Past Perfect</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        اس نے خط لکھ <strong className="text-purple-600">لیا تھا</strong>۔
                      </td>
                      <td className="py-3 px-4 text-black">"لیا تھا" → Past Perfect</td>
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
                  <span>اردو میں <strong>"چکا تھا، چکی تھی، چکے تھے"</strong> یا <strong>"لیا تھا، دیا تھا، کیا تھا"</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>ساتھ میں <strong>"جب"</strong> ضرور آتا ہے یا سمجھا جاتا ہے</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>یہ بتاتا ہے کہ دو کاموں میں سے کون سا پہلے ہوا</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Two Actions in Past */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-orange-500 pl-4">
              3. ماضی کے دو کام - Two Actions in Past
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-5 rounded-lg border-2 border-orange-300">
                  <h4 className="font-bold text-lg text-black mb-3 text-center" dir="rtl">پہلے والا کام (Earlier Action)</h4>
                  <div className="text-center mb-2">
                    <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg">
                      <span className="font-bold">Past Perfect</span>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <p className="font-urdu text-black text-center" dir="rtl">کھانا کھا <strong className="text-purple-600">چکا تھا</strong></p>
                    <p className="text-black text-center">had eaten</p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300">
                  <h4 className="font-bold text-lg text-black mb-3 text-center" dir="rtl">بعد والا کام (Later Action)</h4>
                  <div className="text-center mb-2">
                    <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg">
                      <span className="font-bold">Past Simple</span>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <p className="font-urdu text-black text-center" dir="rtl">وہ <strong className="text-green-600">آیا</strong></p>
                    <p className="text-black text-center">he came</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="text-black text-lg font-bold" dir="rtl">
                    میں کھانا کھا <span className="text-purple-600">چکا تھا</span> <span className="text-orange-600">جب</span> وہ <span className="text-green-600">آیا</span>۔
                  </p>
                  <p className="text-black">
                    I <span className="text-purple-600">had eaten</span> food <span className="text-orange-600">when</span> he <span className="text-green-600">came</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Formula - Asaan Rule */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              4. Past Perfect Ka Asaan Formula
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="text-center mb-8">
                <div className="bg-black text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + had + Verb (3rd form) + Object
                  </div>
                </div>
                <p className="text-black mt-2" dir="rtl">had + verb کی تیسری فارم</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 text-center">
                  ایک ہی Rule ہے:
                </h3>
                
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border-2 border-purple-300">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-lg">
                      <span className="text-3xl font-bold text-purple-700">had + verb(3rd)</span>
                    </div>
                  </div>
                  <p className="text-black text-center mb-4" dir="rtl">ہر Subject کے ساتھ (I, You, He, She, It, We, They) یکساں</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="font-urdu text-black" dir="rtl">میں کھا چکا تھا۔</p>
                      <p className="text-black">I <strong>had eaten</strong>.</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">وہ جا چکی تھی۔</p>
                      <p className="text-black">She <strong>had gone</strong>.</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">ہم پڑھ چکے تھے۔</p>
                      <p className="text-black">We <strong>had studied</strong>.</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">وہ آ چکے تھے۔</p>
                      <p className="text-black">They <strong>had come</strong>.</p>
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
                      <tr><td className="py-2 px-4 border-b text-black">eat</td><td className="py-2 px-4 border-b text-black font-bold">eaten</td><td className="py-2 px-4 border-b text-black">Irregular</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">go</td><td className="py-2 px-4 border-b text-black font-bold">gone</td><td className="py-2 px-4 border-b text-black">Irregular</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">see</td><td className="py-2 px-4 border-b text-black font-bold">seen</td><td className="py-2 px-4 border-b text-black">Irregular</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">come</td><td className="py-2 px-4 border-b text-black font-bold">come</td><td className="py-2 px-4 border-b text-black">Irregular</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">take</td><td className="py-2 px-4 border-b text-black font-bold">taken</td><td className="py-2 px-4 border-b text-black">Irregular</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">write</td><td className="py-2 px-4 border-b text-black font-bold">written</td><td className="py-2 px-4 border-b text-black">Irregular</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">do</td><td className="py-2 px-4 border-b text-black font-bold">done</td><td className="py-2 px-4 border-b text-black">Irregular</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">work</td><td className="py-2 px-4 border-b text-black font-bold">worked</td><td className="py-2 px-4 border-b text-black">Regular</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-black mt-3 text-sm" dir="rtl">
                  <strong>نوٹ:</strong> Irregular verbs کی 3rd form یاد کرنی ہوتی ہے۔
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Positive Sentences */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              5. Positive Sentences - سادہ جملے
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
                      <th className="py-3 px-4 border-b text-left text-black">Verb (3rd)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">میں کھانا کھا چکا تھا جب وہ آیا۔</td>
                      <td className="py-3 px-4 font-bold text-black">I had eaten food when he came</td>
                      <td className="py-3 px-4 text-black font-bold">eaten</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ جا چکی تھی جب میں پہنچا۔</td>
                      <td className="py-3 px-4 font-bold text-black">She had gone when I arrived</td>
                      <td className="py-3 px-4 text-black font-bold">gone</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">بارش شروع ہو چکی تھی جب ہم نکلے۔</td>
                      <td className="py-3 px-4 font-bold text-black">The rain had started when we left</td>
                      <td className="py-3 px-4 text-black font-bold">started</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">اس نے خط لکھ لیا تھا۔</td>
                      <td className="py-3 px-4 font-bold text-black">She had written the letter</td>
                      <td className="py-3 px-4 text-black font-bold">written</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">ہم فلم دیکھ چکے تھے۔</td>
                      <td className="py-3 px-4 font-bold text-black">We had watched the movie</td>
                      <td className="py-3 px-4 text-black font-bold">watched</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-3" dir="rtl">پریکٹس کریں:</h3>
                <p className="text-black mb-3" dir="rtl">نیچے دیے ہوئے اردو جملوں کو انگریزی میں لکھیں:</p>
                <ol className="space-y-3 list-decimal list-inside text-black" dir="rtl">
                  <li className="font-urdu text-lg text-black">میں پانی پی چکا تھا جب وہ آیا۔</li>
                  <li className="font-urdu text-lg text-black">وہ سو چکی تھی جب میں فون کیا۔</li>
                  <li className="font-urdu text-lg text-black">ہم کام ختم کر چکے تھے۔</li>
                  <li className="font-urdu text-lg text-black">ٹرین جا چکی تھی جب ہم سٹیشن پہنچے۔</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Section 6: Negative Sentences */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-red-500 pl-4">
              6. Negative Sentences - نفی والے جملے
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-center mb-6">
                <div className="bg-black text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + had + not + Verb (3rd form) + Object
                  </div>
                </div>
                <p className="text-black mt-2 text-sm" dir="rtl">had not کے بعد verb کی تیسری فارم</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">Examples</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">میں نے نہیں کھایا تھا۔</div>
                      <p className="text-black">I had not eaten</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">ہم نہیں گئے تھے۔</div>
                      <p className="text-black">We had not gone</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">Examples</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ نہیں آیا تھا۔</div>
                      <p className="text-black">He had not come</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">اس نے نہیں دیکھا تھا۔</div>
                      <p className="text-black">She had not seen</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-5 rounded-xl">
                <h3 className="font-bold text-black mb-3" dir="rtl">اہم نکتہ:</h3>
                <div className="flex items-center">
                  <span className="text-green-600 font-bold mr-2">✅</span>
                  <span className="text-black">He had not gone.</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-green-600 font-bold mr-2">✅</span>
                  <span className="text-black">He hadn't gone. (Short form)</span>
                </div>
                <p className="text-black mt-2"><strong>Short Form:</strong> had not = hadn't</p>
              </div>
            </div>
          </div>

          {/* Section 7: Questions */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              7. Questions - سوالات بنانا
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Yes/No Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">Had + Subject + Verb (3rd form) + Object?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم نے کھانا کھا لیا تھا؟</div>
                    <p className="text-black font-bold">Had you eaten food?</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ جا چکی تھی؟</div>
                    <p className="text-black font-bold">Had she gone?</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا بارش شروع ہو چکی تھی؟</div>
                    <p className="text-black font-bold">Had the rain started?</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-4">WH Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">WH + had + Subject + Verb (3rd form) + Object?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم نے کیا کھایا تھا؟</div>
                    <p className="text-black font-bold">What had you eaten?</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کہاں گئی تھی؟</div>
                    <p className="text-black font-bold">Where had she gone?</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم نے یہ کیوں کیا تھا؟</div>
                    <p className="text-black font-bold">Why had you done this?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Before and After */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              8. Before اور After کا استعمال
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-300">
                <h3 className="text-2xl font-bold text-black mb-4 text-center">Before (سے پہلے)</h3>
                <div className="space-y-3">
                  <p className="font-urdu text-black" dir="rtl">وہ آنے <span className="text-green-600 font-bold">سے پہلے</span> میں جا چکا تھا۔</p>
                  <p className="text-black">I <strong>had gone</strong> <span className="text-green-600 font-bold">before</span> he came.</p>
                  <p className="text-black mt-2 text-sm">Past Perfect + before + Past Simple</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
                <h3 className="text-2xl font-bold text-black mb-4 text-center">After (کے بعد)</h3>
                <div className="space-y-3">
                  <p className="font-urdu text-black" dir="rtl">کھانا کھانے <span className="text-blue-600 font-bold">کے بعد</span> میں سویا۔</p>
                  <p className="text-black"><span className="text-blue-600 font-bold">After</span> I <strong>had eaten</strong>, I slept.</p>
                  <p className="text-black mt-2 text-sm">After + Past Perfect + Past Simple</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9: Past Perfect vs Past Simple */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-yellow-500 pl-4">
              9. Past Perfect vs Past Simple - فرق
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-yellow-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">Past Perfect</th>
                    <th className="py-3 px-4 border-b text-left text-black">Past Simple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black">پہلے والا کام (Earlier action)</td>
                    <td className="py-3 px-4 text-black">بعد والا کام (Later action)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black font-urdu" dir="rtl">میں کھا <strong>چکا تھا</strong></td>
                    <td className="py-3 px-4 text-black font-urdu" dir="rtl">وہ <strong>آیا</strong></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black">I <strong>had eaten</strong></td>
                    <td className="py-3 px-4 text-black">he <strong>came</strong></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">had + verb(3rd)</td>
                    <td className="py-3 px-4 text-black">verb(2nd)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 10: Quick Review */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              10. Quick Review - جلدی دہرائی
            </h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-md p-6 border-2 border-purple-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">پہچان:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full ml-2"></div>
                      <span>چکا تھا، چکی تھی، چکے تھے</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full ml-2"></div>
                      <span>لیا تھا، دیا تھا، کیا تھا</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Formula:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>had + verb(3rd)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Helping Verb:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>had (all subjects)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">اہم الفاظ:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full ml-2"></div>
                      <span>جب (when), پہلے (before), بعد (after)</span>
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
              href="/exercises-in-urdu/past-perfect-exercise-1"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-purple-200 text-center group"
            >
              <div className="text-purple-600 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-black mb-2">Practice Exercises</h3>
              <p className="text-black mb-4">Past Perfect ki practice karo</p>
              <span className="text-purple-600 font-semibold group-hover:text-purple-800">
                Exercises Start Karo →
              </span>
            </Link>
            
            <Link 
              href="/tenses-in-urdu/past-perfect-continuous"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-pink-200 text-center group"
            >
              <div className="text-pink-600 text-3xl mb-4">➡️</div>
              <h3 className="text-xl font-bold text-black mb-2">Next Tense</h3>
              <p className="text-black mb-4">Past Perfect Continuous seekhein</p>
              <span className="text-pink-600 font-semibold group-hover:text-pink-800">
                Agla Sabaq Parho →
              </span>
            </Link>
            
            <Link 
              href="/tenses-in-urdu"
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
                href="/mistakes/past-perfect"
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
                href="/quizzes/past-perfect-quiz"
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