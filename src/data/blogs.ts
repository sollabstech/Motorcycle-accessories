export interface Blog {
  tag: string;
  title: string;
  excerpt: string;
  date: string;
}

export const BLOGS: Blog[] = [
  { tag: "Maintenance", title: "5 Essential Checks Before Every Long Ride", excerpt: "A quick pre-ride checklist covering tyres, brakes, chain lubrication and more to keep you safe on the road.", date: "Jun 18, 2026" },
  { tag: "Gear Guide", title: "How to Choose the Right Riding Jacket for Your Climate", excerpt: "Mesh, textile, or leather? We break down the pros and cons for every riding condition.", date: "Jun 05, 2026" },
  { tag: "Touring", title: "Top 10 Touring Routes Every Rider Should Experience", excerpt: "From coastal highways to mountain passes, here are the routes worth planning your next trip around.", date: "May 22, 2026" },
];
