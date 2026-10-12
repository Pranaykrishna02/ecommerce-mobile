export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Wireless Headphones",
    price: 1499,
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/61-g7m+90eL.jpg",
  },
  {
    id: "p2",
    name: "Classic Sneakers",
    price: 1999,
    category: "Shoes",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.05sF9aOVJOiZcdUTBXeMnAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=300",
  },

  {
    id: "p3",
    name: "Smartwatch",
    price: 2999,
    category: "Electronics",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.gMkO8AuPoFK5XBtK8kFSkQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=300",
  },

  {
    id: "p4",
    name: "Travel Backpack",
    price: 999,
    category: "Accessories",
    image:
      "https://i5.walmartimages.com/seo/Large-Travel-Backpack-Women-Men-Carry-On-Traveling-Airplane-Laptop-Shoe-Compartment-Flight-Approved-Personal-Item-Bag-Waterproof-Luggage-Pink_05d44376-cc85-4de9-8b50-6e45382cea8f.699e2f864e14de7b10f07d65c6a91342.jpeg",
  },

  {
    id: "p5",
    name: "Sunglasses",
    price: 799,
    category: "Accessories",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/8/332852582/YJ/ZH/HH/189114953/wayfarer-sunglasses-500x500.jpg",
  },

  {
    id: "p6",
    name: "Running Shoes",
    price: 1299,
    category: "Shoes",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.J5V8S_dU-3A1G1F2us2GiwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=300",
  },

  {
    id: "p7",
    name: "Everyday T-Shirt",
    price: 599,
    category: "Fashion",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.EieOQvf8uIAhTyyLJuwsRwHaG6?r=0&rs=1&pid=ImgDetMain&o=7&rm=300",
  },

  {
    id: "p8",
    name: "Bluetooth Speaker",
    price: 2499,
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/71Gb56MChiL._AC_SL1493_.jpg",
  },
];
