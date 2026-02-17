import Link from 'next/link';

export default function PastSimplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/tenses" className="text-white/80 hover:text-white transition duration-300">
              ← All Tenses
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Simple Tense in Urdu
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            (Past Indefinite Tense) - Aasaan Urdu Mein Seekhein
          </p>
        </div>
      </section>

      {/* Main Content - Pure Teaching */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              1. Past Simple Tense Kya Hai?
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-4" dir="rtl">
                <strong className="text-blue-600">Past Simple Tense</strong> کو اردو میں 
                <strong className="text-blue-600"> "ماضی مطلق"</strong> کہتے ہیں۔ یہ ان کاموں کے لیے استعمال ہوتا ہے 
                جو ماضی میں مکمل ہو چکے ہیں اور حال سے ان کا کوئی تعلق نہیں۔
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-bold text-black mb-3 text-lg" dir="rtl">
                  Past Simple Kab Use Karein؟
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <strong className="text-black">ماضی کا مکمل کام</strong>
                      <p className="text-black text-sm" dir="rtl">کل، پچھلے ہفتے، پچھلے سال</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <strong className="text-black">ماضی کی عادت</strong>
                      <p className="text-black text-sm" dir="rtl">پہلے کرتا تھا، اب نہیں کرتا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <strong className="text-black">ماضی کے واقعات</strong>
                      <p className="text-black text-sm" dir="rtl">ایک کے بعد ایک ہوئے واقعات</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-100 text-yellow-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <strong className="text-black">ماضی کی حالت</strong>
                      <p className="text-black text-sm" dir="rtl">پہلے ایسا تھا، اب نہیں</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
              <h3 className="font-bold text-black mb-3" dir="rtl">مثالیں:</h3>
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    میں نے کل کھانا کھایا۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">I ate food yesterday</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ پچھلے سال لندن گیا تھا۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">He went to London last year</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    ہم نے یہ فلم کل دیکھی۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">We watched this movie yesterday</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pehchan */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              2. Past Simple Ki Pehchan Kaise Karein؟
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اردو میں Past Simple کی پہچان بہت آسان ہے۔ جملے کے آخر میں یہ الفاظ آتے ہیں:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">ا</div>
                  <p className="text-black font-bold">آخر میں "ا"</p>
                  <p className="text-black text-sm">(مرد)</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">ئی</div>
                  <p className="text-black font-bold">آخر میں "ئی"</p>
                  <p className="text-black text-sm">(عورت)</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">ئے</div>
                  <p className="text-black font-bold">آخر میں "ئے"</p>
                  <p className="text-black text-sm">(جمع)</p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="bg-blue-50 p-3 rounded-lg inline-block">
                  <p className="text-black font-bold" dir="rtl">یہ بھی پہچان ہے: "تھا، تھی، تھے" اور وقت کا ذکر</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 mt-6" dir="rtl">پہچان کی مثالیں:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ گیا۔
                      </td>
                      <td className="py-3 px-4 text-black">آخر میں "ا" → Past Simple</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        اس نے کھانا کھایا۔
                      </td>
                      <td className="py-3 px-4 text-black">آخر میں "ا" → Past Simple</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ آئی۔
                      </td>
                      <td className="py-3 px-4 text-black">آخر میں "ئی" → Past Simple</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ کھیلے۔
                      </td>
                      <td className="py-3 px-4 text-black">آخر میں "ئے" → Past Simple</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
              <h3 className="font-bold text-black mb-3" dir="rtl">وقت کے الفاظ (Time Words):</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
                <div className="bg-white p-2 rounded border border-blue-200 text-black">کل</div>
                <div className="bg-white p-2 rounded border border-blue-200 text-black">پرسوں</div>
                <div className="bg-white p-2 rounded border border-blue-200 text-black">پچھلے ہفتے</div>
                <div className="bg-white p-2 rounded border border-blue-200 text-black">پچھلے مہینے</div>
                <div className="bg-white p-2 rounded border border-blue-200 text-black">پچھلے سال</div>
                <div className="bg-white p-2 rounded border border-blue-200 text-black">کافی عرصہ پہلے</div>
                <div className="bg-white p-2 rounded border border-blue-200 text-black">آج صبح</div>
                <div className="bg-white p-2 rounded border border-blue-200 text-black">2015 میں</div>
              </div>
              <p className="text-black mt-3 text-sm" dir="rtl">
                <strong>یاد رکھیں:</strong> Past Simple میں وقت کا ذکر ضروری ہے یا سمجھا جاتا ہے۔
              </p>
            </div>
          </div>

          {/* Section 3: Formula - Asaan Rule */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              3. Past Simple Ka Asaan Formula
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="text-center mb-8">
                <div className="bg-black text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + Verb (2nd form) + Object
                  </div>
                </div>
                <p className="text-black mt-2">یہ سادہ Formula یاد رکھیں</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 text-center">
                  Verb کی دوسری فارم (2nd Form):
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Regular Verbs */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border-2 border-green-300">
                    <h4 className="font-bold text-lg text-black mb-3 text-center">Regular Verbs</h4>
                    <div className="text-center mb-3">
                      <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                        <span className="text-xl font-bold text-green-700">Verb + ed</span>
                      </div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-black">work</span>
                        <span className="font-bold text-green-700">worked</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">play</span>
                        <span className="font-bold text-green-700">played</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">watch</span>
                        <span className="font-bold text-green-700">watched</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">study</span>
                        <span className="font-bold text-green-700">studied</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Irregular Verbs */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border-2 border-purple-300">
                    <h4 className="font-bold text-lg text-black mb-3 text-center">Irregular Verbs</h4>
                    <div className="text-center mb-3">
                      <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                        <span className="text-xl font-bold text-purple-700">Change Form</span>
                      </div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-black">go</span>
                        <span className="font-bold text-purple-700">went</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">eat</span>
                        <span className="font-bold text-purple-700">ate</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">see</span>
                        <span className="font-bold text-purple-700">saw</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">come</span>
                        <span className="font-bold text-purple-700">came</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Irregular Verbs Table */}
              <div className="bg-gray-50 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4" dir="rtl">
                  اہم Irregular Verbs کی فہرست:
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-black rounded-lg">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="py-3 px-4 border-b text-left text-black">Base Form</th>
                        <th className="py-3 px-4 border-b text-left text-black">Past Simple</th>
                        <th className="py-3 px-4 border-b text-left text-black">اردو معنی</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-2 px-4 border-b text-black">go</td><td className="py-2 px-4 border-b text-black font-bold">went</td><td className="py-2 px-4 border-b text-black">گیا</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">eat</td><td className="py-2 px-4 border-b text-black font-bold">ate</td><td className="py-2 px-4 border-b text-black">کھایا</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">see</td><td className="py-2 px-4 border-b text-black font-bold">saw</td><td className="py-2 px-4 border-b text-black">دیکھا</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">come</td><td className="py-2 px-4 border-b text-black font-bold">came</td><td className="py-2 px-4 border-b text-black">آیا</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">take</td><td className="py-2 px-4 border-b text-black font-bold">took</td><td className="py-2 px-4 border-b text-black">لیا</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">buy</td><td className="py-2 px-4 border-b text-black font-bold">bought</td><td className="py-2 px-4 border-b text-black">خریدا</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">drink</td><td className="py-2 px-4 border-b text-black font-bold">drank</td><td className="py-2 px-4 border-b text-black">پیا</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">write</td><td className="py-2 px-4 border-b text-black font-bold">wrote</td><td className="py-2 px-4 border-b text-black">لکھا</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">read</td><td className="py-2 px-4 border-b text-black font-bold">read</td><td className="py-2 px-4 border-b text-black">پڑھا</td></tr>
                      <tr><td className="py-2 px-4 border-b text-black">speak</td><td className="py-2 px-4 border-b text-black font-bold">spoke</td><td className="py-2 px-4 border-b text-black">بولا</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-black mt-3 text-sm" dir="rtl">
                  <strong>نوٹ:</strong> Irregular verbs کو یاد کرنا ضروری ہے۔ یہ rules نہیں مانتیں۔
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Positive Sentences */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              4. Positive Sentences - سادہ جملے
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اب ہم اردو جملوں کو انگریزی میں تبدیل کرنا سیکھیں گے:
              </p>
              
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="py-3 px-4 border-b text-left text-black">اردو جملہ</th>
                      <th className="py-3 px-4 border-b text-left text-black">انگریزی جملہ</th>
                      <th className="py-3 px-4 border-b text-left text-black">Verb (2nd Form)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">میں نے کل کھانا کھایا۔</td>
                      <td className="py-3 px-4 font-bold text-black">I ate food yesterday</td>
                      <td className="py-3 px-4 text-black font-bold">ate</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ پچھلے سال لندن گیا۔</td>
                      <td className="py-3 px-4 font-bold text-black">He went to London last year</td>
                      <td className="py-3 px-4 text-black font-bold">went</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">ہم نے کل فلم دیکھی۔</td>
                      <td className="py-3 px-4 font-bold text-black">We watched a movie yesterday</td>
                      <td className="py-3 px-4 text-black font-bold">watched</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">اس نے مجھے خط لکھا۔</td>
                      <td className="py-3 px-4 font-bold text-black">She wrote me a letter</td>
                      <td className="py-3 px-4 text-black font-bold">wrote</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ کل شام آئے۔</td>
                      <td className="py-3 px-4 font-bold text-black">They came yesterday evening</td>
                      <td className="py-3 px-4 text-black font-bold">came</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-3" dir="rtl">پریکٹس کریں:</h3>
                <p className="text-black mb-3" dir="rtl">نیچے دیے ہوئے اردو جملوں کو انگریزی میں لکھیں:</p>
                <ol className="space-y-3 list-decimal list-inside text-black" dir="rtl">
                  <li className="font-urdu text-lg text-black">میں نے کل پانی پیا۔</li>
                  <li className="font-urdu text-lg text-black">وہ پچھلے ہفتے خریداری کی۔</li>
                  <li className="font-urdu text-lg text-black">ہم نے کل کام کیا۔</li>
                  <li className="font-urdu text-lg text-black">وہ کل یہاں آیا۔</li>
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
                    Subject + did not + Verb (1st form) + Object
                  </div>
                </div>
                <p className="text-black mt-2 text-sm" dir="rtl">(did کے بعد verb ہمیشہ پہلی فارم میں آئے گی)</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">Examples</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">میں نے کل نہیں کھایا۔</div>
                      <p className="text-black">I did not eat yesterday</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">ہم نہیں گئے۔</div>
                      <p className="text-black">We did not go</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">Examples</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ نہیں آیا۔</div>
                      <p className="text-black">He did not come</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">اس نے نہیں دیکھا۔</div>
                      <p className="text-black">She did not see</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-5 rounded-xl">
                <h3 className="font-bold text-black mb-3" dir="rtl">اہم نکتہ:</h3>
                <p className="text-black" dir="rtl">
                  <strong>did not</strong> کے بعد verb ہمیشہ پہلی فارم میں آتی ہے۔ 
                  <span className="text-red-600 font-bold"> went</span> نہیں، بلکہ 
                  <span className="text-green-600 font-bold"> go</span> استعمال ہوگا۔
                </p>
                <div className="mt-3 grid grid-cols-1 gap-2">
                  <div className="flex items-center">
                    <span className="text-red-600 font-bold mr-2">❌</span>
                    <span className="text-black">He did not went</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✅</span>
                    <span className="text-black">He did not go</span>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-black"><strong>Short Form:</strong> did not = didn't</p>
                  <p className="text-black">He didn't come.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Questions */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              6. Questions - سوالات بنانا
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Yes/No Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">Did + Subject + Verb (1st form) + Object?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم نے کل کھانا کھایا؟</div>
                    <p className="text-black font-bold">Did you eat food yesterday?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ پچھلے سال لندن گیا؟</div>
                    <p className="text-black font-bold">Did he go to London last year?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم نے کل فلم دیکھی؟</div>
                    <p className="text-black font-bold">Did you watch a movie yesterday?</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-4">WH Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">WH + did + Subject + Verb (1st form) + Object?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم کہاں گئے تھے؟</div>
                    <p className="text-black font-bold">Where did you go?</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">اس نے کیا کھایا؟</div>
                    <p className="text-black font-bold">What did he eat?</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کب آیا؟</div>
                    <p className="text-black font-bold">When did he come?</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم نے یہ کیوں کیا؟</div>
                    <p className="text-black font-bold">Why did you do this?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Was/Were (To Be) */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              7. Was / Were - To Be in Past
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-black text-lg mb-4" dir="rtl">
                <strong>Was / Were</strong> کا استعمال ماضی میں حالت بتانے کے لیے ہوتا ہے (تھا، تھی، تھے)۔
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-5 rounded-xl border-2 border-green-300">
                  <h4 className="font-bold text-lg text-black mb-3 text-center">Was</h4>
                  <div className="text-center mb-3">
                    <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                      <span className="text-xl font-bold text-green-700">I, He, She, It</span>
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="text-center">
                      <p className="font-urdu text-black" dir="rtl">میں وہاں تھا۔</p>
                      <p className="text-black">I was there.</p>
                    </div>
                    <div className="text-center">
                      <p className="font-urdu text-black" dir="rtl">وہ بیمار تھی۔</p>
                      <p className="text-black">She was sick.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-xl border-2 border-blue-300">
                  <h4 className="font-bold text-lg text-black mb-3 text-center">Were</h4>
                  <div className="text-center mb-3">
                    <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                      <span className="text-xl font-bold text-blue-700">You, We, They</span>
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="text-center">
                      <p className="font-urdu text-black" dir="rtl">تم وہاں تھے۔</p>
                      <p className="text-black">You were there.</p>
                    </div>
                    <div className="text-center">
                      <p className="font-urdu text-black" dir="rtl">وہ خوش تھے۔</p>
                      <p className="text-black">They were happy.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-black mb-2" dir="rtl">Negative and Questions with Was/Were:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-black"><strong>Negative:</strong> was/were + not</p>
                    <p className="text-black">I was not there. (میں وہاں نہیں تھا)</p>
                    <p className="text-black">They were not happy. (وہ خوش نہیں تھے)</p>
                  </div>
                  <div>
                    <p className="text-black"><strong>Question:</strong> Was/Were + Subject?</p>
                    <p className="text-black">Were you there? (کیا تم وہاں تھے؟)</p>
                    <p className="text-black">Was she sick? (کیا وہ بیمار تھی؟)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Common Mistakes */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-red-500 pl-4">
              8. Common Mistakes - عام غلطیاں
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-red-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">❌ غلط</th>
                    <th className="py-3 px-4 border-b text-left text-black">✅ صحیح</th>
                    <th className="py-3 px-4 border-b text-left text-black">وجہ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b text-black">I go yesterday.</td>
                    <td className="py-3 px-4 border-b text-green-600 font-bold">I went yesterday.</td>
                    <td className="py-3 px-4 border-b text-black">Past میں verb کی 2nd form</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-black">He didn't went.</td>
                    <td className="py-3 px-4 border-b text-green-600 font-bold">He didn't go.</td>
                    <td className="py-3 px-4 border-b text-black">did کے بعد 1st form</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-black">Did you went?</td>
                    <td className="py-3 px-4 border-b text-green-600 font-bold">Did you go?</td>
                    <td className="py-3 px-4 border-b text-black">did کے بعد 1st form</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b text-black">I was go.</td>
                    <td className="py-3 px-4 border-b text-green-600 font-bold">I went.</td>
                    <td className="py-3 px-4 border-b text-black">was کے ساتھ verb(ing) آتی ہے</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 9: Quick Review */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-yellow-500 pl-4">
              9. Quick Review - جلدی دہرائی
            </h2>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-md p-6 border-2 border-yellow-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">پہچان:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                      <span>آخر میں "ا، ئی، ئے"</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                      <span>تھا، تھی، تھے + وقت</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Formula:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>Positive: Subject + V2 + Object</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span>Negative: did not + V1</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>Question: Did + Subject + V1?</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">وقت کے الفاظ:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full ml-2"></div>
                      <span>کل، پرسوں، پچھلے ہفتے</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">اہم نکتہ:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full ml-2"></div>
                      <span>did کے بعد verb 1st form</span>
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
              href="/exercises/past-simple-exercise-1"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-blue-200 text-center group"
            >
              <div className="text-blue-600 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-black mb-2">Practice Exercises</h3>
              <p className="text-black mb-4">Past Simple ki practice karo</p>
              <span className="text-blue-600 font-semibold group-hover:text-blue-800">
                Exercises Start Karo →
              </span>
            </Link>
            
            <Link 
              href="/tenses/past-continuous"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-green-200 text-center group"
            >
              <div className="text-green-600 text-3xl mb-4">➡️</div>
              <h3 className="text-xl font-bold text-black mb-2">Next Tense</h3>
              <p className="text-black mb-4">Past Continuous Tense seekhein</p>
              <span className="text-green-600 font-semibold group-hover:text-green-800">
                Agla Sabaq Parho →
              </span>
            </Link>
            
            <Link 
              href="/tenses"
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
                href="/mistakes/past-simple"
                className="text-black hover:text-blue-600 font-medium"
              >
                Common Mistakes
              </Link>
              <Link 
                href="/tips"
                className="text-black hover:text-blue-600 font-medium"
              >
                Learning Tips
              </Link>
              <Link 
                href="/quizzes/past-simple-quiz"
                className="text-black hover:text-blue-600 font-medium"
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