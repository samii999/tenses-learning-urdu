import Link from 'next/link';

export default function PastPerfectContinuousPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/tenses" className="text-white/80 hover:text-white transition duration-300">
              ← All Tenses
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Past Perfect Continuous Tense in Urdu
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            (Past Perfect Progressive) - Aasaan Urdu Mein Seekhein
          </p>
        </div>
      </section>

      {/* Main Content - Pure Teaching */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              1. Past Perfect Continuous Tense Kya Hai?
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-4" dir="rtl">
                <strong className="text-pink-600">Past Perfect Continuous Tense</strong> کو اردو میں 
                <strong className="text-pink-600"> "ماضی مکمل جاری"</strong> کہتے ہیں۔ یہ ان کاموں کے لیے استعمال ہوتا ہے 
                جو ماضی میں کسی اور کام سے پہلے شروع ہو کر جاری رہے اور پھر ماضی میں ہی ختم ہوئے۔
              </p>
              
              <div className="bg-pink-50 p-5 rounded-lg border border-pink-200">
                <h3 className="font-bold text-black mb-3 text-lg" dir="rtl">
                  Past Perfect Continuous Kab Use Karein؟
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-pink-100 text-pink-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <strong className="text-black">کام کی مدت</strong>
                      <p className="text-black text-sm" dir="rtl">کام کتنے عرصے سے جاری تھا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <strong className="text-black">وجہ بتانا</strong>
                      <p className="text-black text-sm" dir="rtl">ماضی میں کسی کام کی وجہ بتانا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <strong className="text-black">پہلے سے جاری کام</strong>
                      <p className="text-black text-sm" dir="rtl">کسی اور کام سے پہلے جاری تھا</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center ml-3 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <strong className="text-black">نتیجہ ظاہر کرنا</strong>
                      <p className="text-black text-sm" dir="rtl">ماضی میں کسی کام کا نتیجہ دکھانا</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-pink-50 p-5 rounded-xl border border-pink-200">
              <h3 className="font-bold text-black mb-3" dir="rtl">مثالیں:</h3>
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    میں دو گھنٹے سے پڑھ رہا تھا جب وہ آیا۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">I had been studying for two hours when he came</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ صبح سے کام کر رہی تھی جب میں پہنچا۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">She had been working since morning when I arrived</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ تین گھنٹے سے انتظار کر رہے تھے جب بس آئی۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">They had been waiting for three hours when the bus came</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pehchan */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              2. Past Perfect Continuous Ki Pehchan Kaise Karein؟
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اردو میں Past Perfect Continuous کی پہچان یہ ہے کہ جملے میں وقت کا ذکر ہو اور آخر میں یہ الفاظ آتے ہیں:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">رہا تھا</div>
                  <p className="text-black font-bold">مرد واحد</p>
                  <p className="text-black text-sm">+ مدت کا ذکر</p>
                </div>
                <div className="bg-gradient-to-br from-rose-100 to-rose-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">رہی تھی</div>
                  <p className="text-black font-bold">عورت واحد</p>
                  <p className="text-black text-sm">+ مدت کا ذکر</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">رہے تھے</div>
                  <p className="text-black font-bold">جمع</p>
                  <p className="text-black text-sm">+ مدت کا ذکر</p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="bg-pink-50 p-3 rounded-lg inline-block">
                  <p className="text-black font-bold" dir="rtl">وقت کے الفاظ: "دو گھنٹے سے، صبح سے، 2015 سے، کافی دیر سے"</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 mt-6" dir="rtl">پہچان کی مثالیں:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        میں <strong className="text-pink-600">دو گھنٹے سے</strong> پڑھ <strong className="text-pink-600">رہا تھا</strong>۔
                      </td>
                      <td className="py-3 px-4 text-black">وقت + رہا تھا → Past Perfect Continuous</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ <strong className="text-pink-600">صبح سے</strong> کام کر <strong className="text-pink-600">رہی تھی</strong>۔
                      </td>
                      <td className="py-3 px-4 text-black">وقت + رہی تھی → Past Perfect Continuous</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ <strong className="text-pink-600">تین گھنٹے سے</strong> انتظار کر <strong className="text-pink-600">رہے تھے</strong>۔
                      </td>
                      <td className="py-3 px-4 text-black">وقت + رہے تھے → Past Perfect Continuous</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        ہم <strong className="text-pink-600">2015 سے</strong> یہاں رہ <strong className="text-pink-600">رہے تھے</strong>۔
                      </td>
                      <td className="py-3 px-4 text-black">وقت + رہے تھے → Past Perfect Continuous</td>
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
                  <span>اردو میں <strong>"رہا تھا، رہی تھی، رہے تھے"</strong> کے ساتھ <strong>وقت</strong> ضرور ہوتا ہے</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>وقت ظاہر کرنے والے الفاظ: <strong>"سے، سے"</strong> (for, since)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>یہ tense ماضی میں کسی اور کام سے پہلے جاری تھا</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: For and Since - Recap */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              3. For and Since - وقت ظاہر کرنے کے طریقے
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300">
                <h3 className="text-2xl font-bold text-black mb-4 text-center" dir="rtl">For (مدت)</h3>
                <p className="text-black mb-3 text-center" dir="rtl">کتنی دیر؟ (مدت بتانے کے لیے)</p>
                <div className="space-y-2">
                  <p className="text-black" dir="rtl">▪️ دو گھنٹے <strong>سے</strong> (for two hours)</p>
                  <p className="text-black" dir="rtl">▪️ تین دن <strong>سے</strong> (for three days)</p>
                  <p className="text-black" dir="rtl">▪️ پانچ سال <strong>سے</strong> (for five years)</p>
                  <p className="text-black" dir="rtl">▪️ کافی دیر <strong>سے</strong> (for a long time)</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
                <h3 className="text-2xl font-bold text-black mb-4 text-center" dir="rtl">Since (نقطہ آغاز)</h3>
                <p className="text-black mb-3 text-center" dir="rtl">کب سے؟ (شروع کا وقت بتانے کے لیے)</p>
                <div className="space-y-2">
                  <p className="text-black" dir="rtl">▪️ صبح <strong>سے</strong> (since morning)</p>
                  <p className="text-black" dir="rtl">▪️ 2020 <strong>سے</strong> (since 2020)</p>
                  <p className="text-black" dir="rtl">▪️ پیر <strong>سے</strong> (since Monday)</p>
                  <p className="text-black" dir="rtl">▪️ میں آیا <strong>سے</strong> (since I came)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Formula - Asaan Rule */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              4. Past Perfect Continuous Ka Asaan Formula
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="text-center mb-8">
                <div className="bg-black text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + had + been + Verb(ing) + Object + for/since + time
                  </div>
                </div>
                <p className="text-black mt-2">یہ سادہ Formula یاد رکھیں</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 text-center">
                  ایک ہی Rule ہے:
                </h3>
                
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border-2 border-pink-300">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-lg">
                      <span className="text-3xl font-bold text-pink-700">had been + verb(ing)</span>
                    </div>
                  </div>
                  <p className="text-black text-center mb-4" dir="rtl">ہر Subject کے ساتھ (I, You, He, She, It, We, They) یکساں</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="font-urdu text-black" dir="rtl">میں دو گھنٹے سے پڑھ رہا تھا۔</p>
                      <p className="text-black">I <strong>had been studying</strong> for two hours</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">وہ صبح سے کام کر رہی تھی۔</p>
                      <p className="text-black">She <strong>had been working</strong> since morning</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">ہم 2015 سے یہاں رہ رہے تھے۔</p>
                      <p className="text-black">We <strong>had been living</strong> here since 2015</p>
                    </div>
                    <div>
                      <p className="font-urdu text-black" dir="rtl">وہ انتظار کر رہے تھے۔</p>
                      <p className="text-black">They <strong>had been waiting</strong></p>
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
                    <thead className="bg-pink-100">
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

          {/* Section 5: Positive Sentences */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              5. Positive Sentences - سادہ جملے
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اب ہم اردو جملوں کو انگریزی میں تبدیل کرنا سیکھیں گے:
              </p>
              
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <thead className="bg-pink-100">
                    <tr>
                      <th className="py-3 px-4 border-b text-left text-black">اردو جملہ</th>
                      <th className="py-3 px-4 border-b text-left text-black">انگریزی جملہ</th>
                      <th className="py-3 px-4 border-b text-left text-black">Time Word</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">میں دو گھنٹے سے پڑھ رہا تھا جب وہ آیا۔</td>
                      <td className="py-3 px-4 font-bold text-black">I had been studying for two hours when he came</td>
                      <td className="py-3 px-4 text-black">for two hours</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ صبح سے کام کر رہی تھی جب میں پہنچا۔</td>
                      <td className="py-3 px-4 font-bold text-black">She had been working since morning when I arrived</td>
                      <td className="py-3 px-4 text-black">since morning</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ تین گھنٹے سے انتظار کر رہے تھے جب بس آئی۔</td>
                      <td className="py-3 px-4 font-bold text-black">They had been waiting for three hours when the bus came</td>
                      <td className="py-3 px-4 text-black">for three hours</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">ہم 2015 سے یہاں رہ رہے تھے۔</td>
                      <td className="py-3 px-4 font-bold text-black">We had been living here since 2015</td>
                      <td className="py-3 px-4 text-black">since 2015</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">بچے شام سے کھیل رہے تھے۔</td>
                      <td className="py-3 px-4 font-bold text-black">The children had been playing since evening</td>
                      <td className="py-3 px-4 text-black">since evening</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-pink-50 p-5 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-3" dir="rtl">پریکٹس کریں:</h3>
                <p className="text-black mb-3" dir="rtl">نیچے دیے ہوئے اردو جملوں کو انگریزی میں لکھیں:</p>
                <ol className="space-y-3 list-decimal list-inside text-black" dir="rtl">
                  <li className="font-urdu text-lg text-black">میں ایک گھنٹے سے سو رہا تھا جب اس نے فون کیا۔</li>
                  <li className="font-urdu text-lg text-black">وہ کل سے بیمار تھی۔ (since yesterday)</li>
                  <li className="font-urdu text-lg text-black">ہم دس منٹ سے انتظار کر رہے تھے جب وہ آیا۔</li>
                  <li className="font-urdu text-lg text-black">وہ 2018 سے انگریزی سیکھ رہی تھی۔</li>
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
                    Subject + had + not + been + Verb(ing) + Object + for/since + time
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">Had not been</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">میں دو گھنٹے سے نہیں پڑھ رہا تھا۔</div>
                      <p className="text-black">I had not been studying for two hours</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">ہم صبح سے کام نہیں کر رہے تھے۔</div>
                      <p className="text-black">We had not been working since morning</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h4 className="font-bold text-black mb-3 text-center">Had not been</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ ایک گھنٹے سے نہیں سو رہا تھا۔</div>
                      <p className="text-black">He had not been sleeping for an hour</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ کل سے نہیں آ رہی تھی۔</div>
                      <p className="text-black">She had not been coming since yesterday</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-5 rounded-xl">
                <h3 className="font-bold text-black mb-3">Short Forms:</h3>
                <div className="grid grid-cols-1 gap-2">
                  <p className="text-black"><strong>had not been</strong> = hadn't been</p>
                  <p className="text-black">I hadn't been studying.</p>
                  <p className="text-black">She hadn't been working.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Questions */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              7. Questions - سوالات بنانا
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Yes/No Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">Had + Subject + been + Verb(ing) + Object + for/since + time?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم دو گھنٹے سے پڑھ رہے تھے؟</div>
                    <p className="text-black font-bold">Had you been studying for two hours?</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ صبح سے کام کر رہی تھی؟</div>
                    <p className="text-black font-bold">Had she been working since morning?</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ تین گھنٹے سے انتظار کر رہے تھے؟</div>
                    <p className="text-black font-bold">Had they been waiting for three hours?</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-4">WH Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-black text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">WH + had + Subject + been + Verb(ing) + Object + for/since + time?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم کب سے پڑھ رہے تھے؟</div>
                    <p className="text-black font-bold">Since when had you been studying?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کتنے عرصے سے کام کر رہی تھی؟</div>
                    <p className="text-black font-bold">How long had she been working?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم کیا کر رہے تھے اتنے دیر سے؟</div>
                    <p className="text-black font-bold">What had you been doing for so long?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Cause and Effect */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-orange-500 pl-4">
              8. وجہ اور نتیجہ - Cause and Effect
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-5 rounded-lg">
                  <h4 className="font-bold text-black mb-3 text-center" dir="rtl">وجہ (Cause)</h4>
                  <div className="space-y-3">
                    <p className="font-urdu text-black" dir="rtl">وہ <strong>دو گھنٹے سے دوڑ رہا تھا</strong></p>
                    <p className="text-black">He had been running for two hours</p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="font-bold text-black mb-3 text-center" dir="rtl">نتیجہ (Effect)</h4>
                  <div className="space-y-3">
                    <p className="font-urdu text-black" dir="rtl">اس لیے وہ <strong>تھک گیا</strong></p>
                    <p className="text-black">so he got tired</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-black text-center font-bold" dir="rtl">
                  وہ <span className="text-pink-600">دو گھنٹے سے دوڑ رہا تھا</span> اس لیے <span className="text-orange-600">تھک گیا</span>۔
                </p>
                <p className="text-black text-center">
                  He <span className="text-pink-600">had been running for two hours</span>, so he <span className="text-orange-600">got tired</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9: Past Perfect vs Past Perfect Continuous */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-yellow-500 pl-4">
              9. Past Perfect vs Past Perfect Continuous - فرق
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-black rounded-lg">
                <thead className="bg-yellow-100">
                  <tr>
                    <th className="py-3 px-4 border-b text-left text-black">Past Perfect</th>
                    <th className="py-3 px-4 border-b text-left text-black">Past Perfect Continuous</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black">کام مکمل ہو چکا تھا (completed)</td>
                    <td className="py-3 px-4 text-black">کام جاری تھا (in progress)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black font-urdu" dir="rtl">میں نے کتاب پڑھ لی تھی۔</td>
                    <td className="py-3 px-4 text-black font-urdu" dir="rtl">میں دو گھنٹے سے پڑھ رہا تھا۔</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-black">I had read the book.</td>
                    <td className="py-3 px-4 text-black">I had been reading for two hours.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">نتیجہ اہم ہے (result)</td>
                    <td className="py-3 px-4 text-black">مدت اہم ہے (duration)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 10: Time Words Summary */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              10. Time Words - وقت کے الفاظ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold">For + مدت</p>
                <p className="text-black">for two hours</p>
                <p className="text-black">for three days</p>
                <p className="text-black">for five years</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold">Since + نقطہ آغاز</p>
                <p className="text-black">since morning</p>
                <p className="text-black">since 2020</p>
                <p className="text-black">since Monday</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <p className="text-black font-bold">How long?</p>
                <p className="text-black">کتنی دیر سے؟</p>
                <p className="text-black">کب سے؟</p>
              </div>
            </div>
          </div>

          {/* Section 11: Quick Review */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-pink-500 pl-4">
              11. Quick Review - جلدی دہرائی
            </h2>
            
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl shadow-md p-6 border-2 border-pink-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">پہچان:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full ml-2"></div>
                      <span>"رہا تھا، رہی تھی، رہے تھے" + وقت</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Formula:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                      <span>had been + verb(ing)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">For vs Since:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>For = مدت (2 hours, 3 days)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>Since = نقطہ آغاز (morning, 2020)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3" dir="rtl">استعمال:</h3>
                  <ul className="space-y-2 text-black" dir="rtl">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full ml-2"></div>
                      <span>کام کی مدت بتانا</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full ml-2"></div>
                      <span>وجہ بتانا</span>
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
              href="/exercises/past-perfect-continuous-exercise-1"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-pink-200 text-center group"
            >
              <div className="text-pink-600 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-black mb-2">Practice Exercises</h3>
              <p className="text-black mb-4">Past Perfect Continuous ki practice karo</p>
              <span className="text-pink-600 font-semibold group-hover:text-pink-800">
                Exercises Start Karo →
              </span>
            </Link>
            
            <Link 
              href="/tenses/future-simple"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-blue-200 text-center group"
            >
              <div className="text-blue-600 text-3xl mb-4">➡️</div>
              <h3 className="text-xl font-bold text-black mb-2">Next: Future Tenses</h3>
              <p className="text-black mb-4">Future Simple Tense seekhein</p>
              <span className="text-blue-600 font-semibold group-hover:text-blue-800">
                Future Tenses Parho →
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
                href="/mistakes/past-perfect-continuous"
                className="text-black hover:text-pink-600 font-medium"
              >
                Common Mistakes
              </Link>
              <Link 
                href="/tips"
                className="text-black hover:text-pink-600 font-medium"
              >
                Learning Tips
              </Link>
              <Link 
                href="/quizzes/past-perfect-continuous-quiz"
                className="text-black hover:text-pink-600 font-medium"
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