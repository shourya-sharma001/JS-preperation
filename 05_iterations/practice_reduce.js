const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 899.99, quantity: 1, description: "A powerful gaming laptop." },
  { id: 2, name: "Smartphone", category: "Electronics", price: 699.99, quantity: 1, description: "A sleek and modern smartphone." },
  { id: 3, name: "Headphones", category: "Accessories", price: 199.99, quantity: 1, description: "Noise-canceling over-ear headphones." },
  { id: 4, name: "Desk Chair", category: "Furniture", price: 149.99, quantity: 1, description: "Ergonomic office chair with lumbar support." },
  { id: 5, name: "Bluetooth Speaker", category: "Electronics", price: 79.99, quantity: 1, description: "Portable and waterproof Bluetooth speaker." },
  { id: 6, name: "Backpack", category: "Accessories", price: 49.99, quantity: 1, description: "Durable and spacious backpack." },
  { id: 7, name: "Coffee Maker", category: "Appliances", price: 99.99, quantity: 1, description: "Automatic coffee maker with timer." },
  { id: 8, name: "Gaming Mouse", category: "Accessories", price: 49.99, quantity: 1, description: "High-precision gaming mouse with RGB lighting." },
  { id: 9, name: "Yoga Mat", category: "Fitness", price: 29.99, quantity: 1, description: "Non-slip, cushioned yoga mat." },
  { id: 10, name: "Water Bottle", category: "Accessories", price: 19.99, quantity: 1, description: "Insulated stainless steel water bottle." },
  { id: 11, name: "Graphic T-Shirt", category: "Clothing", price: 24.99, quantity: 1, description: "Cotton t-shirt with unique graphic design." },
  { id: 12, name: "Running Shoes", category: "Clothing", price: 89.99, quantity: 1, description: "Lightweight and breathable running shoes." },
  { id: 13, name: "Digital Camera", category: "Electronics", price: 499.99, quantity: 1, description: "High-resolution DSLR camera." },
  { id: 14, name: "Wireless Charger", category: "Accessories", price: 29.99, quantity: 1, description: "Fast wireless charger for smartphones." },
  { id: 15, name: "Electric Kettle", category: "Appliances", price: 39.99, quantity: 1, description: "Quick-boil electric kettle with auto shutoff." },
  { id: 16, name: "Cookware Set", category: "Kitchen", price: 129.99, quantity: 1, description: "Non-stick cookware set with 10 pieces." },
  { id: 17, name: "Desk Lamp", category: "Furniture", price: 59.99, quantity: 1, description: "Adjustable LED desk lamp with USB port." },
  { id: 18, name: "Hiking Boots", category: "Clothing", price: 119.99, quantity: 1, description: "Waterproof hiking boots with great grip." },
  { id: 19, name: "Fitness Tracker", category: "Fitness", price: 149.99, quantity: 1, description: "Smart fitness tracker with heart rate monitor." },
  { id: 20, name: "Electric Scooter", category: "Electronics", price: 299.99, quantity: 1, description: "Foldable and lightweight electric scooter." }
];


const sum = products.reduce((acc, item) => acc + item.price,0);

// console.log(sum);


const map = products.filter((item) => {
  return item.category === "Electronics"
  
})

console.log(map);