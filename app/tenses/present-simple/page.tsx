import Link from 'next/link';

export default function PresentSimplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/tenses" className="text-white/80 hover:text-white transition duration-300">
              ← All Tenses
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Present Indefinite Tense in Urdu
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            (Present Simple Tense) - Aasaan Urdu Mein Seekhein
          </p>
        </div>
      </section>

      {/* Main Content - Pure Teaching */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section 1: Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-blue-500 pl-4">
              1. Present Indefinite Tense Kya Hai?
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-4" dir="rtl">
                <strong className="text-blue-600">Present Indefinite Tense</strong> کو اردو میں 
                <strong className="text-blue-600"> "حال مطلق"</strong> کہتے ہیں۔ یہ سب سے پہلا اور سب سے آسان Tense ہے۔
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-bold text-black mb-3 text-lg" dir="rtl">
                  Present Indefinite Kab Use Karein؟
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <strong className="text-black">روزانہ کے کام</strong>
                      <p className="text-black text-sm" dir="rtl">جو کام آپ روز کرتے ہیں</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <strong className="text-black">عادتیں</strong>
                      <p className="text-black text-sm" dir="rtl">جو کام آپ کی عادت ہیں</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <strong className="text-black">مستقل حقائق</strong>
                      <p className="text-black text-sm" dir="rtl">جو ہمیشہ سچ رہتا ہے</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-100 text-yellow-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <strong className="text-black">قابلیت/صلاحیت</strong>
                      <p className="text-black text-sm" dir="rtl">آپ کیا کر سکتے ہیں</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-5 rounded-xl border border-green-200">
              <h3 className="font-bold text-black mb-3">Examples:</h3>
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    میں روزانہ سکول جاتا ہوں۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">I go to school daily</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    وہ انگریزی بولتا ہے۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">He speaks English</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <div className="font-urdu text-lg text-black flex-shrink-0" dir="rtl">
                    سورج مشرق سے نکلتا ہے۔
                  </div>
                  <span className="hidden md:inline">→</span>
                  <span className="text-black">The sun rises in the east</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pehchan */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-green-500 pl-4">
              2. Present Indefinite Ki Pehchan Kaise Karein؟
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <p className="text-black text-lg mb-6" dir="rtl">
                اردو میں Present Indefinite کی پہچان بہت آسان ہے۔ جملے کے آخر میں یہ الفاظ آتے ہیں:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">تا ہے</div>
                  <p className="text-black font-bold">مرد واحد</p>
                  <p className="text-black text-sm">(واحد مذکر)</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">تی ہے</div>
                  <p className="text-black font-bold">عورت واحد</p>
                  <p className="text-black text-sm">(واحد مؤنث)</p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-urdu text-black mb-2" dir="rtl">تے ہیں</div>
                  <p className="text-black font-bold">جمع</p>
                  <p className="text-black text-sm">(مذکر و مؤنث)</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4">Pehchan ki Examples:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black rounded-lg">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ سکول <strong className="text-green-600">جاتا ہے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"تا ہے" آگیا → Present Indefinite</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ کتاب <strong className="text-green-600">پڑھتی ہے۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"تی ہے" آگیا → Present Indefinite</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">
                        وہ کھانا <strong className="text-green-600">کھاتے ہیں۔</strong>
                      </td>
                      <td className="py-3 px-4 text-black">"تے ہیں" آگیا → Present Indefinite</td>
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
                  <span>اردو میں <strong>"تا ہے، تی ہے، تے ہیں"</strong> دیکھ کر فوراً پہچان جائیں</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>یہ صرف Present Indefinite میں آتا ہے</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold ml-2">•</span>
                  <span>Present Indefinite کی یہ خاص پہچان ہے، دوسرے tenses میں ایسا نہیں ہوتا</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Formula - Asaan Rule */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 border-l-4 border-red-500 pl-4">
              3. Present Indefinite Ka Asaan Formula
            </h2>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="text-center mb-8">
                <div className="bg-gray-900 text-white p-4 rounded-lg inline-block">
                  <div className="text-xl md:text-2xl font-mono">
                    Subject + Verb (s/es) + Object
                  </div>
                </div>
                <p className="text-black mt-2">یہ سادہ Formula یاد رکھیں</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 text-center">
                  Sirf 2 Rules Yad Rakhein:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Rule 1 */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border-2 border-green-300">
                    <h4 className="font-bold text-lg text-black mb-3 text-center">
                      Rule 1: I, We, You, They
                    </h4>
                    <div className="text-center mb-3">
                      <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                        <span className="text-2xl font-bold text-green-700">Verb بغیر s/es</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-black">I</span>
                        <span className="font-bold text-green-700">eat</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">You</span>
                        <span className="font-bold text-green-700">play</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">We</span>
                        <span className="font-bold text-green-700">go</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">They</span>
                        <span className="font-bold text-green-700">read</span>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-sm bg-green-200 text-green-800 px-3 py-1 rounded-full">
                        I, We, You, They = NO "s"
                      </span>
                    </div>
                  </div>
                  
                  {/* Rule 2 */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-300">
                    <h4 className="font-bold text-lg text-black mb-3 text-center">
                      Rule 2: He, She, It
                    </h4>
                    <div className="text-center mb-3">
                      <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                        <span className="text-2xl font-bold text-blue-700">Verb + s/es</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-black">He</span>
                        <span className="font-bold text-blue-700">eats</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">She</span>
                        <span className="font-bold text-blue-700">plays</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">It</span>
                        <span className="font-bold text-blue-700">works</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">Ali</span>
                        <span className="font-bold text-blue-700">reads</span>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-sm bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                        He, She, It = ADD "s"
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Verb + s/es Rules */}
              <div className="bg-gray-50 p-5 rounded-xl">
                <h3 className="text-xl font-bold text-black mb-4" dir="rtl">
                  Verb میں "s" کیسے لگائیں؟
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-black rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 border-b text-left text-black">Verb Ending</th>
                        <th className="py-3 px-4 border-b text-left text-black">Rule</th>
                        <th className="py-3 px-4 border-b text-left text-black">Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">عام verbs</td>
                        <td className="py-3 px-4 border-b text-black">صرف <strong>s</strong> لگائیں</td>
                        <td className="py-3 px-4 border-b text-black">work → works, play → plays</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">ch, sh, s, x, o سے ختم ہو</td>
                        <td className="py-3 px-4 border-b text-black"><strong>es</strong> لگائیں</td>
                        <td className="py-3 px-4 border-b text-black">watch → watches, go → goes</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b text-black">Consonant + y سے ختم ہو</td>
                        <td className="py-3 px-4 border-b text-black">y کو i کر کے <strong>es</strong> لگائیں</td>
                        <td className="py-3 px-4 border-b text-black">study → studies, fly → flies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                      <th className="py-3 px-4 border-b text-left text-black">Rule Applied</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">میں روزانہ پڑھتا ہوں۔</td>
                      <td className="py-3 px-4 font-bold text-black">I study daily</td>
                      <td className="py-3 px-4"><span className="text-green-600">I = No "s"</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ کتاب پڑھتی ہے۔</td>
                      <td className="py-3 px-4 font-bold text-black">She reads a book</td>
                      <td className="py-3 px-4"><span className="text-blue-600">She = Add "s"</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">تم سکول جاتے ہو۔</td>
                      <td className="py-3 px-4 font-bold text-black">You go to school</td>
                      <td className="py-3 px-4"><span className="text-green-600">You = No "s"</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">وہ کھانا کھاتا ہے۔</td>
                      <td className="py-3 px-4 font-bold text-black">He eats food</td>
                      <td className="py-3 px-4"><span className="text-blue-600">He = Add "s"</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-urdu text-lg text-black" dir="rtl">ہم انگریزی بولتے ہیں۔</td>
                      <td className="py-3 px-4 font-bold text-black">We speak English</td>
                      <td className="py-3 px-4"><span className="text-green-600">We = No "s"</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-3" dir="rtl">پریکٹس کریں:</h3>
                <p className="text-black mb-3" dir="rtl">نیچے دیے ہوئے اردو جملوں کو انگریزی میں لکھیں:</p>
                <ol className="space-y-3 list-decimal list-inside text-black" dir="rtl">
                  <li className="font-urdu text-lg text-black">میں پانی پیتا ہوں۔</li>
                  <li className="font-urdu text-lg text-black">وہ فٹبال کھیلتا ہے۔</li>
                  <li className="font-urdu text-lg text-black">تم کام کرتے ہو۔</li>
                  <li className="font-urdu text-lg text-black">وہ گانا گاتی ہے۔</li>
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
                    Subject + do not / does not + Verb
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h3 className="font-bold text-black mb-3 text-center">I, We, You, They</h3>
                  <div className="text-center mb-4">
                    <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                      <span className="text-xl font-bold text-red-700">do not + verb</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">میں نہیں جانتا۔</div>
                      <p className="text-black">I do not know</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">ہم نہیں آتے۔</div>
                      <p className="text-black">We do not come</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h3 className="font-bold text-black mb-3 text-center">He, She, It</h3>
                  <div className="text-center mb-4">
                    <div className="inline-block bg-white px-4 py-2 rounded-lg shadow">
                      <span className="text-xl font-bold text-red-700">does not + verb</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ نہیں جاتا۔</div>
                      <p className="text-black">He does not go</p>
                    </div>
                    <div>
                      <div className="font-urdu text-sm mb-1 text-black" dir="rtl">وہ نہیں پڑھتی۔</div>
                      <p className="text-black">She does not read</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-5 rounded-xl">
                <h3 className="font-bold text-black mb-3">Short Forms:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-black"><strong>do not</strong> = don't</p>
                    <p className="text-black text-sm">Example: I don't know</p>
                  </div>
                  <div>
                    <p className="text-black"><strong>does not</strong> = doesn't</p>
                    <p className="text-black text-sm">Example: He doesn't like</p>
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
                    <div className="text-xl font-mono">Do/Does + Subject + Verb + ?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا تم پڑھتے ہو؟</div>
                    <p className="text-black font-bold">Do you study؟</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ جاتا ہے؟</div>
                    <p className="text-black font-bold">Does he go؟</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">کیا وہ آتی ہے؟</div>
                    <p className="text-black font-bold">Does she come؟</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-4">WH Questions:</h3>
                <div className="text-center mb-4">
                  <div className="bg-gray-900 text-white p-4 rounded-lg inline-block">
                    <div className="text-xl font-mono">WH Word + Do/Does + Subject + Verb + ?</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">تم کہاں جاتے ہو؟</div>
                    <p className="text-black font-bold">Where do you go؟</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کیا کرتا ہے؟</div>
                    <p className="text-black font-bold">What does he do؟</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-urdu text-lg mb-2 text-black" dir="rtl">وہ کب آتی ہے؟</div>
                    <p className="text-black font-bold">When does she come؟</p>
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
                  <h3 className="font-bold text-black mb-3">Pehchan:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>اردو میں جملے کے آخر میں "تا ہے، تی ہے، تے ہیں" آتا ہے</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Main Rules:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>I, We, You, They = No "s"</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span>He, She, It = Add "s"</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Negative:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>I, We, You, They = do not</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>He, She, It = does not</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-black mb-3">Questions:</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>Do/Does شروع میں لگائیں</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>WH Word شروع میں لگائیں</span>
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
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-10">
            Ab Practice Karo aur Age Barho
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/exercises/present-simple-exercise-1"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-blue-200 text-center group"
            >
              <div className="text-blue-600 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-black mb-2">Practice Exercises</h3>
              <p className="text-black mb-4">Present Simple ki practice karo</p>
              <span className="text-blue-600 font-semibold group-hover:text-blue-800">
                Exercises Start Karo →
              </span>
            </Link>
            
            <Link 
              href="/tenses/present-continuous"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-green-200 text-center group"
            >
              <div className="text-green-600 text-3xl mb-4">➡️</div>
              <h3 className="text-xl font-bold text-black mb-2">Next Tense Seekhein</h3>
              <p className="text-black mb-4">Present Continuous Tense seekhein</p>
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
                href="/mistakes/present-simple"
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
                href="/quizzes/present-simple-quiz"
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