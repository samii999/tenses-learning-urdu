import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',        // API routes
        '/_next/',      // Next.js internal files
        '/static/',     // Static assets (optional)
        '/admin/',      // If you have admin panel
        '/private/',    // Private pages
        '/draft/',      // Draft content (if any)
      ],
    },
    sitemap: 'https://tensesurdu.vercel.app/sitemap.xml',
    // Optional: Add host for better SEO
    // host: 'https://tensesurdu.vercel.app',
  }
}