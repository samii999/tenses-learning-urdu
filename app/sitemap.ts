import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tensesurdu.vercel.app'
  
  // ===== MAIN PAGES (ONLY EXISTING FOLDERS) =====
  const mainPages = [
    { path: '', priority: 1.0, changefreq: 'daily' as const },
    
    { path: '/tenses-in-urdu', priority: 0.9, changefreq: 'daily' as const },

    { path: '/exercises-in-urdu', priority: 0.9, changefreq: 'daily' as const },
    { path: '/quizzes', priority: 0.9, changefreq: 'daily' as const },
    { path: '/mistakes', priority: 0.9, changefreq: 'daily' as const },
    { path: '/grammer-basics-in-urdu', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/tips', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/verb-forms', priority: 0.8, changefreq: 'weekly' as const },
    // Legal pages
    { path: '/about', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/contact', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/terms', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/faq', priority: 0.6, changefreq: 'monthly' as const },
  ]

  // ===== ALL 12 TENSES (located in /tenses-in-urdu/) =====
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

  // ===== ALL 24 EXERCISES (located in /exercises-in-urdu/) =====
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

  // ===== ALL 12 QUIZZES =====
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

  // ===== ALL 12 MISTAKES PAGES =====
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

  // ===== BUILD SITEMAP =====
  const sitemapEntries: MetadataRoute.Sitemap = []

  // 1. Main Pages
  for (const page of mainPages) {
    sitemapEntries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changefreq,
      priority: page.priority,
    })
  }

  // 2. Individual Tenses (URL: /tenses-in-urdu/present-simple)
  for (const tense of tenses) {
    sitemapEntries.push({
      url: `${baseUrl}/tenses-in-urdu/${tense}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })
  }

  // 3. Individual Exercises (URL: /exercises-in-urdu/present-simple-exercise-1)
  for (const exercise of exercises) {
    sitemapEntries.push({
      url: `${baseUrl}/exercises-in-urdu/${exercise}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })
  }

  // 4. Quizzes
  for (const quiz of quizzes) {
    sitemapEntries.push({
      url: `${baseUrl}/quizzes/${quiz}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })
  }

  // 5. Mistakes
  for (const mistake of mistakes) {
    sitemapEntries.push({
      url: `${baseUrl}/mistakes/${mistake}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })
  }

  return sitemapEntries
}