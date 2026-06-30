import Link from 'next/link';

export default function FuturePerfectPage() {
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
            Future Perfect Tense in Urdu
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            (Future Perfect Tense) - Aasaan Urdu Mein Seekhein
          </p>
        </div>
      </section>

      {/* Main Content - Pure Teaching */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              1. Future Perfect Tense Kya Hai?
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-4" dir="rtl">
                <strong className="text-purple-600">Future Perfect Tense</strong> کو اردو میں 
                <strong className="text-purple-600"> "مستقبل مکمل"</strong> کہتے ہیں۔ یہ ان کاموں کے لیے استعمال ہوتا ہے 
                جو مستقبل میں کسی خاص وقت تک مکمل ہو چکے ہوں گے۔
              </p>
              
              <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                <h3 className="font-bold text-black mb-3 text-lg" dir="rtl">
                  Future Perfect Kab Use Karein؟
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <strong className="text-black">مستقبل میں مکمل کام</strong>
                      <p className="text-black text-sm" dir="rtl">کسی وقت تک کام ختم ہو چکا ہو گا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <strong className="text-black">دو کاموں میں پہلے والا</strong>
                      <p className="text-black text-sm" dir="rtl">مستقبل کے دو کاموں میں سے پہلے والا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <strong className="text-black">مدت مکمل ہونا</strong>
                      <p className="text-black text-sm" dir="rtl">کسی کام کی مدت پوری ہو چکی ہو گی</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <strong className="text-black">یقینی نتیجہ</strong>
                      <p className="text-black text-sm" dir="rtl">یقین ہے کہ کام ہو چکا ہو گا</p>
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
                    میں کل شام تک کام ختم کر چکا ہوں گا۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">I will have finished the work by tomorrow evening</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ اگلے سال تک گریجویشن کر چکی ہو گی۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">She will have graduated by next year</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ شام 7 بجے تک پہنچ چکے ہوں گے۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">They will have arrived by 7 pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pehchan */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              2. Future Perfect Ki Pehchan Kaise Karein؟
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اردو میں Future Perfect کی پہچان یہ ہے کہ جملے میں یہ الفاظ آتے ہیں:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">چکا ہوں گا</div>
                  <p className="text-black font-bold">مرد واحد</p>
                  <p className="text-black text-sm">(میں، وہ)</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">چکی ہو گی</div>
                  <p className="text-black font-bold">عورت واحد</p>
                  <p className="text-black text-sm">(وہ)</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">چکے ہوں گے</div>
                  <p className="text-black font-bold">جمع</p>
                  <p className="text-black text-sm">(ہم، تم، وہ)</p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="bg-purple-50 p-3 rounded-lg inline-block">
                  <p className="text-black font-bold" dir="rtl">وقت کے الفاظ: "تک، تک" (by, by the time) + مستقبل کا وقت</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 mt-6" dir="rtl">پہچان کی مثالیں:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        میں کل شام تک کام ختم کر <strong className="text-purple-600">چکا ہوں گا۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"چکا ہوں گا" + تک → Future Perfect</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ اگلے سال تک گریجویشن کر <strong className="text-purple-600">چکی ہو گی۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"چکی ہو گی" + تک → Future Perfect</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ شام 7 بجے تک پہنچ <strong className="text-purple-600">چکے ہوں گے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"چکے ہوں گے" + تک → Future Perfect</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        ہم اگلے ہفتے تک کتاب پڑھ <strong className="text-purple-600">چکے ہوں گے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"چکے ہوں گے" + تک → Future Perfect</td>
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
                  <span>اردو میں <strong>"چکا ہوں گا، چکی ہو گی، چکے ہوں گے"</strong> دیکھ کر پہچان جائیں</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>ساتھ میں <strong>"تک"</strong> (by) ضرور ہوتا ہے</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>یہ بتاتا ہے کہ مستقبل کے کسی وقت تک کام مکمل ہو چکا ہو گا</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: By and By the time */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-orange-500 pl-4">
              3. By اور By the time کا استعمال
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-300">
                <h3 className="text-2xl font-bold text-black mb-4 text-center">By (تک)</h3>
                <p className="text-black mb-3 text-center" dir="rtl">کسی خاص وقت تک</p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-urdu text-black" dir="rtl">میں <span className="text-orange-600 font-bold">شام 7 بجے تک</span> پہنچ چکا ہوں گا۔</p>
                    <p className="text-black">I will have arrived <span className="text-orange-600 font-bold">by 7 pm</span>.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-urdu text-black" dir="rtl">وہ <span className="text-orange-600 font-bold">کل تک</span> کام ختم کر چکی ہو گی۔</p>
                    <p className="text-black">She will have finished the work <span className="text-orange-600 font-bold">by tomorrow</span>.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
                <h3 className="text-2xl font-bold text-black mb-4 text-center">By the time (جب تک)</h3>
                <p className="text-black mb-3 text-center" dir="rtl">کام ہونے تک</p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-urdu text-black" dir="rtl"><span className="text-green-600 font-bold">جب تک</span> وہ آئے گا، میں جا چکا ہوں گا۔</p>
                    <p className="text-black"><span className="text-green-600 font-bold">By the time</span> he comes, I will have left.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-urdu text-black" dir="rtl"><span className="text-green-600 font-bold">جب تک</span> تم پہنچو گے، فلم شروع ہو چکی ہو گی۔</p>
                    <p className="text-black"><span className="text-green-600 font-bold">By the time</span> you arrive, the movie will have started.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Formula - Asaan Rule */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              4. Future Perfect Ka Asaan Formula
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="text-center mb-8">
                <div className="bg-black text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + will have + Verb (3rd form) + Object + by + time
                  </div>
                </div>
                <p className="text-black mt-2" dir="rtl">will have کے بعد verb کی تیسری فارم</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 text-center">
                  ایک ہی Rule ہے:
                </h3>
                
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border-2 border-purple-300">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-lg">
                      <span className="text-3xl font-bold text-purple-700">will have + verb(3rd)</span>
                    </div>
                  </div>
                  <p className="text-black text-center mb-4" dir="rtl">ہر Subject کے ساتھ (I, You, He, She, It, We, They) یکساں</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="font-urdu text-black" dir="rtl">میں شام تک کھانا کھا چکا ہوں گا۔</p>
                      <p className="text-black">I <strong>will have eaten</strong> food by evening</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">وہ کل تک کام ختم کر چکی ہو گی۔</p>
                      <p className="text-black">She <strong>will have finished</strong> work by tomorrow</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">ہم اگلے ہفتے تک پہنچ چکے ہوں گے۔</p>
                      <p className="text-black">We <strong>will have arrived</strong> by next week</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">وہ شام 7 بجے تک پہنچ چکے ہوں گے۔</p>
                      <p className="text-black">They <strong>will have arrived</strong> by 7 pm</p>
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
                      <tr><td className="py-2 px-4 border-b text-black">finish</td><td className="py-2 px-4 border-b text-black font-bold">finished</td><td className="py-2 px-4 border-b text-black">Regular</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">arrive</td><td className="py-2 px-4 border-b text-black font-bold">arrived</td><td className="py-2 px-4 border-b text-black">Regular</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">write</td><td className="py-2 px-4 border-b text-black font-bold">written</td><td className="py-2 px-4 border-b text-black">Irregular</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">see</td><td className="py-2 px-4 border-b text-black font-bold">seen</td><td className="py-2 px-4 border-b text-black">Irregular</td></tr>
                    </tbody>
                  </table>
                </div>
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
                      <th className="py-3 px-4 border-b text-left text-black">Time Word</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">میں شام 7 بجے تک پہنچ چکا ہوں گا۔</td>
                      <td className="py-3 px-4 font-bold text-black">I will have arrived by 7 pm</td>
                      <td className="py-3 px-4 text-black">by 7 pm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ کل تک کام ختم کر چکی ہو گی۔</td>
                      <td className="py-3 px-4 font-bold text-black">She will have finished the work by tomorrow</td>
                      <td className="py-3 px-4 text-black">by tomorrow</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">ہم اگلے ہفتے تک کتاب پڑھ چکے ہوں گے۔</td>
                      <td className="py-3 px-4 font-bold text-black">We will have read the book by next week</td>
                      <td className="py-3 px-4 text-black">by next week</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ اگلے سال تک گریجویشن کر چکی ہو گی۔</td>
                      <td className="py-3 px-4 font-bold text-black">She will have graduated by next year</td>
                      <td className="py-3 px-4 text-black">by next year</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ شام تک واپس آ چکے ہوں گے۔</td>
                      <td className="py-3 px-4 font-bold text-black">They will have returned by evening</td>
                      <td className="py-3 px-4 text-black">by evening</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-3" dir="rtl">پریکٹس کریں:</h3>
                <p className="text-black mb-3" dir="rtl">نیچے دیے ہوئے اردو جملوں کو انگریزی میں لکھیں:</p>
                <ol className="space-y-3 list-decimal list-inside text-black" dir="rtl">
                  <li className="font-urdu text-lg text-black">میں کل شام تک کھانا کھا چکا ہوں گا۔</li>
                  <li className="font-urdu text-lg text-black">وہ اگلے مہینے تک نئی کار خرید چکی ہو گی۔</li>
                  <li className="font-urdu text-lg text-black">ہم 10 بجے تک سٹیشن پہنچ چکے ہوں گے۔</li>
                  <li className="font-urdu text-lg text-black">وہ 2025 تک اپنا کاروبار شروع کر چکے ہوں گے۔</li>
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
                    Subject + will + not + have + Verb (3rd form) + Object + by + time
                  </div>
                </div>
                <p className="text-black mt-2 text-sm" dir="rtl">will not = won't</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">Will not have (won't have)</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">میں شام تک نہیں پہنچا ہوں گا۔</div>
                      <p className="text-black">I will not have arrived by evening</p>
                      <p className="text-black">I won't have arrived by evening</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ کل تک کام ختم نہیں کر چکی ہو گی۔</div>
                      <p className="text-black">She will not have finished the work by tomorrow</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">More Examples</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">ہم 10 بجے تک نہیں پہنچے ہوں گے۔</div>
                      <p className="text-black">We will not have arrived by 10 o'clock</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ اگلے ہفتے تک کتاب نہیں پڑھ چکے ہوں گے۔</div>
                      <p className="text-black">They will not have read the book by next week</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-5 rounded-xl">
                <h3 className="font-bold text-black mb-3">Short Form:</h3>
                <div className="grid grid-cols-1 gap-2">
                  <p className="text-black"><strong>will not have</strong> = won't have</p>
                  <p className="text-black">I won't have finished.</p>
                  <p className="text-black">He won't have come.</p>
                </div>
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
                    <div className="text-xl font-mono">Will + Subject + have + Verb (3rd form) + Object + by + time?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم شام تک پہنچ چکے ہو گے؟</div>
                    <p className="text-black font-bold">Will you have arrived by evening?</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ کل تک کام ختم کر چکی ہو گی؟</div>
                    <p className="text-black font-bold">Will she have finished the work by tomorrow?</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ 7 بجے تک آ چکے ہوں گے؟</div>
                    <p className="text-black font-bold">Will they have arrived by 7 o'clock?</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-4">WH Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">WH + will + Subject + have + Verb (3rd form) + by + time?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم شام تک کیا کر چکے ہو گے؟</div>
                    <p className="text-black font-bold">What will you have done by evening?</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کل تک کہاں پہنچ چکی ہو گی؟</div>
                    <p className="text-black font-bold">Where will she have arrived by tomorrow?</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ 2025 تک کتنی کتابیں لکھ چکے ہوں گے؟</div>
                    <p className="text-black font-bold">How many books will they have written by 2025?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Two Actions in Future */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              8. مستقبل کے دو کام - Two Actions in Future
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-bold text-black mb-3 text-center" dir="rtl">پہلے والا کام (Earlier Action)</h4>
                  <div className="text-center mb-2">
                    <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg">
                      <span className="font-bold">Future Perfect</span>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <p className="font-urdu text-black text-center" dir="rtl">کھانا کھا <strong className="text-purple-600">چکا ہوں گا</strong></p>
                    <p className="text-black text-center">will have eaten</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="font-bold text-black mb-3 text-center" dir="rtl">بعد والا کام (Later Action)</h4>
                  <div className="text-center mb-2">
                    <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg">
                      <span className="font-bold">Present Simple</span>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <p className="font-urdu text-black text-center" dir="rtl">وہ <strong className="text-green-600">آئے گا</strong></p>
                    <p className="text-black text-center">he comes</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="text-black text-lg font-bold" dir="rtl">
                    <span className="text-purple-600 font-bold">جب تک</span> وہ آئے گا، میں کھانا کھا <span className="text-purple-600">چکا ہوں گا</span>۔
                  </p>
                  <p className="text-black">
                    <span className="text-purple-600 font-bold">By the time</span> he comes, I <span className="text-purple-600">will have eaten</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9: Time Words Summary */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              9. Time Words - وقت کے الفاظ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">by tomorrow</p>
                <p className="text-black font-urdu" dir="rtl">کل تک</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">by next week</p>
                <p className="text-black font-urdu" dir="rtl">اگلے ہفتے تک</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">by 7 pm</p>
                <p className="text-black font-urdu" dir="rtl">شام 7 بجے تک</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">by next year</p>
                <p className="text-black font-urdu" dir="rtl">اگلے سال تک</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">by Monday</p>
                <p className="text-black font-urdu" dir="rtl">پیر تک</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">by the time</p>
                <p className="text-black font-urdu" dir="rtl">جب تک</p>
              </div>
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
                      <span>چکا ہوں گا، چکی ہو گی، چکے ہوں گے</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full ml-2"></div>
                      <span>"تک" (by) کے ساتھ</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Formula:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>will have + verb(3rd)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Negative:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span>will not have + verb(3rd)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span>won't have + verb(3rd)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Question:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>Will + subject + have + verb(3rd)?</span>
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
              href="/exercises-in-urdu/future-perfect-exercise-1"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-purple-200 text-center group"
            >
              <div className="text-purple-600 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-black mb-2">Practice Exercises</h3>
              <p className="text-black mb-4">Future Perfect ki practice karo</p>
              <span className="text-purple-600 font-semibold group-hover:text-purple-800">
                Exercises Start Karo →
              </span>
            </Link>
            
            <Link 
              href="/tenses-in-urdu/future-perfect-continuous"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-pink-200 text-center group"
            >
              <div className="text-pink-600 text-3xl mb-4">➡️</div>
              <h3 className="text-xl font-bold text-black mb-2">Next Tense</h3>
              <p className="text-black mb-4">Future Perfect Continuous seekhein</p>
              <span className="text-pink-600 font-semibold group-hover:text-pink-800">
                Agla Sabaq Parho →
              </span>
            </Link>
            
            <Link 
              href="/tenses-in-urdu"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-green-200 text-center group"
            >
              <div className="text-green-600 text-3xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-black mb-2">All Tenses</h3>
              <p className="text-black mb-4">Saare tenses ka index dekhein</p>
              <span className="text-green-600 font-semibold group-hover:text-green-800">
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
                href="/mistakes/future-perfect"
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
                href="/quizzes/future-perfect-quiz"
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