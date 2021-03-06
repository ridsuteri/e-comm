import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Riddhi",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "temp",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: "1200",
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High quality product",
    },
    {
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: "1000",
      countInStock: 10,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 8,
      description: "High quality product",
    },
    {
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: "2200",
      countInStock: 10,
      brand: "Lacoste",
      rating: 4.8,
      numReviews: 17,
      description: "High quality product",
    },
    {
      name: "Nike Slim Pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: "800",
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "High quality product",
    },
    {
      name: "Puma Slim Pants",
      category: "Pants",
      image: "/images/p5.jpg",
      price: "780",
      countInStock: 1,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "High quality product",
    },
    {
      name: "Adidas Fit Pants",
      category: "Pants",
      image: "/images/p6.jpg",
      price: "820",
      countInStock: 0,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "High quality product",
    },
  ],
};

export default data;
