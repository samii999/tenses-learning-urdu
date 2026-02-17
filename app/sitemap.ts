import { MetadataRoute } from 'next'

// List of all your website URLs
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tensesurdu.vercel.app'
  
  // Main pages
  const routes = [
    '',
    '/tenses',
    '/tenses-in-urdu',
    '/exercises-in-urdu',
    '/exercises',
    '/quizzes',
    '/quizzes-in-urdu',
    '/mistakes',
    '/tips',
    '/progress',
    '/grammar-basics-in-urdu',
    '/verb-forms',
  ]
  
  // All 12 tenses
  const tenses = [
    'present-simple',
    'present-continuous',
    'present-perfect',
    'present-perfect-continuous',
    'past-simple',
    'past-continuous',
    'past-perfect',
    'past-perfect-continuous',
    'future-simple',
    'future-continuous',
    'future-perfect',
    'future-perfect-continuous',
  ]
  
  // All exercises (2 per tense = 24 exercises)
  const exercises = [
    'present-simple-exercise-1',
    'present-simple-exercise-2',
    'present-continuous-exercise-1',
    'present-continuous-exercise-2',
    'present-perfect-exercise-1',
    'present-perfect-exercise-2',
    'present-perfect-continuous-exercise-1',
    'present-perfect-continuous-exercise-2',
    'past-simple-exercise-1',
    'past-simple-exercise-2',
    'past-continuous-exercise-1',
    'past-continuous-exercise-2',
    'past-perfect-exercise-1',
    'past-perfect-exercise-2',
    'past-perfect-continuous-exercise-1',
    'past-perfect-continuous-exercise-2',
    'future-simple-exercise-1',
    'future-simple-exercise-2',
    'future-continuous-exercise-1',
    'future-continuous-exercise-2',
    'future-perfect-exercise-1',
    'future-perfect-exercise-2',
    'future-perfect-continuous-exercise-1',
    'future-perfect-continuous-exercise-2',
  ]
  
  // All quizzes (1 per tense = 12 quizzes)
  const quizzes = [
    'present-simple-quiz',
    'present-continuous-quiz',
    'present-perfect-quiz',
    'present-perfect-continuous-quiz',
    'past-simple-quiz',
    'past-continuous-quiz',
    'past-perfect-quiz',
    'past-perfect-continuous-quiz',
    'future-simple-quiz',
    'future-continuous-quiz',
    'future-perfect-quiz',
    'future-perfect-continuous-quiz',
  ]
  
  // All mistake pages (1 per tense = 12 pages)
  const mistakes = [
    'present-simple',
    'present-continuous',
    'present-perfect',
    'present-perfect-continuous',
    'past-simple',
    'past-continuous',
    'past-perfect',
    'past-perfect-continuous',
    'future-simple',
    'future-continuous',
    'future-perfect',
    'future-perfect-continuous',
  ]
  
  // Main routes sitemap
  const mainRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  // Tenses sitemap
  const tensesRoutes = tenses.map((tense) => ({
    url: `${baseUrl}/tenses/${tense}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  // Exercises sitemap
  const exercisesRoutes = exercises.map((exercise) => ({
    url: `${baseUrl}/exercises/${exercise}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
  
  // Quizzes sitemap
  const quizzesRoutes = quizzes.map((quiz) => ({
    url: `${baseUrl}/quizzes/${quiz}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
  
  // Mistakes sitemap
  const mistakesRoutes = mistakes.map((mistake) => ({
    url: `${baseUrl}/mistakes/${mistake}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))
  
  return [
    ...mainRoutes,
    ...tensesRoutes,
    ...exercisesRoutes,
    ...quizzesRoutes,
    ...mistakesRoutes,
  ]
}