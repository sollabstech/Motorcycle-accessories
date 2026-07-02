export interface Testimonial {
  name: string;
  loc: string;
  text: string;
  product: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "Arjun Mehta", loc: "Pune, MH", text: "The riding jacket exceeded my expectations. Great protection and breathable in summer heat. Delivery was quick too.", product: "Storm Evo Pro Jacket" },
  { name: "Priya Nair", loc: "Bengaluru, KA", text: "Bought the Axor helmet for my daily commute — solid build quality and the visor anti-fog coating actually works.", product: "Apex Full Face Helmet" },
  { name: "Rohit Sharma", loc: "Delhi", text: "Customer support helped me pick the right saddle bags for my tour. Waterproof claim held up in heavy rain.", product: "Saddle Bag Luggage Set" },
  { name: "Sneha Kulkarni", loc: "Nagpur, MH", text: "The exhaust note is exactly what I wanted without being obnoxiously loud. Installation was straightforward.", product: "Carbon Fiber Exhaust" },
  { name: "Vikram Singh", loc: "Jaipur, RJ", text: "Genuine parts, fair pricing, and fast shipping. This is now my go-to store for all bike accessories.", product: "Hazard Module Kit" },
  { name: "Ananya Iyer", loc: "Chennai, TN", text: "Knee guards fit perfectly and didn't restrict movement at all. Great for long touring rides.", product: "Rider Knee Guards" },
];
