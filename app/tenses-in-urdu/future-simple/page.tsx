import Link from 'next/link';

export default function FutureSimplePage() {
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
            Future Simple Tense in Urdu
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            (Future Indefinite Tense) - Aasaan Urdu Mein Seekhein
          </p>
        </div>
      </section>

      {/* Main Content - Pure Teaching */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              1. Future Simple Tense Kya Hai?
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-4" dir="rtl">
                <strong className="text-green-600">Future Simple Tense</strong> کو اردو میں 
                <strong className="text-green-600"> "مستقبل مطلق"</strong> کہتے ہیں۔ یہ ان کاموں کے لیے استعمال ہوتا ہے 
                جو مستقبل میں ہوں گے یا ہونے والے ہیں۔
              </p>
              
              <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                <h3 className="font-bold text-black mb-3 text-lg" dir="rtl">
                  Future Simple Kab Use Karein؟
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <strong className="text-black">مستقبل کے کام</strong>
                      <p className="text-black text-sm" dir="rtl">کل، اگلے ہفتے، اگلے سال</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <strong className="text-black">پیش گوئی</strong>
                      <p className="text-black text-sm" dir="rtl">مستقبل کے بارے میں اندازہ</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <strong className="text-black">وعدہ</strong>
                      <p className="text-black text-sm" dir="rtl">کچھ کرنے کا وعدہ کرنا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <strong className="text-black">فیصلہ</strong>
                      <p className="text-black text-sm" dir="rtl">اس وقت کوئی فیصلہ کرنا</p>
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
                    میں کل آپ سے ملوں گا۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">I will meet you tomorrow</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ اگلے ہفتے لندن جائے گی۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">She will go to London next week</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    بارش ہو گی۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">It will rain</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pehchan */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              2. Future Simple Ki Pehchan Kaise Karein؟
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اردو میں Future Simple کی پہچان بہت آسان ہے۔ جملے کے آخر میں یہ الفاظ آتے ہیں:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">گا</div>
                  <p className="text-black font-bold">مرد واحد</p>
                  <p className="text-black text-sm">(میں، وہ)</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">گی</div>
                  <p className="text-black font-bold">عورت واحد</p>
                  <p className="text-black text-sm">(وہ)</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">گے</div>
                  <p className="text-black font-bold">جمع</p>
                  <p className="text-black text-sm">(ہم، تم، وہ)</p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="bg-green-50 p-3 rounded-lg inline-block">
                  <p className="text-black font-bold" dir="rtl">وقت کے الفاظ: "کل، اگلے ہفتے، اگلے مہینے، اگلے سال"</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 mt-6" dir="rtl">پہچان کی مثالیں:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        میں کل آؤں <strong className="text-green-600">گا۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"گا" → Future Simple</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ کل آئے <strong className="text-green-600">گی۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"گی" → Future Simple</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        ہم کل آئیں <strong className="text-green-600">گے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"گے" → Future Simple</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ اگلے ہفتے جائیں <strong className="text-green-600">گے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"گے" + وقت → Future Simple</td>
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
                  <span>اردو میں <strong>"گا، گی، گے"</strong> دیکھ کر فوراً پہچان جائیں</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>ساتھ میں وقت کا ذکر بھی ہوتا ہے (کل، اگلے ہفتے)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>یہ بتاتا ہے کہ کام مستقبل میں ہوگا</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Will vs Going To */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-orange-500 pl-4">
              3. Will اور Going To میں فرق
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-300">
                <h3 className="text-2xl font-bold text-black mb-4 text-center">Will</h3>
                <p className="text-black mb-3 text-center" dir="rtl">اس وقت کیا فیصلہ</p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-urdu text-black" dir="rtl">فون کی گھنٹی بج رہی ہے۔ میں <strong>اٹھا کر دیکھوں گا</strong>۔</p>
                    <p className="text-black">The phone is ringing. I <strong>will</strong> pick it up.</p>
                  </div>
                  <p className="text-black font-bold text-center">Unplanned decision</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300">
                <h3 className="text-2xl font-bold text-black mb-4 text-center">Going To</h3>
                <p className="text-black mb-3 text-center" dir="rtl">پہلے سے طے شدہ</p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-urdu text-black" dir="rtl">میں نے ٹکٹ خرید لیے ہیں۔ میں کل <strong>جانے والا ہوں</strong>۔</p>
                    <p className="text-black">I have bought tickets. I <strong>am going to</strong> go tomorrow.</p>
                  </div>
                  <p className="text-black font-bold text-center">Planned decision</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
              <p className="text-black text-center font-bold" dir="rtl">
                عام بول چال میں دونوں کا استعمال ہوتا ہے، مگر Going To زیادہ یقینی ہوتا ہے۔
              </p>
            </div>
          </div>

          {/* Section 4: Formula - Asaan Rule */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              4. Future Simple Ka Asaan Formula
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="text-center mb-8">
                <div className="bg-black text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + will + Verb (1st form) + Object
                  </div>
                </div>
                <p className="text-black mt-2" dir="rtl">will کے بعد verb ہمیشہ پہلی فارم میں</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 text-center">
                  ایک ہی Rule ہے:
                </h3>
                
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-2 border-green-300">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-lg">
                      <span className="text-3xl font-bold text-green-700">will + verb(1st)</span>
                    </div>
                  </div>
                  <p className="text-black text-center mb-4" dir="rtl">ہر Subject کے ساتھ (I, You, He, She, It, We, They) یکساں</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="font-urdu text-black" dir="rtl">میں کل آؤں گا۔</p>
                      <p className="text-black">I <strong>will come</strong> tomorrow</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">وہ کل جائے گی۔</p>
                      <p className="text-black">She <strong>will go</strong> tomorrow</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">ہم کل کھائیں گے۔</p>
                      <p className="text-black">We <strong>will eat</strong> tomorrow</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">وہ کل آئیں گے۔</p>
                      <p className="text-black">They <strong>will come</strong> tomorrow</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Going To Formula */}
              <div className="bg-gray-50 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4" dir="rtl">
                  Going To کا Formula:
                </h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-3 rounded-lg inline-block">
                    <div className="text-lg md:text-xl font-mono">
                      Subject + is/am/are + going to + Verb(1st)
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-black font-bold">I am going to</p>
                    <p className="font-urdu text-black" dir="rtl">میں والا ہوں</p>
                  </div>
                  <div className="text-center">
                    <p className="text-black font-bold">He/She/It is going to</p>
                    <p className="font-urdu text-black" dir="rtl">وہ والا/والی ہے</p>
                  </div>
                  <div className="text-center">
                    <p className="text-black font-bold">You/We/They are going to</p>
                    <p className="font-urdu text-black" dir="rtl">آپ/ہم/وہ والے ہیں</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Positive Sentences */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              5. Positive Sentences - سادہ جملے
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
                      <th className="py-3 px-4 border-b text-left text-black">انگریزی جملہ (Will)</th>
                      <th className="py-3 px-4 border-b text-left text-black">انگریزی جملہ (Going To)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">میں کل آؤں گا۔</td>
                      <td className="py-3 px-4 font-bold text-black">I will come tomorrow</td>
                      <td className="py-3 px-4 text-black">I am going to come tomorrow</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ اگلے ہفتے لندن جائے گی۔</td>
                      <td className="py-3 px-4 font-bold text-black">She will go to London next week</td>
                      <td className="py-3 px-4 text-black">She is going to go to London next week</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">ہم کل فلم دیکھیں گے۔</td>
                      <td className="py-3 px-4 font-bold text-black">We will watch a movie tomorrow</td>
                      <td className="py-3 px-4 text-black">We are going to watch a movie tomorrow</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">بارش ہو گی۔</td>
                      <td className="py-3 px-4 font-bold text-black">It will rain</td>
                      <td className="py-3 px-4 text-black">It is going to rain</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ کامیاب ہو گا۔</td>
                      <td className="py-3 px-4 font-bold text-black">He will succeed</td>
                      <td className="py-3 px-4 text-black">He is going to succeed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-green-50 p-5 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-3" dir="rtl">پریکٹس کریں:</h3>
                <p className="text-black mb-3" dir="rtl">نیچے دیے ہوئے اردو جملوں کو انگریزی میں لکھیں (will اور going to دونوں سے):</p>
                <ol className="space-y-3 list-decimal list-inside text-black" dir="rtl">
                  <li className="font-urdu text-lg text-black">میں کل پانی پیوں گا۔</li>
                  <li className="font-urdu text-lg text-black">وہ اگلے سال خریداری کرے گی۔</li>
                  <li className="font-urdu text-lg text-black">ہم کل کام کریں گے۔</li>
                  <li className="font-urdu text-lg text-black">وہ کل یہاں آئیں گے۔</li>
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
                    Subject + will + not + Verb (1st form) + Object
                  </div>
                </div>
                <p className="text-black mt-2 text-sm" dir="rtl">will not = won't</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">Will not (won't)</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">میں کل نہیں آؤں گا۔</div>
                      <p className="text-black">I will not come tomorrow</p>
                      <p className="text-black">I won't come tomorrow</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">ہم نہیں جائیں گے۔</div>
                      <p className="text-black">We will not go</p>
                      <p className="text-black">We won't go</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">Going to negative</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ نہیں آنے والی۔</div>
                      <p className="text-black">She is not going to come</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ نہیں آنے والے۔</div>
                      <p className="text-black">They are not going to come</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-5 rounded-xl">
                <h3 className="font-bold text-black mb-3">Short Forms:</h3>
                <div className="grid grid-cols-1 gap-2">
                  <p className="text-black"><strong>will not</strong> = won't</p>
                  <p className="text-black">I won't come.</p>
                  <p className="text-black">He won't go.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Questions */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              7. Questions - سوالات بنانا
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Yes/No Questions (Will):</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">Will + Subject + Verb (1st form) + Object?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم کل آؤ گے؟</div>
                    <p className="text-black font-bold">Will you come tomorrow?</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ کل جائے گی؟</div>
                    <p className="text-black font-bold">Will she go tomorrow?</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا بارش ہو گی؟</div>
                    <p className="text-black font-bold">Will it rain?</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Yes/No Questions (Going To):</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">Is/Am/Are + Subject + going to + Verb?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم کل آنے والے ہو؟</div>
                    <p className="text-black font-bold">Are you going to come tomorrow?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ کل جانے والی ہے؟</div>
                    <p className="text-black font-bold">Is she going to go tomorrow?</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-4">WH Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">WH + will + Subject + Verb (1st form) + Object?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم کل کہاں جاؤ گے؟</div>
                    <p className="text-black font-bold">Where will you go tomorrow?</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کیا کھائے گی؟</div>
                    <p className="text-black font-bold">What will she eat?</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کب آئے گا؟</div>
                    <p className="text-black font-bold">When will he come?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Time Words */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-purple-500 pl-4">
              8. Time Words - وقت کے الفاظ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">Tomorrow</p>
                <p className="text-black font-urdu" dir="rtl">کل</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">Next week</p>
                <p className="text-black font-urdu" dir="rtl">اگلے ہفتے</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">Next month</p>
                <p className="text-black font-urdu" dir="rtl">اگلے مہینے</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">Next year</p>
                <p className="text-black font-urdu" dir="rtl">اگلے سال</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">Soon</p>
                <p className="text-black font-urdu" dir="rtl">جلد ہی</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold text-lg">Later</p>
                <p className="text-black font-urdu" dir="rtl">بعد میں</p>
              </div>
            </div>
          </div>

          {/* Section 9: Future Simple vs Present Continuous for Future */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-yellow-500 pl-4">
              9. Future Simple vs Present Continuous (مستقبل کے لیے)
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-yellow-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">Future Simple (will)</th>
                    <th className="py-3 px-4 border-b text-left text-black">Present Continuous</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black">اس وقت کا فیصلہ (unplanned)</td>
                    <td className="py-3 px-4 text-black">پہلے سے طے شدہ (planned)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black font-urdu" dir="rtl">میں کل آؤں گا۔ (اب فیصلہ کیا)</td>
                    <td className="py-3 px-4 text-black font-urdu" dir="rtl">میں کل آ رہا ہوں۔ (پہلے سے طے ہے)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">I will come tomorrow.</td>
                    <td className="py-3 px-4 text-black">I am coming tomorrow.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 10: Quick Review */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              10. Quick Review - جلدی دہرائی
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-md p-6 border-2 border-green-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">پہچان:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                      <span>گا، گی، گے + وقت</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Formula (Will):</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>will + verb(1st)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Formula (Going To):</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>is/am/are + going to + verb</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Short Form:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span>will not = won't</span>
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
              href="/exercises-in-urdu/future-simple-exercise-1"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-green-200 text-center group"
            >
              <div className="text-green-600 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-black mb-2">Practice Exercises</h3>
              <p className="text-black mb-4">Future Simple ki practice karo</p>
              <span className="text-green-600 font-semibold group-hover:text-green-800">
                Exercises Start Karo →
              </span>
            </Link>
            
            <Link 
              href="/tenses-in-urdu/future-continuous"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-blue-200 text-center group"
            >
              <div className="text-blue-600 text-3xl mb-4">➡️</div>
              <h3 className="text-xl font-bold text-black mb-2">Next Tense</h3>
              <p className="text-black mb-4">Future Continuous Tense seekhein</p>
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
                href="/mistakes/future-simple"
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
                href="/quizzes/future-simple-quiz"
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