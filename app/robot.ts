import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/api/',
        '/_next/',
        '/static/',
      ],
    },
    sitemap: 'https://tensesurdu.vercel.app/sitemap.xml',
  }
}