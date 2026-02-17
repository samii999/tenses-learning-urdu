import Link from 'next/link';
import { FaArrowRight, FaCheckCircle, FaPlayCircle, FaClipboardList, FaStar } from 'react-icons/fa';

export default function ExercisesPage() {
  const tenseGroups = [
    {
      title: "Present Tenses Exercises",
      tenses: [
        {
          name: "Present Simple",
          href: "/exercises/present-simple-exercise-1",
          description: "Practice Present Simple tense with basic Urdu to English translations",
          exercises: [
            { name: "Exercise 1: Basic Sentences", href: "/exercises/present-simple-exercise-1" },
            { name: "Exercise 2: Questions & Negatives", href: "/exercises/present-simple-exercise-2" }
          ],
          difficulty: "Beginner"
        },
        {
          name: "Present Continuous",
          href: "/exercises/present-continuous-exercise-1",
          description: "Practice ongoing actions and future plans in Urdu context",
          exercises: [
            { name: "Exercise 1: Current Actions", href: "/exercises/present-continuous-exercise-1" },
            { name: "Exercise 2: Future Arrangements", href: "/exercises/present-continuous-exercise-2" }
          ],
          difficulty: "Beginner"
        },
        {
          name: "Present Perfect",
          href: "/exercises/present-perfect-exercise-1",
          description: "Practice experiences and completed actions affecting present",
          exercises: [
            { name: "Exercise 1: Life Experiences", href: "/exercises/present-perfect-exercise-1" },
            { name: "Exercise 2: Recent Actions", href: "/exercises/present-perfect-exercise-2" }
          ],
          difficulty: "Intermediate"
        },
        {
          name: "Present Perfect Continuous",
          href: "/exercises/present-perfect-continuous-exercise-1",
          description: "Practice duration of actions from past to present",
          exercises: [
            { name: "Exercise 1: Duration Practice", href: "/exercises/present-perfect-continuous-exercise-1" },
            { name: "Exercise 2: Mixed Scenarios", href: "/exercises/present-perfect-continuous-exercise-2" }
          ],
          difficulty: "Intermediate"
        }
      ]
    },
    {
      title: "Past Tenses Exercises",
      tenses: [
        {
          name: "Past Simple",
          href: "/exercises/past-simple-exercise-1",
          description: "Practice completed past actions and events",
          exercises: [
            { name: "Exercise 1: Regular Verbs", href: "/exercises/past-simple-exercise-1" },
            { name: "Exercise 2: Irregular Verbs", href: "/exercises/past-simple-exercise-2" }
          ],
          difficulty: "Beginner"
        },
        {
          name: "Past Continuous",
          href: "/exercises/past-continuous-exercise-1",
          description: "Practice ongoing past actions and interrupted events",
          exercises: [
            { name: "Exercise 1: Interrupted Actions", href: "/exercises/past-continuous-exercise-1" },
            { name: "Exercise 2: Parallel Actions", href: "/exercises/past-continuous-exercise-2" }
          ],
          difficulty: "Intermediate"
        },
        {
          name: "Past Perfect",
          href: "/exercises/past-perfect-exercise-1",
          description: "Practice sequencing of past events",
          exercises: [
            { name: "Exercise 1: Sequence Practice", href: "/exercises/past-perfect-exercise-1" },
            { name: "Exercise 2: Time Clauses", href: "/exercises/past-perfect-exercise-2" }
          ],
          difficulty: "Intermediate"
        },
        {
          name: "Past Perfect Continuous",
          href: "/exercises/past-perfect-continuous-exercise-1",
          description: "Practice duration before another past action",
          exercises: [
            { name: "Exercise 1: Duration Focus", href: "/exercises/past-perfect-continuous-exercise-1" },
            { name: "Exercise 2: Cause & Effect", href: "/exercises/past-perfect-continuous-exercise-2" }
          ],
          difficulty: "Advanced"
        }
      ]
    },
    {
      title: "Future Tenses Exercises",
      tenses: [
        {
          name: "Future Simple",
          href: "/exercises/future-simple-exercise-1",
          description: "Practice predictions and spontaneous decisions",
          exercises: [
            { name: "Exercise 1: Predictions", href: "/exercises/future-simple-exercise-1" },
            { name: "Exercise 2: Promises & Offers", href: "/exercises/future-simple-exercise-2" }
          ],
          difficulty: "Beginner"
        },
        {
          name: "Future Continuous",
          href: "/exercises/future-continuous-exercise-1",
          description: "Practice actions in progress at future time",
          exercises: [
            { name: "Exercise 1: Future Interruptions", href: "/exercises/future-continuous-exercise-1" },
            { name: "Exercise 2: Parallel Future Actions", href: "/exercises/future-continuous-exercise-2" }
          ],
          difficulty: "Intermediate"
        },
        {
          name: "Future Perfect",
          href: "/exercises/future-perfect-exercise-1",
          description: "Practice actions completed before future time",
          exercises: [
            { name: "Exercise 1: By/Before Practice", href: "/exercises/future-perfect-exercise-1" },
            { name: "Exercise 2: Life Milestones", href: "/exercises/future-perfect-exercise-2" }
          ],
          difficulty: "Advanced"
        },
        {
          name: "Future Perfect Continuous",
          href: "/exercises/future-perfect-continuous-exercise-1",
          description: "Practice duration before future point",
          exercises: [
            { name: "Exercise 1: Duration Focus", href: "/exercises/future-perfect-continuous-exercise-1" },
            { name: "Exercise 2: Career Scenarios", href: "/exercises/future-perfect-continuous-exercise-2" }
          ],
          difficulty: "Advanced"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            English Tenses Exercises in Urdu
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Practice all 12 English tenses with interactive exercises designed for Urdu speakers
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/20 px-4 py-2 rounded-full">Tense practice Urdu</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Grammar exercises with answers</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Practice sentences Urdu</span>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Master English Tenses Through Practice
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Welcome to your comprehensive practice center for <strong>English tenses exercises in Urdu</strong>. 
              Here you'll find interactive exercises for all 12 English tenses, each designed specifically 
              for Urdu speakers to practice grammar in context.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Our exercises provide <strong>tense practice Urdu</strong> style with Urdu instructions and 
              examples. Each exercise includes answers and explanations to help you learn from mistakes 
              and improve your English grammar skills.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-blue-600 mb-3">
                  <FaPlayCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Practice</h3>
                <p className="text-gray-700">Click-and-answer exercises with instant feedback</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-green-600 mb-3">
                  <FaClipboardList size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Worksheet Style</h3>
                <p className="text-gray-700">Traditional worksheet format for thorough practice</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="text-purple-600 mb-3">
                  <FaCheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Answer Keys</h3>
                <p className="text-gray-700">Complete solutions with Urdu explanations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercises Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {tenseGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{group.title}</h2>
                <div className="hidden md:flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(3)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600">{group.tenses.length} tenses</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {group.tenses.map((tense, tenseIndex) => (
                  <div 
                    key={tenseIndex} 
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {tense.name} Exercises in Urdu
                          </h3>
                          <div className="flex items-center space-x-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              tense.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                              tense.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {tense.difficulty}
                            </span>
                            <span className="text-gray-500 text-sm">
                              {tense.exercises.length} exercises
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6">{tense.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <FaClipboardList className="text-blue-500 mr-2" />
                          Available Exercises:
                        </h4>
                        <div className="space-y-2">
                          {tense.exercises.map((exercise, exIndex) => (
                            <Link
                              key={exIndex}
                              href={exercise.href}
                              className="flex items-center justify-between bg-gray-50 hover:bg-blue-50 p-3 rounded-lg transition duration-300 group"
                            >
                              <span className="text-gray-800 group-hover:text-blue-600">
                                {exercise.name}
                              </span>
                              <FaArrowRight className="text-gray-400 group-hover:text-blue-600" />
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Link 
                          href={tense.href}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition duration-300"
                        >
                          Start Practice
                        </Link>
                        <Link 
                          href="/tenses-in-urdu"
                          className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-lg text-center transition duration-300"
                        >
                          Review Lesson
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Practice Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Get the Most from These Exercises
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Start with Basics</h3>
                <p className="text-gray-700">
                  Begin with <strong>Present Simple exercises for beginners</strong> and gradually 
                  progress to more complex tenses. Our <strong>tense practice Urdu</strong> approach 
                  ensures you build confidence step by step.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Practice Regularly</h3>
                <p className="text-gray-700">
                  Consistent practice with our <strong>English tenses exercises in Urdu</strong> 
                  worksheets helps reinforce grammar rules. Try to complete at least one exercise 
                  daily for best results.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-purple-600">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Review Answers</h3>
                <p className="text-gray-700">
                  Always check <strong>tense exercises with answers</strong> section. Understanding 
                  why an answer is correct or incorrect is crucial for learning from your mistakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Practice English Tenses?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Start your practice journey with our comprehensive collection of 
            <strong> English grammar exercises</strong> designed specifically for Urdu speakers.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/exercises/present-simple-exercise-1" 
              className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
            >
              Start with Present Simple
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/tenses-in-urdu" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Review Tenses First
            </Link>
          </div>
          <p className="mt-8 text-sm opacity-80">
            Complete exercise collection • Urdu instructions • Answer keys included • Free access
          </p>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/tenses-in-urdu" 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">← Tenses in Urdu Guide</h3>
              <p className="text-gray-600">Review all tenses before practicing</p>
            </Link>
            
            <Link 
              href="/quizzes" 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Test with Quizzes →</h3>
              <p className="text-gray-600">Assess your knowledge</p>
            </Link>
            
            <Link 
              href="/progress" 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Track Progress →</h3>
              <p className="text-gray-600">Monitor your improvement</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
