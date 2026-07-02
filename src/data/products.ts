export interface Product {
  id: string;
  brand: string;
  title: string;
  old: number;
  sale: number;
  emi: number;
  stock: "in" | "low" | "verylow";
  stockLabel: string;
}

export const PRODUCTS: Product[] = [
  { id: "p1", brand: "Rynox", title: "Storm Evo Pro Riding Jacket", old: 6999, sale: 4999, emi: 417, stock: "in", stockLabel: "In stock" },
  { id: "p2", brand: "Axor", title: "Apex Full Face Helmet Matte Black", old: 8500, sale: 5999, emi: 500, stock: "low", stockLabel: "Low stock" },
  { id: "p3", brand: "Velocity", title: "Carbon Fiber Exhaust Slip-On", old: 12000, sale: 8999, emi: 750, stock: "verylow", stockLabel: "Very low stock" },
  { id: "p4", brand: "TrailGuard", title: "Waterproof Saddle Bag Luggage Set", old: 5499, sale: 3799, emi: 317, stock: "in", stockLabel: "In stock" },
  { id: "p5", brand: "Rynox", title: "Air GT Mesh Riding Gloves", old: 2199, sale: 1499, emi: 125, stock: "in", stockLabel: "In stock" },
  { id: "p6", brand: "Axor", title: "Retro Open Face Helmet with Visor", old: 4599, sale: 3299, emi: 275, stock: "low", stockLabel: "Low stock" },
  { id: "p7", brand: "Velocity", title: "Hazard Warning Module Kit", old: 1899, sale: 1199, emi: 100, stock: "in", stockLabel: "In stock" },
  { id: "p8", brand: "TrailGuard", title: "Adjustable Rider Knee Guards", old: 2599, sale: 1799, emi: 150, stock: "verylow", stockLabel: "Very low stock" },
];
