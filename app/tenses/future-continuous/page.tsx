import Link from 'next/link';

export default function FutureContinuousPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/tenses" className="text-white/80 hover:text-white transition duration-300">
              ← All Tenses
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Future Continuous Tense in Urdu
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            (Future Progressive Tense) - Aasaan Urdu Mein Seekhein
          </p>
        </div>
      </section>

      {/* Main Content - Pure Teaching */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              1. Future Continuous Tense Kya Hai?
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-4" dir="rtl">
                <strong className="text-blue-600">Future Continuous Tense</strong> کو اردو میں 
                <strong className="text-blue-600"> "مستقبل جاری"</strong> کہتے ہیں۔ یہ ان کاموں کے لیے استعمال ہوتا ہے 
                جو مستقبل میں کسی خاص وقت پر جاری ہوں گے۔
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-bold text-black mb-3 text-lg" dir="rtl">
                  Future Continuous Kab Use Karein؟
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <strong className="text-black">مستقبل میں جاری کام</strong>
                      <p className="text-black text-sm" dir="rtl">کسی خاص وقت پر ہو رہا ہو گا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <strong className="text-black">دو کام ایک ساتھ</strong>
                      <p className="text-black text-sm" dir="rtl">مستقبل میں دو کام ایک ساتھ جاری ہوں</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <strong className="text-black">شائستہ سوال</strong>
                      <p className="text-black text-sm" dir="rtl">کسی کے منصوبوں کے بارے میں پوچھنا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <strong className="text-black">یقینی کام</strong>
                      <p className="text-black text-sm" dir="rtl">واقعی جو ہو گا (will سے زیادہ یقینی)</p>
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
                    میں کل شام 7 بجے پڑھ رہا ہوں گا۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">I will be studying at 7 pm tomorrow</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ کل اس وقت سو رہی ہو گی۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">She will be sleeping at that time tomorrow</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    ہم کل سارا دن کھیل رہے ہوں گے۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">We will be playing all day tomorrow</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pehchan */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              2. Future Continuous Ki Pehchan Kaise Karein؟
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اردو میں Future Continuous کی پہچان یہ ہے کہ جملے کے آخر میں یہ الفاظ آتے ہیں:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">رہا ہو گا</div>
                  <p className="text-black font-bold">مرد واحد</p>
                  <p className="text-black text-sm">(میں، وہ)</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">رہی ہو گی</div>
                  <p className="text-black font-bold">عورت واحد</p>
                  <p className="text-black text-sm">(وہ)</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">رہے ہوں گے</div>
                  <p className="text-black font-bold">جمع</p>
                  <p className="text-black text-sm">(ہم، تم، وہ)</p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="bg-blue-50 p-3 rounded-lg inline-block">
                  <p className="text-black font-bold" dir="rtl">وقت کے الفاظ: "کل اس وقت، کل شام 7 بجے، سارا دن"</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 mt-6" dir="rtl">پہچان کی مثالیں:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        میں کل شام 7 بجے پڑھ <strong className="text-blue-600">رہا ہوں گا۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"رہا ہوں گا" + وقت → Future Continuous</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ کل اس وقت سو <strong className="text-blue-600">رہی ہو گی۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"رہی ہو گی" + وقت → Future Continuous</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ کل سارا دن کھیل <strong className="text-blue-600">رہے ہوں گے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"رہے ہوں گے" + وقت → Future Continuous</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        ہم کل اس وقت کام کر <strong className="text-blue-600">رہے ہوں گے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"رہے ہوں گے" + وقت → Future Continuous</td>
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
                  <span>اردو میں <strong>"رہا ہو گا، رہی ہو گی، رہے ہوں گے"</strong> دیکھ کر پہچان جائیں</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>ساتھ میں مستقبل کا وقت ضرور ہوتا ہے</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>یہ بتاتا ہے کہ مستقبل میں کام جاری ہو گا</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Formula - Asaan Rule */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              3. Future Continuous Ka Asaan Formula
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="text-center mb-8">
                <div className="bg-black text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + will be + Verb(ing) + Object
                  </div>
                </div>
                <p className="text-black mt-2" dir="rtl">will be کے بعد verb میں ing لگائیں</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 text-center">
                  ایک ہی Rule ہے:
                </h3>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-300">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-lg">
                      <span className="text-3xl font-bold text-blue-700">will be + verb(ing)</span>
                    </div>
                  </div>
                  <p className="text-black text-center mb-4" dir="rtl">ہر Subject کے ساتھ (I, You, He, She, It, We, They) یکساں</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="font-urdu text-black" dir="rtl">میں کل شام 7 بجے پڑھ رہا ہوں گا۔</p>
                      <p className="text-black">I <strong>will be studying</strong> at 7 pm tomorrow</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">وہ کل اس وقت سو رہی ہو گی۔</p>
                      <p className="text-black">She <strong>will be sleeping</strong> at that time tomorrow</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">ہم کل سارا دن کھیل رہے ہوں گے۔</p>
                      <p className="text-black">We <strong>will be playing</strong> all day tomorrow</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">وہ کل کام کر رہے ہوں گے۔</p>
                      <p className="text-black">They <strong>will be working</strong> tomorrow</p>
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
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="py-3 px-4 border-b text-left text-black">Rule</th>
                        <th className="py-3 px-4 border-b text-left text-black">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">عام verbs میں ing لگائیں</td>
                        <td className="py-3 px-4 border-b text-black">play → playing, work → working</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">e سے ختم ہونے والے verbs کا e ہٹا کر ing</td>
                        <td className="py-3 px-4 border-b text-black">write → writing, dance → dancing</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">CVC والے verbs کا آخری consonant double</td>
                        <td className="py-3 px-4 border-b text-black">sit → sitting, run → running</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Time Expressions */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-orange-500 pl-4">
              4. Time Expressions - وقت کے الفاظ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">At this time tomorrow</p>
                <p className="text-black font-urdu" dir="rtl">کل اس وقت</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">At 7 pm tomorrow</p>
                <p className="text-black font-urdu" dir="rtl">کل شام 7 بجے</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">All day tomorrow</p>
                <p className="text-black font-urdu" dir="rtl">کل سارا دن</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">All week</p>
                <p className="text-black font-urdu" dir="rtl">سارا ہفتہ</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">From 5 to 7</p>
                <p className="text-black font-urdu" dir="rtl">پانچ سے سات تک</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">While you are...</p>
                <p className="text-black font-urdu" dir="rtl">جب تم... </p>
              </div>
            </div>
          </div>

          {/* Section 5: Positive Sentences */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              5. Positive Sentences - سادہ جملے
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
                      <th className="py-3 px-4 border-b text-left text-black">Time Word</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">میں کل شام 7 بجے پڑھ رہا ہوں گا۔</td>
                      <td className="py-3 px-4 font-bold text-black">I will be studying at 7 pm tomorrow</td>
                      <td className="py-3 px-4 text-black">at 7 pm tomorrow</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ کل اس وقت سو رہی ہو گی۔</td>
                      <td className="py-3 px-4 font-bold text-black">She will be sleeping at that time tomorrow</td>
                      <td className="py-3 px-4 text-black">at that time tomorrow</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">ہم کل سارا دن کھیل رہے ہوں گے۔</td>
                      <td className="py-3 px-4 font-bold text-black">We will be playing all day tomorrow</td>
                      <td className="py-3 px-4 text-black">all day tomorrow</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ کل شام 8 بجے آ رہے ہوں گے۔</td>
                      <td className="py-3 px-4 font-bold text-black">They will be coming at 8 pm tomorrow</td>
                      <td className="py-3 px-4 text-black">at 8 pm tomorrow</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">بارش کل سارا دن ہو رہی ہو گی۔</td>
                      <td className="py-3 px-4 font-bold text-black">It will be raining all day tomorrow</td>
                      <td className="py-3 px-4 text-black">all day tomorrow</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-3" dir="rtl">پریکٹس کریں:</h3>
                <p className="text-black mb-3" dir="rtl">نیچے دیے ہوئے اردو جملوں کو انگریزی میں لکھیں:</p>
                <ol className="space-y-3 list-decimal list-inside text-black" dir="rtl">
                  <li className="font-urdu text-lg text-black">میں کل شام 6 بجے کھانا کھا رہا ہوں گا۔</li>
                  <li className="font-urdu text-lg text-black">وہ کل اس وقت سو رہی ہو گی۔</li>
                  <li className="font-urdu text-lg text-black">ہم کل سارا دن کام کر رہے ہوں گے۔</li>
                  <li className="font-urdu text-lg text-black">وہ کل شام 9 بجے ٹی وی دیکھ رہے ہوں گے۔</li>
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
                    Subject + will + not + be + Verb(ing) + Object
                  </div>
                </div>
                <p className="text-black mt-2 text-sm" dir="rtl">will not = won't</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">Will not be (won't be)</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">میں کل شام 7 بجے نہیں پڑھ رہا ہوں گا۔</div>
                      <p className="text-black">I will not be studying at 7 pm tomorrow</p>
                      <p className="text-black">I won't be studying at 7 pm tomorrow</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ کل اس وقت نہیں سو رہی ہو گی۔</div>
                      <p className="text-black">She will not be sleeping at that time</p>
                      <p className="text-black">She won't be sleeping at that time</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">More Examples</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">ہم کل سارا دن نہیں کھیل رہے ہوں گے۔</div>
                      <p className="text-black">We will not be playing all day tomorrow</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ کل نہیں آ رہے ہوں گے۔</div>
                      <p className="text-black">They will not be coming tomorrow</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-5 rounded-xl">
                <h3 className="font-bold text-black mb-3">Short Form:</h3>
                <div className="grid grid-cols-1 gap-2">
                  <p className="text-black"><strong>will not</strong> = won't</p>
                  <p className="text-black">I won't be studying.</p>
                  <p className="text-black">He won't be coming.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Questions */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              7. Questions - سوالات بنانا
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Yes/No Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">Will + Subject + be + Verb(ing) + Object + time?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم کل شام 7 بجے پڑھ رہے ہو گے؟</div>
                    <p className="text-black font-bold">Will you be studying at 7 pm tomorrow?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ کل اس وقت سو رہی ہو گی؟</div>
                    <p className="text-black font-bold">Will she be sleeping at that time tomorrow?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا بارش کل ہو رہی ہو گی؟</div>
                    <p className="text-black font-bold">Will it be raining tomorrow?</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-4">WH Questions (Polite):</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">WH + will + Subject + be + Verb(ing)?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم کل شام کو کیا کر رہے ہو گے؟</div>
                    <p className="text-black font-bold">What will you be doing tomorrow evening?</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کل کب آ رہی ہو گی؟</div>
                    <p className="text-black font-bold">When will she be coming tomorrow?</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم کہاں ٹھہر رہے ہو گے؟</div>
                    <p className="text-black font-bold">Where will you be staying?</p>
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
                  <h4 className="font-bold text-black mb-3 text-center" dir="rtl">دونوں کام جاری ہوں گے</h4>
                  <div className="space-y-3">
                    <p className="font-urdu text-black" dir="rtl">میں پڑھ <strong>رہا ہوں گا</strong> اور وہ سو <strong>رہی ہو گی</strong>۔</p>
                    <p className="text-black">I <strong>will be studying</strong> while she <strong>will be sleeping</strong>.</p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-bold text-black mb-3 text-center" dir="rtl">ایک جاری، ایک مکمل</h4>
                  <div className="space-y-3">
                    <p className="font-urdu text-black" dir="rtl">میں پڑھ <strong>رہا ہوں گا</strong> <span className="text-green-600">جب</span> وہ <strong>آئے گا</strong>۔</p>
                    <p className="text-black">I <strong>will be studying</strong> <span className="text-green-600">when</span> he <strong>comes</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 9: Future Simple vs Future Continuous */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-yellow-500 pl-4">
              9. Future Simple vs Future Continuous - فرق
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-yellow-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">Future Simple (will)</th>
                    <th className="py-3 px-4 border-b text-left text-black">Future Continuous</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black">کام مستقبل میں ہو گا (completed)</td>
                    <td className="py-3 px-4 text-black">کام مستقبل میں جاری ہو گا (in progress)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black font-urdu" dir="rtl">میں کل پڑھوں گا۔</td>
                    <td className="py-3 px-4 text-black font-urdu" dir="rtl">میں کل شام 7 بجے پڑھ رہا ہوں گا۔</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black">I will study tomorrow.</td>
                    <td className="py-3 px-4 text-black">I will be studying at 7 pm.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">کام کا وقت اہم نہیں</td>
                    <td className="py-3 px-4 text-black">خاص وقت اہم ہے</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 10: Quick Review */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              10. Quick Review - جلدی دہرائی
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-md p-6 border-2 border-blue-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">پہچان:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                      <span>رہا ہو گا، رہی ہو گی، رہے ہوں گے</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                      <span>ساتھ میں وقت ضرور ہوتا ہے</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Formula:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>will be + verb(ing)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Negative:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span>will not be + verb(ing)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span>won't be + verb(ing)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Question:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>Will + subject + be + verb(ing)?</span>
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
              href="/exercises/future-continuous-exercise-1"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-blue-200 text-center group"
            >
              <div className="text-blue-600 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-black mb-2">Practice Exercises</h3>
              <p className="text-black mb-4">Future Continuous ki practice karo</p>
              <span className="text-blue-600 font-semibold group-hover:text-blue-800">
                Exercises Start Karo →
              </span>
            </Link>
            
            <Link 
              href="/tenses/future-perfect"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-purple-200 text-center group"
            >
              <div className="text-purple-600 text-3xl mb-4">➡️</div>
              <h3 className="text-xl font-bold text-black mb-2">Next Tense</h3>
              <p className="text-black mb-4">Future Perfect Tense seekhein</p>
              <span className="text-purple-600 font-semibold group-hover:text-purple-800">
                Agla Sabaq Parho →
              </span>
            </Link>
            
            <Link 
              href="/tenses"
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
                href="/mistakes/future-continuous"
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
                href="/quizzes/future-continuous-quiz"
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