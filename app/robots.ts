import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // We will point this to the sitemap we are about to create
    sitemap: 'https://connectsterling.com/sitemap.xml', 
  }
}