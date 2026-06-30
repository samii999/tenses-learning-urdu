import Link from 'next/link';

export default function PastContinuousPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-teal-500 to-green-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/tenses-in-urdu" className="text-white/80 hover:text-white transition duration-300">
              ← All Tenses
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Continuous Tense in Urdu
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            (Past Progressive Tense) - Aasaan Urdu Mein Seekhein
          </p>
        </div>
      </section>

      {/* Main Content - Pure Teaching */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              1. Past Continuous Tense Kya Hai?
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-4" dir="rtl">
                <strong className="text-teal-600">Past Continuous Tense</strong> کو اردو میں 
                <strong className="text-teal-600"> "ماضی جاری"</strong> کہتے ہیں۔ یہ ان کاموں کے لیے استعمال ہوتا ہے 
                جو ماضی میں کسی خاص وقت پر جاری تھے۔
              </p>
              
              <div className="bg-teal-50 p-5 rounded-lg border border-teal-200">
                <h3 className="font-bold text-black mb-3 text-lg" dir="rtl">
                  Past Continuous Kab Use Karein؟
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <strong className="text-black">ماضی میں جاری کام</strong>
                      <p className="text-black text-sm" dir="rtl">کسی خاص وقت پر ہو رہا تھا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <strong className="text-black">دو کام ایک ساتھ</strong>
                      <p className="text-black text-sm" dir="rtl">جب دو کام ایک ساتھ ہو رہے تھے</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <strong className="text-black">رکاوٹ والا کام</strong>
                      <p className="text-black text-sm" dir="rtl">جب کوئی کام ہو رہا تھا اور دوسرا کام مداخلت کرے</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <strong className="text-black">ماضی کی عادت</strong>
                      <p className="text-black text-sm" dir="rtl">ماضی میں بار بار ہونے والا کام (used to کی طرح)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-teal-50 p-5 rounded-xl border border-teal-200">
              <h3 className="font-bold text-black mb-3" dir="rtl">مثالیں:</h3>
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    میں کل شام 7 بجے پڑھ رہا تھا۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">I was studying at 7 pm yesterday</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ سو رہی تھی جب میں آیا۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">She was sleeping when I came</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ کل سارا دن کھیل رہے تھے۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">They were playing all day yesterday</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pehchan */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              2. Past Continuous Ki Pehchan Kaise Karein؟
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اردو میں Past Continuous کی پہچان یہ ہے کہ جملے کے آخر میں یہ الفاظ آتے ہیں:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">رہا تھا</div>
                  <p className="text-black font-bold">مرد واحد</p>
                  <p className="text-black text-sm">(میں، وہ)</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">رہی تھی</div>
                  <p className="text-black font-bold">عورت واحد</p>
                  <p className="text-black text-sm">(وہ)</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">رہے تھے</div>
                  <p className="text-black font-bold">جمع</p>
                  <p className="text-black text-sm">(ہم، تم، وہ)</p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="bg-teal-50 p-3 rounded-lg inline-block">
                  <p className="text-black font-bold" dir="rtl">وقت کے الفاظ: "کل اس وقت، جب، سارا دن، پورا ہفتہ"</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 mt-6" dir="rtl">پہچان کی مثالیں:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        میں کھانا کھا <strong className="text-teal-600">رہا تھا۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"رہا تھا" → Past Continuous</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ کتاب پڑھ <strong className="text-teal-600">رہی تھی۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"رہی تھی" → Past Continuous</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ فٹبال کھیل <strong className="text-teal-600">رہے تھے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"رہے تھے" → Past Continuous</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        ہم سو <strong className="text-teal-600">رہے تھے</strong> جب گھنٹی بجی۔
                      </td>
                      <td className="py-3 px-4 text-black">"رہے تھے" + جب → Past Continuous</td>
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
                  <span>اردو میں <strong>"رہا تھا، رہی تھی، رہے تھے"</strong> دیکھ کر پہچان جائیں</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>ساتھ میں <strong>"جب"</strong> یا <strong>"کے دوران"</strong> بھی آ سکتا ہے</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>ماضی کے کسی خاص وقت کا پتہ چلتا ہے</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Formula - Asaan Rule */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              3. Past Continuous Ka Asaan Formula
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="text-center mb-8">
                <div className="bg-black text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + was/were + Verb(ing) + Object
                  </div>
                </div>
                <p className="text-black mt-2">یہ سادہ Formula یاد رکھیں</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 text-center">
                  2 Rules Yad Rakhein:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Rule 1: Was */}
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-5 rounded-xl border-2 border-teal-300">
                    <h4 className="font-bold text-lg text-black mb-3 text-center">I, He, She, It</h4>
                    <div className="text-center mb-3">
                      <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                        <span className="text-2xl font-bold text-teal-700">was + verb(ing)</span>
                      </div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="text-center">
                        <p className="text-black">I was eating</p>
                        <p className="text-black text-sm" dir="rtl">میں کھا رہا تھا</p>
                      </div>
                      <div className="text-center">
                        <p className="text-black">He was sleeping</p>
                        <p className="text-black text-sm" dir="rtl">وہ سو رہا تھا</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rule 2: Were */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-300">
                    <h4 className="font-bold text-lg text-black mb-3 text-center">You, We, They</h4>
                    <div className="text-center mb-3">
                      <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                        <span className="text-2xl font-bold text-blue-700">were + verb(ing)</span>
                      </div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="text-center">
                        <p className="text-black">You were reading</p>
                        <p className="text-black text-sm" dir="rtl">تم پڑھ رہے تھے</p>
                      </div>
                      <div className="text-center">
                        <p className="text-black">They were playing</p>
                        <p className="text-black text-sm" dir="rtl">وہ کھیل رہے تھے</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Verb + ing Rules */}
              <div className="bg-gray-50 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4" dir="rtl">
                  Verb میں "ing" کیسے لگائیں:
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-black rounded-lg">
                    <thead className="bg-teal-100">
                      <tr>
                        <th className="py-3 px-4 border-b text-left text-black">Rule</th>
                        <th className="py-3 px-4 border-b text-left text-black">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">عام verbs میں ing لگائیں</td>
                        <td className="py-3 px-4 border-b text-black">eat → eating, play → playing</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">e سے ختم ہونے والے verbs کا e ہٹا کر ing</td>
                        <td className="py-3 px-4 border-b text-black">write → writing, dance → dancing</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">CVC والے verbs کا آخری consonant double</td>
                        <td className="py-3 px-4 border-b text-black">sit → sitting, run → running</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">ie کو y کریں پھر ing</td>
                        <td className="py-3 px-4 border-b text-black">die → dying, lie → lying</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: When vs While */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-orange-500 pl-4">
              4. When اور While کا استعمال
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-300">
                <h3 className="text-2xl font-bold text-black mb-4 text-center">When (جب)</h3>
                <p className="text-black mb-3 text-center" dir="rtl">چھوٹے کام کے لیے (Short Action)</p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-urdu text-black" dir="rtl">میں سو <strong>رہا تھا</strong> <span className="text-orange-600 font-bold">جب</span> گھنٹی <strong>بجی</strong>۔</p>
                    <p className="text-black">I <strong>was sleeping</strong> <span className="text-orange-600 font-bold">when</span> the bell <strong>rang</strong>.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-urdu text-black" dir="rtl">وہ پڑھ <strong>رہی تھی</strong> <span className="text-orange-600 font-bold">جب</span> میں <strong>آیا</strong>۔</p>
                    <p className="text-black">She <strong>was reading</strong> <span className="text-orange-600 font-bold">when</span> I <strong>came</strong>.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
                <h3 className="text-2xl font-bold text-black mb-4 text-center">While (جبکہ / کے دوران)</h3>
                <p className="text-black mb-3 text-center" dir="rtl">لمبے کام کے لیے (Long Action)</p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-urdu text-black" dir="rtl"><span className="text-green-600 font-bold">جبکہ</span> میں سو <strong>رہا تھا</strong>، گھنٹی <strong>بجی</strong>۔</p>
                    <p className="text-black"><span className="text-green-600 font-bold">While</span> I <strong>was sleeping</strong>, the bell <strong>rang</strong>.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-urdu text-black" dir="rtl"><span className="text-green-600 font-bold">جبکہ</span> وہ کھیل <strong>رہے تھے</strong>، بارش شروع <strong>ہوئی</strong>۔</p>
                    <p className="text-black"><span className="text-green-600 font-bold">While</span> they <strong>were playing</strong>, it started <strong>raining</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
              <p className="text-black font-bold text-center" dir="rtl">
                <span className="text-orange-600">When</span> + Past Simple (چھوٹا کام) | 
                <span className="text-green-600"> While</span> + Past Continuous (لمبا کام)
              </p>
            </div>
          </div>

          {/* Section 5: Positive Sentences */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              5. Positive Sentences - سادہ جملے
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اب ہم اردو جملوں کو انگریزی میں تبدیل کرنا سیکھیں گے:
              </p>
              
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <thead className="bg-teal-100">
                    <tr>
                      <th className="py-3 px-4 border-b text-left text-black">اردو جملہ</th>
                      <th className="py-3 px-4 border-b text-left text-black">انگریزی جملہ</th>
                      <th className="py-3 px-4 border-b text-left text-black">Helping Verb</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">میں کل شام 7 بجے پڑھ رہا تھا۔</td>
                      <td className="py-3 px-4 font-bold text-black">I was studying at 7 pm yesterday</td>
                      <td className="py-3 px-4 text-black font-bold">was</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ سو رہی تھی جب میں آیا۔</td>
                      <td className="py-3 px-4 font-bold text-black">She was sleeping when I came</td>
                      <td className="py-3 px-4 text-black font-bold">was</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ کل سارا دن کھیل رہے تھے۔</td>
                      <td className="py-3 px-4 font-bold text-black">They were playing all day yesterday</td>
                      <td className="py-3 px-4 text-black font-bold">were</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">ہم کل اس وقت کھانا کھا رہے تھے۔</td>
                      <td className="py-3 px-4 font-bold text-black">We were eating food at that time yesterday</td>
                      <td className="py-3 px-4 text-black font-bold">were</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ گاڑی چلا رہا تھا جب فون آیا۔</td>
                      <td className="py-3 px-4 font-bold text-black">He was driving when the phone rang</td>
                      <td className="py-3 px-4 text-black font-bold">was</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-teal-50 p-5 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-3" dir="rtl">پریکٹس کریں:</h3>
                <p className="text-black mb-3" dir="rtl">نیچے دیے ہوئے اردو جملوں کو انگریزی میں لکھیں:</p>
                <ol className="space-y-3 list-decimal list-inside text-black" dir="rtl">
                  <li className="font-urdu text-lg text-black">میں کل رات سو رہا تھا۔</li>
                  <li className="font-urdu text-lg text-black">وہ ٹی وی دیکھ رہی تھی جب میں آیا۔</li>
                  <li className="font-urdu text-lg text-black">بچے پارک میں کھیل رہے تھے۔</li>
                  <li className="font-urdu text-lg text-black">ہم کل شام خریداری کر رہے تھے۔</li>
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
                    Subject + was/were + not + Verb(ing) + Object
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">Was not (wasn't)</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">میں نہیں پڑھ رہا تھا۔</div>
                      <p className="text-black">I was not studying</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ نہیں سو رہی تھی۔</div>
                      <p className="text-black">She was not sleeping</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">Were not (weren't)</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">تم نہیں پڑھ رہے تھے۔</div>
                      <p className="text-black">You were not studying</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ نہیں کھیل رہے تھے۔</div>
                      <p className="text-black">They were not playing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-5 rounded-xl">
                <h3 className="font-bold text-black mb-3">Short Forms:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-black"><strong>was not</strong> = wasn't</p>
                    <p className="text-black text-sm">He wasn't sleeping</p>
                  </div>
                  <div>
                    <p className="text-black"><strong>were not</strong> = weren't</p>
                    <p className="text-black text-sm">They weren't playing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Questions */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              7. Questions - سوالات بنانا
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Yes/No Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">Was/Were + Subject + Verb(ing) + Object?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم کل رات پڑھ رہے تھے؟</div>
                    <p className="text-black font-bold">Were you studying last night?</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ سو رہی تھی جب تم آئے؟</div>
                    <p className="text-black font-bold">Was she sleeping when you came?</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا بچے کھیل رہے تھے؟</div>
                    <p className="text-black font-bold">Were the children playing?</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-4">WH Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">WH + was/were + Subject + Verb(ing) + Object?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم کہاں جا رہے تھے؟</div>
                    <p className="text-black font-bold">Where were you going?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کیا پڑھ رہی تھی؟</div>
                    <p className="text-black font-bold">What was she reading?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کیوں رو رہا تھا؟</div>
                    <p className="text-black font-bold">Why was he crying?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم کس کے ساتھ کھیل رہے تھے؟</div>
                    <p className="text-black font-bold">Who were you playing with?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Two Actions Together */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              8. دو کام ایک ساتھ - Two Actions Together
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h4 className="font-bold text-black mb-3 text-center" dir="rtl">دونوں کام جاری تھے</h4>
                  <div className="space-y-3">
                    <p className="font-urdu text-black" dir="rtl">میں پڑھ <strong>رہا تھا</strong> اور وہ سو <strong>رہی تھی</strong>۔</p>
                    <p className="text-black">I <strong>was studying</strong> while she <strong>was sleeping</strong>.</p>
                    <p className="text-black font-bold">Past Continuous + while + Past Continuous</p>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-5 rounded-lg">
                  <h4 className="font-bold text-black mb-3 text-center" dir="rtl">ایک جاری، ایک مکمل</h4>
                  <div className="space-y-3">
                    <p className="font-urdu text-black" dir="rtl">میں پڑھ <strong>رہا تھا</strong> <span className="text-orange-600">جب</span> وہ <strong>آیا</strong>۔</p>
                    <p className="text-black">I <strong>was studying</strong> <span className="text-orange-600">when</span> he <strong>came</strong>.</p>
                    <p className="text-black font-bold">Past Continuous + when + Past Simple</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9: Past Continuous vs Past Simple */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-yellow-500 pl-4">
              9. Past Continuous vs Past Simple - فرق
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-yellow-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">Past Continuous</th>
                    <th className="py-3 px-4 border-b text-left text-black">Past Simple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black">کام جاری تھا (was in progress)</td>
                    <td className="py-3 px-4 text-black">کام مکمل ہوا (completed action)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black font-urdu" dir="rtl">میں پڑھ رہا تھا۔</td>
                    <td className="py-3 px-4 text-black font-urdu" dir="rtl">میں نے پڑھا۔</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black">I was studying.</td>
                    <td className="py-3 px-4 text-black">I studied.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">وقت معلوم ہے مگر کام جاری تھا</td>
                    <td className="py-3 px-4 text-black">وقت معلوم ہے اور کام مکمل</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 10: Quick Review */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-teal-500 pl-4">
              10. Quick Review - جلدی دہرائی
            </h2>
            
            <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl shadow-md p-6 border-2 border-teal-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">پہچان:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full ml-2"></div>
                      <span>رہا تھا، رہی تھی، رہے تھے</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Formula:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                      <span>was/were + verb(ing)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Was/Were:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>I, He, She, It = was</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>You, We, They = were</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">اہم الفاظ:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full ml-2"></div>
                      <span>when (جب) - چھوٹے کام کے لیے</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                      <span>while (جبکہ) - لمبے کام کے لیے</span>
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
              href="/exercises-in-urdu/past-continuous-exercise-1"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-teal-200 text-center group"
            >
              <div className="text-teal-600 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-black mb-2">Practice Exercises</h3>
              <p className="text-black mb-4">Past Continuous ki practice karo</p>
              <span className="text-teal-600 font-semibold group-hover:text-teal-800">
                Exercises Start Karo →
              </span>
            </Link>
            
            <Link 
              href="/tenses-in-urdu/past-perfect"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-purple-200 text-center group"
            >
              <div className="text-purple-600 text-3xl mb-4">➡️</div>
              <h3 className="text-xl font-bold text-black mb-2">Next Tense</h3>
              <p className="text-black mb-4">Past Perfect Tense seekhein</p>
              <span className="text-purple-600 font-semibold group-hover:text-purple-800">
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
                href="/mistakes/past-continuous"
                className="text-black hover:text-teal-600 font-medium"
              >
                Common Mistakes
              </Link>
              <Link 
                href="/tips"
                className="text-black hover:text-teal-600 font-medium"
              >
                Learning Tips
              </Link>
              <Link 
                href="/quizzes/past-continuous-quiz"
                className="text-black hover:text-teal-600 font-medium"
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