import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://connectsterling.com' 
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/move-here', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/education-family-life', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/work-here', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/housing-growth', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/get-connected', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/community-calendar', priority: 0.75, changeFrequency: 'weekly' as const },
    { path: '/resources', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/ask-connect-sterling', priority: 0.9, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
